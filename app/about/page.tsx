import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:item-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>RD</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Frontend Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Frontend Developer with a passion for creating beautiful and
          functional web applications. I have a strong background in web
          development and have worked with a variety of technologies including
          HTML, SCSS, JavaScript, React, Node, Wordpress and Php. Having an
          experience of more than four years, I&apos;ve been working for
          personal clients and fintech companies, I developed unique and
          creative web applications, authentication systems, maintained http
          requests, worked with Docker and maintained linux based vps&apos;s,
          added GSAP utilities which enhanced the companies business and user
          experience. I am a detail-oriented and autodidact person who enjoys
          bringing new ideas to life, making sure for the best user experience
          and delivering the best results. I&apos;m constantly learning and
          keeping up to date with the latest web development trends and best
          practices to ensure that the applications I build are modern, secure,
          and maintainable.
        </p>
      </div>
    </div>
  );
}
