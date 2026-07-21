type Publication = {
  date: string;
  venue: string;
  title: string;
  contribution: string;
  role: string;
  href: string;
  linkLabel: string;
  award?: string;
};

const researchThemes = [
  {
    number: "01",
    title: "Factuality & Context",
    text: "검색 문맥의 유무와 품질이 답변의 사실성에 어떤 차이를 만드는지 분석합니다. RAG, 반복 검토, 오류 사례 분석을 함께 사용합니다.",
    tags: ["RAG", "Factuality", "Evaluation"],
  },
  {
    number: "02",
    title: "Adaptive Decoding",
    text: "모델의 불확실성과 문맥 신호를 디코딩 과정에 반영해, 근거와 어긋나는 생성을 줄이는 방법을 연구합니다.",
    tags: ["Contrastive Decoding", "Entropy", "Hallucination"],
  },
  {
    number: "03",
    title: "Parametric Knowledge",
    text: "검색 문서를 질의별 저랭크 파라미터 업데이트로 변환해 프롬프트와 KV-cache 부담을 줄이면서, 근거 추적성과 추론 비용을 함께 검토하고 있습니다.",
    tags: ["Knowledge Injection", "Low-rank Update", "Efficiency"],
  },
];

const education = [
  {
    stage: "중학교",
    detail: "중등 교육과정 이수",
    meta: "Secondary education",
  },
  {
    stage: "고등학교",
    detail: "고등 교육과정 이수",
    meta: "Secondary education",
  },
  {
    stage: "학사",
    detail: "전북대학교 컴퓨터공학부",
    meta: "GPA 4.07 / 4.5",
  },
  {
    stage: "석사",
    detail: "전북대학교 대학원 전자·정보공학부 컴퓨터공학",
    meta: "2026.02 졸업 · GPA 4.45 / 4.5",
  },
];

const journey = [
  {
    period: "2023.03 — 2026.02",
    title: "석사과정 연구 · BK21 JIANT-IT",
    text: "자연어처리와 언어 모델의 사실성, 외부 지식 활용을 중심으로 학위 연구와 학술 발표를 수행했습니다.",
  },
  {
    period: "2023.10 — 2024.09",
    title: "언어 모델 산학 연구",
    text: "생성 품질과 신뢰성을 다루는 민간 공동연구에 참여했습니다.",
  },
  {
    period: "2024.01 — 2024.12",
    title: "개념 이해·추론형 AI 연구",
    text: "개념 이해와 추론 과정을 평가하고 개선하는 복합 AI 원천기술 연구에 참여했습니다.",
  },
  {
    period: "2024.02 — 2024.12",
    title: "한국어 LLM 사전학습",
    text: "데이터 구성, 다중 GPU 학습, instruction tuning, 추론 검증으로 이어지는 학습 파이프라인을 경험했습니다.",
  },
  {
    period: "2024.12 — 2025.02",
    title: "모델 병합·추론·정렬 공동연구",
    text: "다중 모델과 에이전트 병합, reasoning 강화, human alignment를 연결하는 연구에 참여했습니다.",
  },
];

const publications: Publication[] = [
  {
    date: "2024.12",
    venue: "KSC 2024",
    title: "반복적 검토와 임계값 기반 종료를 통한 요약 생성에서의 사실성 강화 방법론",
    contribution: "생성 요약을 반복적으로 검토하고 사실성 기준에 따라 종료 시점을 정하는 방법을 제안했습니다.",
    role: "제1저자",
    href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12041977",
    linkLabel: "논문 보기",
  },
  {
    date: "2024.10",
    venue: "HCLT-KACL 2024",
    title: "Contrastive CAD: 대형 언어 모델의 환각 완화를 위한 대조적 Context-Aware Decoding",
    contribution: "문맥을 반영한 분포와 대조 신호를 함께 활용하는 디코딩 방식을 연구했습니다.",
    role: "제1저자",
    href: "https://corpus.or.kr/data/file/notice/9c755476a7c80442fcd40094f6355cdb_tkpRhWL0_6ef99c60bf91c2bb6357882a7061d5991247e036.pdf",
    linkLabel: "학회 자료",
  },
  {
    date: "2024.06",
    venue: "KCC 2024",
    title: "엔트로피 기반 계층 선택을 통한 언어 모델의 계층간 대조 디코딩 환각 완화 연구",
    contribution: "출력 불확실성을 바탕으로 대조할 내부 계층을 선택하는 방법을 연구했습니다.",
    role: "제1저자",
    href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11861914",
    linkLabel: "논문 보기",
  },
  {
    date: "2024.06",
    venue: "KCC 2024",
    title: "오픈 도메인 질의응답에서 컨텍스트 주입은 환각 완화에 도움을 주는가",
    contribution: "관련·무관련 문맥 조건에 따라 응답의 사실성과 근거성이 달라지는 양상을 분석했습니다.",
    role: "공동저자",
    href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11861910",
    linkLabel: "논문 보기",
  },
  {
    date: "2023.12",
    venue: "KSC 2023",
    title: "한국어 대규모언어모델을 활용한 MMR기반 자가생성 In-Context Learning",
    contribution: "유사성과 다양성을 함께 고려해 few-shot 예시를 자동으로 구성하는 방법을 제안했습니다.",
    role: "제1저자",
    award: "우수발표논문상",
    href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11705103",
    linkLabel: "논문 보기",
  },
  {
    date: "2023.10",
    venue: "HCLT 2023",
    title: "지시문 및 번역 데이터셋을 활용한 Llama2 Cross-lingual 한국어 확장",
    contribution: "번역·지시 데이터를 활용해 Llama2의 한국어 적응과 학습 파이프라인을 구축했습니다.",
    role: "제1저자",
    href: "https://sites.google.com/view/hclt2023",
    linkLabel: "학회 사이트",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="장규식 연구 포트폴리오 홈">
          <span className="brand-mark" aria-hidden="true">KJ</span>
          <span>장규식 · LLM Research</span>
        </a>
        <nav aria-label="주요 섹션">
          <a href="#research">연구</a>
          <a href="#thesis">학위논문</a>
          <a href="#journey">연혁</a>
          <a href="#publications">논문</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">LLM · NLP · RESEARCH ENGINEERING</p>
            <h1 id="hero-title">언어 모델이 지식을<br />더 정확하게 사용하도록.</h1>
            <p className="hero-lede">
              검색, 디코딩, 파라미터 업데이트를 연결해 외부 지식을 효율적으로 반영하고,
              생성 결과의 근거와 실패 조건을 설명할 수 있는 방법을 연구합니다.
            </p>
            <div className="hero-links">
              <a className="primary-link" href="#research">연구 방향 보기 <Arrow /></a>
              <a className="secondary-link" href="#publications">논문 목록</a>
            </div>
          </div>

          <div className="research-arc" aria-label="2023년부터 이어진 연구 방향">
            <p className="micro-label">RESEARCH ARC · 2023—2026</p>
            <ol>
              <li>
                <span>2023</span>
                <strong>Language adaptation</strong>
                <small>한국어 확장 · In-context learning</small>
              </li>
              <li>
                <span>2024</span>
                <strong>Reliable generation</strong>
                <small>RAG · 대조 디코딩 · 사실성</small>
              </li>
              <li>
                <span>2026</span>
                <strong>Parametric context</strong>
                <small>잠재 문맥 · 저랭크 지식 주입</small>
              </li>
            </ol>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-heading">
            <p className="section-index">01 / RESEARCH</p>
            <div>
              <h2>연구 방향</h2>
              <p>학습 규모보다 지식이 들어오고, 선택되고, 답변에 반영되는 과정을 세밀하게 살펴봅니다.</p>
            </div>
          </div>

          <div className="theme-list">
            {researchThemes.map((theme) => (
              <article key={theme.number}>
                <span className="theme-number">{theme.number}</span>
                <div>
                  <h3>{theme.title}</h3>
                  <p>{theme.text}</p>
                </div>
                <ul aria-label={`${theme.title} 키워드`}>
                  {theme.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section thesis-section" id="thesis">
          <div className="section-heading">
            <p className="section-index">02 / MASTER&apos;S THESIS</p>
            <div>
              <h2>석사학위논문</h2>
              <p>검색 문맥을 긴 프롬프트로 붙이는 대신, 동결 언어모델의 조건부 파라미터로 반영하는 방법을 탐구했습니다.</p>
            </div>
          </div>

          <article className="thesis-panel">
            <div className="thesis-copy">
              <p className="thesis-meta">2026 · 전북대학교 대학원 · 컴퓨터공학</p>
              <h3>검색 증강 질의응답을 위한 문맥 잠재벡터 기반 Hyper-LoRA 사이드 튜닝 언어모델</h3>
              <p className="thesis-subtitle">ContextSide-HyperLoRA: Latent-Context Side Tuning for Retrieval-Augmented Question Answering</p>
              <p className="thesis-summary">
                검색 문맥을 고정 길이 잠재벡터로 압축하고, Hyper-LoRA가 각 FFN에 조건부 저랭크 잔차를 주입합니다.
                이를 통해 긴 문맥을 입력에 직접 붙이지 않고도 검색 지식을 동결 모델에 반영하는 가능성을 검토했습니다.
              </p>
              <a className="primary-link" href="https://m.riss.kr/link?id=T17369930" target="_blank" rel="noreferrer">
                RISS에서 학위논문 보기 <Arrow />
              </a>
            </div>

            <div className="method-flow" role="img" aria-label="검색 문맥을 잠재 문맥으로 압축해 Hyper-LoRA를 거쳐 FFN 잔차로 주입하는 흐름">
              {[
                ["01", "Retrieved passages", "검색 문맥"],
                ["02", "Context vector", "잠재벡터 압축"],
                ["03", "Hyper-LoRA", "조건부 저랭크 행렬"],
                ["04", "FFN residual", "동결 모델에 주입"],
              ].map(([number, title, description], index) => (
                <div className="flow-step" key={number}>
                  <span>{number}</span>
                  <div><strong>{title}</strong><small>{description}</small></div>
                  {index < 3 && <i aria-hidden="true">→</i>}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="section journey-section" id="journey">
          <div className="section-heading">
            <p className="section-index">03 / JOURNEY</p>
            <div>
              <h2>학력과 연구 연혁</h2>
              <p>교육 단계와 연구 경험을 시간의 흐름에 따라 간결하게 정리했습니다.</p>
            </div>
          </div>

          <div className="journey-grid">
            <div className="journey-column">
              <h3>Education</h3>
              <ol className="timeline education-timeline">
                {education.map((item) => (
                  <li key={item.stage}>
                    <span className="timeline-dot" aria-hidden="true" />
                    <small>{item.stage}</small>
                    <strong>{item.detail}</strong>
                    <p>{item.meta}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="journey-column">
              <h3>Research experience</h3>
              <ol className="timeline research-timeline">
                {journey.map((item) => (
                  <li key={item.period + item.title}>
                    <span className="timeline-dot" aria-hidden="true" />
                    <small>{item.period}</small>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="section-heading">
            <p className="section-index">04 / PUBLICATIONS</p>
            <div>
              <h2>논문 및 학회 발표</h2>
              <p>언어 적응에서 시작해 문맥 활용, 환각 완화, 생성 사실성으로 확장해 온 연구 기록입니다.</p>
            </div>
          </div>

          <div className="publication-list">
            {publications.map((paper) => (
              <article className="publication-row" key={paper.title}>
                <div className="publication-meta">
                  <strong>{paper.date}</strong>
                  <span>{paper.venue}</span>
                </div>
                <div className="publication-copy">
                  <div className="publication-badges">
                    <span>{paper.role}</span>
                    {paper.award && <span className="award">{paper.award}</span>}
                  </div>
                  <h3>{paper.title}</h3>
                  <p>{paper.contribution}</p>
                </div>
                <a href={paper.href} target="_blank" rel="noreferrer" aria-label={`${paper.title} ${paper.linkLabel}`}>
                  {paper.linkLabel} <Arrow />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section">
          <p className="section-index">RESEARCH PRINCIPLE</p>
          <p>재현 가능한 비교와<br />확인할 수 있는 근거를 남깁니다.</p>
        </section>
      </main>

      <footer>
        <span>장규식 · LLM Research Portfolio</span>
        <a href="#top">위로 ↑</a>
      </footer>
    </>
  );
}
