export class ImageDTO {
    constructor(name, description, url) {
        this.name = name;
        this.description = description;
        this.url = url;
    }

    getImage(style) {
        return <img src={this.url} alt={this.description} className={style}></img>
    }
}