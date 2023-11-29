import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Step1 from "./pages/step1";
import Step3 from "./pages/step3";
import Step2 from "./pages/step2";
import Step11 from "./pages/step11";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/done":
        title = "";
        metaDescription = "";
        break;
      case "/in-progress":
        title = "";
        metaDescription = "";
        break;
      case "/step-11":
        title = "";
        metaDescription = "";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [action, pathname]);

  return (
    <Routes>
      <Route path="/" element={<Step1 />} />
      <Route path="/done" element={<Step3 />} />
      <Route path="/in-progress" element={<Step2 />} />
      <Route path="/step-11" element={<Step11 />} />
    </Routes>
  );
}

export default App;
