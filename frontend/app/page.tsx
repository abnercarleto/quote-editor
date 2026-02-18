import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="container flex min-h-screen flex-col justify-center gap-10 py-16">
      <section className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Quote Editor
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Precision quotes with a bold, focused workspace.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Plan milestones, track costs, and deliver clean summaries without losing
          momentum. Everything stays structured, fast, and visually sharp.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg">Start a quote</Button>
          <Button size="lg" variant="outline">
            View roadmap
          </Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/70 bg-card/80">
          <CardHeader>
            <CardTitle>Milestone clarity</CardTitle>
            <CardDescription>
              Stage work, dates, and costs with unmistakable structure.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Build phases that map to payment and delivery checkpoints with total
            accuracy.
          </CardContent>
        </Card>
        <Card className="border-border/70 bg-card/80">
          <CardHeader>
            <CardTitle>Itemized detail</CardTitle>
            <CardDescription>
              Capture every line item with notes, quantities, and price.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Keep complex quotes readable while totals update instantly.
          </CardContent>
        </Card>
        <Card className="border-border/70 bg-card/80">
          <CardHeader>
            <CardTitle>Fast decisions</CardTitle>
            <CardDescription>
              Pull everything into one bold dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Track totals, revisions, and client status without leaving the flow.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
