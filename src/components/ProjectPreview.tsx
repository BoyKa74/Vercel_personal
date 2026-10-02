"use client";

import { useState } from "react";
import type { Platform } from "@/lib/projects";

const mockGradients = [
  "from-sky-500/80 via-blue-600/70 to-indigo-800/90",
  "from-fuchsia-500/75 via-purple-600/70 to-indigo-800/90",
  "from-emerald-500/75 via-teal-600/70 to-cyan-800/90",
  "from-amber-500/75 via-orange-600/70 to-rose-800/90",
  "from-rose-500/75 via-pink-600/70 to-purple-800/90",
  "from-cyan-400/75 via-sky-600/70 to-blue-800/90"
];

const hashName = (name: string) =>
  name.split("").reduce((total, char) => total + char.charCodeAt(0), 0);

const mockGradient = (name: string) => mockGradients[hashName(name) % mockGradients.length];

const dotPattern = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.16) 1px, transparent 1px)",
  backgroundSize: "12px 12px"
};

type Variant = "site" | "dashboard" | "phone" | "chat" | "terminal";

const getVariant = (name: string, platform: Platform): Variant => {
  if (platform === "mobile") return "phone";
  if (platform === "ai") return "chat";
  if (platform === "other") return "terminal";
  return hashName(name) % 2 === 0 ? "site" : "dashboard";
};

function SiteMock({ gradient }: { gradient: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 top-7 flex flex-col gap-2 p-3">
      {/* nav */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-white/90" />
          <span className="h-1.5 w-9 rounded-full bg-white/50" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-5 rounded-full bg-white/40" />
          <span className="h-1.5 w-5 rounded-full bg-white/40" />
          <span className="h-1.5 w-5 rounded-full bg-white/40" />
          <span className="h-4 w-10 rounded-full bg-white/85" />
        </div>
      </div>

      {/* hero */}
      <div className="flex flex-1 gap-2.5">
        <div className="flex flex-1 flex-col justify-center gap-1.5">
          <span className="h-2.5 w-4/5 rounded-full bg-white/90" />
          <span className="h-2.5 w-3/5 rounded-full bg-white/70" />
          <span className="h-1.5 w-2/3 rounded-full bg-white/45" />
          <span className="h-1.5 w-1/2 rounded-full bg-white/35" />
          <span className="mt-1 h-3.5 w-14 rounded-full bg-white/90" />
        </div>
        <div className="relative w-2/5 overflow-hidden rounded-lg border border-white/20 bg-white/15">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
          <div className="absolute inset-0" style={dotPattern} />
          <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-full bg-white/40 blur-md" />
          <span className="absolute left-2 top-2 h-1.5 w-8 rounded-full bg-white/70" />
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((index) => (
          <div key={index} className="rounded-md border border-white/10 bg-white/15 p-1.5">
            <span className="block h-1.5 w-5 rounded-full bg-white/75" />
            <span className="mt-1 block h-1 w-full rounded-full bg-white/35" />
            <span className="mt-0.5 block h-1 w-3/4 rounded-full bg-white/25" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardMock({ gradient }: { gradient: string }) {
  const bars = [42, 68, 50, 82, 58, 92, 70];
  return (
    <div className="absolute inset-x-0 bottom-0 top-7 flex">
      {/* sidebar */}
      <div className="flex w-9 flex-col items-center gap-2 border-r border-white/10 bg-black/25 py-2.5">
        <span className={`h-3.5 w-3.5 rounded-md bg-gradient-to-br ${gradient}`} />
        <span className="h-1.5 w-4 rounded-full bg-white/45" />
        <span className="h-1.5 w-4 rounded-full bg-white/30" />
        <span className="h-1.5 w-4 rounded-full bg-white/30" />
        <span className="h-1.5 w-4 rounded-full bg-white/30" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-2.5">
        {/* top bar */}
        <div className="flex items-center justify-between">
          <span className="h-2 w-16 rounded-full bg-white/80" />
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-8 rounded-full bg-white/35" />
            <span className="h-3.5 w-3.5 rounded-full bg-white/65" />
          </div>
        </div>

        {/* stat cards */}
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((index) => (
            <div key={index} className="rounded-md border border-white/10 bg-white/15 p-1.5">
              <span className="block h-1 w-4 rounded-full bg-white/50" />
              <span className="mt-1 block h-2 w-7 rounded-md bg-white/80" />
            </div>
          ))}
        </div>

        {/* chart */}
        <div className="flex flex-1 items-end gap-1 rounded-md border border-white/10 bg-white/10 p-2">
          {bars.map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-t bg-white/70"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneMock({ gradient }: { gradient: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 top-7 flex items-center justify-center">
      <div className="relative h-[124px] w-[68px] rounded-[16px] border border-white/40 bg-white/15 p-1.5 shadow-xl">
        <span className="absolute left-1/2 top-1 h-1 w-6 -translate-x-1/2 rounded-full bg-black/30" />
        {/* app header */}
        <div className="mt-3 flex items-center justify-between">
          <span className="h-1.5 w-7 rounded-full bg-white/85" />
          <span className={`h-3 w-3 rounded-full bg-gradient-to-br ${gradient}`} />
        </div>
        {/* avatar row */}
        <div className="mt-1.5 flex gap-1">
          {[0, 1, 2, 3].map((index) => (
            <span
              key={index}
              className={`h-5 w-5 rounded-full border border-white/30 ${
                index === 0 ? `bg-gradient-to-br ${gradient}` : "bg-white/30"
              }`}
            />
          ))}
        </div>
        {/* list cards */}
        <div className="mt-1.5 space-y-1">
          <div className="flex items-center gap-1 rounded-md bg-white/25 p-1">
            <span className="h-3.5 w-3.5 rounded bg-white/60" />
            <div className="flex-1">
              <span className="block h-1 w-8 rounded-full bg-white/70" />
              <span className="mt-0.5 block h-1 w-6 rounded-full bg-white/40" />
            </div>
          </div>
          <div className="h-3.5 rounded-md bg-white/20" />
          <div className="h-3.5 rounded-md bg-white/15" />
        </div>
        {/* tab bar */}
        <div className="absolute inset-x-2 bottom-1.5 flex justify-between">
          {[0, 1, 2, 3].map((index) => (
            <span
              key={index}
              className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-white/90" : "bg-white/45"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatMock({ gradient }: { gradient: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 top-7 flex flex-col gap-1.5 p-3">
      {/* header */}
      <div className="flex items-center gap-1.5">
        <span className={`h-4 w-4 rounded-full bg-gradient-to-br ${gradient} border border-white/40`} />
        <span className="h-1.5 w-14 rounded-full bg-white/65" />
        <span className="ml-auto h-1.5 w-8 rounded-full bg-emerald-300/80" />
      </div>

      {/* messages */}
      <div className="flex-1 space-y-2 pt-1">
        <div className="max-w-[72%] rounded-xl rounded-tl-sm border border-white/10 bg-white/25 px-2 py-1.5">
          <span className="block h-1.5 w-16 rounded-full bg-white/75" />
          <span className="mt-1 block h-1.5 w-10 rounded-full bg-white/50" />
        </div>
        <div className="ml-auto max-w-[72%] rounded-xl rounded-tr-sm bg-white/80 px-2 py-1.5">
          <span className="block h-1.5 w-14 rounded-full bg-slate-900/45" />
          <span className="mt-1 block h-1.5 w-9 rounded-full bg-slate-900/25" />
        </div>
        <div className="max-w-[60%] rounded-xl rounded-tl-sm border border-white/10 bg-white/25 px-2 py-1.5">
          <span className="block h-1.5 w-12 rounded-full bg-white/65" />
        </div>
      </div>

      {/* input */}
      <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/20 px-2 py-1">
        <span className="h-1.5 flex-1 rounded-full bg-white/45" />
        <span className={`h-3.5 w-3.5 rounded-full bg-gradient-to-br ${gradient} border border-white/40`} />
      </div>
    </div>
  );
}

function TerminalMock({ gradient }: { gradient: string }) {
  const lines = [
    { width: "w-1/3", color: "bg-emerald-300/80" },
    { width: "w-1/2", color: "bg-white/35" },
    { width: "w-2/5", color: "bg-cyan-300/70" },
    { width: "w-3/5", color: "bg-white/30" },
    { width: "w-1/4", color: "bg-fuchsia-300/70" },
    { width: "w-1/2", color: "bg-white/30" }
  ];
  return (
    <div className="absolute inset-x-0 bottom-0 top-7 p-3">
      <div className="flex h-full flex-col justify-center gap-1.5 rounded-md border border-white/10 bg-black/35 p-2.5">
        <div className="mb-1 flex items-center gap-1.5">
          <span className={`h-3 w-3 rounded-sm bg-gradient-to-br ${gradient}`} />
          <span className="h-1.5 w-12 rounded-full bg-white/50" />
        </div>
        {lines.map((line, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="h-1 w-2 rounded-full bg-white/25" />
            <span className={`h-1.5 ${line.width} rounded-full ${line.color}`} />
          </div>
        ))}
        <span className="h-2 w-1 animate-pulse bg-white/80" />
      </div>
    </div>
  );
}

export default function ProjectPreview({
  name,
  platform,
  demo,
  github,
  isPrivate
}: {
  name: string;
  platform: Platform;
  demo?: string;
  github?: string;
  isPrivate?: boolean;
}) {
  const [screenshotLoaded, setScreenshotLoaded] = useState(false);
  const [screenshotFailed, setScreenshotFailed] = useState(false);
  const gradient = mockGradient(name);
  const variant = getVariant(name, platform);
  const screenshotTarget = demo ?? (!isPrivate && github ? github : null);
  const screenshotUrl = screenshotTarget
    ? `https://image.thum.io/get/png/width/640/viewportWidth/1280/viewportHeight/560/noanimate/${screenshotTarget}`
    : null;

  return (
    <div className="absolute inset-0">
      {/* page background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute inset-0 opacity-50" style={dotPattern} />
      <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-white/25 blur-2xl" />
      <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-black/20 blur-2xl" />

      {/* browser chrome */}
      <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-white/15 bg-black/30 px-3 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-red-400/90" />
        <span className="h-2 w-2 rounded-full bg-yellow-300/90" />
        <span className="h-2 w-2 rounded-full bg-green-400/90" />
        <span className="ml-2 flex-1 truncate rounded-sm bg-white/10 px-2 py-0.5 text-[10px] leading-4 text-white/75">
          {demo
            ? demo.replace(/^https?:\/\//, "").replace(/\/$/, "")
            : github
              ? `github.com/${github.split("/").slice(-2).join("/")}`
              : "private project"}
        </span>
      </div>

      {/* website mock (skeleton / fallback when there is no live site) */}
      {variant === "site" && <SiteMock gradient={gradient} />}
      {variant === "dashboard" && <DashboardMock gradient={gradient} />}
      {variant === "phone" && <PhoneMock gradient={gradient} />}
      {variant === "chat" && <ChatMock gradient={gradient} />}
      {variant === "terminal" && <TerminalMock gradient={gradient} />}

      {/* real website screenshot */}
      {screenshotUrl && !screenshotFailed && (
        <img
          src={screenshotUrl}
          alt={`${name} website preview`}
          loading="lazy"
          decoding="async"
          onLoad={() => setScreenshotLoaded(true)}
          onError={() => setScreenshotFailed(true)}
          className={`absolute inset-x-0 bottom-0 top-7 z-[5] h-[calc(100%-1.75rem)] w-full bg-black/20 object-cover object-top transition-opacity duration-700 ${
            screenshotLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
