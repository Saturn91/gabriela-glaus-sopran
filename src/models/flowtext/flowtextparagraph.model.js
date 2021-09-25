export const FlowTextType = {
    TITLE: 1,
    PARAGRAPH: 2,
    LINK: 3
}

export class FlowTextParagraph {
    constructor(textPos, type, text, value, databaseUrl, databaseId) {
        this.textPos = textPos;
        this.type = type;
        this.text = text;  
        this.value = value;
        this.databaseUrl = databaseUrl;      
        this.databaseId = databaseId;
    }
}