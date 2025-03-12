import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Eye, Github, Scan } from "lucide-react";
import { useState } from "react";

import { styles } from "../styles";
import { Project, projects } from "../lib/constants";
import SectionWrapper from "./section-wrapper";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import {
    Dialog,
    DialogContent,
} from "./ui/dialog";
import { useIsMobile } from "../lib/utils/hooks";
import { cn } from '../lib/utils';

const techStackColors = {
    frontend: "blue-text-gradient",
    backend: "green-text-gradient",
    deployment: "pink-text-gradient"
};

const ProjectCard = ({ ...props }: Project & { onZoomClick: (x: string[]) => void }) => {
    return (
        <div className="bg-tertiary p-5 rounded-2xl max-w-[360px] w-full shrink-0">
            <div className="w-full">
                <Carousel className="w-full">
                    <CarouselContent>
                        {props.images.map((img, index) => (
                            <CarouselItem key={index}>
                                <div className="size-full md:rounded-2xl overflow-hidden rounded-md flex justify-center">
                                    <LazyLoadImage
                                        src={img}
                                        alt={props.name}
                                        className={cn("w-full object-cover object-top md:hover:scale-105 transition-transform md:rounded-2xl aspect-[3/2] rounded-md", props.custom_class)}
                                        effect="opacity"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="relative flex justify-between gap-3 my-6">
                        <div>
                            <CarouselPrevious className="size-5 left-auto right-auto mr-14 cursor-pointer" />
                            <CarouselNext className="size-5 left-auto right-auto ml-8 cursor-pointer" />
                        </div>
                        <div className="flex gap-5">
                            {props.preview && <a className="text-white/70 hover:text-white" title="Preview" href={props.preview} target="_blank">
                                <Eye className="size-5" />
                            </a>}
                            {props.github && <a className="text-white/70 hover:text-white" title="Source code" href={props.github} target="_blank">
                                <Github className="size-5" />
                            </a>}
                            <Scan className="size-5 cursor-pointer text-white/70 hover:text-white" onClick={() => props.onZoomClick(props.images)} />
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className="mt-5">
                <h3 className="font-semibold text-xl">{props.name}</h3>
                <p className="mt-2 text-secondary text-sm">{props.description}</p>
            </div>

            <div className="mt-5">
                <details>
                    <summary className="font-semibold text-lg cursor-pointer">
                        Tech Stack
                    </summary>
                    <div className="text-secondary text-sm ml-4 space-y-2 mt-2">
                        {Object.entries(props.techStack).map(([key, value]) => (
                            <details key={key}>
                                <summary className={`${techStackColors[key as keyof typeof techStackColors]} font-semibold cursor-pointer`}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </summary>
                                <span className="font-medium text-xs ml-1">
                                    {Array.isArray(value) ? value.join(", ") : value}
                                </span>
                            </details>
                        ))}
                    </div>
                </details>
            </div>
        </div>
    );
};

const Works = () => {
    const isMobile = useIsMobile(876);
    const [modal, setModal] = useState<{ open: boolean; images: string[] }>({
        open: false,
        images: []
    });

    const onZoomClick = (images: string[]) => {
        setModal({ open: true, images: images });
    };

    const onModalOpenChange = (open: boolean) => {
        setModal((m) => ({ ...m, open: open }));
    };

    return (
        <>
            <div>
                <p className={`${styles.sectionSubText}`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </div>

            <div className="w-full flex">
                <p
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    These projects showcase my skills and experience through real-world examples of my work. Each project is briefly described, reflecting my ability to solve complex problems, work with different technologies, and manage projects effectively.
                    <br />
                    <br />
                    Some project's code is not made public to prevent copying. If you wish to hire me and need the source code, please contact me.
                </p>
            </div>

            {isMobile ? (
                <Carousel className="w-full select-none">
                    <CarouselContent className="gap-5 p-4">
                        {projects.map((project) => (
                            <ProjectCard
                                onZoomClick={onZoomClick}
                                key={project.name}
                                {...project}
                            />
                        ))}
                    </CarouselContent>
                    <div className="relative flex justify-between gap-6 my-6">
                        <CarouselPrevious className="left-auto right-auto mr-14 cursor-pointer" />
                        <CarouselNext className="left-auto right-auto ml-14 cursor-pointer" />
                    </div>
                </Carousel>
            ) : (
                <div className="mt-20 flex flex-wrap gap-7">
                    {projects.map((project) => (
                        <ProjectCard
                            onZoomClick={onZoomClick}
                            key={project.name}
                            {...project}
                        />
                    ))}
                </div>
            )}
            <Dialog open={modal.open} onOpenChange={onModalOpenChange}>
                <DialogContent className="bg-black sm:max-w-7xl p-0 w-full border overflow-hidden">
                    <Carousel>
                        <CarouselContent>
                            {modal.images.map((img, index) => (
                                <CarouselItem key={index}>
                                    <div className="size-full flex items-center justify-center">
                                        <LazyLoadImage
                                            src={img}
                                            alt={`${name}_image`}
                                            className="max-h-[500px] object-cover object-top"
                                            effect="opacity"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="relative flex justify-center gap-6 py-8 bg-black">
                            <CarouselPrevious className="left-auto right-auto mr-14 cursor-pointer" />
                            <CarouselNext className="left-auto right-auto ml-14 cursor-pointer" />
                        </div>
                    </Carousel>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default SectionWrapper(Works, "projects");