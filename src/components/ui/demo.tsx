import { ShaderAnimation } from "@/components/ui/shader-animation"

export default function DemoOne() {
  return (
    <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-blue-700">
      <ShaderAnimation />
      <span className="pointer-events-none absolute z-10 text-center text-7xl font-semibold leading-none tracking-tighter text-white whitespace-pre-wrap">
        Shader Animation
      </span>
    </div>
  )
}
