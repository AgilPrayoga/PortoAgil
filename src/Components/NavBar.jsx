import 'flowbite'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>

            <div className="drawer fixed z-40 ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    {/* Navbar */}
                    <div className="w-full navbar lg:justify-center lg:items-center lg:h-28  bg-[#2C3333]">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#F0E9D2" viewBox="0 0 24 24" className="inline-block w-6 h-6  stroke-[#F0E9D2]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:flex  ">
                            <ul className="flex-none hidden text-[24px] font-bold lg:flex  lg:items-center lg:justify-center ">
                                {/* Navbar menu content here */}
                                <li>
                                    <NavLink className="text-[#F0E9D2] font-thin mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2] " to={'/'}>HOME</NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-[#F0E9D2] font-thin mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2] " to={'/aboutme'}>ABOUT ME</NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-[#F0E9D2] font-thin mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2] " to={'/work'}>WORK</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#2C3333] text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <NavLink className="text-[#F0E9D2] font-thin mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2] " to={'/'}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-[#F0E9D2] font-thin mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2] " to={'/aboutme'}>ABOUT ME</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-[#F0E9D2] font-thin mr-[30px] no-underline font-montserrat hover:text-[#333] hover:bg-[#F0E9D2] " to={'/work'}>WORK</NavLink>
                        </li>

                    </ul>

                </div>
            </div>



        </div>

    )
}
export default NavBar