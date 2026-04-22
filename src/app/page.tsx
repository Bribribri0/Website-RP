import { Community } from "@/components/community";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { JoinGuide } from "@/components/join-guide";
import { ServerStatus } from "@/components/server-status";

export default function HomePage() {
  return (
    <main className="bg-[#03020a] text-white">
      <Hero />
      <Features />
      <JoinGuide />
      <Gallery />
      <ServerStatus />
      <Community />
    </main>
  );
}
