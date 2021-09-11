import { RepertoireCategory } from "../RepertoireCategoryComponent/model/repetoire_category.model";
import { MusicPiece } from "../RepertoireCategoryComponent/RepertoireEntryComponent/model/music_piece.model";
import { RepertoireEntry } from "../RepertoireCategoryComponent/RepertoireEntryComponent/model/repertoire_entry.model";
import { Componist } from "../RepertoireCategoryComponent/RepertoireEntryComponent/model/componist.model";

const repetoireList = [
    new RepertoireCategory("Kantaten, Oratorien und Messen", [
        new RepertoireEntry(new Componist("Dietrich Buxtehude", "(1637 – 1707)"), [
            new MusicPiece("Singet dem Herrn ein neues Lied BuxWV 98"),
            new MusicPiece("Schaffe in mir, Gott BuxWV 95"),
            new MusicPiece("Herr, wenn ich nur Dich hab BuxWV 38"),
            new MusicPiece("Cantate Dominum canticum novum BuxWV 12"),
            new MusicPiece("Afferte Domino gloriam honorem BuxWV 2"),
        ]),
        new RepertoireEntry(new Componist("Marc-Antoine Charpentier", "(1643 – 1704)"), [
            new MusicPiece("Messe de Minuit de Noël")
        ]),
        new RepertoireEntry(new Componist("Heinrich Ignaz Franz Biber", "(1644 – 1704)"), [
            new MusicPiece("Missa Bruxellensis")
        ]),
        new RepertoireEntry(new Componist("Johann Christoph Pepusch", "(1667 – 1752)"), [
            new MusicPiece("When Loves soft passion")
        ]),
    ]),
    new RepertoireCategory("Oper", [
        new RepertoireEntry(new Componist("Georg Friedrich Händel", "(1685 – 1759)"), [
            new MusicPiece("Morgana aus „Alcina“"),
        ]),
        new RepertoireEntry(new Componist("Giovanni Battista Pergolesi", "(1710 – 1736)"), [
            new MusicPiece("Serpina aus „La serva padrona“")
        ]),
        new RepertoireEntry(new Componist("Franz Joseph Haydn", "(1732 – 1809)"), [
            new MusicPiece("Silvia* aus „L’isola disabitata“ Hob. 28/9"),
            new MusicPiece("Baronessa* aus „La vera Costanza“ Hob. 28/8")
        ]),
        new RepertoireEntry(new Componist("Wolfgang Amadeus Mozart", "(1756 – 1791)"), [
            new MusicPiece("Zerlina aus „Don Giovanni“ KV 527"),
            new MusicPiece("1. Dame und Königin der Nacht aus „Die Zauberflöte“ KV 620"),
            new MusicPiece("Mme Herz* aus „Der Schauspieldirektor“ KV 486"),
            new MusicPiece("Blonde aus „Die Entführung aus dem Serail“ KV 384"),
            new MusicPiece("Susanna aus „Le nozze di Figaro“ KV 492"),
            new MusicPiece("Ilia aus „Idomeneo“ KV 366"),
            new MusicPiece("Fauno aus „Ascanio in Alba“ KV 111"),
        ]),
    ]),
];


export function GetRepetoire() {
    return repetoireList;
}