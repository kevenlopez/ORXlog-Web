export default function DashboardSection() {
  return (
    <section className="px-6 mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/f299b185e3adb9ce86cf9b72c8105c36db841c58?width=2000" 
            alt="ORXlog Dashboard" 
            className="w-full rounded-3xl shadow-2xl"
          />
          
          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-10 h-3 bg-orx-blue rounded-full"></div>
            <div className="w-3 h-3 bg-orx-sky/20 rounded-full"></div>
            <div className="w-3 h-3 bg-orx-sky/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
