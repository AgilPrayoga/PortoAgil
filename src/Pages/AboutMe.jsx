import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import Me from"../assets/me.png"
import { motion as m } from "framer-motion"
import { NavLink } from "react-router-dom"


const AboutMe = () =>{
    return(
       <div>
        
        <NavBar/>
        <div className="h-[90vh] bg-[#2C3333] flex justify-center items-center pt-4 overflow-hidden">
            <div className="m-8">
                <m.h1 className="font-extrabold font-montserrat text-[60px] text-[#d5ceb6] mb-5 "
                initial={{ opacity: 0, y:100  }}
                animate={{  opacity: [0, 1, 0, 1],x:[0],opacity: [0, 1, 0, 1,],y:[-300,0] }}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,300] }}

                >ABOUT <a className="text-[#2C3333] bg-[#d5ceb6] ">ME</a></m.h1>
                <m.p className="font-sans font-thin tracking-wide text-[#d5ceb6]"
                initial={{ opacity: 0, x:[300]  }}
                animate={{  opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],x:[0],opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],x:[-300,0] }}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,300] }}
                
                
                >Hello World!. My name is Ari Agil Prayoga,but my friends ussualy call me <a className="text-[#d5ceb6] font-montserrat w-fit hover:text-[#2C3333] hover:bg-[#d5ceb6]">AGIL</a> . </m.p>
                <br />
                <m.p className="font-sans font-thin text-justify  tracking-wide text-[#d5ceb6]"
                initial={{ opacity: 0, y:500  }}
                animate={{  opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],x:[0],opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],y:[500,0] }}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,500] }}
                
                
                
                >
                    I'm an <a className="text-[#d5ceb6]  font-montserrat w-fit hover:text-[#2C3333] hover:bg-[#d5ceb6]">Informatics Engineering Student</a> . I who has a passion for creating <br />
                good websites and confortable to use  . <br />
                 I have started web development since 1 year ago and have gained enough  experience and knowledge.</m.p>
                    <br />
                <m.p className="font-sans font-thin text-justify  tracking-wide text-[#d5ceb6]"
                initial={{ opacity: 0, y:500  }}
                animate={{  opacity: [0, 1, 0, 1,],x:[0],y:[500,0] }}
                transision={{ease:'anticipate',duration:2}}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[500,0] }}
                
                
                
                
                >
                I am consistent in learning new things and staying up-to-date with <br />
                 design and technology trends. <a className="text-[#d5ceb6]  font-montserrat w-fit hover:text-[#2C3333] hover:bg-[#d5ceb6]">I am a hard worker and  dedicated to learning and growing in my field.</a> <br />
                  I'm also passionate about bring my expertise to any project and help to create incredibly <br /> engaging online experiences.
                </m.p>

            </div>
            <m.div className="flex items-center justify-center flex-col"
            initial={{ opacity: 0, y:500  }}
            animate={{  opacity: [0, 1, 0, 1,],x:[0],y:[500,0] }}
            transision={{ease:'anticipate',duration:2}}
            exit={{ opacity: [0, 1, 0, 1, 0] ,x:[500,0] }}
            >
                <div className="flex items-center justify-center bg-[#d5ceb6]   h-[300px] w-[300px] overflow-hidden">
                <img src={Me}/>
                

                </div>
                <NavLink className="text-[#F0E9D2] group flex items-center w-fit justify-center border px-2 border-[#d5ceb6] mt-2 font-bold mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2]" to={'mailto:ariagilprayoga@gmail.com'}>CONTACT ME
                    <svg className="fill-[#F0E9D2] group-hover:fill-[#2C3333]" fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"/></svg>
                 </NavLink>
            </m.div>
            

        </div>
        <Footer/>


       </div>
        
        
        
        
        
    )
}
export default AboutMe