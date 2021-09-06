import { FlowText } from "../models/flowtext/flowtext.model";
import { FlowTextParagraph } from "../models/flowtext/flowtextparagraph.model";
import { ImageDTO } from "../models/image.model";
import { PressEntry } from "../models/pressentry.model";
import mrChoufleriePDF from "../test_docs/Monsieur-Choufleuri-Oberbaselbieter-Zeitung.pdf";
import { getImageCollections } from "./image.service";

const pressEntries = [
    new PressEntry(
        new FlowText([
            new FlowTextParagraph(true, "Stell dir vor, es ist Tag der offenen Tür, und…"),
            new FlowTextParagraph(false, '„Die öffentliche Probe des Ensembles Operadieschen gab einen Einblick in die hochkonzentrierte Arbeit eines freien Ensembles. Gabriela Glaus (Sopran), Julia Zeier (Mezzosopran), Timothy Löw (Tenor), Maxence Douez (Tenor), Tobias Wurmehl (Bassbariton), Sandra Hamburger (Klavier) und Christian Kipper (Regie) meisterten die kleine Operette mit Bravour…'),
            new FlowTextParagraph(false, 'Nach fünfviertel Stunden hatte man nicht nur einen Einblick in die Operette, sondern auch in die Knochenarbeit eines jungen freien Ensembles, das neben seiner Professionalität auch immer noch viel Spass durchscheinen liess.“'),
        ]),
        new Date('2020-03-19'),
        undefined,
        mrChoufleriePDF,
        new ImageDTO('missionImpossible', 'pressvoice image', 'https://i.postimg.cc/C5zgTkc0/Choufleuri-725-Ingo-Hoehn-1-scaled.jpg')
    ),
    new PressEntry(
        new FlowText([
            new FlowTextParagraph(true, "Und selbst die Pfarrkirche St. Marzellus hat eifrig mitvibriert"),
            new FlowTextParagraph(false, 'Es basiert sicher auf der aussergewöhnlichen Fähigkeit von Gabriela Glaus zu spüren, was mit dem Chor und dem Orchester erreicht werden kann und die Mitglieder entsprechend zu motivieren und zu leiten.'),
            new FlowTextParagraph(false, 'Ganzer Artikel, Konzert Mission (Im)Possible, chor cantando Gersau und Juventus Musica Basel'),
            new FlowTextParagraph(false, 'Walter Jann, Wochenzeitung Gersau'),
        ]),
        new Date('2019-10-31'),
        "https://www.gabrielaglaus-sopran.ch/wp-content/uploads/Zeitungsberichte-Gersau.pdf",
        undefined,
        new ImageDTO('missionImpossible', 'pressvoice image', 'https://i.postimg.cc/7YXqGPTj/Bild-cantando-2.png')
    ),
    new PressEntry(
        new FlowText([
            new FlowTextParagraph(true, "Ein Titel"),
            new FlowTextParagraph(false, 'Erster Paragraph'),
            new FlowTextParagraph(true, "Ein zweiter Titel"),
            new FlowTextParagraph(false, 'Zweiter Pargraph'),
            new FlowTextParagraph(false, 'Bild, und Link sind absolut optional, du kannst entscheiden ob du ein PDF oder einen externen Link unter "mehr" öffnen willst'),
            new FlowTextParagraph(false, 'Geolino: Manuel Geissberger, Autoren Zeile kannst du gestalten wie du möchtest'),
        ]),
        new Date('2021-09-06'),
        undefined,
        undefined,
        undefined
    )
]

export function getPressEntries() {
    return pressEntries.sort((a, b) => b.date - a.date);
}