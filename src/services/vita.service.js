import { GetMarkdownFile } from "./firebase-markdown.service";

export function getVita() {
    return GetMarkdownFile('vita.md');
}
