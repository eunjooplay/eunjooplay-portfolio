import Image from "next/image"

import { ShaderAnimation } from "@/components/ui/shader-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e1524] text-white">
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
        <div className="absolute inset-0">
          <ShaderAnimation />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e1524]/90 via-[#0e1524]/70 to-[#0e1524]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(19,91,236,0.25),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_3px,rgba(255,255,255,0.02)_3px,rgba(255,255,255,0.02)_18px)]" />

        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-[#135bec]/40 blur-2xl" />
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white/80 shadow-[0_0_0_10px_rgba(255,255,255,0.06)]">
              <Image
                src="/profile.jpg"
                alt="박은주 프로필 사진"
                fill
                className="object-cover"
                sizes="112px"
                priority
              />
            </div>
          </div>

          <span className="mb-6 rounded-full border border-white/40 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            TOUR DREAM 2026
          </span>

          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            안녕하세요, <span className="text-[#135bec]">박은주</span>입니다.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            바이올리니스트이자 인천가톨릭대학교 겸임교원으로 활동하며,
            공연과 교육, 콘텐츠 제작을 통해 음악과 사람을 연결합니다.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              className="rounded-full bg-[#135bec] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#135bec]/40 transition hover:bg-[#0f4bd1]"
              href="mailto:ejpviolin@hanmail.net"
            >
              상담하기
            </a>
            <a
              className="rounded-full border border-white/60 bg-white px-8 py-3 text-sm font-semibold text-[#0e1524] transition hover:border-white"
              href="https://blog.naver.com/eunjooplay/221342004994"
              target="_blank"
              rel="noopener noreferrer"
            >
              연락하기
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
