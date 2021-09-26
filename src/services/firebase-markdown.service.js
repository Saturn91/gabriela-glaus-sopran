import { getTextFileFromFirebase, postTextFileOnFireBase } from "./firebase-connection.service";
import MarkdownIt from "markdown-it";
import { MarkDown } from "../models/markdown-dto.model";

export const markDown = new MarkdownIt();
markDown.options.breaks = true;

export function GetMarkdownFile(path) {
    return new Promise((resolve, reject) => {
        getTextFileFromFirebase(path).then(text => {
            resolve(new MarkDown(text, markDown.render(text), path));
        }).catch((error) => {
            console.error(error);
        })
    }) 
}

export function SaveMarkDownFile(markDown) {
    postTextFileOnFireBase(markDown.path, markDown.code);
}


