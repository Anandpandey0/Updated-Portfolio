import React from 'react'
import Image from 'next/image'
import Logo from "../public/assets/logo.jpg";
import { fetcher } from "../lib/api";
import { FaGithub,FaTv } from 'react-icons/fa';



const Projects = (props) => {
  
  return (
    <div>  <div id="projects" className="bg-white">
    {/* {console.log("prokects")} */}
    <h2 className="flex flex-wrap justify-center ">Projects</h2>
    <div className="project-cards ">
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4 ">
            {props.myprojects.data.map((item)=>{
                return (
                    <>
                    <div className="p-4 w-1/3 ">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl shadow-blue-800  cursor-pointer hover:scale-105 ease-in  duration-300  p-2 bg-[#ecf0f3] align-middle items-center ml-auto">
                {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"> */}
                <div className="imagefolder flex align-middle justify-center"><Image
                  src={item.attributes.imageurl}
                  alt={item.attributes.title}
                  width="200"
                  height="200"
                  className="cursor-pointer rounded-xl"
                /></div>
                
                <div className="p-6">
                  <h2 className="tracking-widest text-xs text-bold title-font font-medium text-gray-400 mb-1">
                    {item.attributes.category}
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    {item.attributes.title}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {item.attributes.description}
              
                  </p>
                  <div className="flex items-center flex-wrap capitalize"><b>Languages Used : </b>{item.attributes.languageused}</div>
                  <div className="links flex flex-row mt-2 ">
                  <a
                  href={item.attributes.githublink}
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-black ease-in duration-300 hover:bg-black hover:text-white'>
                    <FaGithub />
                  </div>
                </a>
                  <a
                  href={item.attributes.liveprojectlink}
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:shadow-black cursor-pointer hover:scale-105 ease-in duration-300 ml-5 hover:bg-blue-500 hover:text-white'>
                  <FaTv/>
                  </div>
                </a>
                  </div>
                  
                </div>
              </div>
            </div>
                    </>
                )
            })}
            
           
           
          </div>
        </div>
      </section>
    </div>
  </div></div>
  )
}

export default Projects;
export async function getStaticProps(){
  const myprojects = await fetcher(`http://localhost:1337/api/my-projects?populate=*`);
//   console.log("projects")
  // console.log(myprojects.attributes.image);
  return{
      props:{
          myprojects:myprojects,
      },
  }
}