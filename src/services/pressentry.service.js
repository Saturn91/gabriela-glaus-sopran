import { FlowText } from "../models/flowtext/flowtext.model";
import { FlowTextParagraph } from "../models/flowtext/flowtextparagraph.model";
import { ImageDTO } from "../models/image.model";
import { PressEntry } from "../models/pressentry.model";
import { FlowTextType } from "../models/flowtext/flowtextparagraph.model";
import mrChoufleriePDF from "../test_docs/Monsieur-Choufleuri-Oberbaselbieter-Zeitung.pdf";

const pressEntries = [
    new PressEntry(
        new FlowText([
            new FlowTextParagraph(FlowTextType.TITLE, "Stell dir vor, es ist Tag der offenen Tür, und…"),
            new FlowTextParagraph(FlowTextType.PARAGRAPH, '„Die öffentliche Probe des Ensembles Operadieschen gab einen Einblick in die hochkonzentrierte Arbeit eines freien Ensembles. Gabriela Glaus (Sopran), Julia Zeier (Mezzosopran), Timothy Löw (Tenor), Maxence Douez (Tenor), Tobias Wurmehl (Bassbariton), Sandra Hamburger (Klavier) und Christian Kipper (Regie) meisterten die kleine Operette mit Bravour…'),
            new FlowTextParagraph(FlowTextType.PARAGRAPH, 'Nach fünfviertel Stunden hatte man nicht nur einen Einblick in die Operette, sondern auch in die Knochenarbeit eines jungen freien Ensembles, das neben seiner Professionalität auch immer noch viel Spass durchscheinen liess.“'),
        ]),
        new Date('2020-03-19'),
        undefined,
        mrChoufleriePDF,
        new ImageDTO('missionImpossible', 'pressvoice image', 'https://i.postimg.cc/C5zgTkc0/Choufleuri-725-Ingo-Hoehn-1-scaled.jpg')
    ),
    new PressEntry(
        new FlowText([
            new FlowTextParagraph(FlowTextType.TITLE, "Und selbst die Pfarrkirche St. Marzellus hat eifrig mitvibriert"),
            new FlowTextParagraph(FlowTextType.PARAGRAPH, 'Es basiert sicher auf der aussergewöhnlichen Fähigkeit von Gabriela Glaus zu spüren, was mit dem Chor und dem Orchester erreicht werden kann und die Mitglieder entsprechend zu motivieren und zu leiten.'),
            new FlowTextParagraph(FlowTextType.PARAGRAPH, 'Ganzer Artikel, Konzert Mission (Im)Possible, chor cantando Gersau und Juventus Musica Basel'),
            new FlowTextParagraph(FlowTextType.PARAGRAPH, 'Walter Jann, Wochenzeitung Gersau'),
        ]),
        new Date('2019-10-31'),
        "https://www.gabrielaglaus-sopran.ch/wp-content/uploads/Zeitungsberichte-Gersau.pdf",
        undefined,
        new ImageDTO('missionImpossible', 'pressvoice image', 'https://i.postimg.cc/7YXqGPTj/Bild-cantando-2.png')
    ),
    new PressEntry(
        new FlowText([
            new FlowTextParagraph(FlowTextType.TITLE, "Ein Titel"),
            new FlowTextParagraph(FlowTextType.PARAGRAPH, 'Erster Paragraph'),
            new FlowTextParagraph(FlowTextType.TITLE, "Ein zweiter Titel"),
            new FlowTextParagraph(FlowTextType.PARAGRAPH, 'Zweiter Pargraph'),
            new FlowTextParagraph(FlowTextType.PARAGRAPH, 'Bild, und Link sind absolut optional, du kannst entscheiden ob du ein PDF oder einen externen Link unter "mehr" öffnen willst'),
            new FlowTextParagraph(FlowTextType.PARAGRAPH, 'Geolino: Manuel Geissberger, Autoren Zeile kannst du gestalten wie du möchtest'),
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