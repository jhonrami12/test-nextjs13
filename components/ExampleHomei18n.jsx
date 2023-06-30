import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export function ExampleHomei18n({ locale }) {
  const t = useTranslations("home");

  return (
    <>
      <h1>{t("title")}</h1>
      <Link href="/company" style={{ color: "var(--color-link)" }}>
        Go to Company
      </Link>
      <br />
      <br />
      {locale == "es" && (
        <Link href="/" locale="en" style={{ color: "var(--color-link)" }}>
          Switch to English
        </Link>
      )}
      {locale == "en" && (
        <Link href="/" locale="es" style={{ color: "var(--color-link)" }}>
          Cambiar a Español
        </Link>
      )}
    </>
  );
}
