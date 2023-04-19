import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/shopping-cart.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

// autotrading.gif
// crypto.jpg
// dynamic site.jpg
// netflix.jpg
// property.jpg
// Resale without stock.gif
// shopping-cart.jpg
// twitch.jpg

const shoppingCart = ({}) => {
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
            <h2 className="py-2">shopping-cart(full stack)</h2>
            <h3>Next JS/stripe</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>概要</h2>
          <p>
            {/* このアプリケーションはreact、nextjs、tailwindcssをフロントエンドで作成し、
            mongoDBから情報を取得し、で構築し、GitHub ページでホストされています */}
            このアプリケーションは nextjs、bootstrap、stripeで構築し、GitHub、fly.io
            ページでホストされています。このアプリは、strapiにデータを登録することにより
            ユーザー認証、データベースの取得を備えています。カート情報の登録を配列で管理し、
            商品の追加や削除ができるようにしております。決済に関してはaxios経由で
            stripeに情報を送り、決済情報はstrapiに登録されるようになっています。
          </p>
          <Link href="https://shopping-kiyo1115.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/kiyo1115/shopping">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">技術／技能</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                strapi
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                stripe
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                fly.io
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                bootstrap
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

export default shoppingCart;
