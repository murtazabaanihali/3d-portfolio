import { useState } from "react";
import { Menu, X } from "lucide-react";

import { styles } from "../styles";
import { navLinks } from "../lib/constants";
import { cn } from "../lib/utils";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className={cn(styles.paddingX, "w-full flex items-center py-3 fixed top-0 z-20 bg-primary/10 shadow-xl backdrop-blur-2xl ring-1 ring-black-300")}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <a
                    href='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={"./logo.svg"} alt='logo' className='w-9 h-9 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                        Murtaza &nbsp;
                        <span className='md:block hidden'> | Software Developer</span>
                    </p>
                </a>

                <ul className='list-none hidden md:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='md:hidden flex flex-1 justify-end items-center'>
                    {toggle ? (
                        <X className="size-7" onClick={() => setToggle((p) => !p)} />
                    ) : (
                        <Menu className="size-7" onClick={() => setToggle((p) => !p)} />
                    )}

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 bg-black-100 shadow-xl backdrop-blur-2xl ring-1 ring-black-300 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
