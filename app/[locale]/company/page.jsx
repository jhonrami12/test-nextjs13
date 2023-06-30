import { useTranslations } from "next-intl";
//import { ClientExample } from "@/components/client-side";
import {
  ContenExample,
  ClientExampleCopy,
  InstagramIconCopy,
  ClientButton,
  ServerCompoExam,
} from "@/components";

export default function CompanyPage() {
  const t = useTranslations("company");
  const c = useTranslations("client");

  // console.log("Render Company");

  /*  */
  return (
    <main>
      <div>{t("description")}</div>
      <ClientExampleCopy title={c("example")}>
        <ContenExample />
      </ClientExampleCopy>
      {/* <InstagramIconCopy /> */}
      <ClientButton />
      {/* <ServerCompoExam /> */}
    </main>
  );
}
