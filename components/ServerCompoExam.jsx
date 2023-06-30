import { ClientButton } from "./ClientButton";
import { Accordeon } from "./Accordeon";
import { OtherClient } from "./OtherClient";

export const ServerCompoExam = () => {
  //  const handleButton = async () => {  "use server"; alert('Hello'); }
  //   const data = { "myFunc": handleButton, "title": "Hello World" }

  return (
    <>
      <span>ServerCompoExam</span>
      <ClientButton />
      {/* <Accordeon /> */}
      {/* <OtherClient /> */}
    </>
  );
};
