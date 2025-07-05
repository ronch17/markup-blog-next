import Link from "next/link";
import {cn} from "@/lib/utils";
import {siteConfig} from "@/config/site";
import {buttonVariants} from "@/components/ui/button";
import { Icons } from "./icons";
import {MainNav} from "@/components/mainNav";
import {MobileNav} from "@/components/MobileNav";
import {ModeToggle} from "@/components/ModeToggle";

export function SiteHeader() {
    return <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur support-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center px-4">
            <MainNav />
            <div className="flex flex-1 items-cetner justify-end space-x-2">
                <nav className="flex items-center">
                <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                    <div className={cn(buttonVariants({variant: 'ghost'}), "w-10 px-0 hidden sm:inline-flex")}>
                        <Icons.gitHub className="h-4 w-4" />
                        <span className="sr-only">Github</span>
                    </div>
                </Link>
                <Link href={siteConfig.links.personalSite} target="_blank" rel="noreferrer">
                    <div className={cn(buttonVariants({variant: 'ghost'}), "w-10 px-0 hidden sm:inline-flex")}>
                        <Icons.logo className="h-4 w-4" />
                        <span className="sr-only">Personal Site</span>
                    </div>
                </Link>
                    <ModeToggle />
                <MobileNav />
                </nav>

            </div>
        </div>
    </header>
}