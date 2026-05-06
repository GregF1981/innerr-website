"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Brand helpers ─────────────────────────────────────────────────────── */

function Dropd() {
  return (
    <span className="font-bold italic" style={{ color: "#0095f6" }}>
      dropd
    </span>
  );
}

function Label({ children }: { children: string }) {
  return (
    <p
      className="text-xs font-semibold tracking-[0.2em] uppercase mb-8"
      style={{ color: "#0095f6" }}
    >
      {children}
    </p>
  );
}

/* ── Animated phone mockup ─────────────────────────────────────────────── */

function FanMsg({ children, timestamp, animate = false }: { children: React.ReactNode; timestamp: string; animate?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "3px",
        animation: animate ? "msg-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards" : undefined,
      }}
    >
      <div
        style={{
          backgroundColor: "#0095f6",
          borderRadius: "18px 18px 4px 18px",
          padding: "8px 12px",
          fontSize: "12px",
          color: "#fff",
          maxWidth: "80%",
          lineHeight: "1.45",
        }}
      >
        {children}
      </div>
      <span style={{ fontSize: "10px", color: "#bbb", paddingRight: "4px" }}>{timestamp}</span>
    </div>
  );
}

function HostMsg({ children, timestamp, animate = false }: { children: React.ReactNode; timestamp: string; animate?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "3px",
        animation: animate ? "msg-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards" : undefined,
      }}
    >
      <div
        style={{
          backgroundColor: "#ebebeb",
          borderRadius: "18px 18px 18px 4px",
          padding: "8px 12px",
          fontSize: "12px",
          color: "#111",
          maxWidth: "80%",
          lineHeight: "1.45",
        }}
      >
        {children}
      </div>
      <span style={{ fontSize: "10px", color: "#bbb", paddingLeft: "4px" }}>{timestamp}</span>
    </div>
  );
}

function PhoneMockup() {
  const [step, setStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [step]);

  useEffect(() => {
    const ids: ReturnType<typeof setTimeout>[] = [];
    function schedule(fn: () => void, delay: number) {
      ids.push(setTimeout(fn, delay));
    }
    function run() {
      setStep(0);
      schedule(() => setStep(1), 800);   // fan message appears
      schedule(() => setStep(2), 1800);  // typing indicator
      schedule(() => setStep(3), 3800);  // host reply
      schedule(() => setStep(4), 4500);  // badge
      schedule(run, 6500);               // loop
    }
    run();
    return () => ids.forEach(clearTimeout);
  }, []);

  return (
    <div className="phone-wrapper" style={{ position: "relative" }}>
      {/* Notification badge — step >= 4 */}
      {step >= 4 && (
        <div
          style={{
            position: "absolute",
            top: "-14px",
            right: "-14px",
            zIndex: 10,
            backgroundColor: "#22c55e",
            color: "#fff",
            fontSize: "11px",
            fontWeight: "700",
            borderRadius: "999px",
            padding: "4px 10px",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 16px rgba(34,197,94,0.45)",
            animation: "badge-in 0.35s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          ✓ Reply received!
        </div>
      )}

      {/* Phone shell */}
      <div
        style={{
          width: "265px",
          height: "620px",
          borderRadius: "42px",
          background: "linear-gradient(160deg, #1c1c1e 0%, #111 100%)",
          border: "2px solid rgba(255,255,255,0.10)",
          overflow: "hidden",
          boxShadow:
            "0 48px 96px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)",
          position: "relative",
        }}
      >
        {/* Notch */}
        <div style={{ height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "72px", height: "7px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.12)" }} />
        </div>

        {/* Screen */}
        <div
          style={{
            backgroundColor: "#f7f7f7",
            height: "calc(100% - 32px)",
            borderRadius: "0 0 40px 40px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Token cost strip */}
          <div
            style={{
              backgroundColor: "#fffbea",
              borderBottom: "1px solid #f3e8c0",
              padding: "5px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <span style={{ fontSize: "10px", color: "#92710a", fontWeight: "600" }}>🪙 20 tokens to reply</span>
          </div>

          {/* Chat header */}
          <div
            style={{
              padding: "9px 14px",
              backgroundColor: "#fff",
              borderBottom: "1px solid #eee",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0095f6, #00d4ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "12px",
                fontWeight: "700",
                flexShrink: 0,
              }}
            >
              HT
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "13px", fontWeight: "700", color: "#111" }}>hosttest</div>
              <div style={{ fontSize: "10px", color: "#22c55e", fontWeight: "600" }}>● Online now</div>
            </div>
          </div>

          {/* Messages — scrollable */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              padding: "14px 12px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            {/* Static thread */}
            <FanMsg timestamp="5 mins ago">I&apos;ve been following you for 3 years 🙏</FanMsg>
            <HostMsg timestamp="4 mins ago">That means so much, thank you!</HostMsg>
            <FanMsg timestamp="3 mins ago">Your last video changed how I think about everything</FanMsg>
            <HostMsg timestamp="2 mins ago">Which part resonated most with you?</HostMsg>

            {/* Animated: fan message */}
            {step >= 1 && (
              <FanMsg timestamp="Just now" animate>
                The part about taking risks. I just quit my job because of it 😅
              </FanMsg>
            )}

            {/* Typing indicator */}
            {step === 2 && (
              <div
                style={{
                  display: "flex",
                  animation: "msg-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ebebeb",
                    borderRadius: "18px 18px 18px 4px",
                    padding: "10px 14px",
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#aaa",
                        display: "inline-block",
                        animation: `dot-bounce 0.8s ${delay}ms ease-in-out infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Animated: host reply */}
            {step >= 3 && (
              <HostMsg timestamp="Just now" animate>
                That&apos;s incredible. You&apos;ve got this! 💙
              </HostMsg>
            )}
          </div>

          {/* Input bar */}
          <div
            style={{
              padding: "10px 12px",
              backgroundColor: "#fff",
              borderTop: "1px solid #eee",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: "#f2f2f2",
                borderRadius: "20px",
                padding: "7px 12px",
                fontSize: "11px",
                color: "#bbb",
              }}
            >
              Send a message…
            </div>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: "#0095f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "13px",
                flexShrink: 0,
              }}
            >
              ↑
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Count-up stat ─────────────────────────────────────────────────────── */

function CountUp({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);

  /* ── Scroll-reveal: pure inline-style approach ── */
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".fade-up");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    elements.forEach((el) => {
      const delay = el.dataset.delay ? `${el.dataset.delay}ms` : "0ms";
      // Set initial hidden state and bake the stagger delay into the transition
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── Nav background on scroll ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const isScrolled = scrollTop > 50;
      console.log('scrolled:', isScrolled, 'scrollTop:', scrollTop);
      setNavScrolled(isScrolled);
    };
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav
        id="site-nav"
        className="fixed top-0 inset-x-0 z-50"
        style={{
          backgroundColor: navScrolled ? '#ffffff' : 'transparent',
          boxShadow: navScrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
          transition: 'background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <img
              src={navScrolled ? '/logo.png' : '/logo.png'}
              alt="dropd"
              style={{
                height: '29px',
                width: 'auto',
                filter: navScrolled ? 'none' : 'brightness(0) invert(1)',
                transition: 'filter 0.4s ease-in-out',
              }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["#how-it-works", "#for-hosts"].map((href, i) => (
              <a
                key={href}
                href={href}
                className="hover:opacity-70"
                style={{ color: navScrolled ? "#444" : "rgba(255,255,255,0.88)", transition: 'color 0.4s ease-in-out' }}
              >
                {["How it Works", "For Hosts"][i]}
              </a>
            ))}
            <Link
              href="/buy-tokens"
              className="transition-colors duration-300 hover:opacity-70"
              style={{ color: navScrolled ? "#444" : "rgba(255,255,255,0.88)" }}
            >
              Get Tokens
            </Link>
            <Link
              href="/help"
              className="transition-colors duration-300 hover:opacity-70"
              style={{ color: navScrolled ? "#444" : "rgba(255,255,255,0.88)" }}
            >
              Help
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="hidden sm:inline-flex px-5 py-2 rounded-full text-sm font-semibold border-2 hover:scale-[1.04]"
              style={{
                borderColor: navScrolled ? "#0095f6" : "rgba(255,255,255,0.70)",
                color: navScrolled ? "#0095f6" : "#fff",
                transition: 'color 0.4s ease-in-out, border-color 0.4s ease-in-out, transform 0.2s ease',
              }}
            >
              Download App
            </a>
            <a
              href="#for-hosts"
              className="inline-flex px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.04]"
              style={{ backgroundColor: "#0095f6", boxShadow: "0 2px 16px rgba(0,149,246,0.3)" }}
            >
              Start Earning
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0047AB, #0095f6, #7C3AED, #0095f6, #0047AB)',
            backgroundSize: '300% 300%',
            animation: 'hero-gradient 8s ease infinite',
          }}
        >
          {/* Subtle dark overlay for text readability */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: "rgba(0,0,0,0.18)" }}
          />

          {/* Floating blobs */}
          {[
            { w: 380, h: 380, top: "-8%",  left: "-6%",  color: "rgba(255,255,255,0.09)", anim: "blob-drift-1", dur: "20s", delay: "0s"  },
            { w: 220, h: 220, top: "8%",   right: "4%",  color: "rgba(147,197,253,0.11)", anim: "blob-drift-2", dur: "17s", delay: "2s"  },
            { w: 140, h: 140, top: "52%",  left: "6%",   color: "rgba(255,255,255,0.08)", anim: "blob-drift-3", dur: "15s", delay: "4s"  },
            { w: 310, h: 310, bottom: "4%", right: "-4%", color: "rgba(147,197,253,0.10)", anim: "blob-drift-1", dur: "23s", delay: "1s"  },
            { w: 180, h: 180, bottom: "14%",left: "14%",  color: "rgba(255,255,255,0.09)", anim: "blob-drift-2", dur: "18s", delay: "6s"  },
            { w: 110, h: 110, top: "38%",  right: "18%", color: "rgba(255,255,255,0.08)", anim: "blob-drift-3", dur: "25s", delay: "3s"  },
            { w: 260, h: 260, top: "22%",  left: "28%",  color: "rgba(147,197,253,0.09)", anim: "blob-drift-1", dur: "19s", delay: "8s"  },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute pointer-events-none"
              style={{
                width: b.w,
                height: b.h,
                top: b.top,
                left: (b as { left?: string }).left,
                right: (b as { right?: string }).right,
                bottom: (b as { bottom?: string }).bottom,
                borderRadius: "50%",
                backgroundColor: b.color,
                filter: "blur(56px)",
                animation: `${b.anim} ${b.dur} ease-in-out ${b.delay} infinite`,
              }}
            />
          ))}

          {/* Two-column layout */}
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left — text */}
              <div className="text-center lg:text-left">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
                  style={{
                    backgroundColor: "rgba(0,149,246,0.30)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className="absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: "#22c55e", animation: "live-ping 1.2s cubic-bezier(0,0,0.2,1) infinite" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ backgroundColor: "#22c55e" }}
                    />
                  </span>
                  The fan messaging app
                </div>

                <h1
                  className="font-extrabold tracking-tight text-white leading-[1.04] mb-6"
                  style={{ fontSize: "clamp(44px, 7vw, 82px)" }}
                >
                  Your message.
                  <br />
                  Actually read.
                </h1>

                <p
                  className="font-medium mb-12"
                  style={{
                    fontSize: "clamp(17px, 2.2vw, 22px)",
                    color: "rgba(255,255,255,0.82)",
                  }}
                >
                  No more being ignored.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-200 hover:scale-[1.05] active:scale-[0.98]"
                    style={{
                      fontSize: "16px",
                      backgroundColor: "#0095f6",
                      boxShadow: "0 6px 28px rgba(0,149,246,0.55)",
                    }}
                  >
                    Download App
                  </a>
                  <a
                    href="#for-hosts"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 transition-all duration-200 hover:scale-[1.05] hover:bg-white/10 active:scale-[0.98]"
                    style={{
                      fontSize: "16px",
                      borderColor: "rgba(255,255,255,0.65)",
                      color: "#fff",
                    }}
                  >
                    Start Earning
                  </a>
                </div>
              </div>

              {/* Right — animated phone */}
              <div className="flex justify-center lg:justify-end">
                <PhoneMockup />
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50 select-none">
            <div className="w-5 h-8 rounded-full border-2 border-white flex items-start justify-center pt-1.5">
              <div
                className="w-1 h-2 rounded-full bg-white"
                style={{ animation: "scroll-dot 2s ease-in-out infinite" }}
              />
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <div style={{ backgroundColor: "#0a0a1a" }}>
          <div className="max-w-4xl mx-auto px-6 py-14">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { target: 10000, suffix: "+", label: "fans connected" },
                { target: 98,    suffix: "%", label: "satisfaction rate" },
                { target: 6,     suffix: "hr", label: "avg. reply time" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-extrabold text-white"
                    style={{ fontSize: "clamp(28px, 5vw, 44px)", letterSpacing: "-0.02em" }}
                  >
                    <CountUp target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.40)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FOR FANS — STAT + PHONE MOCKUP ── */}
        <section className="py-36 sm:py-48 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

              {/* Text side */}
              <div className="flex-1 text-center lg:text-left fade-up">
                <Label>For Fans</Label>
                <h2
                  className="font-bold text-[#111] mb-5"
                  style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
                >
                  A Direct Line.
                </h2>
                <p className="text-lg text-[#888] max-w-sm mx-auto lg:mx-0 leading-relaxed">
                  Every message goes straight to your host. Reply guaranteed
                  within 72 hours — or your tokens back.
                </p>
              </div>

              {/* Confirmation phone mockup */}
              <div className="phone-wrapper flex-shrink-0 fade-up" data-delay="180" style={{ position: "relative" }}>
                {/* Phone shell */}
                <div
                  style={{
                    width: "260px",
                    height: "540px",
                    borderRadius: "42px",
                    background: "linear-gradient(160deg, #1c1c1e 0%, #111 100%)",
                    border: "2px solid rgba(255,255,255,0.10)",
                    overflow: "hidden",
                    boxShadow:
                      "0 48px 96px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Notch */}
                  <div style={{ height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "72px", height: "7px", borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.12)" }} />
                  </div>

                  {/* Screen */}
                  <div
                    style={{
                      backgroundColor: "#fff",
                      height: "calc(100% - 32px)",
                      borderRadius: "0 0 40px 40px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Status bar — top of screen */}
                    <div
                      style={{
                        padding: "10px 16px 8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "10px", color: "#aaa" }}>dropd</span>
                      <span style={{ fontSize: "10px", color: "#aaa" }}>9:41</span>
                    </div>

                    {/* Content area */}
                    <div style={{ flex: 1, padding: "6px 18px 18px", display: "flex", flexDirection: "column", gap: "14px" }}>

                      {/* Green checkmark + "Message Delivered" */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", paddingTop: "4px" }}>
                        <div
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            backgroundColor: "#dcfce7",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "24px",
                          }}
                        >
                          ✓
                        </div>
                        <div style={{ fontSize: "14px", fontWeight: "700", color: "#111", textAlign: "center" }}>
                          Message Delivered
                        </div>
                      </div>

                      {/* Fan's message bubble */}
                      <div
                        style={{
                          backgroundColor: "#0095f6",
                          borderRadius: "16px 16px 4px 16px",
                          padding: "12px 14px",
                          fontSize: "12px",
                          color: "#fff",
                          lineHeight: "1.5",
                        }}
                      >
                        Your music got me through the hardest year of my life. Thank you for everything. 🙏
                      </div>

                      {/* Token indicator */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          backgroundColor: "#f8f9ff",
                          border: "1px solid #e8eaf6",
                          alignSelf: "center",
                        }}
                      >
                        <span style={{ fontSize: "11px" }}>🪙</span>
                        <span style={{ fontSize: "11px", fontWeight: "600", color: "#555" }}>20 tokens sent</span>
                      </div>

                      {/* 72hr countdown */}
                      <div
                        style={{
                          borderRadius: "14px",
                          backgroundColor: "#f8f9ff",
                          border: "1px solid #eef0f8",
                          padding: "12px 14px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <div style={{ fontSize: "11px", fontWeight: "600", color: "#555", display: "flex", alignItems: "center", gap: "5px" }}>
                          <span>⏱</span> Host has 72 hours to reply
                        </div>
                        {/* Progress bar */}
                        <div style={{ height: "4px", borderRadius: "2px", backgroundColor: "#e5e7eb", overflow: "hidden" }}>
                          <div
                            style={{
                              height: "100%",
                              width: "4%",
                              borderRadius: "2px",
                              backgroundColor: "#0095f6",
                            }}
                          />
                        </div>
                        <div style={{ fontSize: "10px", color: "#bbb" }}>71h 58m remaining</div>
                      </div>

                      {/* Refund guarantee banner */}
                      <div
                        style={{
                          borderRadius: "14px",
                          backgroundColor: "#f0fdf4",
                          border: "1px solid #bbf7d0",
                          padding: "10px 14px",
                          fontSize: "11px",
                          color: "#15803d",
                          fontWeight: "500",
                          lineHeight: "1.45",
                          textAlign: "center",
                        }}
                      >
                        💚 If they don&apos;t reply, your tokens come straight back
                      </div>

                      {/* Footer timestamp */}
                      <div style={{ textAlign: "center", fontSize: "10px", color: "#ccc", marginTop: "auto" }}>
                        Message delivered · Just now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section
          id="how-it-works"
          className="py-36 sm:py-48"
          style={{ backgroundColor: "#f8f9ff" }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20 fade-up">
              <Label>How it Works</Label>
              <h2
                className="font-bold text-[#111]"
                style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
              >
                Three steps.
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  n: "01",
                  title: "Find your host.",
                  body: "Browse creators, influencers and celebrities who have joined dropd.",
                },
                {
                  n: "02",
                  title: "Send a message.",
                  body: "Use tokens to reach them directly. No algorithm buries your words.",
                },
                {
                  n: "03",
                  title: "Get a real reply.",
                  body: "Hosts have 72 hours to respond personally, or your tokens come back.",
                },
              ].map((step, i) => (
                <div
                  key={step.n}
                  className="fade-up transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  data-delay={`${i * 140}`}
                  style={{
                    borderRadius: "24px",
                    backgroundColor: "#fff",
                    padding: "40px 36px",
                  }}
                >
                  <div
                    className="font-extrabold mb-8 leading-none"
                    style={{ fontSize: "56px", color: "#0095f6", opacity: 0.18 }}
                  >
                    {step.n}
                  </div>
                  <h3 className="font-bold text-[#111] mb-3" style={{ fontSize: "22px" }}>
                    {step.title}
                  </h3>
                  <p className="text-[#888] leading-relaxed text-[15px]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-36 sm:py-48 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <Label>What fans say</Label>
              <h2
                className="font-bold text-[#111]"
                style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
              >
                Stories from our fans.
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "I sent a message not expecting anything. Got a voice note back within an hour. I actually cried.",
                  name: "Mia T.",
                  handle: "@mia_tunes",
                  avatar:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
                },
                {
                  quote:
                    "Asked for advice on my music career and got three paragraphs back. dropd is genuinely different.",
                  name: "Darius K.",
                  handle: "@dariusk",
                  avatar:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
                },
                {
                  quote:
                    "Tokens refunded instantly when the host didn't reply in time. No drama, no chasing. Just worked.",
                  name: "Sophie R.",
                  handle: "@sophiereads",
                  avatar:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
                },
              ].map((t, i) => (
                <div
                  key={t.name}
                  className="flex flex-col gap-5 fade-up transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  data-delay={`${i * 130}`}
                  style={{
                    borderRadius: "24px",
                    backgroundColor: "#f8f9ff",
                    padding: "32px 28px",
                  }}
                >
                  <p className="text-[#333] leading-relaxed text-[15px] flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover flex-shrink-0"
                      style={{ width: "48px", height: "48px" }}
                    />
                    <div>
                      <div className="text-sm font-bold text-[#111]">{t.name}</div>
                      <div className="text-xs text-[#aaa]">{t.handle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARQUEE STRIP ── */}
        <div
          style={{
            backgroundColor: "#0a0a1a",
            overflow: "hidden",
            padding: "18px 0",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ display: "flex" }}>
            {[0, 1].map((copy) => (
              <div key={copy} className="marquee-track">
                {[
                  { emoji: "😭", text: "Just got a reply from my favourite creator" },
                  { emoji: "⚡", text: "They actually replied within an hour!" },
                  { emoji: "🙌", text: "Best app ever, worth every token" },
                  { emoji: "💙", text: "I cried when they replied honestly" },
                  { emoji: "🔥", text: "My idol gave me actual life advice" },
                  { emoji: "✨", text: "Never thought this was possible" },
                  { emoji: "💫", text: "Screenshot worthy moment" },
                  { emoji: "🎉", text: "Best $10 I ever spent" },
                ].map((item, j) => (
                  <span
                    key={j}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      whiteSpace: "nowrap",
                      padding: "0 24px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#fff",
                    }}
                  >
                    <span>{item.emoji}</span>
                    <span>{item.text}</span>
                    <span style={{ color: "#0095f6", fontSize: "5px", marginLeft: "8px" }}>●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── FOR HOSTS ── */}
        <section
          id="for-hosts"
          className="py-36 sm:py-48"
          style={{ backgroundColor: "#f8f9ff" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

              {/* Earnings card visual */}
              <div className="flex-shrink-0 relative fade-up">
                <div
                  style={{
                    width: "300px",
                    borderRadius: "28px",
                    backgroundColor: "#fff",
                    padding: "32px",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.10)",
                  }}
                >
                  <div className="text-xs font-semibold text-[#aaa] uppercase tracking-widest mb-5">
                    This week&apos;s earnings
                  </div>
                  <div
                    className="font-extrabold text-[#111] mb-1"
                    style={{ fontSize: "52px", letterSpacing: "-0.02em" }}
                  >
                    $248
                  </div>
                  <div className="text-sm text-[#aaa] mb-8">from 31 replies</div>

                  {/* Mini bar chart */}
                  <div className="flex items-end gap-1.5 mb-6" style={{ height: "56px" }}>
                    {[40, 65, 45, 80, 55, 90, 100].map((h, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          backgroundColor: idx === 6 ? "#0095f6" : "#e8f4fe",
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-[#bbb]">Mon — Sun</div>

                  <div
                    style={{
                      marginTop: "24px",
                      padding: "14px 16px",
                      borderRadius: "16px",
                      backgroundColor: "#f0faff",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>🪙</span>
                    <div>
                      <div className="text-sm font-bold text-[#111]">2,450 tokens earned</div>
                      <div className="text-xs text-[#aaa]">this week</div>
                    </div>
                  </div>
                </div>

                {/* Floating payout badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "-18px",
                    right: "-24px",
                    backgroundColor: "#0095f6",
                    borderRadius: "14px",
                    padding: "10px 16px",
                    boxShadow: "0 8px 24px rgba(0,149,246,0.35)",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                  }}
                >
                  💸 Payout Friday
                </div>
              </div>

              {/* Text side */}
              <div
                className="flex-1 text-center lg:text-left fade-up"
                data-delay="180"
              >
                <Label>For Hosts</Label>
                <h2
                  className="font-bold text-[#111] mb-6"
                  style={{ fontSize: "clamp(40px, 6vw, 68px)" }}
                >
                  Reply and earn.
                </h2>
                <p className="text-lg text-[#888] leading-relaxed mb-12">
                  Set your price. Reply on your own schedule.
                  <br />
                  Cash out anytime. Your earnings, on your schedule.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                  {[
                    { value: "$1.2k", label: "avg. / month" },
                    { value: "6hrs", label: "avg. reply time" },
                    { value: "98%", label: "satisfaction" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div
                        className="font-extrabold text-[#111]"
                        style={{ fontSize: "28px" }}
                      >
                        {s.value}
                      </div>
                      <div className="text-xs text-[#aaa] font-medium uppercase tracking-wider mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-white transition-all duration-200 hover:scale-[1.05]"
                    style={{
                      fontSize: "16px",
                      backgroundColor: "#0095f6",
                      boxShadow: "0 6px 28px rgba(0,149,246,0.28)",
                    }}
                  >
                    Start earning →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOKEN PACKAGES ── */}
        <section className="py-36 sm:py-48 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20 fade-up">
              <Label>Tokens</Label>
              <h2
                className="font-bold text-[#111] mb-4"
                style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
              >
                Pick your pack.
              </h2>
              <p className="text-lg text-[#888]">Safe until you use them.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { label: "Starter",    tokens: 50,  price: 10,  benefit: "Perfect for getting started",  popular: false },
                { label: "Popular",    tokens: 105, price: 20,  benefit: "Most popular choice",           popular: true  },
                { label: "Best Value", tokens: 270, price: 50,  benefit: "Best value for fans",           popular: false },
                { label: "Elite",      tokens: 550, price: 100, benefit: "For the ultimate fan",          popular: false },
              ].map((pkg, i) => (
                <div
                  key={pkg.label}
                  className="relative flex flex-col fade-up"
                  data-delay={`${i * 100}`}
                  style={{
                    borderRadius: "16px",
                    backgroundColor: pkg.popular ? "#0095f6" : "#fff",
                    border: pkg.popular ? "none" : "1px solid #e5e7eb",
                    padding: "36px 28px 28px",
                    boxShadow: pkg.popular
                      ? "0 20px 56px rgba(0,149,246,0.28)"
                      : "0 2px 12px rgba(0,0,0,0.04)",
                    transform: pkg.popular ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    zIndex: pkg.popular ? 1 : 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = pkg.popular ? "scale(1.08) translateY(-4px)" : "translateY(-4px)";
                    el.style.boxShadow = pkg.popular
                      ? "0 28px 64px rgba(0,149,246,0.38)"
                      : "0 12px 40px rgba(0,0,0,0.10)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = pkg.popular ? "scale(1.05)" : "scale(1)";
                    el.style.boxShadow = pkg.popular
                      ? "0 20px 56px rgba(0,149,246,0.28)"
                      : "0 2px 12px rgba(0,0,0,0.04)";
                  }}
                >
                  {pkg.popular && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold whitespace-nowrap"
                      style={{ backgroundColor: "#fff", color: "#0095f6" }}
                    >
                      Most Popular
                    </div>
                  )}

                  {/* Token amount */}
                  <div
                    className="font-extrabold leading-none mb-1"
                    style={{
                      fontSize: "42px",
                      color: pkg.popular ? "#fff" : "#111",
                    }}
                  >
                    {pkg.tokens}
                  </div>
                  <div
                    className="text-sm font-semibold mb-5"
                    style={{ color: pkg.popular ? "rgba(255,255,255,0.70)" : "#aaa" }}
                  >
                    tokens
                  </div>

                  {/* Price */}
                  <div
                    className="font-extrabold mb-5"
                    style={{
                      fontSize: "32px",
                      color: pkg.popular ? "#fff" : "#111",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    ${pkg.price}
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      backgroundColor: pkg.popular ? "rgba(255,255,255,0.20)" : "#e5e7eb",
                      marginBottom: "16px",
                    }}
                  />

                  {/* Benefit */}
                  <p
                    className="text-sm flex-1 mb-7"
                    style={{ color: pkg.popular ? "rgba(255,255,255,0.75)" : "#999" }}
                  >
                    {pkg.benefit}
                  </p>

                  {/* CTA */}
                  <Link
                    href="/buy-tokens"
                    className="block text-center py-3 rounded-xl text-sm font-bold transition-colors duration-200"
                    style={
                      pkg.popular
                        ? { backgroundColor: "#fff", color: "#0095f6" }
                        : { backgroundColor: "#0095f6", color: "#fff", boxShadow: "0 4px 14px rgba(0,149,246,0.30)" }
                    }
                  >
                    Buy Now
                  </Link>

                  {/* Shimmer streak — popular card only */}
                  {pkg.popular && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "16px",
                        overflow: "hidden",
                        pointerEvents: "none",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
                          animation: "shimmer-slide 3s ease-in-out 1.5s infinite",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOWNLOAD ── */}
        <section
          id="download"
          className="py-20 sm:py-28"
          style={{ backgroundColor: "#f8f9ff" }}
        >
          <div className="max-w-xl mx-auto px-6 text-center fade-up">
            <Label>Get the App</Label>
            <h2
              className="font-bold text-[#111] mb-4"
              style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
            >
              Get <Dropd />.
            </h2>
            <p className="text-lg text-[#888] mb-14">Available on iOS and Android.</p>

            <div className="flex flex-wrap justify-center gap-4">
              {/* Apple App Store badge */}
              <a
                href="#"
                className="transition-all duration-200 hover:scale-[1.04] hover:-translate-y-1"
                aria-label="Download on the App Store"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="160"
                  height="53"
                  viewBox="0 0 160 53"
                  aria-hidden="true"
                >
                  <rect width="160" height="53" rx="8" fill="#111" />
                  <text x="80" y="18" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="sans-serif">Download on the</text>
                  <path d="M38 27.5c-.05-4.2 3.44-6.2 3.6-6.3-1.96-2.87-5.01-3.26-6.1-3.3-2.6-.26-5.08 1.53-6.4 1.53-1.33 0-3.38-1.5-5.56-1.46-2.86.04-5.5 1.66-6.97 4.2-2.98 5.16-.77 12.8 2.14 17 1.42 2.06 3.1 4.36 5.32 4.28 2.14-.09 2.95-1.38 5.54-1.38 2.59 0 3.34 1.38 5.62 1.33 2.3-.04 3.76-2.1 5.16-4.17 1.64-2.38 2.3-4.72 2.33-4.84-.05-.02-4.64-1.79-4.68-7.09z" fill="white" />
                  <path d="M33.83 15.4c1.15-1.42 1.94-3.37 1.72-5.34-1.66.07-3.72 1.12-4.92 2.51-1.06 1.23-2 3.24-1.75 5.14 1.85.14 3.74-.95 4.95-2.31z" fill="white" />
                  <text x="93" y="36" textAnchor="middle" fill="white" fontSize="20" fontWeight="600" fontFamily="sans-serif">App Store</text>
                </svg>
              </a>

              {/* Google Play badge */}
              <a
                href="#"
                className="transition-all duration-200 hover:scale-[1.04] hover:-translate-y-1"
                aria-label="Get it on Google Play"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="160"
                  height="53"
                  viewBox="0 0 160 53"
                  aria-hidden="true"
                >
                  <rect width="160" height="53" rx="8" fill="#111" />
                  <text x="80" y="18" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="sans-serif">Get it on</text>
                  <path d="M18 13.5 33.5 26.5 18 39.5z" fill="#EA4335" opacity="0.9" />
                  <path d="M18 13.5 33.5 26.5 26 21z" fill="#FBBC04" opacity="0.9" />
                  <path d="M18 39.5 33.5 26.5 26 32z" fill="#34A853" opacity="0.9" />
                  <path d="M26 21 33.5 26.5 26 32z" fill="#4285F4" opacity="0.9" />
                  <text x="97" y="36" textAnchor="middle" fill="white" fontSize="20" fontWeight="600" fontFamily="sans-serif">Google Play</text>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#111" }} className="py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/">
            <img src="/logo-dark.png" alt="dropd" style={{ height: '32px', width: 'auto' }} />
          </Link>
          <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-[#555]">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy</Link>
            <Link href="/terms"   className="hover:text-white transition-colors duration-200">Terms</Link>
            <Link href="/help"    className="hover:text-white transition-colors duration-200">Help</Link>
            <Link href="/for-hosts" className="hover:text-white transition-colors duration-200">For Hosts</Link>
          </nav>
          <p className="text-[#444] text-sm text-center">© 2026 dropd. All rights reserved.<br className="sm:hidden" /> <span className="hidden sm:inline">·</span> Melbourne, Australia</p>
        </div>
      </footer>
    </>
  );
}
