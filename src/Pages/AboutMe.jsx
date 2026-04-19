import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import Me from"../assets/agilnobg.png"
import { motion as m } from "framer-motion"
import { NavLink } from "react-router-dom"
import 'flowbite'

const AboutMe = () =>{
    return(
       <div>
        
        <NavBar/>
        <div className=" sm:h-[90vh] bg-[#2C3333] flex flex-col sm:flex-row justify-center items-center pt-9 sm:pt-6 overflow-hidden">
            <div className="m-8">
                <m.h1 className="font-extrabold font-montserrat text-[60px] text-[#d5ceb6] mb-2 "
                initial={{ opacity: 0, y:100  }}
                animate={{  opacity: [0, 1, 0, 1],x:[0],y:[-300,0] }}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,300] }}

                >ABOUT <a className="text-[#2C3333] bg-[#d5ceb6] ">ME</a></m.h1>
                <m.p className="font-sans font-thin tracking-widerst text-[#d5ceb6]"
                initial={{ opacity: 0, x:[300]  }}
                animate={{  opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],x:[0],x:[-300,0] }}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,300] }}
                
                
                >Hello World! My name is Ari Agil Prayoga, and you can call me  <a className="text-[#d5ceb6] font-montserrat w-fit hover:text-[#2C3333] hover:bg-[#d5ceb6]">AGIL</a> . </m.p>
                <br />
                <m.p className="font-sans font-thin text-justify tracking-wider  text-[#d5ceb6]"
                initial={{ opacity: 0, y:500  }}
                animate={{  opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],x:[0],y:[500,0] }}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,500] }}
                
                
                
                >
                    I'm an <a className="text-[#d5ceb6]  font-montserrat w-fit hover:text-[#2C3333] font-bold hover:bg-[#d5ceb6]">Informatics Engineering graduate with over 2 years of professional experience as a Web Developer.</a> <br /> I have hands-on experience in developing and maintaining web applications using <a className="text-[#d5ceb6] font-bold  font-montserrat w-fit hover:text-[#2C3333] hover:bg-[#d5ceb6]">Laravel and CodeIgniter,</a><br /> focusing on building efficient, scalable, and user-friendly systems In addition to development,design and technology trends.</m.p>
                    <br />
                <m.p className="font-sans font-thin text-justify  tracking-wider text-[#d5ceb6]"
                initial={{ opacity: 0, y:500  }}
                animate={{  opacity: [0, 1, 0, 1,],x:[0],y:[500,0] }}
                transision={{ease:'anticipate',duration:2}}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[500,0] }}
                
                
                
                
                >
                 <a className="text-[#d5ceb6]  font-montserrat w-fit hover:text-[#2C3333] font-bold hover:bg-[#d5ceb6]">I have also been involved in user support, troubleshooting, and providing training and system socialization</a> <br />
                  to ensure users can effectively utilize the applications.
                </m.p>
                <m.p className="font-sans font-thin text-justify  tracking-wider text-[#d5ceb6]"
                initial={{ opacity: 0, y:500  }}
                animate={{  opacity: [0, 1, 0, 1,],x:[0],y:[500,0] }}
                transision={{ease:'anticipate',duration:2}}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[500,0] }}
                
                
                
                
                >
                    <br />
                I am committed to continuous learning and professional growth, and also <br /> staying updated with the latest technology trends, and delivering high-quality solutions. <br />
                  I am passionate about contributing my skills to create impactful and engaging digital experiences.
                </m.p>

            </div>
            <m.div className="flex items-center justify-center flex-col"
            initial={{ opacity: 0, y:500  }}
            animate={{  opacity: [0, 1, 0, 1,],x:[0],y:[500,0] }}
            transision={{ease:'anticipate',duration:2}}
            exit={{ opacity: [0, 1, 0, 1, 0] ,x:[500,0] }}
            >
                <div className=" flex items-center justify-center bg-[#d5ceb6]   h-[250px] w-[250px] rounded-sm overflow-hidden">
                <img src={Me}/>
                

                </div>
                <NavLink className="text-[#F0E9D2] group flex items-center w-fit justify-center border px-2 border-[#d5ceb6] mt-2 font-bold mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2]" to={'mailto:ariagilprayoga@gmail.com'}>CONTACT ME
                    <svg className="fill-[#F0E9D2] group-hover:fill-[#2C3333]" fill="#000000" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"/></svg>
                 </NavLink>
            </m.div>
            

        </div>
        <Footer/>


       </div>
        
        
        
        
        
    )
}
export default AboutMe