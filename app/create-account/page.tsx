import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            className="bg-transparent w-full h-10 rounded-md border focus:outline-none ring-1 ring-neutral-200  focus:ring-2 focus:ring-orange-500 border-none placeholder:text-neutral-400 px-3"
            type="text"
            placeholder="Username"
            required
          />
          <span className="text-red-500 font-medium">Input error</span>
        </div>
        <button className="w-full h-10 bg-orange-500 text-white text-lg font-semibold p-2 rounded-md text-center hover:bg-orange-400 transition-colors">
          Create account
        </button>
      </form>
      <div />
      <div>
        <Link href="/sms">
          <span>icon</span>
          <span>로그인 with SMS</span>
        </Link>
      </div>
    </div>
  );
}
