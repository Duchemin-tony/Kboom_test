import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col h-full min-h-screen">
            <Header />
            <div className="flex flex-1">
                <Navbar />
                <div className="flex flex-col w-full">
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    );
}

export default MyApp;
