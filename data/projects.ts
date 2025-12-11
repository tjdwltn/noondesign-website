export type ProjectCategory =
  | "Branding"
  | "Editorial"
  | "Exhibition"
  | "Identity"
  | "Poster"
  | "Annual Report"
  | "Book";

export interface Project {
  slug: string;
  title: string;
  client?: string;
  year: string;
  category: ProjectCategory;
  role: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "kiada-2025",
    title: "대한민국장애인국제무용제 KIADA2025",
    client: "대한민국장애인국제무용제 조직위원회",
    year: "2025",
    category: "Editorial",
    role: "페스티벌 인쇄물 및 홍보물 편집 디자인",
    description:
      "장애와 비장애의 경계를 허무는 무용제의 성격을 담아, 프로그램북과 포스터, 홍보물을 통합된 타이포그래피 시스템으로 구성한 프로젝트입니다.",
    images: [{ src: "/projects/1.png", alt: "KIADA 2025 editorial design" }],
  },
  {
    slug: "nm-korea-conservation-center",
    title: "국립중앙박물관 특별전 '국보순회전: 모두가 함께하는 180일의 여정' 그래픽 코디네이션",
    client: "국립중앙박물관",
    year: "2025",
    category: "Editorial",
    role: "특별전 그래픽 코디네이션 및 홍보물 디자인",
    description:
      "국보급 문화재가 전국을 순회하는 특별전의 흐름을 시각적으로 정리하고, 전시 공간과 인쇄물 전반의 그래픽 톤앤매너를 조율한 프로젝트입니다.",
    images: [
      { src: "/projects/2.png", alt: "National Treasures touring exhibition graphics" },
    ],
  },
  {
    slug: "root-impact-annual-report-2024",
    title: "루트임팩트 2024 연차보고서",
    client: "사단법인 루트임팩트",
    year: "2025",
    category: "Editorial",
    role: "연차보고서 편집 디자인 및 정보 구조 설계",
    description:
      "임팩트 조직의 연간 활동과 데이터를 균형 있게 보여주기 위해, 차분한 색과 명확한 타이포그래피 계층을 사용한 연차보고서입니다.",
    images: [{ src: "/projects/3.png", alt: "Root Impact annual report 2024" }],
  },
  {
    slug: "thinking-korean-history",
    title: "한국학중앙연구원 ‘사유의한국사’ 디자인",
    client: "한국학중앙연구원",
    year: "2023",
    category: "Book",
    role: "단행본 커버 및 내지 디자인",
    description:
      "한국사를 새로운 시각으로 사유하는 내용을 담은 출판물로, 텍스트에 집중할 수 있는 절제된 타이포그래피와 구조적인 레이아웃을 적용했습니다.",
    images: [{ src: "/projects/4.png", alt: "Thinking Korean History book design" }],
  },
  {
    slug: "kara-annual-report-2022",
    title: "동물권행동 카라 2022 연차보고서",
    client: "동물권행동 카라",
    year: "2023",
    category: "Editorial",
    role: "연차보고서 편집 디자인",
    description:
      "동물권 단체의 활동을 감성적이면서도 명료하게 전달하기 위해, 사진과 텍스트의 균형을 세심하게 조율한 연차보고서입니다.",
    images: [{ src: "/projects/5.png", alt: "KARA annual report 2022" }],
  },
  {
    slug: "jeongsu-woo-palindrome",
    title: "JEONGSU WOO, Palindrome",
    client: "BB&M",
    year: "2023",
    category: "Book",
    role: "전시 도록 및 출판물 디자인",
    description:
      "작가의 작업 세계를 반영한 구조적인 서체 구성과 여백으로, 전시와 출판 사이를 잇는 도록 디자인을 구현했습니다.",
    images: [{ src: "/projects/6.png", alt: "Palindrome book design" }],
  },
  {
    slug: "gallery-bbm-identity",
    title: "갤러리 BB&M 아이덴티티 디자인",
    client: "BB&M",
    year: "2021",
    category: "Identity",
    role: "로고 및 비주얼 아이덴티티 시스템",
    description:
      "갤러리의 성격과 전시 방향성을 반영해, 로고, 타이포그래피, 응용 시스템을 설계한 아이덴티티 프로젝트입니다.",
    images: [{ src: "/projects/7.png", alt: "Gallery BB&M identity" }],
  },
  {
    slug: "gnm-percussion-kit",
    title: "국립국악원 국악박물관 ‘박물관 나와라, 쿵딱!’ 학습교구 패키지 제작",
    client: "국립국악원 국악박물관",
    year: "2023",
    category: "Editorial",
    role: "학습 교구 설명서 및 패키지 디자인",
    description:
      "어린이 대상 학습 교구의 특성을 살리기 위해, 명확한 정보 구조와 친근한 그래픽 요소를 결합한 패키지 및 편집 디자인입니다.",
    images: [{ src: "/projects/8.png", alt: "Percussion learning kit package" }],
  },
  {
    slug: "seocho-grand-xi-brand-book",
    title: "서초그랑자이 브랜드북",
    client: "GS건설",
    year: "2022",
    category: "Book",
    role: "브랜드북 편집 디자인",
    description:
      "주거 브랜드의 가치와 라이프스타일을 시각적으로 정리해, 입주자와 이해관계자에게 전달하는 브랜드북 디자인입니다.",
    images: [{ src: "/projects/9.png", alt: "Seocho Gran Xi brand book" }],
  },
  {
    slug: "nmch-kids-book-discovery-empathy",
    title: "국립중앙박물관 어린이박물관 이야기책 ‘아하! 발견과 공감’",
    client: "국립중앙박물관 어린이박물관",
    year: "2021",
    category: "Book",
    role: "어린이용 이야기책 디자인",
    description:
      "어린이 눈높이에 맞춘 일러스트레이션과 타이포그래피로, 박물관 경험을 확장하는 이야기책 디자인입니다.",
    images: [{ src: "/projects/10.png", alt: "Kids book for discovery and empathy" }],
  },
  {
    slug: "korea-institute-unification-30-years",
    title: "통일연구원 30년사: 1991-2021",
    client: "통일연구원",
    year: "2021",
    category: "Editorial",
    role: "사사(社史) 편집 디자인",
    description:
      "30년의 역사를 연대기와 주제별로 재구성해, 기관의 발자취를 체계적으로 보여주는 기록물 디자인입니다.",
    images: [{ src: "/projects/11.png", alt: "30 years history book" }],
  },
  {
    slug: "nfm-kids-museum-we-meet",
    title: "국립민속박물관 어린이박물관 상설전 ‘우리 이제 만나요’ 이야기책 패키지",
    client: "국립민속박물관 어린이박물관",
    year: "2021",
    category: "Identity",
    role: "이야기책 및 패키지 비주얼 아이덴티티",
    description:
      "상설전의 메시지를 어린이에게 친근하게 전달하기 위해, 이야기책과 패키지를 통합된 그래픽 언어로 설계했습니다.",
    images: [{ src: "/projects/12.png", alt: "Kids museum storybook package" }],
  },
  {
    slug: "world-korean-language-conference-ei",
    title: "세계한국어대회 EI",
    client: "이오컨벡스 / 세계한국어대회 조직위원회",
    year: "2020",
    category: "Identity",
    role: "이벤트 아이덴티티 및 응용 시스템",
    description:
      "국제 행사의 성격을 반영한 로고타입, 컬러 시스템, 응용 그래픽을 설계한 아이덴티티 프로젝트입니다.",
    images: [{ src: "/projects/13.png", alt: "World Korean Language Conference EI" }],
  },
  {
    slug: "suwon-ev-bus-design",
    title: "수원시 무공해 전기버스 디자인",
    client: "수원시청 / 수원여객운수",
    year: "2019",
    category: "Identity",
    role: "차량 외관 그래픽 및 시스템 디자인",
    description:
      "도시의 친환경 이미지를 강화하는 전기버스 외관 디자인으로, 반복 가능한 그래픽 모듈과 타이포그래피를 개발했습니다.",
    images: [{ src: "/projects/14.png", alt: "Suwon EV bus design" }],
  },
  {
    slug: "hyundaicard-gourmet-week-22",
    title: "Hyundai Card Gourmet Week 22",
    client: "현대카드",
    year: "2018",
    category: "Editorial",
    role: "프로그램북 및 홍보물 편집 디자인",
    description:
      "푸드 페스티벌의 분위기와 브랜드 이미지를 동시에 담기 위해, 사진과 타이포그래피의 대비를 활용한 편집 디자인입니다.",
    images: [{ src: "/projects/15.png", alt: "Hyundai Card Gourmet Week editorial" }],
  },
  {
    slug: "pyeongchang-snow-element",
    title: "PyeongChang Olympics 2018 - Snow element",
    client: "2018 평창 동계올림픽대회 조직위원회",
    year: "2016",
    category: "Identity",
    role: "그래픽 엘리먼트 및 비주얼 시스템",
    description:
      "올림픽 비주얼 시스템의 일부로, 눈(Snow)을 모티프로 한 그래픽 요소를 개발하고 다양한 매체에 전개한 프로젝트입니다.",
    images: [{ src: "/projects/16.png", alt: "PyeongChang Olympics snow element" }],
  },
  {
    slug: "pyeongchang-torch-relay",
    title: "PyeongChang Olympics 2018 - Torch Relay",
    client: "2018 평창 동계올림픽대회 조직위원회",
    year: "2016",
    category: "Identity",
    role: "성화 봉송 비주얼 아이덴티티",
    description:
      "성화 봉송의 여정을 상징하는 그래픽 모티프와 타이포그래피를 설계해, 다양한 응용 매체에 사용된 비주얼 아이덴티티입니다.",
    images: [{ src: "/projects/17.png", alt: "PyeongChang Olympics torch relay" }],
  },
  {
    slug: "nm-korean-font-merchandise",
    title: "국립한글박물관 한글 문화상품 개발",
    client: "국립박물관문화재단",
    year: "2014",
    category: "Identity",
    role: "한글 기반 문화상품 비주얼 컨셉",
    description:
      "한글 자모의 조형성을 활용해, 다양한 문화상품에 적용 가능한 비주얼 모티프와 타이포그래피 시스템을 개발한 프로젝트입니다.",
    images: [{ src: "/projects/18.png", alt: "Korean font merchandise design" }],
  },
  {
    slug: "cultural-design-support-poster",
    title: "문화디자인지원사업공모 포스터",
    client: "한국공예・디자인문화진흥원",
    year: "2014",
    category: "Poster",
    role: "공모 포스터 디자인",
    description:
      "문화 디자인 지원 사업의 성격을 직관적으로 전달하기 위해, 타이포그래피와 그리드를 중심으로 구성한 포스터입니다.",
    images: [{ src: "/projects/19.png", alt: "Cultural design support poster" }],
  },
  {
    slug: "typojam-2011-biennale",
    title: "타이포잔치 2011: 서울 국제 타이포그래피 비엔날레",
    client: "타이포잔치",
    year: "2011",
    category: "Poster",
    role: "비엔날레 포스터 및 그래픽",
    description:
      "타이포그래피 중심의 국제 비엔날레를 위한 키 비주얼로, 글자 형태만으로 강렬한 인상을 주는 포스터를 제작했습니다.",
    images: [{ src: "/projects/20.png", alt: "Typojanchi 2011 poster" }],
  },
];

export const categories: ProjectCategory[] = [
  "Branding",
  "Editorial",
  "Exhibition",
  "Identity",
  "Poster",
  "Annual Report",
  "Book",
];


