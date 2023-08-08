"use client";
import Link from "next/link";
import { useState } from "react";
import UserAuth from '@/components/UserAuth';
import { usePathname  } from "next/navigation";

const Navbar = () => {

    const [toggle , setToggle] = useState(true);
    const activeHambuger = toggle ? 'hambuger' : 'activeHumbuger';
    const navlink = toggle ? 'navlink' : 'navlinkActive';

    const router = usePathname ();
    const path = router;
    const disableNavPath = ['/auth/signin','/auth/regis'];
    

    return (
        <>
            {disableNavPath.includes(path) ? (<></>) : (
                <nav className="block w-full h-16">
                    <div className="w-full flex justify-between py-3">        
                        <div className="flex justify-center items-center">
                            <Link className="font-bold" href={"/"}>BlogGoBlogs</Link>
                        </div>
                        
                        <div className="flex gap-3 sm:flex hidden">
                            <Link href={"/create-blog"} className="bg-black text-white font-bold py-2 px-4 rounded active:bg-gray-700" >Create Blog</Link>
                            <UserAuth />
                        </div>
                        
                        <div className="flex gap-3 relative sm:hidden">
                            <div onClick={() => setToggle((prev) => !prev)}>
                                =
                            </div>
                        </div>

                    </div>

                    <div className={activeHambuger}> 
                        <div className="w-full h-full flex flex-col justify-center gap-3 p-5">
                            <Link href={"/"} className={navlink}>Profile</Link>
                            <Link href={"/create-blog"} className={navlink}>Create Blog</Link>
                            <div className="border border-black"/>
                            <Link href={"/"} className={navlink}>Log Out</Link>
                        </div>
                    </div>
                
                </nav>
            )}  
        </>
    );
}
 
export default Navbar;