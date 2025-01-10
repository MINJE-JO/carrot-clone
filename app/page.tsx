import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <span>당근마켓</span>
        <h1>당근</h1>
        <h2>당근마켓에 어서오세요</h2>
      </div>
      <div>
        <Link href="/create-account">Create Account</Link>
        <div>
          <span>이미 계정이 있나요?</span>
          <Link href="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}
