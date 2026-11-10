import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
    </>
  );
}
