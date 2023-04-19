import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-600">
            一緒に作成したいものを作りましょう
          </p>
          <h1 className="py-4 text-gray-700">
            <span className="text-[#5651e5]">Kiyo</span>と申します
          </h1>
          <h1 className="py-4 text-gray-700">バックエンドエンジニア</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            バックエンドとフロントエンドを中心に開発しています
          </p>
          <div className="flex justify-between items-center max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/kiyo1115">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://twitter.com/investment_21">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
