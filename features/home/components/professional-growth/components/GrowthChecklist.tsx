interface ChecklistItem {
  id: string;
  label: string;
}

const checklistItems: ChecklistItem[] = [
  { id: '1', label: 'Share Your Expertise' },
  { id: '2', label: 'Monetize Your Passion' },
  { id: '3', label: 'Flexibility and Autonomy' },
  { id: '4', label: 'Build a Community' },
];

export function GrowthChecklist() {
  return (
    <ul className="flex flex-col gap-3.5 sm:gap-4">
      {checklistItems.map(item => (
        <li key={item.id} className="flex items-center gap-3">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span className="text-base sm:text-lg font-medium text-brand-black dark:text-foreground">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
