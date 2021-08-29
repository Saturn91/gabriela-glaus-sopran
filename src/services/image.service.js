import testImage from '../test_images/image1.jpg';
import headshot from '../test_images/headShot.jpg';
import vitaImage from '../test_images/image_landscape.jpg';

export function getTestImage(style) {
    return <img src={testImage} className={style} alt="testImage"></img>
}

export function getHeadShot(style, inlineStyle) {
    return <img src={headshot} className={style} style={inlineStyle} alt="testImage"></img>
}

export function getVitaImage(style) {
    return <img src={vitaImage} className={style} alt="testImage"></img>
}   
