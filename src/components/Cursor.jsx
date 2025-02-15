import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

export default function Cursor() {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to(cursorRef.current, {
        x: clientX - 10,
        y: clientY - 10,
        duration: 1,
        ease: "power4.out",
        force3D: true,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return <div ref={cursorRef} id="cursor" />;
}
