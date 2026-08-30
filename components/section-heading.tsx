import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  index?: string;
  kicker?: string;
};

export default function SectionHeading({
  children,
  index,
  kicker,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {(index || kicker) && (
        <p className="mono-label mb-3">
          {index && <span className="text-accent">{index}</span>}
          {index && kicker && <span className="mx-2 opacity-40">/</span>}
          {kicker}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
