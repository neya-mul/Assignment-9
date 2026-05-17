import Image from "next/image";
// import banner from '../../public/banner.png'

export default function Home() {
  return (
    <div className="min-h-screen bg bg-no-repeat bg-cover bg-center text-black text-center flex justify-center items-center"   >

      <div className="space-y-5">
        <h1 className="text-5xl font-bold">Find Your Forever Companion</h1>
        <p className="max-w-4xl">Thousands of lovable pets are waiting for a place to call home. Connect with local shelters and open your heart to a lifetime of unconditional love.</p>
        <button className="btn">Adopt Now</button>
      </div>

    </div>
  );
}
