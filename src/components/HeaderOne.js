// import Nav from "./Nav";
// import styles from "../styles/Nav.module.css";
// import Image from "next/image";

// const HeaderOne = ({ bg, title, component }) => {
//   return (
//     <div className="relative" id={styles.headerContainer}>
//       <Image
//         src={bg}
//         alt="HeaderBg"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         width={1000}
//         height={1000}
//       />
//       <div className={styles.overlay}></div>
//       <div className="absolute top-0 left-0 w-full h-full flex flex-col">
//         <Nav linkColor="white" image="/logo.png" color="red.500" />
//         <h1 className={styles.pageTitle}>{title}</h1>
//         {component}
//       </div>
//     </div>
//   );
// };

// export default HeaderOne;

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Nav from "./Nav";
import styles from "../styles/Nav.module.css";

const HeaderOne = ({ bg, title, component }) => {
  const containerRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateContainerDimensions = () => {
      const container = containerRef.current;
      if (container) {
        const { width, height } = container.getBoundingClientRect();
        setContainerDimensions({ width, height });
      }
    };

    updateContainerDimensions();
    window.addEventListener("resize", updateContainerDimensions);

    return () => {
      window.removeEventListener("resize", updateContainerDimensions);
    };
  }, []);

  const { width, height } = containerDimensions;

  return (
    <div className="relative" id={styles.headerContainer} ref={containerRef}>
      <div className="relative w-full h-full">
        <Image
          src={bg}
          alt="HeaderBg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
        />
        <div className={`${styles.overlay} absolute inset-0`}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <Nav linkColor="white" image="/logo.png" color="red.500" />
        <h1 className={styles.pageTitle}>{title}</h1>
        {component}
      </div>
    </div>
  );
};

export default HeaderOne;
