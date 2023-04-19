import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/netflix2.jpg";
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

const netflix = ({}) => {
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
            <h2 className="py-2">netflix-clone(full stack)</h2>
            <h3>React JS/Tailwind/mongoDB</h3>
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
            このアプリケーションは React、nextjs、tailwindで構築し、GitHub
            ページでホストされています。このアプリは、mongoDBのスキーマ（構造を作成すること）により
            ユーザー認証、データベースの取得を備えています。お気に入りの登録を配列で管理し、
            いつでも登録、解除ができるようにしております。 More
            infoからはその映画の詳細な情報を記載し、再生ボタンをクリックすることで
            データベースに保存してある、動画URLが流れるように作成されています。
          </p>
          <Link href="https://netflix-clone-kiyo1115.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/kiyo1115/netflix-clone">
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
                Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Prisma
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

export default netflix;
