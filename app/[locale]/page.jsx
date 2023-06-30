import { ExampleHomei18n } from "@/components";

export default function IndexPage(props) {
  return <ExampleHomei18n locale={props.params.locale} />;
  //return <Home locale={props.params.locale} />;
}
