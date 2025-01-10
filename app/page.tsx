export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 ">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-3">
        {["nico", "me", "you", "asd", "asd"].map((person, index) => (
          <div key={index} className="flex items-center gap-5 border-b-2 pb-5">
            <div className="size-7 bg-blue-400 rounded-full" />
            <span className="text-lg font-md">{person}</span>
            <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full animate-bounce">
              <span className="text-xs font-bold">{index}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
