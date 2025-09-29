import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to very top (not smooth, avoids navbar covering content)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // nothing rendered
}
