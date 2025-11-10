import { genderList, titleList } from "@declared-types/index";
import type { StepComponentProps } from "../stepper";

const CustomerInformationStep = ({ form }: StepComponentProps) => {
  return (
    <div className="w-full">
      <div>
        <h2 className="text-[2rem] text-white text-center font-[600]">
          Customer Information
        </h2>
        <p className="text-text text-center">
          Please provide your personal information exactly as it appears on your
          government-issued ID or official documents.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5 py-6">
        <div className="w-full">
          <label htmlFor="" className="text-white">
            Title
          </label>
          <select className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none">
            <option>--- Select Title ---</option>
            {titleList.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex md:flex-row gap-5">
          <div className="w-full">
            <label htmlFor="" className="text-white">
              First Name
            </label>
            <input
              type="firstname"
              placeholder="John"
              className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none"
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-white">
              Last Name
            </label>
            <input
              type="lastname"
              placeholder="Doe"
              className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none"
            />
          </div>
        </div>
        <div className="flex md:flex-row gap-5">
          <div className="w-full">
            <label htmlFor="" className="text-white">
              Country
            </label>
            <input
              type="lastname"
              placeholder="Doe"
              className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none"
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-white">
              Province / State
            </label>
            <input
              type="lastname"
              placeholder="Doe"
              className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none"
            />
          </div>
        </div>
        <div className="flex md:flex-row gap-5">
          <div className="w-full">
            <label htmlFor="" className="text-white">
              Address
            </label>
            <input
              type="lastname"
              placeholder="Doe"
              className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none"
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-white">
              Postal Code / Zip Code
            </label>
            <input
              type="lastname"
              placeholder="Doe"
              className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none"
            />
          </div>
        </div>
        <div className="flex md:flex-row gap-5">
          <div className="w-full">
            <label htmlFor="" className="text-white">
              Gender
            </label>
            <select className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none">
              <option>--- Select Gender ---</option>
              {genderList.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-white">
              Date of Birth
            </label>
            <input
              type="date"
              placeholder="Doe"
              className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-white">
            Phone Number
          </label>
          <input
            type="phonenumber"
            placeholder="+234 91 212 3234"
            className="w-full p-3 mt-2 mb-4 rounded-md bg-foreground text-text outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInformationStep;
