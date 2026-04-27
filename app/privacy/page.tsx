import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — innerr",
  description: "innerr Privacy Policy — how we collect, use and protect your data.",
};

export default function Privacy() {
  return (
    <>
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold italic" style={{ color: "#0095f6" }}>
            innerr
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <Link href="/help" className="hover:text-gray-900 transition-colors">Help</Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <section className="pt-16 pb-12 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">Last updated: April 27, 2026</p>
          </div>
        </section>

        <article className="py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10 prose prose-gray max-w-none">

              <p className="text-gray-600 leading-relaxed">
                <span className="font-bold italic" style={{ color: "#0095f6" }}>innerr</span> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share and protect information about you when you use the innerr platform — including our mobile application and website (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using innerr you agree to the practices described in this policy. If you do not agree, please stop using the Service.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>1. Information We Collect</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Information you provide directly</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                <li><strong>Account information:</strong> name, email address, password and profile photo when you register.</li>
                <li><strong>Profile information:</strong> bio, social media handles, and content you choose to display publicly as a host.</li>
                <li><strong>Messages:</strong> content of messages sent between fans and hosts on the platform.</li>
                <li><strong>Payment information:</strong> billing details collected via Stripe when you purchase tokens or receive payouts (see Section 4).</li>
                <li><strong>Communications:</strong> emails or support messages you send us.</li>
              </ul>
              <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">Information collected automatically</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                <li><strong>Usage data:</strong> pages viewed, features used, timestamps, click-through data.</li>
                <li><strong>Device data:</strong> device type, operating system, app version, IP address, and browser type.</li>
                <li><strong>Crash reports:</strong> diagnostic data to help us identify and fix issues.</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                <li>To operate and provide the innerr Service, including processing messages and managing accounts.</li>
                <li>To process token purchases and host payouts via Stripe.</li>
                <li>To enforce our 72-hour reply guarantee and issue automatic refunds where required.</li>
                <li>To personalise your experience and improve our platform.</li>
                <li>To send transactional emails (purchase receipts, reply notifications, refund confirmations).</li>
                <li>To detect and prevent fraud, abuse, and violations of our Terms of Service.</li>
                <li>To comply with legal obligations.</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                We will only send you marketing communications with your consent. You can unsubscribe at any time.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>3. Database and Infrastructure — Supabase</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                innerr uses <strong>Supabase</strong> as our backend database and authentication provider. Supabase stores your account data, profile information, and message records in encrypted, secure cloud infrastructure. Supabase operates in compliance with industry security standards. Your data is stored on servers located in data centres within the European Economic Area or United States depending on your region. We have a Data Processing Agreement with Supabase. For more information see <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0095f6" }}>supabase.com/privacy</a>.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>4. Payments — Stripe</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                All payment processing is handled by <strong>Stripe, Inc.</strong> innerr does not store your credit card number, expiry date, or CVV on our servers. When you purchase tokens or receive a payout, your payment details are sent directly and securely to Stripe. Stripe is PCI DSS Level 1 certified. By using our payment features you also agree to <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0095f6" }}>Stripe&apos;s Privacy Policy</a>. We may receive and store a Stripe customer ID and payment method summary (e.g. last four digits of your card) for billing reference purposes.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>5. User Content and Messages</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Messages sent between fans and hosts are stored in our database to facilitate the Service — including delivery, the 72-hour reply guarantee, refund processing, and moderation. Our team may access message content where required to investigate reports of policy violations or comply with legal requests. We do not sell or share message content with third parties for advertising. Hosts and fans should not share sensitive personal information (such as financial details or passwords) through messages.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>6. Cookies and Tracking</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our website uses cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                <li><strong>Essential cookies:</strong> keep you logged in and maintain session state.</li>
                <li><strong>Analytics cookies:</strong> understand how visitors use our site so we can improve it (e.g. page view counts, traffic sources). Analytics data is aggregated and anonymised where possible.</li>
                <li><strong>Preference cookies:</strong> remember your settings and preferences.</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                You can control cookies through your browser settings. Disabling essential cookies may affect how the Service functions.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>7. Sharing Your Information</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We do not sell your personal data. We may share your information with:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                <li><strong>Service providers:</strong> Supabase, Stripe, and other trusted vendors who help us operate the Service, bound by confidentiality and data protection agreements.</li>
                <li><strong>Law enforcement or regulators:</strong> where required by applicable law, court order, or to protect the rights and safety of our users or the public.</li>
                <li><strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>8. Your Rights</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Depending on your location, you may have rights including: access to your personal data, correction of inaccurate data, deletion of your account and data, objection to or restriction of processing, and data portability. To exercise any of these rights, email us at <a href="mailto:support@innerr.com" className="underline" style={{ color: "#0095f6" }}>support@innerr.com</a>. We will respond within 30 days.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>9. Data Retention</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We retain your account data for as long as your account is active or as needed to provide the Service. If you delete your account, we will delete or anonymise your personal data within 30 days, except where we are required to retain it for legal or financial compliance purposes (e.g. transaction records which may be retained for up to 7 years).
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>10. Children&apos;s Privacy</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                innerr is not directed at children under the age of 17. We do not knowingly collect personal data from anyone under 17. If you believe we have inadvertently collected information from a minor, please contact us immediately at <a href="mailto:support@innerr.com" className="underline" style={{ color: "#0095f6" }}>support@innerr.com</a>.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>11. Security</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We implement industry-standard security measures including TLS encryption in transit, encrypted storage at rest, access controls, and regular security reviews. No system is completely secure, and we cannot guarantee absolute security. We will notify you promptly in the event of a data breach that affects your rights.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>12. Changes to This Policy</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last updated&rdquo; date and notify you via email or an in-app notice if the changes are material. Your continued use of the Service after changes take effect constitutes your acceptance of the updated policy.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>13. Governing Law</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                This Privacy Policy is governed by the laws of Victoria, Australia. Any disputes arising under this policy shall be subject to the exclusive jurisdiction of the courts of Victoria, Australia.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0095f6" }}>14. Contact Us</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3 text-sm text-gray-600">
                <div className="font-semibold text-gray-900 mb-1">innerr Support</div>
                <div>Email: <a href="mailto:support@innerr.com" className="underline" style={{ color: "#0095f6" }}>support@innerr.com</a></div>
                <div className="mt-1 text-gray-400">Melbourne, Victoria, Australia</div>
              </div>
            </div>
          </div>
        </article>
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
          <div className="text-sm text-gray-500 text-center">© 2026 innerr. All rights reserved. · Melbourne, Australia</div>
        </div>
      </footer>
    </>
  );
}
