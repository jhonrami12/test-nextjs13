import { useTranslations } from "next-intl";

export function ContenExample() {  

  
  const ce = useTranslations("content-example");
  let label = ce("label");
  let description = ce("description");

  console.log('render ContenExample');
  
  return (
    <>
      <div>{label}:</div>
      <div>{description}</div>
    </>
  );
}
