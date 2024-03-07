import { DownloadIcon } from "lucide-react";

export default function Header() {
  return (
    // <header className="relative">
    <nav className="!rounded-full flex backdrop-blur-md w-full z-20 items-center">
      <h4 className="font-[CalSans] text-xl">emmanuel ngoka.</h4>
      <a href="/Resume.pdf" className="ml-auto">
        <button className="ml-auto text-sm hidden sm:block">
          download résumé
        </button>
      </a>
      <a href="/Resume.pdf" className="ml-auto">
        <button className="ml-auto text-sm  sm:hidden">
          <DownloadIcon />
        </button>
      </a>
    </nav>
    // </header>
  );
}
