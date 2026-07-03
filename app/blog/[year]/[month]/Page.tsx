import Link from 'next/link';

type Props = {
  params: Promise<{ year: string; month: string }>;
};

export default async function BlogArchivePage({ params }: Props) {
  // Destructure BOTH parameters at the same time out of the dynamic URL route
  const { year, month } = await params;

  // Simple key-map dictionary to turn numbers like "07" into beautiful string text
  const monthNames: { [key: string]: string } = {
    "01": "January", "02": "February", "03": "March", "04": "April",
    "05": "May", "06": "June", "07": "July", "08": "August",
    "09": "September", "10": "October", "11": "November", "12": "December"
  };

  const formattedMonth = monthNames[month] || `Month (${month})`;

  return (
    <main className="w-full bg-white px-6 md:px-12 py-16 font-editorial-sans selection:bg-black selection:text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Editorial Header Layout */}
        <div className="border-b border-neutral-200 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase block">Time Capsule Filter Node</span>
            <h1 className="font-editorial-serif text-3xl sm:text-4xl uppercase text-black tracking-wide">
              Archive: {formattedMonth} {year}
            </h1>
          </div>
          
          <Link href="/blog" className="text-[10px] tracking-[0.2em] uppercase text-black border-b border-black pb-0.5 hover:text-neutral-500 transition-colors">
            ← Clear Filters
          </Link>
        </div>

        {/* Diagnostic Meta Box showing parameters reading cleanly */}
        <div className="p-6 bg-neutral-50 border border-neutral-100 flex flex-col space-y-2 text-xs tracking-widest text-neutral-500">
          <div>
            URL YEAR PARAMETER: <span className="font-mono font-bold text-black bg-white px-1.5 py-0.5 border border-neutral-200">{year}</span>
          </div>
          <div>
            URL MONTH PARAMETER: <span className="font-mono font-bold text-black bg-white px-1.5 py-0.5 border border-neutral-200">{month}</span>
          </div>
        </div>

      </div>
    </main>
  );
}