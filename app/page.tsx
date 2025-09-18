import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PaperIcon } from "@/components/icons/paper";

export default function Page() {
  return (
    <div className="relative">
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
              Scan. Tap. Split.
            </div>
            <h1 className="mt-4 text-pretty text-4xl/tight md:text-6xl/tight font-semibold tracking-tight">
              Split your restaurant bills easily
            </h1>
            <p className="mt-4 text-muted-foreground text-balance md:text-lg">
              Snap the receipt, tap your items, see who owes what. No sign-ups,
              no math, no drama.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/scan">📷 Scan Receipt</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/manual">Enter Manually</Link>
              </Button>
            </div>

            <Separator className="my-8" />
            <div className="grid grid-cols-2 gap-4 max-w-xl text-sm text-muted-foreground">
              <div>• Works on any receipt</div>
              <div>• Edit items and people</div>
              <div>• Share the split instantly</div>
              <div>• Light & dark modes</div>
            </div>
          </div>

          <Card className="border-default">
            <CardContent className="p-8 md:p-10">
              <div className="mx-auto aspect-square max-w-64">
                <PaperIcon className="w-full h-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
