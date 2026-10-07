import React, { Suspense } from "react";
import Link from "next/link";
import { footer } from "./config";
import { buttonVariants } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function CopyrightYear() {
  const year = new Date().getFullYear();
  return <>{year}</>;
}

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        ©{" "}
        <Suspense fallback={null}>
          <CopyrightYear />
        </Suspense>{" "}
        {config.author}. All rights reserved.
      </p>
      <SocialMediaButtons />
      <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 z-10" aria-label="Footer">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className={buttonVariants({ variant: "link", size: "sm" })}
              href={href}
              key={`l_${index}`}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
