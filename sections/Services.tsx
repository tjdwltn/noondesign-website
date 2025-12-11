const services = [
  {
    title: "Branding & Identity",
    description: "정확한 타이포그래피와 시스템 설계를 바탕으로 한 브랜드 아이덴티티 구축.",
  },
  {
    title: "Editorial Design",
    description: "서적, 카탈로그, 정기간행물 등 콘텐츠 구조를 드러내는 편집 디자인.",
  },
  {
    title: "Exhibition Graphics",
    description: "전시 공간의 정보 구조와 동선을 고려한 그래픽 시스템 설계.",
  },
  {
    title: "Annual Reports",
    description: "조직의 한 해를 투명하고 명료하게 전달하는 리포트 디자인.",
  },
  {
    title: "Posters & Key Visuals",
    description: "시각 문화의 맥락을 고려한 포스터 및 키 비주얼 디자인.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-white" aria-labelledby="services-heading">
      <div className="container">
        <div className="mb-10 flex items-baseline justify-between gap-6">
          <h2
            id="services-heading"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-black/60"
          >
            Services
          </h2>
          <p className="max-w-md text-xs text-black/60">
            noonDesign은 타이포그래피 중심의 접근으로 브랜드와 조직의 시각 커뮤니케이션을 설계합니다.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col justify-between border border-black/5 bg-[#fafafa] px-5 py-6 transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-sm"
            >
              <h3 className="mb-3 text-sm font-semibold tracking-tightMinus">{service.title}</h3>
              <p className="text-xs leading-relaxed text-black/70">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




