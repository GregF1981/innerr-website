import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & FAQ — innerr",
  description: "Answers to common questions about innerr — the paid fan-to-creator messaging platform.",
};

const faqs = [
  {
    q: "What is innerr?",
    a: "innerr is a paid messaging platform that connects fans with their favourite creators, influencers and celebrities. Fans pay tokens to send a direct message, and hosts earn money by writing a personal reply. Every message is guaranteed to be read and replied to within 72 hours — or the fan's tokens are automatically refunded.",
  },
  {
    q: "How do tokens work?",
    a: "Tokens are the currency you use inside innerr to send messages. You buy a token pack (starting from 50 tokens for $10), and spend tokens to message hosts. Each host sets their own token price — usually between 5 and 50 tokens per message. Tokens never expire and can be used on any host at any time.",
  },
  {
    q: "How do I message a host?",
    a: "Download the innerr app, create an account and buy a token pack. Then browse for a host you'd like to message, tap their profile, and tap 'Send a Message'. Write your message, confirm the token cost, and send. The host will be notified immediately.",
  },
  {
    q: "What happens if a host doesn't reply?",
    a: "Every host on innerr is held to a 72-hour reply guarantee. If a host hasn't replied within 72 hours, your tokens are automatically refunded to your account. You'll receive a notification when the refund is processed. The host's response rate is also visible on their profile so you know what to expect.",
  },
  {
    q: "How do I become a host?",
    a: "Download the innerr app and sign up as a host. You'll create a profile with your bio and photo, then set your token price. Once your account is live, fans can start messaging you. We recommend connecting your social accounts so fans can find you easily. Verified badges are available for creators with a significant following.",
  },
  {
    q: "How do I cash out my earnings?",
    a: "As a host, every time you reply to a fan message the tokens they spent are added to your earnings balance. You can request a payout at any time and funds are sent weekly via bank transfer or your connected payment method. The minimum payout is $20. innerr retains a platform fee — see our Terms of Service for the current rate.",
  },
  {
    q: "Is my payment secure?",
    a: "Yes. All payments on innerr are processed by Stripe, one of the world's leading payment processors. innerr never stores your card details. All transactions are encrypted with industry-standard TLS, and Stripe handles PCI compliance on our behalf.",
  },
  {
    q: "How do I get verified?",
    a: "Verification is available to public figures, celebrities, and creators with an established following. To apply, go to your profile in the innerr app and tap 'Apply for Verification'. You'll need to provide links to your public social profiles and a form of government-issued ID. We aim to review applications within 5 business days.",
  },
  {
    q: "How do I report a user?",
    a: "If you receive an inappropriate message or want to report a profile, tap the three-dot menu on the message or profile and select 'Report'. Choose the reason for your report and submit. Our moderation team reviews all reports within 24 hours. You can also block any user directly from their profile.",
  },
  {
    q: "How do I contact support?",
    a: "For any questions not answered here, email us at support@innerr.com. We aim to respond to all support requests within 24 hours on business days. You can also find updates on known issues on our social channels.",
  },
];

export default function Help() {
  return (
    <>
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold italic" style={{ color: "#0095f6" }}>
            innerr
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <Link href="/#how-it-works" className="hover:text-gray-900 transition-colors hidden sm:inline">How it Works</Link>
            <Link href="/buy-tokens" className="hover:text-gray-900 transition-colors hidden sm:inline">Get Tokens</Link>
            <a
              href="#"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0095f6" }}
            >
              Download App
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <section className="pt-16 pb-12 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="text-sm font-semibold mb-3" style={{ color: "#0095f6" }}>
              SUPPORT
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Help &amp; FAQ</h1>
            <p className="text-gray-500 text-lg">
              Everything you need to know about{" "}
              <span className="font-bold italic" style={{ color: "#0095f6" }}>innerr</span>.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="font-bold text-gray-900 text-base mb-3 flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "#0095f6" }}
                      >
                        Q
                      </span>
                      {faq.q}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed pl-9">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 p-6 rounded-2xl text-center"
              style={{ backgroundColor: "#e8f4fe" }}
            >
              <h3 className="font-bold text-gray-900 mb-2">Still need help?</h3>
              <p className="text-gray-500 text-sm mb-4">
                Our support team is here for you. We respond within 24 hours on business days.
              </p>
              <a
                href="mailto:support@innerr.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0095f6" }}
              >
                Email support@innerr.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold italic" style={{ color: "#0095f6" }}>
            innerr
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/help" className="hover:text-white transition-colors">Help</Link>
            <Link href="/for-hosts" className="hover:text-white transition-colors">For Hosts</Link>
          </nav>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} innerr</div>
        </div>
      </footer>
    </>
  );
}
