import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";

const businessDonations = [
  {
    label: "Food business",
    price: "PHP 5,000",
    monthly: "PHP 1,500 monthly"
  },
  {
    label: "Other business",
    price: "PHP 10,000",
    monthly: "PHP 2,500 monthly"
  }
];

const vipTiers = [
  {
    name: "VIP 1",
    price: "PHP 300 / month",
    perks: ["x3 grinding bonus reward", "Discord Donator Role"]
  },
  {
    name: "VIP 2",
    price: "PHP 500 / month",
    perks: ["x3.5 grinding bonus reward", "Wardrobe menu (safe zone area only)", "Discord Donator Role"]
  },
  {
    name: "VIP 3",
    price: "PHP 1,000 / month",
    perks: [
      "x4 grinding bonus reward",
      "Welcome image banner announcement",
      "Wardrobe menu (safe zone area only)",
      "Discord Donator Role"
    ]
  },
  {
    name: "VIP 4",
    price: "PHP 1,500 / month",
    perks: [
      "x4.5 grinding bonus reward",
      "Welcome GIF banner announcement",
      "Death cam image",
      "Death cam audio",
      "Wardrobe menu (safe zone area only)",
      "Discord Donator Role"
    ]
  },
  {
    name: "VIP 5",
    price: "PHP 2,000 / month",
    perks: [
      "x5 grinding bonus reward",
      "Welcome GIF banner announcement with 5 sec audio",
      "Death cam image",
      "Death cam audio",
      "Wardrobe menu (safe zone area only)",
      "Discord Donator Role"
    ]
  }
];

const vipItems = [
  "Hair - PHP 1,000",
  "Clothing - PHP 1,500 (3 textures)",
  "More than 3 textures - PHP 100 fee per additional texture",
  "Exclusive accessories - PHP 1,000",
  "Chest hair/decals tattoo - PHP 2,000",
  "Exclusive cars - PHP 3,000 (owned script, must be debadged already)",
  "Free ups and cosmetics",
  "Sunrise - PHP 1,000",
  "Official tattoo - TBA",
  "Ped - PHP 5,000"
];

const mansionInclusions = [
  "Personal stash",
  "Personal garage",
  "Personal clothing",
  "1x VIP car with custom plate"
];

const gangBaseInclusions = [
  "Personal stash",
  "Personal garage",
  "Personal clothing",
  "10 gang car with livery (provide your own livery)"
];

const terms = [
  "Processing takes 48-168 hours (2-7 days) depending on the package or request.",
  "Support does not grant special treatment beyond the listed perks.",
  "All supporters must still follow server rules; perks can be revoked if you break them.",
  "Packages may change at any time without notice.",
  "Perks are not goods/services; they are appreciation benefits from management.",
  "Packages are permanent while the server is active and renewed as required.",
  "No refunds or compensation if the server closes, ownership changes, GTA upgrades, inactivity, bans, or violations occur.",
  "Perks are non-transferable if you are banned or found guilty of violations.",
  "Management is not liable for unauthorized payment sources or disputes.",
  "Selling perks for real-world currency is prohibited and may result in revocation.",
  "Exclusive owners must provide details for exclusives to avoid duplication.",
  "Exclusive EUP has steam lock functions; sharing is at the owner's responsibility.",
  "Business owners must maintain their business or risk revocation.",
  "VIP and exclusive cars cannot be transferred; package sharing is allowed with immediate notice.",
  "Scripts provided by players may be re-donated or opened if the owner is banned.",
  "All scripts are subject to approval.",
  "Inactive donors may have business benefits revoked regardless of amount donated."
];

export function Donations() {
  return (
    <section id="donations" className="border-y border-white/8 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            eyebrow="Donations"
            title="Support the city and unlock premium perks"
            description="Use the official donation hub on Discord to claim supporter packages, VIP tiers, and custom property add-ons."
          />
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4" data-reveal>
          <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100/70">
            Official donation hub
          </div>
          <Link
            href="https://discord.gg/bjyhfsAmcD"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Donate Now
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <details
              data-reveal
              className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 shadow-panel"
              open
            >
              <summary className="cursor-pointer text-lg font-semibold text-white">Business Donations</summary>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                {businessDonations.map((item) => (
                  <div key={item.label} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs text-slate-400">{item.monthly}</p>
                    </div>
                    <p className="text-sm font-semibold text-cyan-100">{item.price}</p>
                  </div>
                ))}
              </div>
            </details>

            <details data-reveal className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 shadow-panel">
              <summary className="cursor-pointer text-lg font-semibold text-white">Custom Properties</summary>
              <div className="mt-4 space-y-5 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Mansion custom YMAP or MLO</p>
                  <p className="mt-2 text-xs text-slate-400">PHP 5,000 + PHP 1,500 monthly</p>
                  <ul className="mt-3 grid gap-2 text-xs">
                    {mansionInclusions.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Gang base custom YMAP or MLO</p>
                  <p className="mt-2 text-xs text-slate-400">PHP 5,000</p>
                  <ul className="mt-3 grid gap-2 text-xs">
                    {gangBaseInclusions.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>

            <details data-reveal className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 shadow-panel">
              <summary className="cursor-pointer text-lg font-semibold text-white">VIP Items</summary>
              <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                {vipItems.map((item) => (
                  <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          </div>

          <div className="space-y-4">
            <details
              data-reveal
              className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 shadow-panel"
              open
            >
              <summary className="cursor-pointer text-lg font-semibold text-white">VIP Subscription (Monthly)</summary>
              <div className="mt-4 grid gap-4">
                {vipTiers.map((tier) => (
                  <div key={tier.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white">{tier.name}</p>
                      <p className="text-xs font-semibold text-cyan-100">{tier.price}</p>
                    </div>
                    <ul className="mt-3 grid gap-2 text-xs text-slate-300">
                      {tier.perks.map((perk) => (
                        <li key={perk}>• {perk}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>

            <details data-reveal className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 shadow-panel">
              <summary className="cursor-pointer text-lg font-semibold text-white">Terms and Agreement</summary>
              <ul className="mt-4 grid gap-2 text-xs text-slate-300">
                {terms.map((item) => (
                  <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                Note: on behalf of Esquinita Roleplay management, inactive donors may have business benefits revoked.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
