import { Card, CardContent } from "@/components/ui/card";

export default function ScanPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold tracking-tight">Scan Receipt</h1>
      <p className="text-muted-foreground mt-2">
        Take a photo or upload an image of your receipt.
      </p>
      <Card className="mt-6">
        <CardContent className="p-8 text-muted-foreground">
          Placeholder — upload & LLM extraction coming next.
        </CardContent>
      </Card>
    </section>
  );
}
