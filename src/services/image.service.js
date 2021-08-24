import testImage from '../test_images/image1.jpg';
import headshot from '../test_images/headShot.jpg';

export function getTestImage(style, inlineStyle) {
    return <img src={testImage} className={style} style={inlineStyle} alt="testImage"></img>
}

export function getHeadShot(style, inlineStyle) {
    return <img src={headshot} className={style} style={inlineStyle} alt="testImage"></img>
}