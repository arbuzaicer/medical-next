import classNames from "classnames";
import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={classNames(
        "mt-auto flex flex-col justify-center items-center",
        styles["footer"]
      )}
    >
      Footer content
    </footer>
  );
};

export default Footer;
