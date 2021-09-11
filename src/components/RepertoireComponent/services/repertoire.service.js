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
        ])
    ]),
];


export function GetRepetoire() {
    return repetoireList;
}