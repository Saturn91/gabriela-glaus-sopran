import { ImageCollection } from '../models/imageCollection.model';
import { ImageDTO } from '../models/image.model';

//images hosted on https://postimages.org/

const imagePlaceHolderUrls = [
    new ImageDTO("img1","descriptrion1","https://i.postimg.cc/W1ZSvP0B/headShot.jpg"),
    new ImageDTO("img2","descriptrion2","https://i.postimg.cc/B6SCHLR3/image1.jpg"),
    new ImageDTO("img3","descriptrion3","https://i.postimg.cc/BvcgjcYN/image-landscape.jpg" ),
    new ImageDTO("img1","descriptrion1","https://i.postimg.cc/tJhKzc4V/H85-4175.jpg"),
    new ImageDTO("img2","descriptrion2","https://i.postimg.cc/Dyw66D0k/Harald-Bader-HAROLD-PHOTOGRAPHY-CH-19.jpg" )
]

const imageCollections = [
    new ImageCollection(imagePlaceHolderUrls, "Fotoshooting Herbst 19"),
    new ImageCollection(imagePlaceHolderUrls, "Monsieur Choufleuri, Offenbach, Frühling 2020"),
    new ImageCollection(imagePlaceHolderUrls, "Porträts")
];

export function getTestImage(style) {
    return <img src="https://i.postimg.cc/B6SCHLR3/image1.jpg" className={style} alt="testImage"></img>
}

export function getHeadShot(style, inlineStyle) {
    return <img src="https://i.postimg.cc/W1ZSvP0B/headShot.jpg" className={style} style={inlineStyle} alt="testImage"></img>
}

export function getVitaImage(style) {
    return <img src="https://i.postimg.cc/Dyw66D0k/Harald-Bader-HAROLD-PHOTOGRAPHY-CH-19.jpg"  className={style} alt="testImage"></img>
} 

export function getImageCollections() {
    return imageCollections;
}
