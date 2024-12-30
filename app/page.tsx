export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold -mb-2">In transit</span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="size-12 bg-orange-400 rounded-full"/>
        </div>
        <div>
          <span>Today</span>
          <span>09:30 -12:00</span>
        </div>
        <div>
          <div />
          <div />
        </div>
        <div>
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span>Delivered</span>
        </div>
      </div>

    </main>
  );
}

