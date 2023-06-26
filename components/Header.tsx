import React from "react";
import Link from "next/link"
import DropdownMenu from "./DropdownMenu";

const Header = () => {
    return (
        <div>
            <Link href="/">
            <div>
                <h1 className="text-4xl text-white font-bold no-underline m-0">WXYC 89.3FM</h1>
                <h3>UNC-Chapel Hill's student-run, freeform radio station</h3>
            </div>
            
            </Link>
    
            <div className="flex flex-row justify-around items-start bg-white py-3 w-full">
                <Link href="/about">
                    <p className="text-black text-base no-underline">About</p>
                </Link>
                <Link href="/programming" className="nav">
                    <p className="text-black text-base no-underline">Programming</p>
                </Link>
                <Link href="/archive">
                    <p className="text-black text-base no-underline">Archive</p>
                </Link>
                <Link href="/blog">
                    <p className="text-black text-base no-underline">Blog</p>
                </Link>
                <Link href="/contact">
                    <p className="text-black text-base no-underline">Contact</p>
                </Link>

                <DropdownMenu/>
 
                <Link href="https://wxyc.bigcartel.com/" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" className="text-black text-base no-underline">Merch</a>
                </Link>
            </div>      
        </div>
    )
}

export default Header;