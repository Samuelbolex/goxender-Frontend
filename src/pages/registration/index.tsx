import { lazy } from "react";

const RegistrationFlow = lazy(() => import("./registration-flow"));

const RegistrationPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center md:px-[5rem]">
      <div className="hidden md:visible md:flex flex-1"></div>
      <div className="flex flex-none flex-col md:w-[30rem] w-[90%] h-[90%]">
        <RegistrationFlow />
      </div>
    </div>
  );
};

export default RegistrationPage;
