import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Tokens — innerr",
  description: "Buy tokens to message your favourite creators on innerr.",
};

const BRAND = (
  <span className="font-bold italic" style={{ color: "#0095f6" }}>
    innerr
  </span>
);

const packages = [
  {
    label: "Starter",
    tokens: 50,
    price: 10,
    perToken: "20¢",
    popular: false,
    perks: ["Message up to 2–3 creators", "Tokens never expire", "Secure checkout"],
  },
  {
    label: "Popular",
    tokens: 105,
    price: 20,
    perToken: "19¢",
    popular: true,
    perks: ["Best for regular fans", "Save 5% vs Starter", "Tokens never expire", "Secure checkout"],
  },
  {
    label: "Best Value",
    tokens: 270,
    price: 50,
    perToken: "18.5¢",
    popular: false,
    perks: ["Message 10+ creators", "Save 7.5% vs Starter", "Tokens never expire", "Secure checkout"],
  },
  {
    label: "Elite",
    tokens: 550,
    price: 100,
    perToken: "18¢",
    popular: false,
    perks: ["Power fans & superfans", "Save 10% vs Starter", "Tokens never expire", "Secure checkout"],
  },
];

const faqs = [
  {
    q: "Do tokens expire?",
    a: "Never. Once you buy tokens they stay in your account until you use them. There are no time limits, no monthly fees and no pressure to spend.",
  },
  {
    q: "What if the host doesn't reply?",
    a: "Every host on innerr is held to a 72-hour reply guarantee. If they don't reply within 72 hours, your tokens are automatically refunded to your account in full.",
  },
  {
    q: "Can I get a refund on tokens I haven't used?",
    a: "If you have unused tokens and would like a refund, contact us at support@innerr.com within 30 days of purchase. We'll review on a case-by-case basis in line with our refund policy.",
  },
];

export default function BuyTokens() {
  return (
    <>
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold italic" style={{ color: "#0095f6" }}>
            innerr
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <Link href="/#how-it-works" className="hover:text-gray-900 transition-colors hidden sm:inline">How it Works</Link>
            <Link href="/for-hosts" className="hover:text-gray-900 transition-colors hidden sm:inline">For Hosts</Link>
            <Link href="/help" className="hover:text-gray-900 transition-colors">Help</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <section className="pt-16 pb-10 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="text-sm font-semibold mb-3" style={{ color: "#0095f6" }}>
              TOKENS
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Get Tokens</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Buy tokens to message your favourite creators on {BRAND}. One token pack, unlimited possibilities.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {packages.map((pkg) => (
                <div
                  key={pkg.label}
                  className={`relative flex flex-col rounded-2xl border-2 overflow-hidden transition-all ${
                    pkg.popular ? "shadow-2xl" : "shadow-sm hover:shadow-md"
                  }`}
                  style={
                    pkg.popular
                      ? { borderColor: "#0095f6", backgroundColor: "white" }
                      : { borderColor: "#e5e7eb", backgroundColor: "white" }
                  }
                >
                  {pkg.popular && (
                    <div
                      className="text-center py-2 text-xs font-bold text-white"
                      style={{ backgroundColor: "#0095f6" }}
                    >
                      ⭐ Most Popular
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      {pkg.label}
                    </div>
                    <div className="flex items-end gap-1 mb-1">
                      <span className="text-5xl font-black text-gray-900">{pkg.tokens}</span>
                      <span className="text-lg text-gray-400 mb-1.5">tokens</span>
                    </div>
                    <div className="text-gray-400 text-xs mb-1">{pkg.perToken} per token</div>
                    <div className="text-3xl font-bold text-gray-900 mt-4 mb-5">
                      ${pkg.price}
                      <span className="text-sm font-normal text-gray-400"> USD</span>
                    </div>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {pkg.perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-2 text-sm text-gray-600">
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] flex-shrink-0"
                            style={{ backgroundColor: "#0095f6" }}
                          >
                            ✓
                          </span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className="block w-full text-center py-3 rounded-xl text-sm font-bold transition-opacity hover:opacity-90"
                      style={
                        pkg.popular
                          ? { backgroundColor: "#0095f6", color: "white" }
                          : { backgroundColor: "#e8f4fe", color: "#0095f6" }
                      }
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-400 mt-6">
              Payments processed securely via Stripe. No subscription. Cancel any time.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-10 text-center">
              How tokens work
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: "🪙",
                  title: "Tokens are your currency",
                  desc: `Each host on ${BRAND} sets their own token price — typically between 5 and 50 tokens per message. You spend tokens to send your message.`,
                },
                {
                  icon: "✉️",
                  title: "Send your message",
                  desc: "Write your message, review the token cost, and send. Your message is delivered directly to the host — no algorithms, no filters.",
                },
                {
                  icon: "💬",
                  title: "Get a real reply",
                  desc: "Hosts have 72 hours to reply. If they don't, your tokens are automatically refunded. Every reply is written personally by the host.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc.replace("${BRAND}", "innerr")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8 text-center">
              Common questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/help"
                className="text-sm font-semibold"
                style={{ color: "#0095f6" }}
              >
                See all FAQs →
              </Link>
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
