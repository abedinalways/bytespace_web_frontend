import { Container } from '@/components/layout/Container';
import { CourseCardSkeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
