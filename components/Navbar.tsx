import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export function Navbar() {
    const router = useRouter();
    const items = [
        { name: "Logo_KBOOM", path: "team-kboom" },
        { name: "Logo_TeamGO", path: "team-go" },
        { name: "Logo_Yo", path: "team-yo" },
        { name: "Logo_versus", path: "team-versus" },
        { name: "Logo_Tron", path: "team-tron" },
    ];

    return (
        <nav className="flex flex-col space-y-2 pl-4 pr-8 pt-6 border-587481 ">
            {items.map((item) => (
                <Link key={item.name} href={`/${item.path}`}>
                    <div
                        className={`cursor-pointer rounded-md ${
                            router.pathname.includes(item.path)
                                ? "active w-full bg-gradient-to-r from-[#FCE33E] to-[#BC7824] p-0.5 border-rounded"
                                : "border-587481 border border-rounded"
                        }`}>
                        <div className="flex h-full w-full border-rounded items-center p-1.5 justify-center bg-gray-800 ">
                            <Image src={`../assets/img/${item.name}.svg`} alt={item.name} width={40} height={40} />
                        </div>
                    </div>
                </Link>
            ))}
        </nav>
    );
}
