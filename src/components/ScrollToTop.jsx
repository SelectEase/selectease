import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // You can change this to "smooth" if you want a smooth scroll
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;