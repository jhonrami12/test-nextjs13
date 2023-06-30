"use client";

import {ClientButton} from "./ClientButton";
import {Accordeon} from "./Accordeon";
import { useState } from "react";

export const OtherClient = () => {
  const [ title, setTitle] =  useState("Name Initial");
  
  const handleButton = async () => { 

    if (title === "Name Initial")
        setTitle('valor Nuevo'); 
    else 
        setTitle('Name Initial');
}

  console.log(title);

  return (
    <div>
      <span>OtherClient</span>
      <ClientButton handleAction={handleButton} />
      <Accordeon title={title} />
    </div>
  );
};
