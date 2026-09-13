import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  const assetPrefix = process.env.NODE_ENV === "production" ? "/lin" : "";

  return (
    <header className="site-header">
      <Link className="site-header__brand" href="/">
        <Image alt="Lin 头像" className="site-header__avatar" height={32} priority src={`${assetPrefix}/avatar.png`} unoptimized width={32} />
        <span>LIN</span>
      </Link>
      <p>Markdown knowledge base</p>
      <a href="https://github.com/TTAWDTT/lin" rel="noreferrer" target="_blank">
        GitHub
      </a>
    </header>
  );
}
