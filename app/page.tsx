  export default function Home() {
    return (
      <main className="bg-gray-100 h-screen flex items-center justify-center p-5 ">
        <div className="bg-white w-full shadow-lg p-5 rounded-3xl before:max-w-screen-sm flex flex-col gap-3">
          <input className="w-full rounded-full bg-gray-200 pl-5 h-12 ring ring-orange-400 ring-offset-2" 
          type="text" 
          placeholder="Search here..."/>
          <button className="bg-black bg-opacity-50 text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium outline-none">Search</button>
        </div>

      </main>
    );
  }

