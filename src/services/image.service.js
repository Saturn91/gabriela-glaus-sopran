import testImage from '../test_images/image1.jpg';
import headshot from '../test_images/headShot.jpg';
import vitaImage from '../test_images/image_landscape.jpg';
import { ImageCollection } from '../components/models/imageCollection.model';
import { ImageDTO } from '../components/models/image.model';

const imagePlaceHolderUrls = [
    new ImageDTO("img1","descriptrion1",testImage),
    new ImageDTO("img2","descriptrion2",headshot),
    new ImageDTO("img3","descriptrion3",vitaImage)
]

const imageCollections = [
    new ImageCollection(imagePlaceHolderUrls, "Fotoshooting Herbst 19"),
    new ImageCollection(imagePlaceHolderUrls, "Monsieur Choufleuri, Offenbach, Frühling 2020"),
    new ImageCollection(imagePlaceHolderUrls, "Porträts")
];



export function getTestImage(style) {
    return <img src={testImage} className={style} alt="testImage"></img>
}

export function getHeadShot(style, inlineStyle) {
    return <img src={headshot} className={style} style={inlineStyle} alt="testImage"></img>
}

export function getVitaImage(style) {
    return <img src={vitaImage} className={style} alt="testImage"></img>
} 

export function getImageCollections() {
    return imageCollections;
}
