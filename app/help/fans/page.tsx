"use client";

import { CategoryPage, type Article } from "../_shared";

const articles: Article[] = [
  {
    q: "How do I find a host to message?",
    a: (
      <>
        <p>Open the app and head to the <strong>Discover</strong> tab. You can search by name, browse by category (musicians, athletes, creators, and more), or check out featured hosts on the homepage.</p>
        <p>Every host profile shows their <strong>token price per message</strong>, average reply time, and reply rate — so you can find the right host before spending anything. It&apos;s a good idea to read a few fan reviews first too.</p>
      </>
    ),
  },
  {
    q: "How do I send my first message?",
    a: (
      <>
        <p>Tap any host&apos;s profile and hit the <strong>Send a Message</strong> button. You&apos;ll see exactly how many tokens it costs before you commit.</p>
        <p>Type your message (up to 1,000 characters), confirm the token spend, and hit send. The host gets a notification straight away and has <strong>72 hours</strong> to reply. If they don&apos;t respond in time, your tokens come straight back — no questions asked.</p>
        <p>First tip: be genuine! Hosts are real people. A thoughtful, personal message is far more likely to get a heartfelt reply than a generic one.</p>
      </>
    ),
  },
  {
    q: "How do tokens work?",
    a: (
      <>
        <p>Tokens are innerr&apos;s in-app currency. You buy a token pack, and then spend tokens to message hosts. Think of them like credits — simple, transparent, no hidden fees.</p>
        <p>Each host sets their own token price, which is always shown on their profile before you spend anything. <strong>Tokens never expire</strong> and stay safe in your balance until you&apos;re ready to use them.</p>
        <p>Head to <strong>Tokens &amp; Payments</strong> in Help if you&apos;d like more detail on buying tokens and packages.</p>
      </>
    ),
  },
  {
    q: "What happens if a host doesn't reply within 72 hours?",
    a: (
      <>
        <p>We cover you completely. If a host doesn&apos;t reply within <strong>72 hours of your message being delivered</strong>, the tokens you spent are automatically refunded to your balance.</p>
        <p>You don&apos;t need to report it, contact support, or fill out any forms. The refund just happens — you&apos;ll get a notification when the tokens land back in your account.</p>
        <p>It&apos;s one of innerr&apos;s core promises: a reply, or your tokens back.</p>
      </>
    ),
  },
  {
    q: "How do I get a refund?",
    a: (
      <>
        <p>The most common refund is the <strong>72-hour auto-refund</strong> — if a host doesn&apos;t reply in time, the tokens return to your balance automatically. No action needed.</p>
        <p>For anything else — like an issue with a token purchase — email us at <a href="mailto:support@innerr.com" style={{ color: "#0095f6" }}>support@innerr.com</a> and our team will sort it out as quickly as possible.</p>
      </>
    ),
  },
  {
    q: "Can I send images in messages?",
    a: (
      <>
        <p>Currently, fan messages on innerr are <strong>text only</strong>. We&apos;re actively working on image support — it&apos;s one of our most requested features.</p>
        <p>Keep an eye on our in-app updates for when this launches. In the meantime, you can still link to things or describe what you want to share in your message.</p>
      </>
    ),
  },
  {
    q: "How do I follow a host?",
    a: (
      <>
        <p>Tap the <strong>Follow</strong> button on any host&apos;s profile. Once you follow someone, you&apos;ll receive notifications when they:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Post new content</li>
          <li>Send a broadcast to followers</li>
          <li>Go online</li>
          <li>Share something exclusive</li>
        </ul>
        <p className="mt-2">Following is free and doesn&apos;t cost any tokens. You can manage who you follow in <strong>Settings &gt; Following</strong>.</p>
      </>
    ),
  },
  {
    q: "How do I leave a review?",
    a: (
      <>
        <p>After a host replies to your message, you&apos;ll be prompted to leave a <strong>rating (1–5 stars)</strong> and an optional written comment. This usually appears as a notification or in-chat prompt within 24 hours of the reply.</p>
        <p>Reviews are only available <em>after receiving a genuine reply</em> — this keeps the review system honest and means every rating comes from a real conversation. Your review helps other fans decide who to message.</p>
      </>
    ),
  },
  {
    q: "Can I message a host more than once?",
    a: (
      <>
        <p>Absolutely! You can send as many messages to a host as you like, whenever you have tokens. Some fans build ongoing, meaningful conversations with their favourite creators over time.</p>
        <p>Each message is a separate transaction and covered by the 72-hour guarantee individually. There&apos;s no limit on how many times you can message the same host.</p>
      </>
    ),
  },
  {
    q: "What is the token price for messaging?",
    a: (
      <>
        <p>Each host sets their own token price per message. The price is always <strong>clearly displayed on their profile</strong> before you send anything, so there are never any surprises.</p>
        <p>Prices can vary widely depending on the host — some are very accessible, others set higher prices to manage their inbox. You&apos;re always in control of how you spend your tokens.</p>
      </>
    ),
  },
];

const related = [
  { title: "Tokens & Payments",  href: "/help/tokens",   emoji: "🪙" },
  { title: "Features Guide",     href: "/help/features", emoji: "✨" },
  { title: "Safety & Privacy",   href: "/help/safety",   emoji: "🛡️" },
];

export default function FansHelp() {
  return (
    <CategoryPage
      emoji="💬"
      title="Sending Messages"
      subtitle="How to connect with your favourite hosts on innerr."
      category="Sending Messages"
      articles={articles}
      related={related}
    />
  );
}
