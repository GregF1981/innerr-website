"use client";

import Link from "next/link";
import { useState } from "react";

/* ── Nav ──────────────────────────────────────────────────────────────── */

export function HelpNav() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold italic" style={{ color: "#0095f6" }}>
          innerr
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
          <Link href="/help" className="hover:text-gray-900 transition-colors">
            Help Centre
          </Link>
          <a
            href="mailto:support@innerr.com"
            className="hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── Footer ───────────────────────────────────────────────────────────── */

export function HelpFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold italic" style={{ color: "#0095f6" }}>
          innerr
        </Link>
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms"   className="hover:text-white transition-colors">Terms</Link>
          <Link href="/help"    className="hover:text-white transition-colors">Help</Link>
          <Link href="/for-hosts" className="hover:text-white transition-colors">For Hosts</Link>
        </nav>
        <div className="text-sm text-gray-500 text-center">
          © 2026 innerr. All rights reserved. · Melbourne, Australia
        </div>
      </div>
    </footer>
  );
}

/* ── Accordion ────────────────────────────────────────────────────────── */

export type Article = {
  q: string;
  a: React.ReactNode;
};

export function Accordion({ articles }: { articles: Article[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [votes, setVotes] = useState<Record<number, "yes" | "no">>({});

  return (
    <div className="space-y-2">
      {articles.map((article, i) => {
        const isOpen = open === i;
        const vote = votes[i];
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen ? "shadow-sm" : "bg-white hover:border-gray-200"
            }`}
            style={
              isOpen
                ? { backgroundColor: "#f8fbff", borderColor: "#bfdbfe" }
                : { borderColor: "#f3f4f6" }
            }
          >
            <button
              className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-semibold text-gray-900 text-sm leading-snug">
                {article.q}
              </span>
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-200"
                style={
                  isOpen
                    ? { backgroundColor: "#0095f6", color: "#fff" }
                    : { backgroundColor: "#f3f4f6", color: "#6b7280" }
                }
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6">
                <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                  {article.a}
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <span className="text-xs text-gray-400">Was this helpful?</span>
                  {vote ? (
                    <span className="text-xs font-medium text-gray-500">
                      {vote === "yes" ? "✓ Glad it helped!" : "✓ Thanks for the feedback"}
                    </span>
                  ) : (
                    <>
                      <button
                        className="text-base hover:scale-125 transition-transform"
                        onClick={() => setVotes({ ...votes, [i]: "yes" })}
                      >
                        👍
                      </button>
                      <button
                        className="text-base hover:scale-125 transition-transform"
                        onClick={() => setVotes({ ...votes, [i]: "no" })}
                      >
                        👎
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Shared layout for category pages ────────────────────────────────── */

export function CategoryPage({
  emoji,
  title,
  subtitle,
  category,
  articles,
  related,
}: {
  emoji: string;
  title: string;
  subtitle: string;
  category: string;
  articles: Article[];
  related: { title: string; href: string; emoji: string }[];
}) {
  return (
    <>
      <HelpNav />
      <main className="flex-1 bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
            <nav className="text-sm text-gray-500 flex items-center gap-2">
              <Link
                href="/help"
                className="hover:text-gray-900 transition-colors"
                style={{ color: "#0095f6" }}
              >
                Help Centre
              </Link>
              <span className="text-gray-300">›</span>
              <span className="text-gray-700 font-medium">{category}</span>
            </nav>
          </div>
        </div>

        {/* Page hero */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{emoji}</span>
              <h1 className="text-3xl font-black text-gray-900">{title}</h1>
            </div>
            <p className="text-gray-500 ml-14">{subtitle}</p>
          </div>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <Accordion articles={articles} />

          {/* Related topics */}
          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="text-base font-bold text-gray-900 mb-4">Related topics</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4 text-sm font-medium text-gray-700 hover:border-blue-200 hover:text-gray-900 transition-all duration-150"
                  >
                    <span className="text-xl">{r.emoji}</span>
                    <span className="flex-1">{r.title}</span>
                    <span className="text-gray-300">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Footer CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/help"
              className="text-sm font-semibold transition-colors"
              style={{ color: "#0095f6" }}
            >
              ← Back to Help Centre
            </Link>
            <div className="bg-white rounded-2xl border border-gray-100 px-6 py-4 text-center">
              <p className="text-sm text-gray-500 mb-1">Still need help?</p>
              <a
                href="mailto:support@innerr.com"
                className="text-sm font-bold transition-opacity hover:opacity-70"
                style={{ color: "#0095f6" }}
              >
                Email support@innerr.com →
              </a>
            </div>
          </div>
        </div>
      </main>
      <HelpFooter />
    </>
  );
}
