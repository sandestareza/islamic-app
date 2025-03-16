import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { sharedMetadata } from "@/data/metadata-shared";
import { isepMisbah, poppins } from "./fonts/fonts";

export const metadata: Metadata = {
    ...sharedMetadata,
};

export const viewport: Viewport = {
    themeColor: "#29A19C",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="scroll-smooth" lang="id" suppressHydrationWarning>
            <body
                className={`${isepMisbah.variable} ${poppins.variable} font-sans min-h-screen bg-transparent antialiased bg-white dark:bg-dark-primary max-w-[500px] mx-auto transition-colors dark:bg-dark dark:text-white`}
            >
                <ThemeProvider attribute="class">{children}</ThemeProvider>
            </body>
        </html>
    );
}
