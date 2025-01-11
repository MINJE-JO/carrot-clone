import FormInput from "../components/form_input";
import FormBtn from "../components/form_btn";
export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS login</h1>
        <h2 className="text-xl">verify your phone number</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="number"
          placeholder="Phone number"
          required={true}
          error={[]}
          name="phone"
        />
        <FormInput
          type="number"
          placeholder="Verification code"
          required={true}
          error={[]}
          name="code"
        />
        <FormBtn text="Verify " loading={false} />
      </form>
    </div>
  );
}
