import Footer from "@/components/Footer";
import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <main className="max-w-[720px] mx-auto mt-8 md:mt-14 relative">
                    <Main />
                    <NextScript />
                    <Footer />
                </main>
            </body>
        </Html>
    );
}
