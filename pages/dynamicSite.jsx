import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/dynamic site.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

// autotrading.gif
// Resale without stock.gif

const dynamicSite = ({}) => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh]  bg-black/60 z-10">
          <Image
            className="absolute z-1 object-cover"
            layout="fill"
            src={propertyImg}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 bg-black/60">
            <h2 className="py-2">dynamic-site(front-end)</h2>
            <h3>Javascript/CSS</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>概要</h2>
          <p>
            このアプリケーションはJavascript、Scssで構築し、GitHub、
            ページでホストされています。このアプリは、Swiperを使用することにより
            ページのスライドアニメーションを実現しています。またスクロールすることにより
            クラスを追加し、文字のアニメーションや画像の
            アニメーションなどが実行されるようになっています。
          </p>
          <Link href="https://dynamic-site-nine.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/kiyo1115/dynamic_site">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">技術／技能</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Swiper
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Scss
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default dynamicSite;
