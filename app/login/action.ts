"use server";

export async function handleForm(prevState: any, formData: FormData) {
  console.log(formData.get("email"));
  console.log(formData.get("password"));
  return { errors: ["wrong password", "password too short"] };
}
