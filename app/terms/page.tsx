import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — innerr",
  description: "innerr Terms of Service — the rules governing your use of the platform.",
};

export default function Terms() {
  return (
    <>
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold italic" style={{ color: "#0095f6" }}>
            innerr
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <Link href="/help" className="hover:text-gray-900 transition-colors">Help</Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <section className="pt-16 pb-12 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-400 text-sm">Last updated: April 27, 2026</p>
          </div>
        </section>

        <article className="py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10 prose prose-gray max-w-none">

              <p className="text-gray-600 leading-relaxed">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the <span className="font-bold italic" style={{ color: "#0095f6" }}>innerr</span> platform, including our mobile application and website (the &ldquo;Service&rdquo;), operated by innerr (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Eligibility and Age Requirement</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                You must be at least <strong>17 years of age</strong> to use innerr. By registering an account, you represent and warrant that you are 17 or older and have the legal capacity to enter into a binding agreement. If you are under 17, you must not use the Service. We reserve the right to terminate accounts that we believe are held by minors under this age.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Accounts</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                You are responsible for maintaining the security of your account credentials. Do not share your password. You are responsible for all activity that occurs under your account. innerr reserves the right to suspend or terminate accounts that are found to be in violation of these Terms. You must provide accurate information when registering and keep your account information up to date.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Token Purchases</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tokens are the in-platform currency used to send messages to hosts. Tokens are purchased in packs and credited to your account upon successful payment via Stripe. All prices are displayed in USD and are inclusive of any applicable taxes unless otherwise stated.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mt-3">
                <li>Tokens have no cash value and cannot be exchanged for cash by fans.</li>
                <li>Tokens are non-transferable between accounts.</li>
                <li>Tokens do not expire and can be used on any host at any time.</li>
                <li>Token prices and available packages are subject to change at any time. Existing token balances are unaffected by price changes.</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Refund Policy — 72-Hour Guarantee</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                innerr operates a <strong>72-hour reply guarantee</strong>. If a host does not reply to your message within 72 hours of it being delivered:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mt-3">
                <li>The tokens spent on that message will be automatically refunded to your token balance.</li>
                <li>Refunds are processed to your in-app token balance, not to your original payment method, unless you submit a written refund request to support@innerr.com within 30 days of the original purchase date.</li>
                <li>Cash refunds of unused token pack purchases (tokens not yet spent) may be requested within 14 days of purchase by contacting support@innerr.com, subject to our discretion.</li>
                <li>We do not offer refunds on tokens that have been spent and replied to.</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Host Obligations</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you use innerr as a host, you agree to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mt-3">
                <li>Reply to fan messages personally and authentically within 72 hours of receipt, or forfeit the token payment for that message.</li>
                <li>Not use automated responses, bots, ghostwriters, or AI tools to generate replies on your behalf without clear disclosure.</li>
                <li>Keep your profile information accurate and up to date.</li>
                <li>Not solicit fans for payments outside of the innerr platform.</li>
                <li>Not request or accept personal information (financial details, passwords, government IDs) from fans via the messaging feature.</li>
                <li>Comply with all applicable laws in your jurisdiction regarding income, taxes, and content.</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                Host earnings are subject to a platform fee retained by innerr. The current fee rate is displayed in the host dashboard. Payouts are processed weekly and are subject to a minimum threshold. innerr reserves the right to withhold payouts pending investigation of policy violations.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Fan Obligations</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                As a fan, you agree to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mt-3">
                <li>Use innerr solely to communicate with hosts in a respectful manner.</li>
                <li>Not send messages that are harassing, abusive, threatening, sexually explicit, discriminatory, or otherwise in violation of these Terms.</li>
                <li>Not attempt to obtain a host&apos;s personal contact information through the platform.</li>
                <li>Not share or publish private replies from hosts without their explicit consent.</li>
                <li>Pay for messages honestly and not attempt to abuse the refund policy.</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Prohibited Content</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                The following content is strictly prohibited on innerr:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mt-3">
                <li>Any content that is sexually explicit involving minors (CSAM). This will result in immediate account termination and referral to law enforcement.</li>
                <li>Threats, harassment, intimidation, or hate speech targeting any individual or group.</li>
                <li>Spam, phishing, or unsolicited commercial messages.</li>
                <li>Content that violates the intellectual property rights of third parties.</li>
                <li>False identity claims — impersonating another person or entity.</li>
                <li>Content that promotes or facilitates illegal activity.</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Account Termination</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                innerr may suspend or permanently terminate your account at any time, with or without notice, if we determine in our sole discretion that you have violated these Terms or engaged in conduct harmful to other users, hosts, or innerr itself. Upon termination:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mt-3">
                <li>Fan accounts: unused tokens may be refunded at innerr&apos;s discretion. Tokens are not refunded in cases of termination for policy violations.</li>
                <li>Host accounts: outstanding earned but unpaid balances will be reviewed. Balances may be forfeited if termination results from policy violations.</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                You may delete your account at any time by contacting support@innerr.com or using the account deletion feature in the app.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">9. Intellectual Property</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                The innerr name, logo, and platform are owned by us. You retain ownership of content you create on the platform. By submitting content (profile information, messages), you grant innerr a non-exclusive, royalty-free licence to store, display, and use that content solely to operate the Service.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">10. Disclaimer of Warranties</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or free of viruses. We are not responsible for the content of messages sent by users or hosts.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">11. Limitation of Liability</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                To the fullest extent permitted by law, innerr&apos;s total liability to you for any claims arising from your use of the Service shall not exceed the greater of (a) the amount you paid to innerr in the 12 months preceding the claim, or (b) $100 USD. We shall not be liable for any indirect, incidental, special, or consequential damages.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">12. Changes to These Terms</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We may update these Terms from time to time. Material changes will be communicated via email or in-app notification at least 14 days before they take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">13. Governing Law</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                These Terms are governed by the laws of the jurisdiction in which innerr is incorporated. Any disputes shall be resolved through good-faith negotiation, and if unsuccessful, through binding arbitration or the courts of that jurisdiction.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">14. Contact</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Questions about these Terms should be directed to:
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-3 text-sm text-gray-600">
                <div className="font-semibold text-gray-900 mb-1">innerr Legal</div>
                <div>Email: <a href="mailto:support@innerr.com" className="underline" style={{ color: "#0095f6" }}>support@innerr.com</a></div>
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
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} innerr</div>
        </div>
      </footer>
    </>
  );
}
