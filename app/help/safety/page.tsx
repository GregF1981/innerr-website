"use client";

import { CategoryPage, type Article } from "../_shared";

const articles: Article[] = [
  {
    q: "How do I block a user?",
    a: (
      <>
        <p>To block someone on innerr, go to their profile and tap the <strong>three-dot menu</strong> (⋯) in the top right corner, then select <strong>Block</strong>.</p>
        <p>Once blocked:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>They can no longer message you or view your profile</li>
          <li>Any pending messages from them are cancelled and their tokens refunded</li>
          <li>They are removed from your followers</li>
          <li>You won&apos;t see each other in search results</li>
        </ul>
        <p className="mt-2">Blocking is silent — the person isn&apos;t notified. You can manage your block list in <strong>Settings &gt; Blocked Users</strong> and unblock at any time.</p>
      </>
    ),
  },
  {
    q: "How do I report a user?",
    a: (
      <>
        <p>To report someone, go to their profile or open the message, tap the <strong>three-dot menu</strong> (⋯), and select <strong>Report</strong>.</p>
        <p>You&apos;ll be asked to choose a reason:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Harassment or abuse</li>
          <li>Inappropriate content</li>
          <li>Spam or scam</li>
          <li>Impersonation</li>
          <li>Underage user</li>
          <li>Other</li>
        </ul>
        <p className="mt-2">Add any additional context if you can — it helps our team act faster. Reports are always confidential. You can also block the person at the same time.</p>
        <p className="mt-2">For urgent safety concerns, email <a href="mailto:safety@innerr.com" style={{ color: "#0095f6" }}>safety@innerr.com</a> directly.</p>
      </>
    ),
  },
  {
    q: "What content is not allowed on innerr?",
    a: (
      <>
        <p>innerr has a zero-tolerance policy on content that causes harm. The following is strictly prohibited:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Sexual content involving minors (CSAM) — reported to authorities immediately</li>
          <li>Threats, violence, or incitement to harm</li>
          <li>Harassment, hate speech, or targeted abuse</li>
          <li>Non-consensual sharing of private images</li>
          <li>Spam, scams, or impersonation</li>
          <li>Content that violates Australian law</li>
        </ul>
        <p className="mt-2">Hosts are also prohibited from using AI-generated responses, bots, or ghostwriters to reply to fans — all replies must be genuine and personal.</p>
        <p className="mt-2">Violations can result in immediate account suspension and, where required by law, referral to law enforcement.</p>
      </>
    ),
  },
  {
    q: "How does innerr moderate content?",
    a: (
      <>
        <p>innerr uses a combination of automated detection and human review:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Automated filters</strong> — scan messages and posts for known harmful content patterns in real time</li>
          <li><strong>Profanity filter</strong> — flags messages containing extreme language before delivery</li>
          <li><strong>User reports</strong> — reviewed by our Trust & Safety team within 24 hours (urgent cases faster)</li>
          <li><strong>Proactive monitoring</strong> — our team periodically reviews flagged account activity</li>
        </ul>
        <p className="mt-2">We take a firm approach: accounts that violate our community standards are suspended, not just warned. Serious violations result in permanent bans.</p>
      </>
    ),
  },
  {
    q: "What happens when I report someone?",
    a: (
      <>
        <p>When you submit a report, here&apos;s what happens:</p>
        <ol className="list-decimal pl-5 space-y-2 mt-2">
          <li>Your report is received and logged immediately.</li>
          <li>Our Trust & Safety team reviews it — typically within 24 hours, sooner for urgent cases.</li>
          <li>If a violation is confirmed, action is taken: warning, content removal, suspension, or permanent ban.</li>
          <li>For serious matters (e.g. illegal content), we cooperate with Australian law enforcement.</li>
        </ol>
        <p className="mt-2">You&apos;ll receive a notification once your report has been reviewed. All reports are treated confidentially — the person you reported is never told who reported them.</p>
      </>
    ),
  },
  {
    q: "How do I protect my privacy?",
    a: (
      <>
        <p>Here are the key privacy controls available to you on innerr:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Profile visibility</strong> — in Settings &gt; Privacy, you can control whether your profile is publicly searchable</li>
          <li><strong>Message history</strong> — only you and the host can see a conversation; innerr staff only access messages if required for a safety investigation</li>
          <li><strong>Blocking</strong> — block any user to prevent all contact and profile views</li>
          <li><strong>Notifications</strong> — control exactly what alerts you receive in Settings &gt; Notifications</li>
          <li><strong>Data requests</strong> — email <a href="mailto:privacy@innerr.com" style={{ color: "#0095f6" }}>privacy@innerr.com</a> to request a copy of your data or request deletion</li>
        </ul>
        <p className="mt-2">Read our full <a href="/privacy" style={{ color: "#0095f6" }}>Privacy Policy</a> for details on how we handle your data.</p>
      </>
    ),
  },
  {
    q: "How do I delete my account?",
    a: (
      <>
        <p>To delete your account, go to <strong>Settings &gt; Account &gt; Delete Account</strong>. You&apos;ll be asked to confirm your decision and enter your password.</p>
        <p className="mt-2"><strong>Before you delete, please note:</strong></p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Any unused tokens are <strong>forfeited</strong> and cannot be refunded</li>
          <li>Your message history is permanently deleted</li>
          <li>If you&apos;re a host, any pending earnings must be cashed out first</li>
          <li>Deletion is <strong>permanent and irreversible</strong> — your username and profile cannot be recovered</li>
        </ul>
        <p className="mt-2">If you have a significant token balance or are a host with earnings, we recommend emailing <a href="mailto:support@innerr.com" style={{ color: "#0095f6" }}>support@innerr.com</a> before deleting — we may be able to help.</p>
      </>
    ),
  },
  {
    q: "What data does innerr store about me?",
    a: (
      <>
        <p>innerr collects and stores the following types of data:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Account info</strong> — name, email address, profile details, and identity verification data</li>
          <li><strong>Messages</strong> — content of messages sent and received (stored encrypted)</li>
          <li><strong>Transaction history</strong> — token purchases, refunds, and (for hosts) earnings and cashouts</li>
          <li><strong>Device and usage data</strong> — device type, IP address, app usage patterns for security and improvement</li>
          <li><strong>Payment info</strong> — we do <em>not</em> store card details; Stripe handles all payment data</li>
        </ul>
        <p className="mt-2">You can request a full copy of your data by emailing <a href="mailto:privacy@innerr.com" style={{ color: "#0095f6" }}>privacy@innerr.com</a>. See our <a href="/privacy" style={{ color: "#0095f6" }}>Privacy Policy</a> for full details.</p>
      </>
    ),
  },
  {
    q: "How do I contact support for urgent safety issues?",
    a: (
      <>
        <p>For urgent safety concerns — including threats, abuse, or illegal content — contact us immediately:</p>
        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li>
            <strong>Safety email:</strong>{" "}
            <a href="mailto:safety@innerr.com" style={{ color: "#0095f6" }}>safety@innerr.com</a>
            {" "}— monitored 7 days a week, urgent cases prioritised
          </li>
          <li>
            <strong>General support:</strong>{" "}
            <a href="mailto:support@innerr.com" style={{ color: "#0095f6" }}>support@innerr.com</a>
          </li>
        </ul>
        <p className="mt-3">If you or someone else is in immediate danger, <strong>contact emergency services (000 in Australia) first</strong>. innerr is not a crisis service.</p>
        <p className="mt-2">We work with Australian law enforcement and will cooperate fully with any lawful request involving a genuine safety matter.</p>
      </>
    ),
  },
];

const related = [
  { title: "Sending Messages", href: "/help/fans",     emoji: "💬" },
  { title: "For Hosts",        href: "/help/hosts",    emoji: "⭐" },
  { title: "Features Guide",   href: "/help/features", emoji: "✨" },
];

export default function SafetyHelp() {
  return (
    <CategoryPage
      emoji="🛡️"
      title="Safety & Privacy"
      subtitle="Blocking, reporting, staying safe, and managing your data."
      category="Safety & Privacy"
      articles={articles}
      related={related}
    />
  );
}
