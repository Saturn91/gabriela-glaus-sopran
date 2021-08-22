import testImage from '../test_images/image1.jpg';

export function getTestImage(style, inlineStyle) {
    return <img src={testImage} className={style} style={inlineStyle} alt="testImage"></img>
}