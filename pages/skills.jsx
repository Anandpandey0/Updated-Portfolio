import React from "react";
import Image from "next/image";
import Logo from "../public/assets/logo.jpg";
import RJs from "../public/assets/react.png";
import { fetcher } from "../lib/api";


const Skills = () => {
  return (
    <div id="skills" className="h-screen items-center w-full bg-[#ecf0f3]">
      <div className="skills-card flex flex-wrap flex-col justify-evenly">
        <div className="text-black py-20 lg:py-[10px] overflow-hidden relative z-5">
          <div className="container xl:max-w-3xl mx-auto px-2">
            <header className="text-center mx-auto mb- lg:px-10">
              <h2 className="text-2xl leading-normal mb-2 font-bold ">
                Tecnologies / Frameworks
              </h2>
              <p className=" leading-relaxed font-light text-xl mx-auto pb-2">
                My favorite tecnologies!
              </p>
            </header>
          </div>
          <div className="skills-card flex flex-wrap flex-col">

           
            <h2 className="flex justify-center ">Frontend</h2>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-full bg-white rounded-lg sahdow-lg  flex flex-col justify-center items-center  shadow-xl shadow-black  cursor-pointer hover:scale-105 ease-in  duration-300 p-2">
                  <div className="mb-8">
                    <Image
                      src={RJs}
                      alt="/"
                      width="50"
                      height="50"
                      className="cursor-pointer rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-black font-bold mb-2">PHP</p>
                    <p className="text-base text-gray-400 font-normal">
                      ________________________________________
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <h2 className="flex justify-center ">Frameworks</h2>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
               
                
               
                <div className="w-full bg-white rounded-lg sahdow-lg  flex flex-col justify-center items-center  shadow-xl shadow-black  cursor-pointer hover:scale-105 ease-in  duration-300 p-2">
                  <div className="mb-8">
                    <Image
                      src={RJs}
                      alt="/"
                      width="50"
                      height="50"
                      className="cursor-pointer rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-black font-bold mb-2">React</p>
                    <p className="text-base text-gray-400 font-normal">
                      ________________________________________
                    </p>
                  </div>
                </div>

                
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
export async function getStaticProps(){
  const myskills = await fetcher(`http://localhost:1337/api/skills`);
//   console.log("projects")
    // console.log(myskills);
  return{
      props:{
        myskills:myskills,
      },
  }
}