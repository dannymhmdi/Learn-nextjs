'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainLayout = ({ children }) => {
    const pathName = usePathname()
    console.log('pathName',pathName);
    const links = [
        {id:1,name:'About Us',route:'/about-us'},
        {id:2,name:'Login',route:'/login'},
        {id:3,name:'Dashboard',route:'/dashboard'},
    ]
  return (
    <>
      <header className="bg-slate-400 border-b-2 p-2">
      {links.map(link => {
        return (
            <Link
            key={link.id}
            href={link.route}
            className={`bg-slate-800 text-white w-24 text-center rounded-lg p-3 ml-2 mt-2 inline-block ${pathName === 'learn-nextjs-nine-ruddy.vercel.app/about-us' ? 'bg-red-500': ''}`}
          >
            {link.name}
          </Link>
        )
      })}
      </header>
      <main>{children}</main>
      <footer className="bg-slate-600 border-b-2 p-2">footer</footer>
    </>
  );
};

export default MainLayout;
