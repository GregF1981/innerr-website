"use client";

import Link from "next/link";
import { useState } from "react";
import { HelpNav, HelpFooter } from "./_shared";

const ALL_ARTICLES = [
  { title: "How do I find a host to message?",                  href: "/help/fans",     cat: "Sending Messages" },
  { title: "How do I send my first message?",                   href: "/help/fans",     cat: "Sending Messages" },
  { title: "How do tokens work?",                               href: "/help/fans",     cat: "Sending Messages" },
  { title: "What happens if a host doesn't reply in 72 hours?", href: "/help/fans",     cat: "Sending Messages" },
  { title: "Can I send images in messages?",                    href: "/help/fans",     cat: "Sending Messages" },
  { title: "Can I message a host more than once?",              href: "/help/fans",     cat: "Sending Messages" },
  { title: "How do I follow a host?",                           href: "/help/fans",     cat: "Sending Messages" },
  { title: "How do I leave a review?",                          href: "/help/fans",     cat: "Sending Messages" },
  { title: "What is the token price for messaging?",            href: "/help/fans",     cat: "Sending Messages" },
  { title: "What are tokens?",                                  href: "/help/tokens",   cat: "Tokens & Payments" },
  { title: "How do I buy tokens?",                              href: "/help/tokens",   cat: "Tokens & Payments" },
  { title: "What token packages are available?",                href: "/help/tokens",   cat: "Tokens & Payments" },
  { title: "Do tokens expire?",                                 href: "/help/tokens",   cat: "Tokens & Payments" },
  { title: "Can I get a refund on tokens?",                     href: "/help/tokens",   cat: "Tokens & Payments" },
  { title: "What is the 72-hour refund guarantee?",             href: "/help/tokens",   cat: "Tokens & Payments" },
  { title: "What payment methods are accepted?",                href: "/help/tokens",   cat: "Tokens & Payments" },
  { title: "Is my payment secure?",                             href: "/help/tokens",   cat: "Tokens & Payments" },
  { title: "How do I check my token balance?",                  href: "/help/tokens",   cat: "Tokens & Payments" },
  { title: "What happens to my tokens if I delete my account?", href: "/help/tokens",   cat: "Tokens & Payments" },
  { title: "How do I become a host?",                           href: "/help/hosts",    cat: "For Hosts" },
  { title: "How do I set my token price?",                      href: "/help/hosts",    cat: "For Hosts" },
  { title: "How do I reply to a fan message?",                  href: "/help/hosts",    cat: "For Hosts" },
  { title: "When do I get paid?",                               href: "/help/hosts",    cat: "For Hosts" },
  { title: "How do I cash out my earnings?",                    href: "/help/hosts",    cat: "For Hosts" },
  { title: "What is the 20% platform fee?",                     href: "/help/hosts",    cat: "For Hosts" },
  { title: "What happens if I don't reply within 72 hours?",    href: "/help/hosts",    cat: "For Hosts" },
  { title: "How do I apply for official verification?",         href: "/help/hosts",    cat: "For Hosts" },
  { title: "What are the verification requirements?",           href: "/help/hosts",    cat: "For Hosts" },
  { title: "How do I create a post?",                           href: "/help/hosts",    cat: "For Hosts" },
  { title: "What is exclusive content?",                        href: "/help/hosts",    cat: "For Hosts" },
  { title: "How do I send a broadcast message?",                href: "/help/hosts",    cat: "For Hosts" },
  { title: "How do I block a user?",                            href: "/help/safety",   cat: "Safety & Privacy" },
  { title: "How do I report a user?",                           href: "/help/safety",   cat: "Safety & Privacy" },
  { title: "What content is not allowed on innerr?",            href: "/help/safety",   cat: "Safety & Privacy" },
  { title: "How does innerr moderate content?",                 href: "/help/safety",   cat: "Safety & Privacy" },
  { title: "What happens when I report someone?",               href: "/help/safety",   cat: "Safety & Privacy" },
  { title: "How do I protect my privacy?",                      href: "/help/safety",   cat: "Safety & Privacy" },
  { title: "How do I delete my account?",                       href: "/help/safety",   cat: "Safety & Privacy" },
  { title: "What data does innerr store about me?",             href: "/help/safety",   cat: "Safety & Privacy" },
  { title: "How do I contact support for urgent safety issues?",href: "/help/safety",   cat: "Safety & Privacy" },
  { title: "The 72-hour reply guarantee — explained",           href: "/help/features", cat: "Features Guide" },
  { title: "How do automatic token refunds work?",              href: "/help/features", cat: "Features Guide" },
  { title: "What is exclusive content?",                        href: "/help/features", cat: "Features Guide" },
  { title: "What does the blue verification tick mean?",        href: "/help/features", cat: "Features Guide" },
  { title: "How does tipping work?",                            href: "/help/features", cat: "Features Guide" },
  { title: "How does the review system work?",                  href: "/help/features", cat: "Features Guide" },
  { title: "What does the green online dot mean?",              href: "/help/features", cat: "Features Guide" },
  { title: "What is reply rate?",                               href: "/help/features", cat: "Features Guide" },
  { title: "How do I manage my notifications?",                 href: "/help/features", cat: "Features Guide" },
  { title: "How does the profanity filter work?",               href: "/help/features", cat: "Features Guide" },
];

const POPULAR = [
  { title: "What is the 72-hour refund guarantee?",     href: "/help/tokens"   },
  { title: "How do I buy tokens?",                      href: "/help/tokens"   },
  { title: "How do I become a host?",                   href: "/help/hosts"    },
  { title: "What is the 20% platform fee?",             href: "/help/hosts"    },
  { title: "How do I block or report a user?",          href: "/help/safety"   },
  { title: "What happens if a host doesn't reply?",     href: "/help/tokens"   },
];

const CATEGORIES = [
  { emoji: "💬", title: "Sending Messages",   desc: "How to connect with your favourite hosts",         href: "/help/fans"     },
  { emoji: "🪙", title: "Tokens & Payments",  desc: "Buying tokens, refunds, pricing",                  href: "/help/tokens"   },
  { emoji: "⭐", title: "For Hosts",           desc: "Earning money, cashing out, verification",         href: "/help/hosts"    },
  { emoji: "🛡️", title: "Safety & Privacy",   desc: "Blocking, reporting, staying safe",                href: "/help/safety"   },
  { emoji: "⚙️", title: "Account & Settings", desc: "Profile, notifications, deleting your account",    href: "/help/safety"   },
  { emoji: "✨", title: "Features Guide",      desc: "Everything innerr can do",                         href: "/help/features" },
];

export default function HelpCentre() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? ALL_ARTICLES.filter((a) =>
        a.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <HelpNav />

      <main className="flex-1 bg-gray-50 min-h-screen">

        {/* ── Hero + search ── */}
        <section className="bg-white border-b border-gray-100 py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">
              How can we help?
            </h1>
            <p className="text-gray-500 mb-8 text-lg">
              Search for answers or browse topics below.
            </p>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg select-none">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search all help articles…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 transition-all"
                style={{ outlineColor: "#0095f6" }}
              />
            </div>

            {/* Search results dropdown */}
            {query.trim() && (
              <div className="mt-2 bg-white rounded-2xl border border-gray-100 shadow-md text-left overflow-hidden">
                {filtered.length === 0 ? (
                  <div className="px-5 py-4 text-sm text-gray-500">
                    No results for &ldquo;{query}&rdquo; —{" "}
                    <a
                      href="mailto:support@innerr.com"
                      className="underline font-medium"
                      style={{ color: "#0095f6" }}
                    >
                      contact support
                    </a>
                  </div>
                ) : (
                  filtered.slice(0, 8).map((a, i) => (
                    <Link
                      key={i}
                      href={a.href}
                      className="flex items-center justify-between px-5 py-3 border-b border-gray-50 last:border-0 hover:bg-blue-50 transition-colors group"
                    >
                      <div>
                        <div className="text-sm font-medium text-gray-800 group-hover:text-gray-900">
                          {a.title}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">{a.cat}</div>
                      </div>
                      <span className="text-gray-300 group-hover:text-blue-400 ml-3 flex-shrink-0">
                        →
                      </span>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </section>

        {/* ── Category cards ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Browse by topic</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4 hover:border-blue-200 hover:shadow-sm transition-all duration-150 group"
              >
                <span className="text-3xl flex-shrink-0 leading-none mt-0.5">{cat.emoji}</span>
                <div>
                  <div
                    className="font-bold text-gray-900 mb-1 group-hover:transition-colors"
                    style={{ fontSize: "15px" }}
                  >
                    {cat.title}
                  </div>
                  <div className="text-sm text-gray-500 leading-snug">{cat.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Popular articles ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Popular articles</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {POPULAR.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="bg-white rounded-xl border border-gray-100 px-5 py-4 text-sm font-medium text-gray-700 flex items-center justify-between gap-3 hover:border-blue-200 hover:text-gray-900 transition-all duration-150 group"
              >
                <span>{p.title}</span>
                <span className="text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Still need help? ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, #e8f4ff 0%, #f0eeff 100%)" }}
          >
            <div className="text-4xl mb-3">💌</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Still need help?</h2>
            <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
              Our support team is here for you. We typically respond within a few hours.
            </p>
            <a
              href="mailto:support@innerr.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0095f6", boxShadow: "0 4px 20px rgba(0,149,246,0.3)" }}
            >
              Email support@innerr.com
            </a>
          </div>
        </section>

      </main>

      <HelpFooter />
    </>
  );
}
