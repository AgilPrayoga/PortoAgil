import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import Dipo from "../assets/dipo.png"
import { NavLink } from "react-router-dom"
import { motion as m } from "framer-motion"



const Home= () =>{
    return(
       <div>
        
        <NavBar/>
        <div className="h-[90vh] bg-[#2C3333] flex justify-center items-center pt-4">
            <div className="flex  flex-col items-left">
            <m.h1 className="font-extrabold font-montserrat text-[40px] text-[#d5ceb6] "
            initial={{ opacity: 0, x:100  }}
            animate={{  opacity: [0, 1, 0, 1],x:[100,0],y:[0] }}
            exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,100] }}
            
            >DIGITAL UNIVERSE<a className="text-[#2C3333] bg-[#d5ceb6] "></a></m.h1>
            <m.div
            initial={{ opacity: 0, y:100  }}
            animate={{  opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],x:[0],opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],y:[100,0] }}
            exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,100] }}
            
            >
            <h1 className="font-bold font-montserrat  tracking-[30px] text-justify  text-[#2C3333] bg-[#d5ceb6] w-fit ">EXPLORERy </h1>
            <br />
            <h3 className="font-bold font-montserrat text-[18px] text-[#d5ceb6] ">Student | Web Developer | UI&UX Designer</h3>
            <h3 className="font-thin font-montserrat text-[16px] text-[#d5ceb6] ">ヽ(*・ω・)ﾉCorious about me? <NavLink to={"/aboutme"} className="text-[#d5ceb6]  font-montserrat w-fit hover:text-[#2C3333] hover:bg-[#d5ceb6]"> Learn More </NavLink>  </h3>
            </m.div>
            
            </div>
            
            <m.div className="m-10 flex items-center flex-col"
            initial={{ opacity: 0, y:100  }}
            animate={{  opacity: [0, 1, 0, 1,],x:[0],y:[100,0] }}
            exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,100] }}
            
            
            
            >
                <img className="h-[200px]" src={Dipo} />
                <p className="text-[#d5ceb6]">hello,i'm dipo!</p>
            </m.div>

        </div>
        <Footer/>


       </div>
        
        
        
        
        
    )
}
export default Home