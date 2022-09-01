import React from "react";
import Image from "next/image";

import { fetcher } from "../lib/api";


const Skills = (props) => {
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
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {props.frontend.data.map((item)=>{
                return (
                  <>
                  <div className="w-full bg-white rounded-lg shadow-lg  flex flex-col justify-center items-center  shadow-black  cursor-pointer hover:scale-105 ease-in  duration-300 p-2">
                  <div className="mb-8 " >
                    <Image
                      src={item.attributes.imageurl}
                      alt={item.attributes.name}
                      width="100"
                      height="100"
                      objectFit='contain'
                      className="rounded-full object-cover items-center flex justify-center  "
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-black font-bold mb-2">{item.attributes.name}</p>
                    
                  </div>
                </div>
                </>
                )
              })}
              
               
              </div>
            </section>
            <h2 className="flex justify-center ">Frameworks</h2>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {props.framework.data.map((item)=>{
                return (
                  <>
                  <div className="w-full bg-white rounded-lg shadow-lg  flex flex-col justify-center items-center  shadow-black  cursor-pointer hover:scale-105 ease-in  duration-300 p-2">
                  <div className="mb-8 " >
                    <Image
                      src={item.attributes.imageurl}
                      alt={item.attributes.name}
                      width="100"
                      height="100"
                      objectFit='contain'
                      className="rounded-full object-cover items-center flex justify-center  "
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-black font-bold mb-2">{item.attributes.name}</p>
                    
                  </div>
                </div>
                </>
                )
              })}
              
               
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
  const frontend = await fetcher(`http://localhost:1337/api/frontends`);
  const framework = await fetcher(`http://localhost:1337/api/frameworks`)
//  console.log(framework.data)
  return{
      props:{
        frontend:frontend,
        framework:framework,
      },
  }
}
