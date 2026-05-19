import Banner from "@/components/Banner";
import PetCard from "@/components/cardComponents/PetCard";
import FeaturedPets from "@/components/FeaturedPets";
import PetCare from "@/components/PetCare";
import SuccessStories from "@/components/SuccessStories";
import WhyAdopt from "@/components/WhyAdopt";
import Image from "next/image";
// import banner from '../../public/banner.png'

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <FeaturedPets></FeaturedPets>
      <SuccessStories></SuccessStories>

      <WhyAdopt></WhyAdopt>
      <PetCare></PetCare>
    </>
  );
}
