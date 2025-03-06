import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = ({ isWebglEnabled }: { isWebglEnabled: boolean; }) => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-20 sm:top-28 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 md:h-[21rem] h-40 violet-gradient' />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='text-[#915EFF]'>Murtaza</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100/80`}>
                        A Full Stack Developer who handles everything <br className="max-sm:hidden lg:hidden" /> from development to deployment. I develop <br className="max-sm:hidden lg:hidden" /> seamless, user-friendly web & mobile applications <br className="max-sm:hidden lg:hidden" /> with clean code and scalable solutions. <br className="max-sm:hidden lg:hidden" /> Let’s build something amazing!
                    </p>
                </div>
            </div>

            <ComputersCanvas isWebglEnabled={isWebglEnabled} />

            <div className='absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
