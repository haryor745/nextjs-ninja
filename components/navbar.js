import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} />
      </div>
      <div className="links">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/ninjas">
          <a>Ninjas</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
