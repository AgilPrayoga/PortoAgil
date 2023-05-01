import 'flowbite'
import { NavLink } from 'react-router-dom'
const NavBar = () =>{
    return(
        <div>
        
        <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex z-20 fixed items-center p-2 mt-2 ml-3 sm:hidden text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="#f6e196" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>
        
        <div id="separator-sidebar" className="fixed top-0 left-0 z-40 w-screen sm:h-28 h:52  transition translate-x-full sm:translate-x-0 " aria-label="Sidebar">
            <div className=" flex flex-grid justify-center items-center  h-full  px-3 py-4  bg-[#2C3333] ">
                
                <ul className=" text-[24px] font-bold sm:flex hidden items-center justify-center justify-self-center">
                    <li>
                        
                        <NavLink className="text-[#F0E9D2] font-thin mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2] " to={'/'}>HOME</NavLink>
                    </li>
                    
                    
                    <li className="flex items-center">
                        <NavLink className="text-[#F0E9D2]  font-thin mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2]"to={'/aboutme'}>ABOUT ME</NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink className="text-[#F0E9D2]  font-bold mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2]" to={'/work'}>WORK</NavLink>
                    </li>
                    
                    
                    
                    
                </ul>
            </div>
            <div>
                <div className=" font-medium flex sm:hidden flex-col items-center justify-center">
                    <a className="no-underline"href=''>
                        <li className="bg-gray-200 w-screen list-none py-4 flex justify-center">
                            
                            <h3 className="text-[#333] font-bold mr-[30px] no-underline font-montserrat hover:text-[#333] " >Home</h3>
                        </li>
                    </a>
                    <a className="no-underline" href=''>
                        <li className="bg-gray-200 w-screen list-none py-4 flex justify-center">
                            
                            <h3 className="text-[#333] font-bold mr-[30px] no-underline font-montserrat hover:text-[#333] " >Old Stuff</h3>
                        </li>
                    </a>
                    <a className="no-underline" href=''>
                        <li className="bg-gray-200 w-screen list-none py-4 flex justify-center">
                            
                            <h3 className="text-[#333] font-bold mr-[30px] no-underline font-montserrat hover:text-[#333] " >Contact</h3>
                        </li>
                    </a>
                    
                    
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
    )
}
export default NavBar