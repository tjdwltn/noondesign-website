export function About() {
  return (
    <section id="about" className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <h2
            id="about-heading"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-black/60"
          >
            About
          </h2>
          <div className="space-y-4">
            <div className="space-y-3 text-sm leading-relaxed text-black/80">
              <p>
                눈디자인은 2000년 설립된 그래픽디자인 전문회사입니다. 지난 20년간 다양한 분야와 영역에서 타이포그래피를 기반으로 하는 브랜딩 및 그래픽디자인 프로젝트를 수행해 왔습니다.
              </p>
              <p>
                우리는 시각환경의 과거, 현재, 미래에 각별한 관심을 기울이며 배우고, 실천하는 디자인 전문가 집단입니다.
              </p>
              <p>
                눈디자인은 클라이언트의 필요에 대한 부응을 넘어서는 능동적인 시도를 통해 보다 나은 결과물을 생산해 내는데 힘을 다할 것입니다.
              </p>
            </div>
            <div className="mt-6 space-y-3 border-t border-black/10 pt-6 text-sm leading-relaxed text-black/70">
              <p>
                nooNdesign is a graphic design studio established in 2000. For the past 20 years, we have worked on graphic design projects based on typography in various fields.
              </p>
              <p>
                We are a group of design professionals, who pay attention to the past, learn the present, and build the future of visual culture. Through proactive attempts and deliberate dedication, nooNdesign will work hard to go beyond client needs and to achieve higher standards of visual concepts for each project.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 text-sm">
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
              History
            </h3>
            <ul className="space-y-1 text-xs text-black/80">
              <li>
                <span className="mr-3 font-medium">2000 —</span>
                스튜디오 설립
              </li>
              <li>
                <span className="mr-3 font-medium">2015 —</span>
                법인 전환 및 프로젝트 영역 확장
              </li>
              <li>
                <span className="mr-3 font-medium">2000–Now —</span>
                국내외 문화 기관, 공공 조직, 기업과의 협업
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
              Philosophy
            </h3>
            <ul className="space-y-1 text-xs text-black/80">
              <li>Typography — 정보와 리듬을 만드는 가장 중요한 도구</li>
              <li>Graphic System — 일관성과 유연성을 동시에 확보하는 구조</li>
              <li>Cultural Responsibility — 시각 문화에 대한 책임 있는 태도</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


