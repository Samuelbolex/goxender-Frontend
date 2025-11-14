import AccountInitializationStep from "../account-initialization";
import CustomerInformationStep from "../customer-information";
import EmailVerificationStep from "../email-verification";
import UserVerificationInstruction from "../user-verification-instruction";

interface StepperProps {
  currentStep: number;
  form: any;
}

export interface StepComponentProps {
  form: any;
}

const Stepper = ({ currentStep, form }: StepperProps) => {
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <AccountInitializationStep form={form} />;
      case 1:
        return <EmailVerificationStep form={form} />;
      case 2:
        return <CustomerInformationStep form={form} />;
      case 3:
        return <UserVerificationInstruction form={form} />;
      default:
        return null;
    }
  };

  return <div className="w-full">{renderStep()}</div>;
};

export default Stepper;
