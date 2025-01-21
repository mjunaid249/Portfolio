import React from "react";

function Footer() {
  return (
    <footer class="py-6 md:px-8 md:py-0 w-[80%] mx-auto">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p class="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by {""}
          <a
            href="https://github.com/webdevjunaid"
            target="_blank"
            rel="noreferrer"
            class="font-medium underline underline-offset-4"
          >
            Muhammad Junaid
          </a>
          {""} The source code is available on {""}
          {/* .  */}
          <a
            href="https://github.com/webdevjunaid/Portfolio"
            target="_blank"
            rel="noreferrer"
            class="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
