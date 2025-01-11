"use client";

import FormInput from "../components/form_input";
import FormBtn from "../components/form_btn";
import SocialLogin from "../components/social-login";
import { handleForm } from "./action";
import { useActionState } from "react";

export default function login() {
  const [state, formAction] = useActionState(handleForm, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">login with Email and password</h2>
      </div>
      <form action={formAction} className="flex flex-col gap-3">
        <FormInput
          type="text"
          placeholder="Email"
          required={true}
          error={[]}
          name="email"
        />
        <FormInput
          type="text"
          placeholder="Password"
          required={true}
          error={state?.errors ?? []}
          name="password"
        />
        <FormBtn text="Login" />
      </form>
      <SocialLogin />
    </div>
  );
}
