import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          <h1>Пошук роботи для українців за кордоном</h1>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        Збираємося створити платформу для об'єднання шукачів роботи та роботодавців, що допоможе підтримувати інтеграцію українських мігрантів на європейському ринку праці та повернути фінансову безпеку.
        </p>
      </div>
    </section>
  )
}
