import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "이제민 | Back-End Dev",
  description: "안녕하세요, 백엔드 개발자 이제민입니다.",
  canonical: "https://www.ejjem.info/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.ejjem.info/",
    title: "이제민 | Back-End Dev",
    site_name: "이제민 | Back-End Dev",
    images: [
      {
        url: "/share.jpg",
        width: 285,
        height: 167,
        alt: "이제민 | Back-End Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "이제민 | Back-End Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "이제민 | Back-End Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
