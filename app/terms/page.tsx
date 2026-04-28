import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — innerr",
  description: "innerr Terms of Service — the rules governing your use of the platform.",
};

const sections = [
  { id: "about",             n: "1",  title: "About innerr" },
  { id: "acceptance",        n: "2",  title: "Acceptance of Terms" },
  { id: "eligibility",       n: "3",  title: "Eligibility" },
  { id: "age-verification",  n: "4",  title: "Age Verification" },
  { id: "registration",      n: "5",  title: "Registration Refusal" },
  { id: "accounts",          n: "6",  title: "Accounts" },
  { id: "account-security",  n: "7",  title: "Account Security" },
  { id: "tokens",            n: "8",  title: "Token System" },
  { id: "messaging",         n: "9",  title: "Messaging and 72-Hour Refund Policy" },
  { id: "hosts",             n: "10", title: "Host Terms" },
  { id: "prohibited",        n: "11", title: "Prohibited Conduct" },
  { id: "content",           n: "12", title: "Content" },
  { id: "content-licence",   n: "13", title: "Content Licence" },
  { id: "content-removal",   n: "14", title: "Content Removal Requests" },
  { id: "complaints",        n: "15", title: "Complaints Policy" },
  { id: "feedback",          n: "16", title: "Feedback & Suggestions" },
  { id: "payments",          n: "17", title: "Payments and Billing" },
  { id: "ip",                n: "18", title: "Intellectual Property" },
  { id: "privacy",           n: "19", title: "Privacy" },
  { id: "warranties",        n: "20", title: "Disclaimer of Warranties" },
  { id: "liability",         n: "21", title: "Limitation of Liability" },
  { id: "indemnification",   n: "22", title: "Indemnification" },
  { id: "disputes",          n: "23", title: "Dispute Resolution" },
  { id: "class-action",      n: "24", title: "Class Action Waiver" },
  { id: "force-majeure",     n: "25", title: "Force Majeure" },
  { id: "assignment",        n: "26", title: "Assignment" },
  { id: "changes",           n: "27", title: "Changes to Terms" },
  { id: "termination",       n: "28", title: "Termination" },
  { id: "general",           n: "29", title: "General" },
  { id: "contact",           n: "30", title: "Contact" },
];

function H2({ id, n, children }: { id: string; n: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-xl font-bold mt-10 mb-3 scroll-mt-20"
      style={{ color: "#0095f6" }}
    >
      {n}. {children}
    </h2>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="text-gray-600 text-sm leading-relaxed">{children}</li>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-600 text-sm leading-relaxed">{children}</p>;
}

function Sub({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="text-gray-600 text-sm leading-relaxed mt-3">
      <span className="font-semibold text-gray-800">{n}</span> {children}
    </p>
  );
}

export default function Terms() {
  return (
    <>
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold italic" style={{ color: "#0095f6" }}>
            innerr
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
            <Link href="/help" className="hover:text-gray-900 transition-colors">Help</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <section className="pt-16 pb-12 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-400 text-sm">Last updated: April 2026</p>
          </div>
        </section>

        <article className="py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">

            {/* Important notice */}
            <div
              className="rounded-2xl border p-5 text-sm font-semibold leading-relaxed"
              style={{ backgroundColor: "#f0f7ff", borderColor: "#bfdbfe", color: "#1e40af" }}
            >
              IMPORTANT: PLEASE READ THESE TERMS CAREFULLY BEFORE USING INNERR. BY ACCESSING OR USING THE INNERR PLATFORM, YOU AGREE TO BE BOUND BY THESE TERMS.
            </div>

            {/* Table of contents */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-base font-bold text-gray-900 mb-4">Table of Contents</h2>
              <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: "#0095f6" }}
                    >
                      {s.n}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Main content */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10">

              <H2 id="about" n="1">About innerr</H2>
              <P>
                innerr is a fan-to-creator paid messaging platform operated by [Company Name] ABN [XX XXX XXX XXX], a company incorporated in Victoria, Australia (&ldquo;innerr&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). Our platform allows fans to pay tokens to send messages to creators and hosts, who earn tokens by replying.
              </P>

              <H2 id="acceptance" n="2">Acceptance of Terms</H2>
              <P>
                By creating an account, accessing, or using innerr, you confirm that you have read, understood, and agree to be bound by these Terms of Service and our{" "}
                <Link href="/privacy" className="underline" style={{ color: "#0095f6" }}>Privacy Policy</Link>.
                {" "}If you do not agree, do not use innerr.
              </P>

              <H2 id="eligibility" n="3">Eligibility</H2>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <Li>You must be at least <strong>18 years of age</strong> to use innerr.</Li>
                <Li>You must be a natural person (not a corporation) to create a fan account.</Li>
                <Li>You must have the legal capacity to enter into a binding contract.</Li>
                <Li>You must not be prohibited from using our services under any applicable law.</Li>
                <Li>By using innerr you represent and warrant that you meet all eligibility requirements.</Li>
              </ul>

              <H2 id="age-verification" n="4">Age Verification</H2>
              <Sub n="4.1 Minimum age:">You must be at least 18 years of age to create an account or use any part of the innerr platform. By registering, you confirm that you are 18 or older.</Sub>
              <Sub n="4.2 Verification on request:">innerr may require you to verify your age at any time. This may include providing a government-issued photo ID or completing a third-party age verification process. Failure to provide satisfactory verification may result in suspension or termination of your account.</Sub>
              <Sub n="4.3 No access by minors:">You must not allow any person under the age of 18 to access innerr through your account or device. If you become aware that a minor has accessed the platform using your account, you must notify us immediately via Help &amp; Support in the innerr app.</Sub>
              <Sub n="4.4 Misrepresentation:">Providing false information about your age to gain access to the platform is a material breach of these terms and may result in immediate account termination and, where applicable, referral to relevant authorities.</Sub>

              <H2 id="registration" n="5">Registration Refusal</H2>
              <P>
                innerr reserves the right to refuse registration to any person, at any time, for any reason, in our sole and absolute discretion. We are not obliged to provide reasons for any refusal. This right exists to protect the safety and integrity of the platform and its community.
              </P>

              <H2 id="accounts" n="6">Accounts</H2>
              <Sub n="6.1 Registration:">You must provide accurate, current and complete information when creating your account. You agree to update your information to keep it accurate.</Sub>
              <Sub n="6.2 Security:">You are responsible for maintaining the confidentiality of your password. You are responsible for all activity that occurs under your account.</Sub>
              <Sub n="6.3 One account:">You may only maintain one active account. Creating multiple accounts to circumvent bans or restrictions is prohibited.</Sub>
              <Sub n="6.4 Account suspension:">We reserve the right to suspend or terminate your account at any time for violation of these terms, without notice or liability.</Sub>

              <H2 id="account-security" n="7">Account Security</H2>
              <Sub n="7.1 Password confidentiality:">You are responsible for keeping your password and account credentials strictly confidential. You must not share your password with any other person or allow anyone else to access your account.</Sub>
              <Sub n="7.2 Notify us of compromise:">If you believe your account has been compromised, accessed without authorisation, or your password has been lost or stolen, you must notify us immediately via Help &amp; Support in the innerr app. We will take reasonable steps to help secure your account.</Sub>
              <Sub n="7.3 No account sharing:">Accounts are personal and non-transferable. Sharing account access with another person, whether for commercial purposes or otherwise, is strictly prohibited and may result in immediate account termination.</Sub>
              <Sub n="7.4 Your responsibility:">You are responsible for all activity that occurs under your account, including purchases, messages, and content posted. innerr is not liable for any loss or damage arising from your failure to keep your credentials secure.</Sub>

              <H2 id="tokens" n="8">Token System</H2>
              <Sub n="8.1 What tokens are:">Tokens are a virtual currency used within the innerr platform. Tokens have no cash value outside of innerr and cannot be exchanged for cash by fans.</Sub>
              <Sub n="8.2 Purchasing tokens:">Fans may purchase token packages through our website or authorised channels. All token purchases are processed by Stripe and subject to their terms.</Sub>
              <Sub n="8.3 Token packages:">Current token packages and prices are displayed on our website and may change at any time with notice.</Sub>
              <Sub n="8.4 No expiry:">Tokens do not expire while your account remains active.</Sub>
              <Sub n="8.5 Non-transferable:">Tokens cannot be transferred between accounts.</Sub>
              <Sub n="8.6 No refunds on tokens:">Token purchases are final and non-refundable except as required by Australian Consumer Law or as described in Section 9 (72-hour refund policy).</Sub>
              <Sub n="8.7 Account termination:">If your account is terminated for violating these terms, any remaining token balance will be forfeited without refund.</Sub>
              <Sub n="8.8 Australian Consumer Law:">Nothing in these terms limits your rights under the Australian Consumer Law.</Sub>

              <H2 id="messaging" n="9">Messaging and 72-Hour Refund Policy</H2>
              <Sub n="9.1 How messaging works:">Fans spend tokens to send a message to a host. The token cost is set by the host and displayed on their profile.</Sub>
              <Sub n="9.2 Reply guarantee:">Hosts have 72 hours from the time a message is received to reply.</Sub>
              <Sub n="9.3 Automatic refund:">If a host does not reply within 72 hours, the tokens spent on that message will be automatically refunded to the fan&apos;s token balance.</Sub>
              <Sub n="9.4 What constitutes a reply:">Any response sent by the host through the innerr platform within the 72-hour window constitutes a reply.</Sub>
              <Sub n="9.5 No guarantee of quality:">While we guarantee a reply or refund, we do not guarantee the quality, length, or content of any reply.</Sub>
              <Sub n="9.6 Broadcast messages:">Broadcast messages sent by hosts to multiple fans are not subject to the 72-hour refund policy.</Sub>

              <H2 id="hosts" n="10">Host Terms</H2>
              <Sub n="10.1 Becoming a host:">Any user may apply to become a host subject to our approval process.</Sub>
              <Sub n="10.2 Setting your price:">Hosts may set their own token price per message within limits set by innerr.</Sub>
              <Sub n="10.3 Reply obligations:">Hosts agree to make reasonable efforts to reply to fan messages within 72 hours. Consistently failing to reply may result in account suspension.</Sub>
              <Sub n="10.4 Earnings:">Hosts earn tokens when they reply to fan messages. Token earnings are credited to the host&apos;s account upon reply.</Sub>
              <Sub n="10.5 Platform fee:">innerr deducts a platform fee of 20% from all host token earnings. The remaining 80% is credited to the host&apos;s account.</Sub>
              <Sub n="10.6 Cashout:">Hosts may request to cash out their token earnings at any time subject to minimum cashout amounts and verification requirements.</Sub>
              <Sub n="10.7 Payment processing:">Cashout payments are processed via Stripe. Processing times may vary.</Sub>
              <Sub n="10.8 Tax obligations:">Hosts are solely responsible for reporting and paying all applicable taxes on their earnings. innerr does not provide tax advice.</Sub>
              <Sub n="10.9 Verification:">Hosts may apply for official verification. Verification is at innerr&apos;s sole discretion.</Sub>
              <Sub n="10.10 Content standards:">Hosts must maintain professional conduct and comply with our content standards at all times.</Sub>

              <H2 id="prohibited" n="11">Prohibited Conduct</H2>
              <P>You must not use innerr to:</P>
              <ul className="list-disc pl-5 space-y-1.5 mt-3">
                <Li><strong>11.1</strong> Post, upload or share any content that is illegal, defamatory, harassing, threatening, abusive, hateful, discriminatory, or offensive.</Li>
                <Li><strong>11.2</strong> Upload or share nudity, sexually explicit content, or adult content.</Li>
                <Li><strong>11.3</strong> Share violent, graphic, or disturbing content.</Li>
                <Li><strong>11.4</strong> Impersonate any person or entity or misrepresent your affiliation.</Li>
                <Li><strong>11.5</strong> Spam, send unsolicited messages, or engage in mass messaging.</Li>
                <Li><strong>11.6</strong> Solicit personal contact information outside the platform.</Li>
                <Li><strong>11.7</strong> Engage in any form of fraud, deception, or manipulation.</Li>
                <Li><strong>11.8</strong> Attempt to circumvent our token system or payment processing.</Li>
                <Li><strong>11.9</strong> Use automated tools, bots, or scripts to interact with the platform.</Li>
                <Li><strong>11.10</strong> Attempt to hack, disrupt, or gain unauthorised access to our systems.</Li>
                <Li><strong>11.11</strong> Collect or harvest user data without permission.</Li>
                <Li><strong>11.12</strong> Violate any applicable law or regulation.</Li>
                <Li><strong>11.13</strong> Facilitate or encourage any of the above.</Li>
              </ul>

              <H2 id="content" n="12">Content</H2>
              <Sub n="12.1 Your content:">You retain ownership of content you post on innerr.</Sub>
              <Sub n="12.2 Our right to remove:">We reserve the right to remove any content that violates these terms or that we deem inappropriate, without notice or liability.</Sub>
              <Sub n="12.3 No endorsement:">We do not endorse any user content and are not responsible for the accuracy or legality of user content.</Sub>
              <Sub n="12.4 Reporting:">Users may report content that violates these terms using our in-app reporting tools.</Sub>

              <H2 id="content-licence" n="13">Content Licence</H2>
              <Sub n="13.1 Licence grant:">By posting, uploading, or otherwise making content available on innerr, you grant innerr a non-exclusive, irrevocable, royalty-free, worldwide licence to use, reproduce, display, distribute, adapt, and communicate that content for the purposes of operating, promoting, and improving the platform.</Sub>
              <Sub n="13.2 Scope:">This licence covers all formats and media now known or later developed, and includes the right to sub-licence to third-party service providers engaged by innerr to operate the platform.</Sub>
              <Sub n="13.3 Your warranties:">By posting content, you represent and warrant that you own or have the necessary rights to grant this licence, and that your content does not infringe the intellectual property or other rights of any third party.</Sub>
              <Sub n="13.4 Survival:">This licence survives the deletion of your content or account to the extent that copies have been made as part of platform operations, backups, or cached distributions, and only for as long as operationally necessary.</Sub>

              <H2 id="content-removal" n="14">Content Removal Requests</H2>
              <Sub n="14.1 Right to request removal:">Any person who is depicted in content posted on innerr without their consent may submit a removal request via Help &amp; Support in the innerr app. Requests must include sufficient detail to identify the content in question and the basis for the request.</Sub>
              <Sub n="14.2 Review process:">We will review all removal requests within 7 business days of receipt. Where we determine that content has been posted without the depicted person&apos;s consent and in breach of these terms, we will remove it promptly.</Sub>
              <Sub n="14.3 No guarantee of outcome:">Submitting a removal request does not guarantee removal. Our decision will be made in good faith having regard to the circumstances and applicable law.</Sub>
              <Sub n="14.4 False requests:">Submitting a removal request that you know to be false or misleading may result in account termination and may expose you to legal liability.</Sub>

              <H2 id="complaints" n="15">Complaints Policy</H2>
              <Sub n="15.1 How to report:">Users may report content or conduct that they believe breaches these terms using our in-app reporting tools or via Help &amp; Support in the innerr app.</Sub>
              <Sub n="15.2 Review timeframe:">We will review all complaints within 7 business days of receipt and will take such action as we consider appropriate in the circumstances.</Sub>
              <Sub n="15.3 Removal of breaching content:">Where we determine that reported content breaches these terms, we will remove it and may take further action against the responsible account, including suspension or termination.</Sub>
              <Sub n="15.4 Updates:">We will endeavour to notify you of the outcome of your complaint, though we are not obliged to provide detailed reasons for our decisions.</Sub>

              <H2 id="feedback" n="16">Feedback &amp; Suggestions</H2>
              <Sub n="16.1 Voluntary feedback:">We welcome feedback, ideas, and suggestions about innerr. You are not obliged to provide any feedback, and we are not obliged to act on any feedback you provide.</Sub>
              <Sub n="16.2 Ownership of feedback:">Any feedback, ideas, suggestions, or improvements you submit to innerr — whether in writing, verbally, or through any other means — become the sole and exclusive intellectual property of innerr. By submitting feedback you assign to innerr all rights, title, and interest in that feedback, including any intellectual property rights, with no obligation of confidentiality, attribution, or compensation to you.</Sub>
              <Sub n="16.3 No restriction:">innerr may use, incorporate, or commercialise any feedback in any way it sees fit, without restriction.</Sub>

              <H2 id="payments" n="17">Payments and Billing</H2>
              <Sub n="17.1 Payment processing:">All payments are processed by Stripe. By making a purchase you agree to Stripe&apos;s Terms of Service.</Sub>
              <Sub n="17.2 Currency:">All prices are displayed in Australian Dollars (AUD) unless otherwise stated.</Sub>
              <Sub n="17.3 Chargebacks:">Initiating a fraudulent chargeback may result in immediate account termination and recovery of amounts owed.</Sub>
              <Sub n="17.4 GST:">Prices may be inclusive of GST where applicable under Australian law.</Sub>

              <H2 id="ip" n="18">Intellectual Property</H2>
              <Sub n="18.1 Our IP:">The innerr platform, including its design, code, trademarks, and content created by us, is owned by innerr and protected by Australian and international intellectual property laws.</Sub>
              <Sub n="18.2 Limited licence:">We grant you a limited, non-exclusive, non-transferable licence to use the innerr platform for personal, non-commercial purposes.</Sub>
              <Sub n="18.3 Restrictions:">You may not copy, modify, distribute, sell, or lease any part of our platform without our written permission.</Sub>

              <H2 id="privacy" n="19">Privacy</H2>
              <P>
                Your use of innerr is subject to our{" "}
                <Link href="/privacy" className="underline" style={{ color: "#0095f6" }}>Privacy Policy</Link>,
                {" "}which is incorporated into these terms by reference. Our Privacy Policy describes how we collect, use, and protect your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles.
              </P>

              <H2 id="warranties" n="20">Disclaimer of Warranties</H2>
              <Sub n="20.1">The innerr platform is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied.</Sub>
              <Sub n="20.2">We do not warrant that the platform will be uninterrupted, error-free, or free of viruses or other harmful components.</Sub>
              <Sub n="20.3">We do not warrant that any content on the platform is accurate, complete, or reliable.</Sub>
              <Sub n="20.4">Nothing in this clause limits your rights under the Australian Consumer Law.</Sub>

              <H2 id="liability" n="21">Limitation of Liability</H2>
              <Sub n="21.1">To the maximum extent permitted by law, innerr&apos;s total liability to you for any claim arising out of or in connection with these terms or your use of the platform shall not exceed the total amount of tokens you have purchased in the 12 months preceding the claim.</Sub>
              <Sub n="21.2">We are not liable for any indirect, incidental, special, consequential, or punitive damages.</Sub>
              <Sub n="21.3">We are not liable for any loss of profits, revenue, data, or goodwill.</Sub>
              <Sub n="21.4">Nothing in these terms limits liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded under Australian Consumer Law.</Sub>

              <H2 id="indemnification" n="22">Indemnification</H2>
              <P>
                You agree to indemnify, defend, and hold harmless innerr and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising out of or in connection with your use of the platform, your content, or your violation of these terms.
              </P>

              <H2 id="disputes" n="23">Dispute Resolution</H2>
              <Sub n="23.1 Good faith negotiation:">In the event of a dispute arising out of or in connection with these terms or your use of innerr, the parties agree to first attempt to resolve the dispute in good faith through direct negotiation. A party must notify the other of the dispute in writing, and the parties must use reasonable endeavours to resolve it within 14 days of that notice (or such longer period as the parties may agree).</Sub>
              <Sub n="23.2 Arbitration:">If the dispute is not resolved within the 14-day negotiation period, either party may refer the dispute to binding arbitration administered by the Resolution Institute under its Arbitration Rules. The arbitration will be conducted by a single arbitrator agreed by the parties or, failing agreement, appointed by the Resolution Institute. The arbitration will be conducted in Melbourne, Victoria.</Sub>
              <Sub n="23.3 Governing law:">These terms are governed by the laws of Victoria, Australia.</Sub>
              <Sub n="23.4 Jurisdiction:">Subject to the arbitration clause above, the parties submit to the non-exclusive jurisdiction of the courts of Victoria, Australia.</Sub>
              <Sub n="23.5 Consumer complaints:">Nothing in this clause affects your rights to make a complaint to Consumer Affairs Victoria or the Australian Competition and Consumer Commission (ACCC).</Sub>

              <H2 id="class-action" n="24">Class Action Waiver</H2>
              <P>
                To the maximum extent permitted by law, you agree that any dispute, claim, or controversy arising out of or in connection with these terms or your use of innerr must be brought solely in your individual capacity. You may not bring or participate in any claim as a plaintiff, class member, or representative in any class action, consolidated action, representative action, or private attorney-general proceeding. The arbitrator appointed under Section 23 may not consolidate or join the claims of more than one person and may not preside over any form of class or representative proceeding.
              </P>

              <H2 id="force-majeure" n="25">Force Majeure</H2>
              <P>
                innerr is not liable for any failure or delay in performance of its obligations under these terms where such failure or delay results from circumstances beyond our reasonable control. This includes, without limitation, acts of God, natural disasters (including floods, earthquakes, and bushfires), war, terrorism, riots, civil unrest, government actions or regulations, internet or telecommunications outages or failures, power failures, pandemics or public health emergencies, and failures or delays caused by third-party service providers (including payment processors, cloud infrastructure providers, and app distribution platforms). Where a force majeure event occurs, we will endeavour to resume normal operations as soon as reasonably practicable.
              </P>

              <H2 id="assignment" n="26">Assignment</H2>
              <Sub n="26.1 Assignment by innerr:">innerr may assign, transfer, or novate these terms, or any of our rights or obligations under them, to a related entity or to a purchaser or successor in the context of a merger, acquisition, sale of assets, or corporate restructure, without your consent. We will notify you of any such assignment where reasonably practicable.</Sub>
              <Sub n="26.2 No assignment by you:">You may not assign, transfer, or sub-licence any of your rights or obligations under these terms without our prior written consent.</Sub>
              <Sub n="26.3 Binding effect:">These terms bind and benefit the parties and their respective permitted successors and assigns.</Sub>

              <H2 id="changes" n="27">Changes to Terms</H2>
              <Sub n="27.1">We may update these terms at any time. We will notify you of material changes by email or in-app notification.</Sub>
              <Sub n="27.2">Your continued use of innerr after changes take effect constitutes acceptance of the updated terms.</Sub>
              <Sub n="27.3">If you do not agree to the updated terms, you must stop using innerr and delete your account.</Sub>

              <H2 id="termination" n="28">Termination</H2>
              <Sub n="28.1">You may terminate your account at any time by using the delete account feature in the app.</Sub>
              <Sub n="28.2">We may terminate or suspend your account immediately without notice if you violate these terms.</Sub>
              <Sub n="28.3">Upon termination, your right to use innerr ceases immediately. Content may be retained as required by law.</Sub>

              <H2 id="general" n="29">General</H2>
              <Sub n="29.1 Entire agreement:">These terms constitute the entire agreement between you and innerr regarding your use of the platform.</Sub>
              <Sub n="29.2 Severability:">If any provision of these terms is found to be unenforceable, the remaining provisions continue in full force.</Sub>
              <Sub n="29.3 No waiver:">Our failure to enforce any provision of these terms does not constitute a waiver of our right to enforce it in the future.</Sub>

              <H2 id="contact" n="30">Contact</H2>
              <P>For questions about these terms, please contact us:</P>
              <div className="bg-gray-50 rounded-xl p-4 mt-3 text-sm text-gray-600">
                <div className="font-semibold text-gray-900 mb-1">innerr Legal</div>
                <div>Open the innerr app and tap Help &amp; Support from the menu.</div>
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
            <Link href="/terms"   className="hover:text-white transition-colors">Terms</Link>
            <Link href="/help"    className="hover:text-white transition-colors">Help</Link>
            <Link href="/for-hosts" className="hover:text-white transition-colors">For Hosts</Link>
          </nav>
          <div className="text-sm text-gray-500 text-center">© 2026 innerr. All rights reserved. · Melbourne, Australia</div>
        </div>
      </footer>
    </>
  );
}
