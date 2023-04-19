import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectsItem = ({title,backgroundImg,projectUrl,skillImg1,skillImg2,skillImg3,skillImg4,skillImg5}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-110 duration-300">
    <img
      className="rounded-xl group-hover:opacity-10"
      src={`/assets/projects/${backgroundImg}`}
      alt=""
    />
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h3 className="text-2xl text-white tracking-wider text-center">
        {title}
      </h3>
      <div className="pt-2 pb-4  text-white text-center flex flex-row justify-between items-center">
        {skillImg1 ? <Image className="mr-3"src={`/assets/skills/${skillImg1}`} alt="/" width="25" height="25"></Image> : ""}
        {skillImg2 ? <Image className="mr-3" src={`/assets/skills/${skillImg2}`} alt="/" width="25" height="25"></Image>: ""}
        {skillImg3 ? <Image className="mr-3" src={`/assets/skills/${skillImg3}`} alt="/" width="25" height="25"></Image>: ""}
        {skillImg4 ? <Image className="mr-3" src={`/assets/skills/${skillImg4}`} alt="/" width="25" height="25"></Image>: ""}
        {skillImg5 ? <Image src={`/assets/skills/${skillImg5}`} alt="/" width="25" height="25"></Image>: ""}
      </div>
      <Link href={projectUrl}>
        <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
          info more
        </p>
      </Link>
    </div>
  </div>
  )
}

export default ProjectsItem