import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-[#22223b]">
                <main className="max-w-[720px] mx-auto mt-4 md:mt-8 relative">
                    <Main />
                    <NextScript />
                </main>
            </body>
        </Html>
    );
}
