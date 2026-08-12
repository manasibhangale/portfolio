import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <Reveal as="header" className="border-b border-border pb-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-baseline gap-5">
          <span className="label">{index}</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-none tracking-[-0.03em]">
            {title}
          </h2>
        </div>
        {note && <p className="label max-w-xs text-right">{note}</p>}
      </div>
    </Reveal>
  );
}
