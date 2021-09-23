export const FlowTextType = {
    TITLE: 1,
    PARAGRAPH: 2,
    LINK: 3
}

export class FlowTextParagraph {
    constructor(type, text, value, databaseUrl) {
        this.type = type;
        this.text = text;  
        this.value = value;
        this.databaseUrl = databaseUrl;      
    }
}