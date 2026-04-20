"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  Badge,
  Button,
  Column,
  MasonryGrid,
  Row,
  Tag,
  Text,
  Media,
} from "@once-ui-system/core";
import { gallery } from "@/resources";
import styles from "./gallery.module.scss";

type GalleryImage = {
  src: string;
  alt: string;
  orientation?: "horizontal" | "vertical" | "square";
  full?: string;
};

type GalleryGroup = {
  country: string;
  location: string;
  images: GalleryImage[];
};

const INITIAL_PER_LOCATION = 6;
const LOAD_STEP = 6;
const PRIORITY_PER_SECTION = 6;

type FlatImage = {
  id: string;
  country: string;
  location: string;
  src: string;
  full?: string;
  alt: string;
  orientation?: "horizontal" | "vertical" | "square";
};

interface Props {
  groups?: GalleryGroup[];
}

export default function GalleryView({ groups: groupsProp }: Props = {}) {
  const groups = useMemo(
    () => (groupsProp ?? (gallery.groups as GalleryGroup[])) ?? [],
    [groupsProp]
  );

  const countries = useMemo(
    () => Array.from(new Set(groups.map((g) => g.country))),
    [groups]
  );
  const locations = useMemo(
    () => Array.from(new Set(groups.map((g) => g.location))),
    [groups]
  );

  const locationsByCountry = useMemo(() => {
    const map = new Map<string, string[]>();
    groups.forEach((g) => {
      const arr = map.get(g.country) ?? [];
      if (!arr.includes(g.location)) arr.push(g.location);
      map.set(g.country, arr);
    });
    return map;
  }, [groups]);

  const locationToCountry = useMemo(() => {
    const m = new Map<string, string>();
    groups.forEach((g) => m.set(g.location, g.country));
    return m;
  }, [groups]);

  const allImages: FlatImage[] = useMemo(() => {
    const out: FlatImage[] = [];
    groups.forEach((g) => {
      g.images.forEach((img, idx) => {
        out.push({
          id: `${g.country}-${g.location}-${idx}`,
          country: g.country,
          location: g.location,
          src: img.src,
          full: img.full,
          alt: img.alt,
          orientation: img.orientation,
        });
      });
    });
    return out;
  }, [groups]);

  const [query, setQuery] = useState("");
  const [activeCountry, setActiveCountry] = useState<string | "All">("All"); 
  const [activeLocation, setActiveLocation] = useState<string | "All">("All");

  const [visible, setVisible] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    groups.forEach((g) => (init[g.location] = INITIAL_PER_LOCATION));
    return init;
  });

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<FlatImage | null>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const onQueryChange = (val: string) => {
    setQuery(val);
    if (activeLocation !== "All") setActiveLocation("All");
  };

  const filteredCountries = useMemo(() => {
    const base = activeCountry === "All" ? countries : [activeCountry];
    if (!normalizedQuery) return base;
    return base.filter((c) => c.toLowerCase().includes(normalizedQuery));
  }, [countries, activeCountry, normalizedQuery]);

  const filteredLocations = useMemo(() => {
    const baseLocs =
      activeLocation === "All"
        ? activeCountry === "All"
          ? locations
          : locationsByCountry.get(activeCountry) ?? []
        : [activeLocation];

    if (!normalizedQuery) return baseLocs;

    const matchesLoc = baseLocs.filter((loc) =>
      loc.toLowerCase().includes(normalizedQuery)
    );

    const matchedCountries =
      activeCountry === "All"
        ? countries.filter((c) => c.toLowerCase().includes(normalizedQuery))
        : [activeCountry].filter((c) =>
            c.toLowerCase().includes(normalizedQuery)
          );

    const byCountryLocs = matchedCountries.flatMap(
      (c) => locationsByCountry.get(c) ?? []
    );

    const baseSet = new Set(baseLocs);
    const union = Array.from(new Set([...matchesLoc, ...byCountryLocs])).filter(
      (loc) => baseSet.has(loc)
    );

    return union;
  }, [
    locations,
    locationsByCountry,
    countries,
    activeCountry,
    activeLocation,
    normalizedQuery,
  ]);

  const onLoadMore = (location: string) => {
    setVisible((v) => ({
      ...v,
      [location]: (v[location] ?? INITIAL_PER_LOCATION) + LOAD_STEP,
    }));
  };

  const closeLightbox = useCallback(() => {
    setOpen(false);
    setSelected(null);
  }, []);

  const openLightbox = (img: FlatImage) => {
    setSelected(img);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    const { style } = document.documentElement;
    const prevOverflow = style.overflow;
    style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      style.overflow = prevOverflow;
    };
  }, [open, closeLightbox]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const allMode = activeLocation === "All" && !normalizedQuery;

  return (
    <Column gap="20" className={styles.wrap}>
      <Row
        className={styles.controls}
        wrap
        gap="8"
        horizontal="between"
        vertical="center"
      >
        <Column gap="8">
          <Row gap="4" wrap vertical="center" className={styles.controlsRow}>
            <Text as="span" className={styles.filterLabel}>
              Country
            </Text>
            <Tag
              size="l"
              className={`${styles.filterChip} ${
                activeCountry === "All" ? styles.activeChip : ""
              }`}
              onClick={() => setActiveCountry("All")}
            >
              All
            </Tag>
            {countries.map((c) => (
              <Tag
                key={c}
                size="l"
                className={`${styles.filterChip} ${
                  activeCountry === c ? styles.activeChip : ""
                }`}
                onClick={() =>
                  setActiveCountry((curr) => (curr === c ? "All" : c))
                }
              >
                {c}
              </Tag>
            ))}
          </Row>

          <Row gap="4" wrap vertical="center" className={styles.controlsRow}>
            <Text as="span" className={styles.filterLabel}>
              Location
            </Text>
            <Tag
              size="l"
              className={`${styles.filterChip} ${
                activeLocation === "All" ? styles.activeChip : ""
              }`}
              onClick={() => setActiveLocation("All")}
            >
              All
            </Tag>
            {(activeCountry === "All"
              ? locations
              : locationsByCountry.get(activeCountry) ?? []
            ).map((loc) => (
              <Tag
                key={loc}
                size="l"
                className={`${styles.filterChip} ${
                  activeLocation === loc ? styles.activeChip : ""
                }`}
                onClick={() =>
                  setActiveLocation((curr) => (curr === loc ? "All" : loc))
                }
              >
                {loc}
              </Tag>
            ))}
          </Row>
        </Column>

        <div className={styles.searchBox}>
          <input
            type="search"
            placeholder="Search country or location…"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            aria-label="Search by country or location"
          />
        </div>
      </Row>

      <div className={styles.softDivider} />

      {allMode ? (
        <Column gap="40">
          {(activeCountry === "All" ? countries : [activeCountry]).map(
            (country) => {
              const countryLocs =
                locationsByCountry.get(country)?.filter(
                  (loc) =>
                    true
                ) ?? [];

              if (countryLocs.length === 0) return null;

              return (
                <Column key={country} gap="16">
                  <Text as="h2" variant="heading-strong-xl">
                    {country}
                  </Text>

                  {countryLocs.map((loc) => {
                    const locationImages = allImages.filter(
                      (img) => img.country === country && img.location === loc
                    );
                    const items = locationImages.slice(
                      0,
                      visible[loc] ?? INITIAL_PER_LOCATION
                    );
                    const total = locationImages.length;

                    return (
                      <Column key={`${country}-${loc}`} gap="12">
                        <Row horizontal="between" vertical="center">
                          <Text as="h3" variant="heading-strong-l">
                            {loc}
                          </Text>
                          <Badge
                            background="neutral-alpha-weak"
                            textVariant="label-default-s"
                            arrow={false}
                          >
                            {items.length} / {total}
                          </Badge>
                        </Row>

                        <MasonryGrid
                          columns={3}
                          m={{ columns: 2 }}
                          s={{ columns: 1 }}
                        >
                          {items.map((img, idx) => (
                            <Media
                              key={img.id}
                              className={styles.thumb}
                              radius="m"
                              onClick={() => openLightbox(img)}
                              src={img.src}
                              alt={img.alt}
                              priority={idx < PRIORITY_PER_SECTION}
                              sizes="(max-width: 640px) 100vw, (max-width: 1040px) 50vw, 33vw"
                              aspectRatio={
                                img.orientation === "vertical"
                                  ? "3 / 4"
                                  : img.orientation === "square"
                                  ? "1 / 1"
                                  : "16 / 10"
                              }
                            />
                          ))}
                        </MasonryGrid>

                        {items.length < total && (
                          <Row horizontal="center" paddingTop="8">
                            <Button
                              variant="secondary"
                              size="s"
                              onClick={() => onLoadMore(loc)}
                              data-border="rounded"
                            >
                              Load more from {loc}
                            </Button>
                          </Row>
                        )}
                      </Column>
                    );
                  })}
                </Column>
              );
            }
          )}
        </Column>
      ) : (
        <Column gap="40">
          {(() => {
            const locs = filteredLocations;

            const countryToLocs = new Map<string, string[]>();
            locs.forEach((loc) => {
              const c = locationToCountry.get(loc);
              if (!c) return;
              const arr = countryToLocs.get(c) ?? [];
              if (!arr.includes(loc)) arr.push(loc);
              countryToLocs.set(c, arr);
            });

            const countriesToRender =
              activeCountry === "All"
                ? Array.from(countryToLocs.keys())
                : countryToLocs.has(activeCountry)
                ? [activeCountry]
                : [];

            return countriesToRender.map((country) => (
              <Column key={country} gap="16">
                <Text as="h2" variant="heading-strong-xl">
                  {country}
                </Text>

                {(countryToLocs.get(country) ?? []).map((loc) => {
                  const locationImages = allImages.filter(
                    (img) => img.country === country && img.location === loc
                  );
                  const items = locationImages.slice(
                    0,
                    visible[loc] ?? INITIAL_PER_LOCATION
                  );
                  const total = locationImages.length;

                  return (
                    <Column key={`${country}-${loc}`} gap="12">
                      <Row horizontal="between" vertical="center">
                        <Text as="h3" variant="heading-strong-l">
                          {loc}
                        </Text>
                        <Badge
                          background="neutral-alpha-weak"
                          textVariant="label-default-s"
                          arrow={false}
                        >
                          {items.length} / {total}
                        </Badge>
                      </Row>

                      <MasonryGrid
                        columns={3}
                        m={{ columns: 2 }}
                        s={{ columns: 1 }}
                      >
                        {items.map((img, idx) => (
                          <Media
                            key={img.id}
                            className={styles.thumb}
                            radius="m"
                            onClick={() => openLightbox(img)}
                            src={img.src}
                            alt={img.alt}
                            priority={idx < PRIORITY_PER_SECTION}
                            sizes="(max-width: 640px) 100vw, (max-width: 1040px) 50vw, 33vw"
                            aspectRatio={
                              img.orientation === "vertical"
                                ? "3 / 4"
                                : img.orientation === "square"
                                ? "1 / 1"
                                : "16 / 10"
                            }
                          />
                        ))}
                      </MasonryGrid>

                      {items.length < total && (
                        <Row horizontal="center" paddingTop="8">
                          <Button
                            variant="secondary"
                            size="s"
                            onClick={() => onLoadMore(loc)}
                            data-border="rounded"
                          >
                            Load more
                          </Button>
                        </Row>
                      )}
                    </Column>
                  );
                })}
              </Column>
            ));
          })()}
        </Column>
      )}

      {mounted &&
        open &&
        selected &&
        createPortal(
          <div
            className={styles.lightboxBackdrop}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <div
              className={styles.lightboxInner}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.full || selected.src}
                alt={selected.alt}
                fill
                quality={95}
                onClick={closeLightbox}
                sizes="100vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>,
          document.body
        )}
    </Column>
  );
}
