import { AudioDTO } from "../models/audio.model";
import audio1 from "../test_audio/Charles-Uzor-Charles-Uzor-Songs-on-2-poems-by-Seferis-Charles-Uzor-Songs-on-2-poems-by-Seferis.mp3";
import audio2 from "../test_audio/Johann-Sebastian-Bach-Wie-der-Regen-und-Schnee-vom-Himmel-fällt-Mein-Seelenschatz-ist-Gottes-Wort.mp3";
import audio3 from "../test_audio/Tornami-a-vagheggiar_G.-F.-Haendel_Verruecktes-Leben_Aug-20.mp3";

const audios = [
    new AudioDTO(
        "Songs on 2 poems by Seferis",
        "Ch. Uzor",
        "Gabriela Glaus, Sopran - Manuel Bärtsch, Klavier",
        audio1,
        new Date('2021-07-24T19:30:00'),
        undefined
    ),
    new AudioDTO(
        "Mein Seelenschatz ist Gottes Wort",
        "J. S. Bach",
        "Gabriela Glaus",
        audio2,
        new Date('2021-05-24T19:30:00'),
        "https://i.postimg.cc/W1ZSvP0B/headShot.jpg"
    ),
    new AudioDTO(
        "Tornami a vagheggiar aus Alcina",
        "G. F. Händel",
        "Gabriela Glaus, Sopran - Janina Schülin, Klavier",
        audio3,
        new Date('2020-07-24T19:30:00'),
        undefined
    )
];

export function getTestAudio() {
    return audios.sort((a, b) => b.date - a.date);
}