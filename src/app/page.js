import Banner from "@/components/Banner";
import FeaturedPets from "@/components/FeaturedPets";
import SuccessStories from "@/components/SuccessStories";
import Image from "next/image";
// import banner from '../../public/banner.png'

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <FeaturedPets></FeaturedPets>
      <SuccessStories></SuccessStories>
    </>
  );
}
