import { useState, useEffect, useCallback } from "react";
import gymHero from "@/assets/saxxy-girl.mp4";

const DOWNLOAD_URL = "sexychat.apk"; // Replace with actual APK/app download URL

const Index = () => {
  const [countdown, setCountdown] = useState(9);
  const [downloadReady, setDownloadReady] = useState(false);
  const [slotsAvailable] = useState(Math.floor(Math.random() * 20) + 5);

  useEffect(() => {
    if (countdown <= 0) {
      setDownloadReady(true);
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    if (downloadReady) {
      // Auto trigger download when countdown reaches 0
      const link = document.createElement("a");
      link.href = DOWNLOAD_URL;
      link.download = "sexychat.apk";
      link.click();
    }
  }, [downloadReady]);

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = DOWNLOAD_URL;
    link.download = "sexychat.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <video
          src={gymHero}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/95" />
      </div>

      {/* Animated floating emojis */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {["🥵", "💦", "💋", "🥵", "💦", "💋"].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-3xl animate-[float_8s_ease-in-out_infinite]"
            style={{
              left: `${10 + i * 16}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + i * 1.5}s`,
              opacity: 0.7,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
        {/* Logo */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/80 text-3xl shadow-lg shadow-primary/30">
          💜
        </div>

        {/* Title */}
        <h1 className="mb-3 text-3xl font-extrabold uppercase tracking-wider text-foreground drop-shadow-lg md:text-5xl">
          LEAKED PORN VIDEOS
        </h1>

        {/* Slots badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-muted/60 px-5 py-2 backdrop-blur-sm">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
          <span className="text-sm font-semibold text-accent">
            {slotsAvailable} Slots Available
          </span>
        </div>

        {/* Tagline */}
        <p className="mb-10 text-xl font-bold text-accent drop-shadow-md md:text-2xl">
          🔥 See Unlimited Leaks 🔥
        </p>

        {/* CTA Card */}
        <div className="w-full max-w-sm space-y-4 rounded-2xl bg-card/70 p-6 backdrop-blur-md">
          <button
            onClick={handleDownload}
            className="w-full rounded-full bg-primary py-4 text-lg font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/40 transition-transform hover:scale-105 active:scale-95"
          >
            Download App Now
          </button>

          <button
            onClick={handleDownload}
            className="w-full rounded-full bg-secondary py-4 text-lg font-bold uppercase tracking-wide text-secondary-foreground shadow-lg shadow-secondary/40 transition-transform hover:scale-105 active:scale-95"
          >
            Only Limited Access
          </button>

          <p className="pt-2 text-sm text-muted-foreground">
            Watch latest exclusive leaks inside the app 👇
          </p>
        </div>

        {/* Countdown */}
        <div className="mt-10 text-center">
          {!downloadReady ? (
            <>
              <p className="mb-2 text-muted-foreground">Download starting in</p>
              <span className="text-7xl font-black text-primary drop-shadow-lg animate-pulse">
                {countdown}
              </span>
            </>
          ) : (
            <button
              onClick={handleDownload}
              className="rounded-full bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg shadow-accent/40 transition-transform hover:scale-105 active:scale-95"
            >
              🔥 Download APK 🔥
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;


