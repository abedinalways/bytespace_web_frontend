interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
];

export function GrowthStats() {
  return (
    <div className="flex items-center gap-8 sm:gap-12 lg:gap-14 pt-2">
      {stats.map(item => (
        <div key={item.label} className="flex flex-col">
          <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-blue tracking-tight leading-none">
            {item.value}
          </span>
          <span className="text-sm sm:text-base text-brand-gray mt-2 font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
