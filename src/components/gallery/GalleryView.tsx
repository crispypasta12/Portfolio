"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Badge, Button, Column, MasonryGrid, Row, Tag, Text, Media } from "@once-ui-system/core";
import { gallery } from "@/resources";
import styles from "./gallery.module.scss";

const INITIAL_PER_LOCATION = 6;  
const LOAD_STEP = 6;             
const PRIORITY_PER_SECTION = 6;   

type FlatImage = {
  id: string;
  location: string;
  src: string;        
  full?: string;      
  alt: string;
  orientation?: "horizontal" | "vertical" | "square";
};

export default function GalleryView() {
  const groups = useMemo(() => gallery.groups ?? [], []);
  const locations = useMemo(() => groups.map((g) => g.location), [groups]);

  const allImages: FlatImage[] = useMemo(() => {
    const out: FlatImage[] = [];
    groups.forEach((g) => {
      g.images.forEach((img, idx) => {
        out.push({
          id: `${g.location}-${idx}`,
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

  const filteredLocations = useMemo(() => {
    const base = activeLocation === "All" ? locations : [activeLocation];
    if (!normalizedQuery) return base;
    return base.filter((loc) => loc.toLowerCase().includes(normalizedQuery));
  }, [locations, activeLocation, normalizedQuery]);

  const onLoadMore = (location: string) => {
    setVisible((v) => ({ ...v, [location]: (v[location] ?? INITIAL_PER_LOCATION) + LOAD_STEP }));
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

  // mount flag for portal to avoid SSR mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const allMode = activeLocation === "All" && !normalizedQuery;

  return (
    <Column gap="20" className={styles.wrap}>
      <Row className={styles.controls} wrap gap="8" horizontal="between" vertical="center">
        <Row gap="8" wrap>
          <Tag
            size="l"
            className={`${styles.filterChip} ${activeLocation === "All" ? styles.activeChip : ""}`}
            onClick={() => setActiveLocation("All")}
          >
            All
          </Tag>
          {locations.map((loc) => (
            <Tag
              key={loc}
              size="l"
              className={`${styles.filterChip} ${activeLocation === loc ? styles.activeChip : ""}`}
              onClick={() => setActiveLocation((curr) => (curr === loc ? "All" : loc))}
            >
              {loc}
            </Tag>
          ))}
        </Row>

        <div className={styles.searchBox}>
          <input
            type="search"
            placeholder="Search location…"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            aria-label="Search by location"
          />
        </div>
      </Row>

      <div className={styles.softDivider} />

      {allMode ? (
        <Column gap="32">
          {filteredLocations.map((loc) => {
            const locationImages = allImages.filter((img) => img.location === loc);
            const items = locationImages.slice(0, visible[loc] ?? INITIAL_PER_LOCATION);
            const total = locationImages.length;

            return (
              <Column key={loc} gap="12">
                <Row horizontal="between" vertical="center">
                  <Text as="h3" variant="heading-strong-l">{loc}</Text>
                  <Badge background="neutral-alpha-weak" textVariant="label-default-s" arrow={false}>
                    {items.length} / {total}
                  </Badge>
                </Row>

                <MasonryGrid columns={3} m={{ columns: 2 }} s={{ columns: 1 }}>
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
                    <Button variant="secondary" size="s" onClick={() => onLoadMore(loc)} data-border="rounded">
                      Load more from {loc}
                    </Button>
                  </Row>
                )}
              </Column>
            );
          })}
        </Column>
      ) : (
        filteredLocations.map((loc) => {
          const locationImages = allImages.filter((img) => img.location === loc);
          const items = locationImages.slice(0, visible[loc] ?? INITIAL_PER_LOCATION);
          const total = locationImages.length;

          return (
            <Column key={loc} gap="12">
              <Row horizontal="between" vertical="center">
                <Text as="h3" variant="heading-strong-l">{loc}</Text>
                <Badge background="neutral-alpha-weak" textVariant="label-default-s" arrow={false}>
                  {items.length} / {total}
                </Badge>
              </Row>

              <MasonryGrid columns={3} m={{ columns: 2 }} s={{ columns: 1 }}>
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
                  <Button variant="secondary" size="s" onClick={() => onLoadMore(loc)} data-border="rounded">
                    Load more
                  </Button>
                </Row>
              )}
            </Column>
          );
        })
      )}

      {mounted && open && selected &&
        createPortal(
          <div className={styles.lightboxBackdrop} onClick={closeLightbox} role="dialog" aria-modal="true">
            <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
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
