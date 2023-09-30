import { FaTwitter, FaFacebook, FaYoutube, FaDiscord, FaTiktok, FaTwitch, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex justify-between items-center px-28 py-4">
            <Link href="/">
                <Image src="../assets/img/Logo_Kboom_Header.svg" alt="Logo Kboom" width={93} height={32} />
            </Link>

            <div className="flex items-center">
                <FaTwitter className="mr-3 icon-color" />
                <FaTwitch className="mr-3 icon-color" />
                <FaTiktok className="mr-3 icon-color" />
                <FaYoutube className="mr-3 icon-color" />
                <FaInstagram className="mr-3 icon-color" />
                <FaFacebook className="mr-3 icon-color" />
                <FaDiscord className="mr-3 icon-color" />
            </div>
        </header>
    );
}
