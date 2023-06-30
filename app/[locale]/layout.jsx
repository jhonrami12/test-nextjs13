import "@/styles/globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { roboto } from "@/styles/fonts";
import { Navbar, Footer,ClContainer } from "@/components";


export async function generateMetadata() {
  const t = await getTranslations("head-meta");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${roboto.className}`}
    >
      <head>
        <meta name="theme-color" content="#556cd6" />
      </head>
      <body>        
        <ClContainer>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ClContainer>        
      </body>
    </html>
  );
}
