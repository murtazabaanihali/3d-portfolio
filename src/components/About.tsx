import { Check, Copy } from "lucide-react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useCopyToClipboard } from "../lib/utils/hooks";
import SectionWrapper from "./section-wrapper";
import { EarthCanvas } from "./canvas";
import { Button } from "./ui/button";
import { CONTACT_EMAIL } from "../lib/constants";
import { styles } from "../styles";

const About = ({ isWebglEnabled }: { isWebglEnabled: boolean; }) => {
    const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 1000 });

    return (
        <div>
            <div className="mb-4">
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </div>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <LazyLoadImage
                            src={"./about/grid1.png"}
                            className="w-full sm:h-[276px] h-fit object-contain"
                            alt="grid1"
                            effect="opacity"
                        />
                        <div>
                            <p className="grid-headtext">
                                Hi, I'm Murtaza
                            </p>
                            <p className="grid-subtext">
                                With 4 years of experience, I have honed my skills in frontend and backend development of website and mobile apps.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <LazyLoadImage
                            src={"./about/grid2.png"}
                            className="w-full sm:h-[276px] h-fit object-contain"
                            alt="grid2"
                            effect="opacity"
                        />
                        <div>
                            <p className="grid-headtext">
                                Tech stack
                            </p>
                            <p className="grid-subtext">
                                I specialize in JavaScript and Python, and have extensive experience with JavaScript and Node JS frameworks such as React, Next.js, Express, and more. I am also proficient in Python and its frameworks, including Django, Flask, FastAPI, and more. Additionally, I have a deep understanding of cloud infrastructures such as AWS, Google Cloud, Azure, Supabase, Upstash and more.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit">
                            <EarthCanvas isWebglEnabled={isWebglEnabled} />
                        </div>
                        <div className="grid place-items-center">
                            <p className="grid-headtext">
                                I work remotely across most timezones.
                            </p>
                            <p className="grid-subtext">
                                I'm based in India, with remote work available.
                            </p>
                            <a href="#contact">
                                <Button className="w-fit mt-10 hover:opacity-80 cursor-pointer">
                                    <span className="rounded-full size-3 animate-pulse bg-green-700" />
                                    Contact me
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <LazyLoadImage
                            src={"./about/grid3.png"}
                            className="w-full sm:h-[266px] h-fit object-contain"
                            alt="grid3"
                            effect="opacity"
                        />
                        <div className="text-center mx-auto lg:mt-20">
                            <p className="grid-headtext">
                                My Passion for Coding
                            </p>
                            <p className="grid-subheadtext">
                                I love solving problems and building things through code.
                                <br />
                                Coding isn't just my profession - it is my passion.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2 md:col-span-2">
                    <div className="grid-container">
                        <LazyLoadImage
                            src={"./about/grid4.png"}
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                            alt="grid4"
                            effect="opacity"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">
                                Contact me
                            </p>
                            <div className="copy-container" onClick={() => copyToClipboard(CONTACT_EMAIL)} data-umami-event="email-copied">
                                {isCopied ? <Check size={16} /> : <Copy size={16} />}
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">{CONTACT_EMAIL}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(About, "about");