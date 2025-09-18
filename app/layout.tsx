import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Billy — Split bills easily",
  description: "Scan receipts or enter manually. No sign-ups, no drama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-dvh flex flex-col">
            <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-black/5 dark:border-white/10">
              <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-primary">
                  <span className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1">
                    <Logo className="size-5" />
                  </span>
                  <span className="font-semibold tracking-tight text-foreground">
                    Billy
                  </span>
                </Link>
                <div className="flex items-center gap-2">
                  <Button asChild variant="secondary" size="sm">
                    <a
                      href="https://github.com/your/repo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Star on GitHub
                    </a>
                  </Button>
                  <ThemeToggle className="cursor-pointer" />
                </div>
              </div>
            </header>
            <main className="grow">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
