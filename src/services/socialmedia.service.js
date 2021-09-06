import { SocialMedia } from "../models/socialmedia.model";
import facebookIcon from "../icons/facebook.png";
import instagramIcon from '../icons/instagram.png';

const socialMedias = [
    new SocialMedia(facebookIcon, "https://de-de.facebook.com/gabrielaglaussopran/"),
    new SocialMedia(instagramIcon, "https://www.instagram.com/gabrielaglaus/?hl=de")
]

export function getSocialMedias() {
    return socialMedias;
}