import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectsItem from "./ProjectsItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2>作成一覧</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItem
            title="netflix-clone(full stack)"
            backgroundImg="netflix2.jpg"
            projectUrl="/netflix"
            skillImg1="React.png"
            skillImg2="tailwind.png"
            skillImg3="github.png"
            skillImg4="mongo.png"
            skillImg5="nextjs.png"
          />
          <ProjectsItem
            title="shopping-cart(full stack)"
            backgroundImg="shopping-cart.jpg"
            projectUrl="/shoppingCart"
            skillImg1="css.png"
            skillImg2="nextjs.png"
            skillImg3="node.png"
            skillImg4="fly.io.jpg"
            skillImg5="stripe.png"
          />
          <ProjectsItem
            title="dynamic-site(front-end)"
            backgroundImg="dynamic site.jpg"
            projectUrl="/dynamicSite"
            skillImg1="css.png"
            skillImg2="javascript.png"
            skillImg3="github.png"
            skillImg4=""
            skillImg5=""
          />
          <ProjectsItem
            title="autotrading(back-end)"
            backgroundImg="autotrading.gif"
            projectUrl="/autotrading"
            skillImg1="node.png"
            skillImg2="puppeteer.png"
            skillImg3="php.png"
            skillImg4=""
            skillImg5=""
          />
          <ProjectsItem
            title="Resale without stock(back-end)"
            backgroundImg="Resale without stock.gif"
            projectUrl="/Resale-without-stock"
            skillImg1="node.png"
            skillImg2="puppeteer.png"
            skillImg3=""
            skillImg4=""
            skillImg5=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
