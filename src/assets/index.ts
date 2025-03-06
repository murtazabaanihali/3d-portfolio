import logo from "./logo.svg";

import grid1 from "./about/grid1.png";
import grid2 from "./about/grid2.png";
import grid3 from "./about/grid3.png";
import grid4 from "./about/grid4.png";

import terminal from "./terminal.png";
import globe from "./globe.png";
import computer from "./computer.png";

type ProjectImageFolderKeys = "dhegen" | "dhesend" | "portfolio";
const getAllImageFilesFromFolder = (folderKey: ProjectImageFolderKeys) => {
    let images: string[] = [];

    // used switch because import.meta.glob only accepts static strings
    switch (folderKey) {
        case "dhegen":
            images = Object.keys(import.meta.glob("/public/projects/dhegen/*")); break;
        case "dhesend":
            images = Object.keys(import.meta.glob("/public/projects/dhesend/*")); break;
        case "portfolio":
            images = Object.keys(import.meta.glob("/public/projects/portfolio/*")); break;
        default:
            break;
    };

    return images?.map((path) => path.replace("/public/", "/")).sort();
};

export {
    logo,

    grid1,
    grid2,
    grid3,
    grid4,

    terminal,
    globe,
    computer,

    getAllImageFilesFromFolder
};
