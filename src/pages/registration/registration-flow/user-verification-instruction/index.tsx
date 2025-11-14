import { useEffect } from "react";
import type { StepComponentProps } from "../stepper";

const UserVerificationInstruction = ({ form }: StepComponentProps) => {
  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <div>
      <div>
        <h2>User Verification Instruction</h2>
        <p>
          Please follow the instructions sent to your email to verify your
          account.
        </p>
      </div>
    </div>
  );
};
export default UserVerificationInstruction;
