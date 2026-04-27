"use client";

import { CategoryPage, type Article } from "../_shared";

const articles: Article[] = [
  {
    q: "How do I become a host?",
    a: (
      <>
        <p>To become a host, go to your profile in the app and tap <strong>Become a Host</strong>. You&apos;ll be guided through a short application that includes:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Identity verification</li>
          <li>Agreeing to our Host Terms</li>
          <li>Setting up your host profile and bio</li>
          <li>Connecting a Stripe account for payouts</li>
        </ul>
        <p className="mt-2">We review all applications within a few days. Once approved, you&apos;ll be live and fans can start messaging you straight away. The more complete and authentic your profile is, the faster you&apos;ll start getting messages.</p>
      </>
    ),
  },
  {
    q: "How do I set my token price?",
    a: (
      <>
        <p>In your host dashboard, go to <strong>Settings &gt; Pricing</strong>. You can set your token price per message within the range innerr allows.</p>
        <p>A few tips:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Start with a lower price while you build your reply rate and reviews.</li>
          <li>Higher prices attract fans who are truly motivated — which usually means more thoughtful messages.</li>
          <li>You can adjust your price at any time. Changes don&apos;t affect messages already in your inbox.</li>
        </ul>
      </>
    ),
  },
  {
    q: "How do I reply to a fan message?",
    a: (
      <>
        <p>Open the <strong>Messages</strong> tab in your host dashboard. You&apos;ll see all incoming fan messages with how much time is left on the 72-hour window.</p>
        <p>Tap any message to read it, then type and send your reply. Replies must be:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Personal and genuine</strong> — written by you, not a bot or ghostwriter</li>
          <li>Sent within the 72-hour window to keep the tokens</li>
          <li>Compliant with our content standards</li>
        </ul>
        <p className="mt-2">You don&apos;t need to write an essay — even a warm, sincere short reply makes a fan&apos;s day.</p>
      </>
    ),
  },
  {
    q: "When do I get paid?",
    a: (
      <>
        <p>Token earnings are credited to your <strong>host balance immediately</strong> when you reply to a fan message. You can see your running balance in the Earnings section of your dashboard at any time.</p>
        <p>To turn those tokens into real money, you cash out whenever you&apos;re ready (see the next article). There&apos;s no waiting period for earnings — reply and it&apos;s yours.</p>
      </>
    ),
  },
  {
    q: "How do I cash out my earnings?",
    a: (
      <>
        <p>Go to your host dashboard and tap <strong>Earnings &gt; Cash Out</strong>. You&apos;ll need a verified Stripe account connected — if you haven&apos;t set this up yet, you&apos;ll be prompted to do so.</p>
        <p>Cash outs are subject to a minimum balance threshold (shown in the app). Once you request a cash out, Stripe processes the payment and it typically arrives in your bank account within <strong>1–3 business days</strong>.</p>
        <p>You can cash out as often as you like — there&apos;s no limit on frequency once you&apos;ve met the minimum.</p>
      </>
    ),
  },
  {
    q: "What is the 20% platform fee?",
    a: (
      <>
        <p>When a fan pays tokens to message you, innerr deducts a <strong>20% platform fee</strong> and credits the remaining <strong>80%</strong> to your host balance.</p>
        <p>For example: if a fan pays 10 tokens, you receive 8 tokens. This fee covers the cost of running the platform, processing payments, fraud prevention, the 72-hour refund guarantee system, and customer support.</p>
        <p>The fee is automatically applied — you don&apos;t need to calculate or manage anything. Your dashboard always shows your net earnings after the fee.</p>
      </>
    ),
  },
  {
    q: "What happens if I don't reply within 72 hours?",
    a: (
      <>
        <p>If you don&apos;t reply within 72 hours of a message being delivered:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>The tokens are <strong>automatically refunded</strong> to the fan&apos;s balance.</li>
          <li>You don&apos;t receive payment for that message.</li>
          <li>Your <strong>reply rate</strong> takes a hit, which can make fans less likely to message you.</li>
        </ul>
        <p className="mt-2">Consistently missing the 72-hour window may result in your account being reviewed or access to hosting being restricted. We recommend turning on push notifications so you never miss a message.</p>
      </>
    ),
  },
  {
    q: "How do I apply for official verification?",
    a: (
      <>
        <p>Once you&apos;ve established a presence on innerr, go to your host profile and tap <strong>Apply for Verification</strong> (or find it in Settings &gt; Verification).</p>
        <p>You&apos;ll need to submit supporting information about your identity and public profile. Our team reviews each application individually. We&apos;ll get back to you with a decision — this typically takes a few days.</p>
      </>
    ),
  },
  {
    q: "What are the verification requirements?",
    a: (
      <>
        <p>Verification is for hosts who are genuinely notable in their field. While we review each case individually, verified hosts typically:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Have a real public presence (social media following, media coverage, or recognised profile)</li>
          <li>Have completed identity verification on innerr</li>
          <li>Maintain a strong reply rate</li>
          <li>Represent themselves accurately on their profile</li>
        </ul>
        <p className="mt-2">Verification is not about follower count — it&apos;s about authenticity and ensuring fans know they&apos;re talking to the real person.</p>
      </>
    ),
  },
  {
    q: "How do I create a post?",
    a: (
      <>
        <p>From your host dashboard, tap the <strong>Create</strong> button (usually a + icon). You can:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Write a text post</li>
          <li>Attach one or multiple images (carousel)</li>
          <li>Choose the audience: all followers, or exclusive to subscribers only</li>
          <li>Add a caption and tags</li>
        </ul>
        <p className="mt-2">Regular posts are a great way to keep your followers engaged between messages.</p>
      </>
    ),
  },
  {
    q: "What is exclusive content?",
    a: (
      <>
        <p>Exclusive content is posts or media that only your paying fans or subscribers can access. It shows with a 🔒 lock icon on your profile to non-subscribers.</p>
        <p>When creating a post, simply toggle the <strong>Exclusive</strong> option. It&apos;s a great way to reward your most loyal fans with something special — behind-the-scenes content, personal updates, early announcements, and more.</p>
      </>
    ),
  },
  {
    q: "How do I send a broadcast message?",
    a: (
      <>
        <p>Go to your host dashboard and tap <strong>Broadcast &gt; New Broadcast</strong>. Type your message, choose your audience (all followers or a specific group), and send.</p>
        <p>Broadcasts are a powerful way to reach all your fans at once — great for announcing new content, sharing big news, or just checking in. Note that <strong>broadcast messages are not subject to the 72-hour reply guarantee</strong>, as they&apos;re one-way communications from host to fan.</p>
      </>
    ),
  },
];

const related = [
  { title: "Tokens & Payments", href: "/help/tokens",   emoji: "🪙" },
  { title: "Features Guide",    href: "/help/features", emoji: "✨" },
  { title: "Safety & Privacy",  href: "/help/safety",   emoji: "🛡️" },
];

export default function HostsHelp() {
  return (
    <CategoryPage
      emoji="⭐"
      title="For Hosts"
      subtitle="Earning money, cashing out, and getting the most from innerr."
      category="For Hosts"
      articles={articles}
      related={related}
    />
  );
}
