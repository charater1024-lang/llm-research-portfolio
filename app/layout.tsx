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
  title: "LLM & NLP Research Portfolio",
  description:
    "장규식의 LLM·NLP 연구와 개인 개발 포트폴리오. Findings of EMNLP 2026 공동 제1저자 논문 Doc2Weight와 금융·여행 서비스의 GitHub 소스 및 검증 자료를 소개합니다.",
  openGraph: {
    title: "LLM & NLP Research Portfolio",
    description:
      "장규식의 Doc2Weight 논문과 한국어 LLM 연구, 공개 소스로 살펴보는 금융·여행 서비스 개발 경험.",
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
    title: "LLM & NLP Research Portfolio",
    description: "LLM 연구와 구현 경험을 시간의 흐름에 따라 정리한 포트폴리오.",
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
