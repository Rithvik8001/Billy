import { Card, CardContent } from "@/components/ui/card";

export default function ManualPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold tracking-tight">Manual Entry</h1>
      <p className="text-muted-foreground mt-2">
        Type in the items and amounts from your receipt.
      </p>
      <Card className="mt-6">
        <CardContent className="p-8 text-muted-foreground">
          Placeholder — form UI coming after landing page.
        </CardContent>
      </Card>
    </section>
  );
}
