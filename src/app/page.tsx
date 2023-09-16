import Link from "next/link";
import Image from "next/image";
import chura from "../../public/cp.png"
import google from "../../public/Google.png"
import { Grip, SearchIcon, Mic, Camera } from "lucide-react";
export default function Home() {
  return (
    <div>
      <div className=" ">
        <div className="flex justify-end items-center gap-6 mt-10 p-4 border-t-2 border-gray-200 text-xl text-gray-500">
          <Link href={""}>Gmail</Link>
          <Link href={""}>Images</Link>
          <Grip />
          <Image src={chura} alt={"ahsanLogo"} className="rounded-full   w-[50px] h-[50px]" />
        </div>
      </div>
      <div className="flex justify-center pt-32">

        <Image src={google} alt={""} className=" w-[450px] h-[250px] " />
      </div>
      <div className=" flex justify-center ">
        <div className=" flex  gap-2 px-4 text-gray-500 border-gray-300 shadow-lg focus:border-gray-400 w-[850px] py-3 border-t-2 border-b-2 border-l-2 border-r-2 rounded-full ">
          <SearchIcon size={40} />
          <input
            placeholder="Search Google or type a URL"
            className="border-none w-[1000px] text-black text-2xl border-transparent "

          />
          <Mic size={40} />
          <Camera size={40} />

        </div>
      </div>
      <div className=" flex justify-center mt-8  ">
        <div className="flex flex-col justify-center items-center gap-y-3 hover:bg-gray-200 rounded-lg px-6 py-6">
          <button className="text-5xl font-light text-gray-900 bg-gray-100 rounded-full w-[70px] h-[70px] pb-2 ">
            +
          </button>
          <span className=" text-gray-900 text-xl">Add shortcut</span>
        </div>


      </div>
      <div></div>
    </div>
  )
}
