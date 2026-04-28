"use client";

import { CategoryPage, type Article } from "../_shared";

const articles: Article[] = [
  {
    q: "What are tokens?",
    a: (
      <>
        <p>Tokens are innerr&apos;s in-app virtual currency. You use them to send messages to hosts. Simple as that — no hidden fees, no subscriptions, no surprises.</p>
        <p>Buy a pack, spend tokens on the messages that matter to you. Every token you spend goes directly toward a message to a real host who will personally reply (or your tokens come back).</p>
      </>
    ),
  },
  {
    q: "How do I buy tokens?",
    a: (
      <>
        <p>You can buy tokens in two ways:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>In the app: tap the <strong>Wallet</strong> icon and select a token pack</li>
          <li>On the website: visit <strong>innerr.com/buy-tokens</strong></li>
        </ul>
        <p className="mt-2">Choose your pack, enter your card details (processed securely by Stripe), and your tokens appear in your balance immediately. The whole process takes about 30 seconds.</p>
      </>
    ),
  },
  {
    q: "What token packages are available?",
    a: (
      <>
        <p>We currently offer four token packages:</p>
        <ul className="mt-3 space-y-3">
          <li className="flex items-start gap-3">
            <span className="inline-block mt-0.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#0095f6", marginTop: "6px" }} />
            <div><strong>Starter</strong> — 50 tokens for <strong>$10</strong>. Perfect for getting started.</div>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block mt-0.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#0095f6", marginTop: "6px" }} />
            <div><strong>Popular</strong> — 105 tokens for <strong>$20</strong>. Our most popular choice — great value.</div>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block mt-0.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#0095f6", marginTop: "6px" }} />
            <div><strong>Best Value</strong> — 270 tokens for <strong>$50</strong>. The best value for regular fans.</div>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block mt-0.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#0095f6", marginTop: "6px" }} />
            <div><strong>Elite</strong> — 550 tokens for <strong>$100</strong>. For the ultimate fan experience.</div>
          </li>
        </ul>
        <p className="mt-3 text-xs text-gray-400">Prices in AUD. Packages may change — current prices are always shown in the app.</p>
      </>
    ),
  },
  {
    q: "Do tokens expire?",
    a: (
      <>
        <p><strong>No — tokens never expire.</strong> They&apos;re safe until you use them. Your token balance stays intact whether you use innerr every day or come back after months away.</p>
        <p>The only exception: if you delete your account, any remaining tokens are forfeited. So make sure to spend them first!</p>
      </>
    ),
  },
  {
    q: "Can I get a refund on tokens?",
    a: (
      <>
        <p>Token purchases are generally non-refundable, with one important exception: the <strong>72-hour auto-refund</strong>.</p>
        <p>If you send a message and the host doesn&apos;t reply within 72 hours, those specific tokens are automatically refunded to your balance — no action needed from you.</p>
        <p>For other refund requests (e.g. a technical error on a purchase), open the innerr app and tap Help &amp; Support from the menu. Nothing in our terms limits your rights under Australian Consumer Law.</p>
      </>
    ),
  },
  {
    q: "What is the 72-hour refund guarantee?",
    a: (
      <>
        <p>Every message you send is covered by innerr&apos;s 72-hour guarantee. Here&apos;s exactly how it works:</p>
        <ol className="list-decimal pl-5 space-y-2 mt-2">
          <li>You send a message to a host — tokens are deducted from your balance.</li>
          <li>A 72-hour timer starts from the moment the message is delivered.</li>
          <li>If the host replies within 72 hours, the transaction completes and they keep the tokens.</li>
          <li>If the host doesn&apos;t reply in time, the system <strong>automatically refunds your tokens</strong> — no forms, no waiting, no chasing.</li>
        </ol>
        <p className="mt-3">You&apos;ll receive a notification the moment a refund lands in your balance. It&apos;s one of innerr&apos;s core promises.</p>
      </>
    ),
  },
  {
    q: "What payment methods are accepted?",
    a: (
      <>
        <p>We accept all major credit and debit cards including:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Visa</li>
          <li>Mastercard</li>
          <li>American Express</li>
        </ul>
        <p className="mt-2">All payments are processed by <strong>Stripe</strong>. We may add additional payment methods (like Apple Pay and Google Pay) in future updates.</p>
      </>
    ),
  },
  {
    q: "Is my payment secure?",
    a: (
      <>
        <p>Yes, completely. All payments on innerr are processed by <strong>Stripe</strong> — one of the world&apos;s most trusted and secure payment platforms, used by millions of businesses globally.</p>
        <p>We <strong>never store your card number, expiry date, or CVV</strong> on our servers. Your payment details go directly to Stripe using industry-standard encryption. Stripe is PCI DSS Level 1 certified — the highest level of payment security.</p>
      </>
    ),
  },
  {
    q: "How do I check my token balance?",
    a: (
      <>
        <p>Your token balance is always visible in the <strong>top right corner of the app</strong>. Tap it or the Wallet icon at any time to see:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Your current balance</li>
          <li>Recent transactions (messages sent, refunds received, token purchases)</li>
          <li>Purchase history</li>
        </ul>
      </>
    ),
  },
  {
    q: "What happens to my tokens if I delete my account?",
    a: (
      <>
        <p>Any unused tokens in your account are <strong>forfeited when you delete your account</strong>. Tokens cannot be refunded or transferred before deletion.</p>
        <p>If you have a significant token balance and are thinking about deleting your account, we recommend spending your tokens first or reaching out via Help &amp; Support in the innerr app before proceeding — we may be able to assist.</p>
      </>
    ),
  },
];

const related = [
  { title: "Sending Messages", href: "/help/fans",     emoji: "💬" },
  { title: "For Hosts",        href: "/help/hosts",    emoji: "⭐" },
  { title: "Features Guide",   href: "/help/features", emoji: "✨" },
];

export default function TokensHelp() {
  return (
    <CategoryPage
      emoji="🪙"
      title="Tokens & Payments"
      subtitle="Everything about buying tokens, refunds, and how payments work."
      category="Tokens & Payments"
      articles={articles}
      related={related}
    />
  );
}
