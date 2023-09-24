import classNames from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./Nav.module.css";

const NavLinks: {
  [key: string]: {
    title: string;
    link: string;
  };
} = {
  home: {
    title: "Home",
    link: "/",
  },
  products: {
    title: "Products",
    link: "/products",
  },
  blog: {
    title: "Blog",
    link: "/blog",
  },
  about: {
    title: "Abous us",
    link: "/about-us",
  },
  services: {
    title: "Services",
    link: "/services",
  },
};

const Nav = () => {
  return (
    <nav className={styles["navigation"]}>
      <ul className="flex ms-auto">
        {Object.keys(NavLinks).map((el) => (
          <li key={el} className={classNames('me-20', styles["link"])}>
            <Link href={NavLinks[el].link}>{NavLinks[el].title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
