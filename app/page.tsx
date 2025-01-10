export default function Home() {
    return (
        <main
            className="bg-gray-100 h-screen sm:bg-red-500 flex items-center justify-center p-5 ">
            <div
                className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col">
                {["nico","me","you"].map((person,index) =>(
                    <div key={index}>
                        <span>{person}</span>
                        <div>
                            <span>{index}</span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
