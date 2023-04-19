import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/autotrading.gif";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

// autotrading.gif
// Resale without stock.gif

const autotrading = ({}) => {
  return (
    <div className="w-full">
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh]  bg-black/60 z-10">
          <Image
            className="absolute z-1 object-cover"
            layout="fill"
            src={propertyImg}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 bg-black/60">
            <h2 className="py-2">autotrading(back-end)</h2>
            <h3>Node JS/Javascript</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>概要</h2>
          <p>
            このアプリケーションはNode.jsをベースに一部puppeteerで構築されています。
            このアプリは、Node.jsとPuppeteerを使用することにより
            CSVファイルを取得し、現在の数値に対して論理演算をしエントリーの可否を判別。
            7秒に一回情報を取得した後、上記サイクルを実行。エントリー実行サインが出たら
            エントリーを実施。その後、利益確定及び損切りまで監視を同じく7秒に一回監視の
            サイクルを繰り返します。
            また、重複ログインを防ぐため、一部PHPを使い重複を確認した場合はプログラムが
            一時的に使えないよう制御機能や、重複ログインまたは通信エラー等でエラーが出た場合は
            登録されたメールに対してエラー内容が送られる仕組みとなっています。
          </p>
          {/* <Link href="https://dynamic-site-nine.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/kiyo1115/dynamic_site">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link> */}
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
                Nodejs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Puppeteer
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                PHP
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

export default autotrading;
