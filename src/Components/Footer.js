import React from "react";

const copyDate = new Date().getFullYear();

function Footer() {
  return <footer>
    <p>Copywrite &copy; {copyDate}</p>
  </footer>
};

export default Footer;