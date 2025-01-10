import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-2xl">당근임티</span>
        <h1 className="text-4xl">당근</h1>
        <h2 className="text-2xl">당근마켓에 어서오세요</h2>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <Link
          href="/create-account"
          className="w-full bg-orange-500 text-white text-lg font-medium p-2 rounded-md text-center hover:bg-orange-600 transition-colors"
        >
          Create Account
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}
