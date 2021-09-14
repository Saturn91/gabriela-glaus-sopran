import { ImageDTO } from "../../../models/image.model";
import { ImagePost } from "../../../models/imagepost.modle";
import { FlowText } from "../../../models/flowtext/flowtext.model";
import { FlowTextParagraph, FlowTextType } from "../../../models/flowtext/flowtextparagraph.model" 

const lessons = [
    new ImagePost(new ImageDTO("lesson_Image", "Description", "https://i.postimg.cc/NjWtfWyf/Lesson-Banner.jpg"), new FlowText([
        new FlowTextParagraph(FlowTextType.TITLE, "Musikschulen"),
        new FlowTextParagraph(FlowTextType.PARAGRAPH, "Ich unterrichte an der Musikschule in Gersau und in Schwarzenberg Gesang und den Kinderchor."),
        new FlowTextParagraph(FlowTextType.PARAGRAPH, "Möchten Sie sich selbst oder Ihr Kind für den Gesangsunterricht anmelden, zögern Sie nicht, mich zu kontaktieren. Ich freue mich auf Sie!"),
        new FlowTextParagraph(FlowTextType.LINK, "Website Musikschule Gersau", "https://www.bezirksschule-gersau.ch/musikschule/"),
        new FlowTextParagraph(FlowTextType.LINK, "Website Musikschule Schwarzenberg","https://schwarzenberg.ch/schule/musikschule"),
    ],
    )),
    new ImagePost(new ImageDTO("lesson_Image", "Description", "https://i.postimg.cc/NjWtfWyf/Lesson-Banner.jpg"), new FlowText([
        new FlowTextParagraph(FlowTextType.TITLE, "Gesangsunterricht"),
        new FlowTextParagraph(FlowTextType.PARAGRAPH, "„Singen ist das Fundament zur Musik in allen Dingen.“ - (Georg Philipp Telemann)"),
        new FlowTextParagraph(FlowTextType.PARAGRAPH, "Das schönste am Singen ist, dass man mit der eigenen Stimme Gefühle ausdrücken und andere Menschen berühren kann. Im Unterricht lernt man die eigene Stimme kennen und entwickelt sie weiter."),
        new FlowTextParagraph(FlowTextType.PARAGRAPH, "Wenn Sie Lust haben, singen zu lernen, zögern Sie nicht, mich über das Kontaktformular anzuschreiben."),
        new FlowTextParagraph(FlowTextType.PARAGRAPH, "Ich freue mich darauf, viele singbegeisterte Menschen kennenzulernen, sie auf diesem Weg zu betreuen, anzuleiten und zu coachen.")
    ],
    )),
];

export function getLessons() {
    return lessons
}
