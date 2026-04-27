"use client";

import { CategoryPage, type Article } from "../_shared";

const articles: Article[] = [
  {
    q: "The 72-hour reply guarantee — explained",
    a: (
      <>
        <p>The 72-hour reply guarantee is innerr&apos;s core promise to fans. Here&apos;s exactly how it works:</p>
        <ol className="list-decimal pl-5 space-y-2 mt-2">
          <li>You send a message to a host — tokens are immediately deducted from your balance.</li>
          <li>A 72-hour countdown begins the moment your message is delivered to the host.</li>
          <li>If the host replies within 72 hours, the transaction completes and the host receives their tokens.</li>
          <li>If the host does <em>not</em> reply within 72 hours, the tokens are <strong>automatically refunded</strong> to your balance — no action required from you.</li>
        </ol>
        <p className="mt-3">You&apos;ll receive a push notification the moment a refund lands. The guarantee applies to every single message — no exceptions, no fine print.</p>
      </>
    ),
  },
  {
    q: "How do automatic token refunds work?",
    a: (
      <>
        <p>When a host misses the 72-hour reply window, the refund process is fully automatic:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>The system detects the expired window</li>
          <li>Tokens are instantly returned to your balance</li>
          <li>You receive a notification confirming the refund</li>
          <li>No forms, no support tickets, no waiting</li>
        </ul>
        <p className="mt-3">This happens even if you&apos;re not using the app. The next time you open innerr, your balance will reflect the refund. Refund history is visible in <strong>Wallet &gt; Transactions</strong>.</p>
      </>
    ),
  },
  {
    q: "What is exclusive content?",
    a: (
      <>
        <p>Exclusive content is posts, photos, or videos that only a host&apos;s paying fans or subscribers can see. On a host&apos;s profile, exclusive posts appear with a <strong>🔒 lock icon</strong> and a blurred preview for non-subscribers.</p>
        <p className="mt-2">As a <strong>host</strong>, you can mark any post as exclusive when creating it — this gives your most loyal fans a reason to stay subscribed.</p>
        <p className="mt-2">As a <strong>fan</strong>, exclusive content is included in your subscription if you subscribe to a host, or you may be able to unlock individual posts depending on the host&apos;s settings.</p>
        <p className="mt-2">Common exclusive content types: behind-the-scenes footage, personal updates, early announcements, and subscriber-only Q&As.</p>
      </>
    ),
  },
  {
    q: "What does the blue verification tick mean?",
    a: (
      <>
        <p>The blue tick (✓) next to a host&apos;s name means they are <strong>officially verified by innerr</strong>. It confirms that:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>The account belongs to the real person it claims to be</li>
          <li>innerr has reviewed their identity and public presence</li>
          <li>They are a genuine public figure, creator, or notable individual</li>
        </ul>
        <p className="mt-2">Verification is <strong>not for sale</strong> and cannot be earned simply by having a large following. It&apos;s about authenticity — making sure you&apos;re talking to the real person.</p>
        <p className="mt-2">If you&apos;re a host interested in verification, see the <strong>For Hosts</strong> section of Help Centre.</p>
      </>
    ),
  },
  {
    q: "How does tipping work?",
    a: (
      <>
        <p>Tipping lets fans send tokens to a host as a show of appreciation — without expecting a reply in return. Unlike a standard message, a tip is a one-way transaction.</p>
        <p className="mt-2">To send a tip, go to a host&apos;s profile and tap <strong>Send a Tip</strong>. Choose the amount, add an optional note, and confirm.</p>
        <p className="mt-2">Key things to know about tips:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Tips are <strong>not covered by the 72-hour refund guarantee</strong> — they&apos;re voluntary and non-refundable</li>
          <li>The host receives 80% (the same 20% platform fee applies)</li>
          <li>Tips are a great way to support a host whose content you love</li>
        </ul>
      </>
    ),
  },
  {
    q: "How does the review system work?",
    a: (
      <>
        <p>After a host replies to your message, you&apos;ll be prompted to leave a review. Reviews have two parts:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Star rating</strong> — 1 to 5 stars</li>
          <li><strong>Written comment</strong> — optional, but encouraged</li>
        </ul>
        <p className="mt-2">Reviews are <strong>only available after a genuine reply</strong> — you can&apos;t review a host you haven&apos;t exchanged messages with. This keeps the system honest.</p>
        <p className="mt-2">All published reviews are visible on the host&apos;s profile and help other fans decide who to message. Hosts cannot delete reviews, but they can flag a review for moderation if it violates community standards.</p>
        <p className="mt-2">You can edit your review within 48 hours of submitting it.</p>
      </>
    ),
  },
  {
    q: "What does the green online dot mean?",
    a: (
      <>
        <p>The green dot on a host&apos;s profile or avatar means they are <strong>currently active on innerr</strong>. This is a real-time signal that updates automatically — if they&apos;re using the app, the dot is green.</p>
        <p className="mt-2">A green dot is a great time to send a message, as they&apos;re likely to see it quickly. However, the 72-hour guarantee applies regardless of whether the host is online or not — so you&apos;re always protected.</p>
        <p className="mt-2">Hosts can turn off their online visibility in <strong>Settings &gt; Privacy &gt; Show online status</strong> if they prefer.</p>
      </>
    ),
  },
  {
    q: "What is reply rate?",
    a: (
      <>
        <p>Reply rate is a percentage shown on every host&apos;s profile. It tells you <strong>what percentage of fan messages that host has replied to</strong> over the past 30 days.</p>
        <p className="mt-2">For example, a reply rate of 95% means the host replied to 95 out of 100 messages they received in the last month.</p>
        <p className="mt-2">Reply rate is a useful signal when choosing who to message:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>A high reply rate (90%+) means the host is active and engaged</li>
          <li>A lower rate might mean the host is busy or selective — your tokens are still protected by the 72-hour guarantee either way</li>
        </ul>
        <p className="mt-2">Hosts who consistently miss messages will see their reply rate drop, which affects their visibility on the platform.</p>
      </>
    ),
  },
  {
    q: "How do I manage my notifications?",
    a: (
      <>
        <p>Go to <strong>Settings &gt; Notifications</strong> to control exactly what you hear from innerr. You can toggle:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>New message replies from hosts</li>
          <li>Token refunds</li>
          <li>New posts from hosts you follow</li>
          <li>Broadcast messages</li>
          <li>Exclusive content alerts</li>
          <li>Account security alerts (always on)</li>
        </ul>
        <p className="mt-2">You can also set <strong>quiet hours</strong> — a time window where non-urgent notifications are held and delivered in the morning instead.</p>
        <p className="mt-2">We recommend keeping message reply notifications on so you don&apos;t miss a response from your favourite host.</p>
      </>
    ),
  },
  {
    q: "How does the profanity filter work?",
    a: (
      <>
        <p>innerr uses an automatic profanity filter that scans messages before they are delivered. If a message contains extreme or harmful language, it is <strong>flagged before delivery</strong> and the sender is warned.</p>
        <p className="mt-2">The filter is designed to catch genuinely harmful content — it is <em>not</em> a general censorship tool and won&apos;t flag normal conversation or mild language.</p>
        <p className="mt-2">If your message is flagged:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>You&apos;ll see a warning before the message is sent</li>
          <li>You can edit and resend, or cancel and receive your tokens back</li>
          <li>Repeated violations may result in a temporary messaging restriction</li>
        </ul>
        <p className="mt-2">Hosts can also set their own sensitivity level for their inbox in <strong>Host Settings &gt; Message Filters</strong>.</p>
      </>
    ),
  },
  {
    q: "How do I block and report from within a conversation?",
    a: (
      <>
        <p>You can block or report directly from any conversation without leaving the chat. In the conversation view, tap the <strong>three-dot menu</strong> (⋯) in the top right corner and select:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Block</strong> — prevents any future contact from this person</li>
          <li><strong>Report</strong> — submits the conversation to our Trust & Safety team</li>
        </ul>
        <p className="mt-2">You can do both at the same time. Blocking and reporting from within a conversation also saves a snapshot of the conversation as evidence for our review team — which speeds up action.</p>
        <p className="mt-2">See the <strong>Safety & Privacy</strong> section for full details on blocking and reporting.</p>
      </>
    ),
  },
  {
    q: "What is the post carousel?",
    a: (
      <>
        <p>When a host creates a post with multiple images, they are displayed as a <strong>swipeable carousel</strong> — fans can swipe left or right to browse through all the photos in a single post.</p>
        <p className="mt-2">Carousels support up to <strong>10 images per post</strong>. Each image can be standard (visible to all followers) or exclusive (locked to subscribers).</p>
        <p className="mt-2">As a host, select the carousel option when creating a post, then upload multiple images in the order you want them to appear. You can reorder them before publishing.</p>
      </>
    ),
  },
];

const related = [
  { title: "Sending Messages", href: "/help/fans",     emoji: "💬" },
  { title: "Tokens & Payments", href: "/help/tokens",  emoji: "🪙" },
  { title: "For Hosts",         href: "/help/hosts",   emoji: "⭐" },
];

export default function FeaturesHelp() {
  return (
    <CategoryPage
      emoji="✨"
      title="Features Guide"
      subtitle="Everything innerr can do — explained simply."
      category="Features Guide"
      articles={articles}
      related={related}
    />
  );
}
