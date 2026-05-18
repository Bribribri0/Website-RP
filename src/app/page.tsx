import { Admins } from "@/components/admins";
import { Community } from "@/components/community";
import { Donations } from "@/components/donations";
import { Exclusives } from "@/components/exclusives";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { JoinGuide } from "@/components/join-guide";

export default function HomePage() {
  return (
    <main className="text-white">
      <Hero />
      <Features />
      <JoinGuide />
      <Exclusives />
      <Donations />
      <Gallery />
      <Admins />
      <Community />
    </main>
  );
}
