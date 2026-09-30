import { cn } from '@/lib/utils';

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
}

export function Skeleton({
  className,
  variant = 'rectangular',
  width,
  height,
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-muted',
        variant === 'circular' && 'rounded-full',
        variant === 'text' && 'rounded h-4',
        variant === 'rectangular' && 'rounded-lg',
        className,
      )}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}

/** Pre-built skeleton for a course card. */
export function CourseCardSkeleton() {
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <Skeleton className="w-full h-40 sm:h-44 rounded-none" />
      <div className="p-4 space-y-3">
        <Skeleton variant="text" className="w-3/4 h-5" />
        <Skeleton variant="text" className="w-full h-4" />
        <div className="flex items-center gap-2">
          <Skeleton variant="circular" className="w-6 h-6" />
          <Skeleton variant="text" className="w-24 h-3" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <Skeleton variant="text" className="w-20 h-5" />
          <Skeleton variant="text" className="w-16 h-4" />
        </div>
      </div>
    </div>
  );
}
