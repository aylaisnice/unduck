// This file was ripped from https://duckduckgo.com/bang.js

type Bang = {
  c?: string;
  d: string;
  r: number;
  s: string;
  sc?: string;
  t: string;
  u: string;
};

if (typeof window !== "undefined") {
  throw new Error(
    "Attempted to re-map bangs on client side instead of at build time",
  );
}

export const bangs: Record<string, Bang> = {
  t3: {
    c: "AI",
    d: "www.t3.chat",
    r: 0,
    s: "T3 Chat",
    sc: "AI",
    t: "t3",
    u: "https://www.t3.chat/new?q={{{s}}}",
  },
  ...Object.fromEntries(
    (
      (await fetch("https://duckduckgo.com/bang.js").then((r) =>
        r.json(),
      )) as Bang[]
    )
      .filter(
        (bang) =>
          !bang.c?.toLowerCase().includes("porn") &&
          !bang.d.toLowerCase().includes("porn") &&
          !bang.s.toLowerCase().includes("porn"),
      )
      .map((bang) => {
        return [bang.t, bang];
      }),
  ),
};
