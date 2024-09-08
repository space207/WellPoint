import AuthForm from "@/components/AuthForm";
import React from "react";

const SignIn = async () => {
  return (
    <section className="flex-center size-full max-sm:px-t">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
