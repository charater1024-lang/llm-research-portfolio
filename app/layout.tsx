import type { Metadata } from "next";
import "./globals.css";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const isGitHubPages = process.env.GITHUB_ACTIONS === "true" && repositoryName && repositoryOwner;
const siteUrl = isGitHubPages
  ? `https://${repositoryOwner}.github.io/${repositoryName}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LLM Research Portfolio",
  description:
    "검색, 디코딩, 파라미터 업데이트를 연결해 더 정확하고 효율적인 언어 모델을 연구하는 장규식의 포트폴리오.",
  openGraph: {
    title: "LLM Research Portfolio",
    description:
      "검색, 디코딩, 파라미터 업데이트를 연결해 더 정확하고 효율적인 언어 모델을 연구하는 장규식의 포트폴리오.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1536,
        height: 1024,
        alt: "LLM research journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM Research Portfolio",
    description: "검색과 파라미터 기반 지식 주입을 연구하는 LLM 연구 포트폴리오.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
