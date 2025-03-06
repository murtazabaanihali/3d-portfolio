import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
};

type ProjectImageFolderKeys = "dhegen" | "dhesend" | "portfolio";
export const getAllImageFilesFromFolder = (folderKey: ProjectImageFolderKeys) => {
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