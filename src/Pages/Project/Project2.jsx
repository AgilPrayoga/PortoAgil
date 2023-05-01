import NavBar from "../../Components/NavBar"
import Footer from "../../Components/Footer"
import { motion as m } from "framer-motion"
import Antique from"../../assets/antique.png"




const Project1= () =>{
    return(
       <div>
        
        <NavBar/>
        <div className="py-32 sm:py-0 sm:h-[90vh] bg-[#2C3333] flex justify-center items-center flex-col-reverse sm:flex-row-reverse pt-4">
        <m.div className="flex items-center w-[70%] sm:w-[30%] border border-[#d5ceb6] p-2 overflow-hidden"
            initial={{ opacity: 0, y:500  }}
            animate={{  opacity: [0, 1, 0, 1,],x:[0],y:[500,0] }}
            transision={{ease:'anticipate',duration:2}}
            exit={{ opacity: [0, 1, 0, 1, 0] ,x:[500,0] }}
            
            >
                <img src={Antique}/>
            </m.div>
        <div className="m-4">
                <m.h1 className="font-extrabold font-montserrat text-[30px] text-[#d5ceb6] mb-2 "
                initial={{ opacity: 0, y:100  }}
                animate={{  opacity: [0, 1, 0, 1],x:[0],opacity: [0, 1, 0, 1,],y:[-300,0] }}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,300] }}

                ><a className="text-[#2C3333] bg-[#d5ceb6] ">SO</a>BAT LOKER</m.h1>
                <m.p className="font-sans font-thin tracking-wide text-[#d5ceb6]"
                initial={{ opacity: 0, x:[300]  }}
                animate={{  opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],x:[0],opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],x:[-300,0] }}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,300] }}
                
                
                >Antique Gallery is a college project website. <br /> <a className="text-[#d5ceb6] font-montserrat w-fit hover:text-[#2C3333] hover:bg-[#d5ceb6]">The main idea</a> is to create a website for an antique shop <br /> that can be marketed online. Transactions are carried out via whats app. <br /> There are admin features to add, delete, edit items. </m.p>
                
                <m.p className="font-sans font-thin text-justify  tracking-wide text-[#d5ceb6]"
                initial={{ opacity: 0, y:500  }}
                animate={{  opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],x:[0],opacity: [0, 1, 0, 1,0, 1, 0, 1,0, 1, 0, 1],y:[500,0] }}
                exit={{ opacity: [0, 1, 0, 1, 0] ,x:[0,500] }}
                
                
                
                >
                    This website was built using the <a className="text-[#d5ceb6]  font-montserrat w-fit hover:text-[#2C3333] hover:bg-[#d5ceb6]">Laravel framework and uses tailwind, <br /> and the flowbite</a> library on the interface.
                </m.p>
                  
                
            </div>
            
           
        </div>
        <Footer/>
       </div>
        
        
        
        
        
    )
}
export default Project1