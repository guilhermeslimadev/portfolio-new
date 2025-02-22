import Image from "next/image";

import css from "../assets/css-3-svgrepo-com.svg";
import html from "../assets/html-5-svgrepo-com.svg";
import js from "../assets/javascript-svgrepo-com.svg";
import ts from "../assets/typescript-svgrepo-com.svg";
import react from "../assets/react-javascript-js-framework-facebook-svgrepo-com.svg";
import next from "../assets/next-js-svgrepo-com.svg";
import vue from "../assets/vue-vuejs-javascript-js-framework-svgrepo-com.svg";
import node from "../assets/nodejs-icon-svgrepo-com.svg";
import mongo from "../assets/mongodb-logo-svgrepo-com.svg";
import styled from "../assets/styled-components-svgrepo-com.svg";
import tailwind from "../assets/tailwind-svgrepo-com.svg";

export const Tecnology = () => {
  const tecnologys = [
    { id: 1, name: "React", icon: react },
    { id: 2, name: "NextJS", icon: next },
    { id: 3, name: "Vue", icon: vue },
    { id: 4, name: "NodeJS", icon: node },
    { id: 5, name: "Mongo", icon: mongo },
    { id: 6, name: "JavaScript", icon: js },
    { id: 7, name: "TypeScript", icon: ts },
    { id: 8, name: "Html", icon: html },
    { id: 9, name: "Css", icon: css },
    { id: 10, name: "Styled Components", icon: styled },
    { id: 11, name: "Tailwind CSS", icon: tailwind },
  ];

  return (
    <ul className="flex flex-wrap space-x-[-24px]">
      {tecnologys.map((tecnology) => (
        <li
          key={tecnology.id}
          className={`cursor-pointer rounded-full bg-white border-4 grayscale-100 border-gray-900 p-2 size-12 `}
          title={tecnology.name}
        >
          <Image src={tecnology.icon} alt={tecnology.name} />
        </li>
      ))}
    </ul>
  );
};
