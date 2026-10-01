export function TotalRevenueCard() {
  return (
    <div className="w-[135px] xs:w-[155px] sm:w-[180px] lg:w-[195px] bg-brand-blue rounded-2xl p-2.5 xs:p-3 sm:p-4 text-white shadow-xl">
      <div className="text-[10px] xs:text-xs font-medium text-white/90">Total Revenue</div>
      <div className="text-[9px] xs:text-[10px] text-white/70 mt-0.5">July 1-28</div>
      <div className="text-base xs:text-lg sm:text-2xl font-bold text-white mt-0.5 sm:mt-1 tracking-tight">
        $120.29
      </div>
      <div className="h-1 xs:h-1.5 w-full bg-white/25 rounded-full mt-2 sm:mt-2.5 overflow-hidden">
        <div className="h-full bg-brand-lime rounded-full w-[60%]" />
      </div>
    </div>
  );
}

export function YearToDateCard() {
  return (
    <div className="w-[130px] xs:w-[145px] sm:w-[170px] lg:w-[185px] bg-brand-blue rounded-2xl p-2.5 xs:p-3 sm:p-4 text-white shadow-xl">
      <div className="text-[10px] xs:text-xs font-medium text-white/90">Year to Date</div>
      <div className="text-[9px] xs:text-[10px] text-white/70 mt-0.5">2023</div>
      <div className="text-base xs:text-lg sm:text-2xl font-bold text-white mt-0.5 sm:mt-1 tracking-tight">
        $1,200.38
      </div>
      <div className="mt-1.5 sm:mt-2">
        <span className="inline-block bg-brand-lime text-brand-black text-[9px] xs:text-[10px] sm:text-[11px] font-bold px-1.5 xs:px-2 py-0.5 rounded-full">
          +12$
        </span>
      </div>
    </div>
  );
}
