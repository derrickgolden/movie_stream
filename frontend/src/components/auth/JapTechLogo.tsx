import { useEffect, useState } from "react";
import "./auth.css";

const JaptechLogo = () => {
  const [fullText, setFullText] = useState(["J", "A", "P", "T", "E", "C", "H"]);
  const fadeOrder = [6, 5, 4, 3]; // Indices for "H", "C", "E", "T"
  const [fadeIndices, setFadeIndices] = useState<number[]>([]);
  const [moveJAP, setMoveJAP] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fadeOrder.forEach((index, i) => {
        setTimeout(() => {
          setFadeIndices((prev) => [...prev, index]);
          console.log({fullText})
          let newArr = fullText.slice(0, fullText.length - index);  // Creates a new array without the last element

          console.log(newArr);
          setFullText(newArr);
        }, i * 500);
      });

      setTimeout(() => {
        setMoveJAP(true);
      }, fadeOrder.length * 500 + 500);

      // Show loader after TECH is removed
      setTimeout(() => {
        setShowLoader(true);
      }, fadeOrder.length * 500 + 1500);
    }, 3000);
  }, []);

  return (
    <div className="fullscreen-container">
      <h1 className={`japtech-logo ${moveJAP ? "" : ""}`}>
        {fullText.map((char, index) => (
          <span key={index} className={`${fadeIndices.includes(index) ? "fade-out" : ""} 
            ${char === "A" ? "text-warning" : ""}`}>
            {char}
          </span>
        ))}
      </h1>

      {showLoader && <div className="loader show-loader"></div>}
    </div>
  );
};

export default JaptechLogo;

