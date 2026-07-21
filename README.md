# LLM Research Portfolio

언어 모델의 사실성, 문맥 활용, 대조 디코딩, 파라미터 기반 지식 주입 연구를 정리한 개인 포트폴리오입니다.

## 구성

- 연구 방향
- 석사학위논문 및 RISS 링크
- 학력과 연구 연혁
- 논문 및 학회 발표 자료
- GitHub Pages 자동 배포

## 로컬 실행

Node.js 22 이상이 필요합니다.

```bash
npm install
npm run dev
```

프로덕션 정적 파일은 다음 명령으로 `out/` 폴더에 생성됩니다.

```bash
npm run build
```

## GitHub Pages 배포

1. 이 폴더의 파일을 GitHub 공개 저장소의 `main` 브랜치에 올립니다.
2. 저장소의 **Settings → Pages → Build and deployment**에서 Source를 **GitHub Actions**로 설정합니다.
3. `main` 브랜치에 push하면 `.github/workflows/deploy-pages.yml`이 사이트를 빌드하고 배포합니다.
4. 배포 주소는 `https://<GitHub 사용자명>.github.io/<저장소명>/` 형식입니다.

저장소 이름은 자유롭게 정할 수 있으며, 빌드 과정에서 해당 이름이 자동으로 경로에 반영됩니다.
