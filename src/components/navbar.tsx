import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const NavBar: React.FC = () => {
  return (
    <header className=" py-6">
      <nav className="container mx-auto my-3 flex items-center justify-center space-x-5 text-center">
        <ul className="flex space-x-7">
          <li>
            <Link className="text-white" href="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/products">
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/articles">
              ARTICLES
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/learning">
              LEARNING
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/about">
              ABOUT
            </Link>
          </li>
          <li className="-my-1">
            <UserButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
