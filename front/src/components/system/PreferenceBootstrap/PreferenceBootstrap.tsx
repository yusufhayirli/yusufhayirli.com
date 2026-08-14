const bootstrapCode =
  "try{" +
  "var theme=localStorage.getItem('studio-theme')==='dark'?'dark':'light';" +
  "var lang=localStorage.getItem('studio-lang')==='tr'?'tr':'en';" +
  "document.documentElement.dataset.theme=theme;" +
  "document.documentElement.lang=lang;" +
  "}catch(error){document.documentElement.dataset.theme='light';}";

export function PreferenceBootstrap() {
  return <script dangerouslySetInnerHTML={{ __html: bootstrapCode }} />;
}
