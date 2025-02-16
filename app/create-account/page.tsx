import Link from "next/link";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import FormInput from "../components/form_input";
import FormBtn from "../components/form_btn";
import SocialLogin from "../components/social-login";
export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="text"
          placeholder="Username"
          required={true}
          error={[]}
        />
        <FormInput type="text" placeholder="Email" required={true} error={[]} />
        <FormInput
          type="text"
          placeholder="Password"
          required={true}
          error={[]}
        />
        <FormInput
          type="text"
          placeholder="Confirm Password"
          required={true}
          error={[]}
        />
        <FormBtn text="Create account" loading={false} />
      </form>
      <SocialLogin />
    </div>
  );
}
