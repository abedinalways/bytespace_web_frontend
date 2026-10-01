export function LearningProgressCard() {
  return (
    <div className="w-[140px] xs:w-[160px] sm:w-[190px] lg:w-[210px] bg-white dark:bg-card rounded-2xl sm:rounded-3xl p-3 xs:p-3.5 sm:p-4 lg:p-5 shadow-2xl border border-white/80 dark:border-border/80">
      <span className="text-[11px] xs:text-xs sm:text-sm font-medium text-brand-black dark:text-foreground block">
        Learning Progress
      </span>
      <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-brand-black dark:text-foreground my-1.5 xs:my-2 tracking-tight">
        55%
      </div>
      <div className="h-1.5 xs:h-2 sm:h-2.5 w-full bg-gray-100 dark:bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-brand-lime rounded-full w-[55%]" />
      </div>
    </div>
  );
}
