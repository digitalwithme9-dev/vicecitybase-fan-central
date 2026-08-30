/**
 * Reserved space for a future ad network. Renders a labelled placeholder only —
 * no scripts, no tracking. Swap the inner content when an ad partner is added.
 */
export function AdSlot({
  size = "300 × 600",
  ratio = "aspect-[3/4]",
}: {
  size?: string;
  ratio?: string;
}) {
  return (
    <div
      aria-label="Advertisement placeholder"
      className={`grid place-items-center border border-dashed border-line bg-panel/40 ${ratio}`}
    >
      <div className="text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Advertisement</span>
        <span className="mt-2 block font-display text-2xl uppercase text-muted/70">{size}</span>
      </div>
    </div>
  );
}
