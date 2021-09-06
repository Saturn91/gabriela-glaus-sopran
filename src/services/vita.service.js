import { FlowText } from "../models/flowtext/flowtext.model";
import { FlowTextParagraph } from "../models/flowtext/flowtextparagraph.model";

const vitaFlowText = new FlowText([
  new FlowTextParagraph(true, "Gabriela Glaus – Sopran"),
  new FlowTextParagraph(false, "Die Sopranistin Gabriela Glaus wurde 1996 in St. Gallen geboren. Seit September 2020 studiert sie im Master in Performance bei Simone Durrer-Stock und seit Januar 2020 im DAS Vokalpädagogik an der Hochschule Luzern Musik, nachdem sie im Sommer an derselben Hochschule den Master in Musikpädagogik, Major Schulmusik II bei Liliane Zürcher und Simone Durrer-Stock abgeschlossen hatte."),
  new FlowTextParagraph(false, "Meisterkurse bei Malcolm Walker, Rosalba Trevisan, Brigitte Geller, Angelika Luz und Emma Kirkby ergänzten ihr Studium."),
  new FlowTextParagraph(false, "Sie konnte ihre Ausbildung durch zahlreiche Konzertauftritte und Opernproduktionen bereichern. So hat sie bereits Madame Herz in «Der Schauspieldirektor» und Bastienne in «Bastien und Bastienne» (Wolfgang Amadeus Mozart) sowie Silvia in «L’isola disabitata», die Baronessa Irene in «La vera Costanza» (Joseph Haydn) und Ernestine in «Monsieur Choufleuri restera chez lui le…» (Jacques Offenbach) gespielt. Im Dezember 2019 hatte sie mit dem Universitätschor Luzern und dem City Light Symphony Orchestra ihr Debut im KKL."),
  new FlowTextParagraph(false, "Im Mai 2019 gewann Gabriela Glaus den Edwin Fischer Anerkennungspreis 2019."),
  new FlowTextParagraph(false, "Gabriela Glaus spezialisiert sich vor allem auch auf alte und zeitgenössische Musik und bringt beide Stile regelmässig mit Leidenschaft und Freude auf die Bühne."),
  new FlowTextParagraph(false, "Weiter tritt sie als Solisten und als Mitglied in diversen Ensembles, darunter das Collegium Vocale Luzern, das Collegium Musicum Luzern, die Bachakademie Luzern und der Opernchor des Luzerner Theaters, regelmässig in Konzerten und Gottesdiensten auf."),
  new FlowTextParagraph(false, "Gabriela Glaus leitet mit Freude den Chor von Juventus Musica Basel, den Chor Schwarzenberg sowie den Chor cantando Gersau und unterrichtet an der Primarschule in Wohlen Musik sowie an den Musikschulen Schwarzenberg und Gersau Stimmbildung."),
]);

export function getVita() {
    return vitaFlowText;
}