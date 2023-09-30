import Image from "next/image";

type SidebarProps = {
    logo: string;
    title: string;
};

export function Sidebar({ logo, title }: SidebarProps) {
    return (
        <div className="flex h-screen">
            <aside className="flex flex-col px-4 py-7 space-y-2 h-full w-1/6">
                <div className="flex items-center">
                    <Image src={`../assets/img/${logo}.svg`} className="h-10" alt={logo} width={64} height={64} />
                    <h2 className="text-white">{title}</h2>
                </div>
            </aside>

            <main className="flex-1"></main>
        </div>
    );
}
