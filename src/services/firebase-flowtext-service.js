import { FlowText } from "../models/flowtext/flowtext.model";
import { FlowTextParagraph } from "../models/flowtext/flowtextparagraph.model";
import { getAllDocsFromCollection, updateFireBaseDoc } from "./firebase-connection.service";

export function getFlowTextFromFirebase(collectionUrl) {
    return new Promise(
      (resolve, reject) => {
        getAllDocsFromCollection(collectionUrl).then(results => {
          let flowTextParagraphs = [];
          results.sort((a,b) => a.data.textPos - b.data.textPos)
          results.forEach(result => {
            
            flowTextParagraphs.push(new FlowTextParagraph(result.data.textPos, result.data.flowTextParagraphType, result.data.text, result.data.value, collectionUrl, result.id));
          })
          resolve(new FlowText(flowTextParagraphs));
        });
      }
    )
}

export function SetFlowTextOnFirebase(flowTextParagraph) {
    updateFireBaseDoc(flowTextParagraph.databaseUrl, flowTextParagraph.databaseId, {
      flowTextParagraphType: flowTextParagraph.type,
      text: flowTextParagraph.text,
      textPos: flowTextParagraph.textPos
    });
}