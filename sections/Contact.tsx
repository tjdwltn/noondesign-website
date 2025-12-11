export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#f7f7f7]" aria-labelledby="contact-heading">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <h2
            id="contact-heading"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-black/60"
          >
            Contact
          </h2>
          <div className="space-y-3 text-sm text-black/80">
            <p>
              프로젝트 문의 및 협업 제안은 이메일 또는 아래 양식을 통해 보내주세요. 가능한 한
              빠르게 검토 후 연락드립니다.
            </p>
            <p>
              <span className="font-medium">Email</span> —{" "}
              <a href="mailto:info@noondesign.com" className="underline">
                info@noondesign.com
              </a>
            </p>
            <p>
              <span className="font-medium">Address</span> — Seoul, Republic of Korea
            </p>
            <p>
              <span className="font-medium">SNS</span> —{" "}
              <a href="#" className="underline">
                Behance
              </a>{" "}
              /{" "}
              <a href="#" className="underline">
                Instagram
              </a>
            </p>
          </div>
        </div>

        <form className="space-y-4 text-sm">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs uppercase tracking-[0.16em] text-black/60">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs uppercase tracking-[0.16em] text-black/60">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-xs uppercase tracking-[0.16em] text-black/60">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>
          <button
            type="submit"
            className="border border-black bg-black px-5 py-2 text-xs uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}




