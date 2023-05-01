import 'flowbite'
import { NavLink } from 'react-router-dom'
const NavBar = () =>{
    return(
        <div>
        
        
        
        <div  className="fixed top-0 left-0 z-40 w-screen sm:h-28 h:52  transition translate-x-0 sm:translate-x-0 " >
            <div className=" flex justify-center items-center  h-full  px-3 py-4  bg-[#2C3333] ">
                
                <ul className=" text-[24px] font-bold flex  items-center justify-center justify-self-center">
                    <li>
                        
                        <NavLink className="text-[#F0E9D2] font-thin mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2] " to={'/'}>HOME</NavLink>
                    </li>
                    
                    
                    <li className="flex items-center">
                        <NavLink className="text-[#F0E9D2]  font-thin mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2]"to={'/aboutme'}>ABOUT ME</NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink className="text-[#F0E9D2]  font-bold no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2]" to={'/work'}>WORK</NavLink>
                    </li>
                    
                    
                    
                    
                </ul>
            </div>
            
        </div>
    </div>
    )
}
export default NavBar