import Image from 'next/image';

import LogoFacebook from "../../public/imagens/logo-facebook.png";
import LogoLinkedin from "../../public/imagens/logo-linkedin.png";
import LogoInstagram from "../../public/imagens/logo-instagram.png";

export default function SocialMedia() {
  return (
    <div className="max-w-[200px] relative flex flex-row z-10">
      <div className="w-1/3">
        <a href="https://www.facebook.com/profile.php?id=100064457389253" target="_blank">
          <Image loading="lazy" src={LogoFacebook} alt="Facebook" />
        </a>
      </div>
      <div className="w-1/3 mx-5">
        <a href="https://www.instagram.com/pointmediaoficial/" target="_blank">
          <Image loading="lazy" src={LogoInstagram} alt="Instagram" />
        </a>
      </div>
      <div className="w-1/3">
        <a href="https://www.linkedin.com/company/point-media-oficial/mycompany/" target="_blank">
          <Image loading="lazy" src={LogoLinkedin} alt="Linkedin" />
        </a>
      </div>
    </div>
  )
};