import { Mail } from "lucide-react";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href="mailto:ronch17@live.com">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ronch17/"
          >
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ron-dev-portfolio.netlify.app/"
          >
            <span className="sr-only">Main Website</span>
            <Icons.logo className="h-6 w-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <a
            href={siteConfig.links.personalSite}
            target="_blank"
            rel="noreferrer"
          >
            {siteConfig.author}
          </a>
        </div>
      </div>
    </footer>
  );
}
