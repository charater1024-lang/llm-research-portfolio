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
    "한국어 LLM 적응, 환각 완화, RAG, ONNX 모바일 추론과 파라미터 기반 지식 주입 경험을 정리한 연구 포트폴리오.",
  openGraph: {
    title: "LLM & NLP Research Portfolio",
    description:
      "한국어 LLM 적응, 환각 완화, RAG, 모바일 추론과 파라미터 기반 지식 주입을 연결한 연구 포트폴리오.",
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
