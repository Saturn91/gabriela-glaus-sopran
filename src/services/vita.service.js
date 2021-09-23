import { FlowText } from "../models/flowtext/flowtext.model";
import { FlowTextParagraph } from "../models/flowtext/flowtextparagraph.model";
import { getAllDocsFromCollection } from "./firebase-connection.service";

export function getVita() {
    return new Promise(
      (resolve, reject) => {
        getAllDocsFromCollection("vita").then(results => {
          let flowTextParagraphs = [];
          results.sort((a,b) => a.data.textPos - b.data.textPos)
          results.forEach(result => {
            flowTextParagraphs.push(new FlowTextParagraph(result.data.flowTextParagraphType, result.data.text, result.data.value, result.id));
          })
          resolve(new FlowText(flowTextParagraphs));
        });
      }
    )
}
