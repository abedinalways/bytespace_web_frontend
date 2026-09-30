import { Search } from 'lucide-react';
import { Button } from './Button';

export function SearchBar({
  placeholder = 'Course, topic, creator',
  button = 'Search',
}: {
  placeholder?: string;
  button?: string;
}) {
  return (
    <form
      action="/courses"
      className="mx-auto flex w-full md:w-145 items-center gap-4 max-md:gap-2"
    >
      <label
        className="flex h-13 min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-6 text-[#858995] 
"
      >
        <Search size={19} aria-hidden="true" className="shrink-0" />
        <input
          className="w-full border-0 bg-transparent text-[14px] text-brand-black outline-none placeholder:text-brand-gray"
          name="q"
          placeholder={placeholder}
          aria-label={placeholder}
        />
      </label>
      <Button
        type="submit"
        color="accent"
        rounded="full"
        size="lg"
        className="h-13 px-6 py-3 text-[18px] sm:px-8 cursor-pointer border-none"
      >
        {button}
      </Button>
    </form>
  );
}
