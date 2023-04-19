import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-s flex items-center py-16">
      <div className="max-w-[1250px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
            <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">About</p>
            <h2 className="py-4">私について</h2>
            <p className='py-2 text-gray-600'>
            私は、バックエンドアプリケーションの構築を専門としています。
            私は新しい技術を学ぶことにも注力しており、
            タスクを達成する方法を複数選択できるよう多方面から作成方法を模索します。
            私は Node.jsの構築に最も精通していますが、
            並行してHTML、CSS、Javascript、React を使用した
            フロントエンド アプリケーションにも精通しております。
          </p>
          < p  className = 'py-2 text-gray-600' >
            2020 年に 自動売買ツール開発を開始後、複数のツールを開発してきました。
            無在庫販売ツール、twitter予約ツイートツール、情報収集ツール、
            マイニング監視ツール、自動ホームページ更新ツール。
            並びにフロントエンドとバックエンドを統合したショッピングツール（ECサイト）等。
            私はクライアントと直接仕事をした経験があるため、作りたい内容を詳しくヒアリングし
            開発していくことが可能です。
          </p>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <img className="rounded-xl" src="/assets/about.jpg" alt="/" />

        </div>
      </div>
    </div>
  );
};

export default About;
