import type { StepComponentProps } from "../stepper";

const AccountInitializationStep = ({ form }: StepComponentProps) => {
  return (
    <>
      <div className="text-center text-[1.8rem] font-[600] text-white py-4">
        <h1>Welcome! Let's get you setup.</h1>
        <p className="text-[.8rem] text-text text-[400]">
          Already have an account?{" "}
          <a href="/login" className="text-white">
            Sign In
          </a>
        </p>
      </div>
      <div className="w-full flex flex-col gap-5 py-6">
        <div className="w-full">
          <label htmlFor="" className="text-white">
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe@example.com"
            className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none"
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-white">
            Password
          </label>
          <input
            type="password"
            placeholder="* * * * * * * * *"
            className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none"
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-white">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="* * * * * * * * *"
            className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none"
          />
        </div>
      </div>
    </>
  );
};
export default AccountInitializationStep;
