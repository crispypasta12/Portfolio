"use client";

import { useState } from "react";
import { Column, Icon, Row, Text } from "@once-ui-system/core";
import styles from "@/app/work/work.module.scss";

export type Publication = {
  title: string;
  authors?: string;
  authorIndex?: number;
  venue?: string;
  year?: string;
  doi?: string;
  link?: string;
  pdfUrl?: string;
  scholar?: string;
  citations?: number;
  abstract?: string;
  bibtexKey?: string;
};

function renderAuthors(authors: string, authorIndex?: number) {
  const parts = authors.split(",").map((a) => a.trim());
  return parts.map((name, i) => (
    <span key={i}>
      {i === authorIndex ? <strong>{name}</strong> : name}
      {i < parts.length - 1 ? ", " : ""}
    </span>
  ));
}

function buildBibtex(p: Publication): string {
  const key = p.bibtexKey || "ref";
  const authorsBib = p.authors
    ? p.authors
        .split(",")
        .map((a) => a.trim())
        .join(" and ")
    : "";
  const lines = [`@inproceedings{${key},`];
  if (p.authors) lines.push(`  author       = {${authorsBib}},`);
  lines.push(`  title        = {${p.title}},`);
  if (p.venue) lines.push(`  booktitle    = {${p.venue}},`);
  if (p.year) lines.push(`  year         = {${p.year}},`);
  if (p.doi) lines.push(`  doi          = {${p.doi}},`);
  if (p.link) lines.push(`  url          = {${p.link}},`);
  lines.push(`  publisher    = {IEEE}`);
  lines.push(`}`);
  return lines.join("\n");
}

export default function PublicationCard({ p }: { p: Publication }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildBibtex(p));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={`${styles.card} ${styles.glass} ${styles.pubCard}`}>
      <Column gap="8">
        <Row gap="12" vertical="center">
          <Icon name="fileText" />
          <Text as="h4" className={styles.pubTitle} variant="heading-strong-m">
            {p.title}
          </Text>
        </Row>

        {p.authors && (
          <Text variant="body-default-s" onBackground="neutral-medium">
            {renderAuthors(p.authors, p.authorIndex)}
          </Text>
        )}

        <Text
          className={styles.pubMeta}
          variant="body-default-s"
          onBackground="neutral-weak"
        >
          {[p.venue, p.year].filter(Boolean).join(" · ")}
        </Text>

        {p.doi && (
          <Text variant="label-default-s" onBackground="neutral-weak">
            DOI:{" "}
            <a
              href={`https://doi.org/${p.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pubRead}
            >
              {p.doi}
            </a>
          </Text>
        )}

        {p.abstract && (
          <Column gap="8" paddingTop="4">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              style={{
                all: "unset",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "var(--brand-on-background-weak)",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
              aria-expanded={expanded}
            >
              {expanded ? "▾ Hide abstract" : "▸ Show abstract"}
            </button>
            {expanded && (
              <Text
                variant="body-default-s"
                onBackground="neutral-medium"
                style={{ lineHeight: 1.6 }}
              >
                {p.abstract}
              </Text>
            )}
          </Column>
        )}

        <Row paddingTop="8" gap="16" wrap vertical="center">
          {typeof p.citations === "number" && (
            <Row gap="8" vertical="center" className={styles.citeRow}>
              <Icon name="chartUp" />
              <Text variant="label-default-m">{p.citations} citations</Text>
            </Row>
          )}

          {p.link && (
            <a
              className={styles.pubRead}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${p.title}`}
            >
              Read →
            </a>
          )}

          {p.pdfUrl && (
            <a
              className={styles.pubRead}
              href={p.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download PDF of ${p.title}`}
            >
              PDF ↓
            </a>
          )}

          {p.scholar && (
            <a
              className={styles.scholarLink}
              href={p.scholar}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open on Google Scholar: ${p.title}`}
            >
              Scholar ↗
            </a>
          )}

          <button
            type="button"
            onClick={handleCopy}
            style={{
              all: "unset",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "var(--brand-on-background-weak)",
            }}
            aria-label={`Copy BibTeX for ${p.title}`}
          >
            {copied ? "✓ Copied" : "BibTeX ⧉"}
          </button>
        </Row>
      </Column>
    </div>
  );
}
