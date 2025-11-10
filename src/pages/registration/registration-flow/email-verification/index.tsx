import type { StepComponentProps } from "../stepper";
import { useEffect, useRef, useState } from "react";

const EmailVerificationStep = ({ form }: StepComponentProps) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  // Countdown state (2 minutes) and helpers
  const [timeLeft, setTimeLeft] = useState(120);
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };
  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeLeft]);

  const updateForm = (values: string[]) => {
    if (form && typeof form.setValue === "function") {
      form.setValue("otp", values.join(""));
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    startIndex: number
  ) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasted) return;

    const next = [...otp];
    let i = startIndex;
    for (const ch of pasted) {
      if (i > 5) break;
      next[i] = ch;
      i += 1;
    }
    setOtp(next);
    updateForm(next);

    const focusIndex = Math.min(i - 1, 5);
    inputsRef.current[focusIndex]?.focus();
    inputsRef.current[focusIndex]?.select();
  };

  const handleChange = (index: number, value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    const next = [...otp];

    // If user typed multiple digits (e.g., via autofill), spread them forward
    if (digitsOnly.length > 1) {
      let i = index;
      for (const ch of digitsOnly.slice(0, 6 - index)) {
        next[i] = ch;
        i += 1;
      }
      setOtp(next);
      updateForm(next);
      const focusIndex = Math.min(index + digitsOnly.length, 6) - 1;
      inputsRef.current[focusIndex]?.focus();
      inputsRef.current[focusIndex]?.select();
      return;
    }

    next[index] = digitsOnly;
    setOtp(next);
    updateForm(next);

    if (digitsOnly && index < 5) {
      inputsRef.current[index + 1]?.focus();
      inputsRef.current[index + 1]?.select();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const key = e.key;
    if (key === "Backspace") {
      if (otp[index]) {
        const next = [...otp];
        next[index] = "";
        setOtp(next);
        updateForm(next);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
        const next = [...otp];
        next[index - 1] = "";
        setOtp(next);
        updateForm(next);
      }
    } else if (key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (key === "ArrowRight" && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleResend = async () => {
    if (timeLeft > 0) return;
    try {
      // Optional: call your resend API if available on form
      await form?.resendOtp?.();
    } finally {
      setOtp(Array(6).fill(""));
      form?.setValue?.("otp", "");
      inputsRef.current[0]?.focus();
      setTimeLeft(120);
    }
  };

  return (
    <>
      <div className="w-full">
        <div>
          <h2 className="text-white text-center text-[2rem] font-[600]">
            Email Verification
          </h2>
          <p className="text-[.9rem] text-text text-center mt-2">
            Please enter the verification code sent to your email address.
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {otp.map((val, i) => (
            <input
              key={i}
              ref={(el) => {
                inputsRef.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={val}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              onPaste={(e) => handlePaste(e, i)}
              className="w-12 h-12 rounded-md border border-gray-600 bg-transparent text-white text-xl text-center outline-none focus:border-blue-500"
              aria-label={`Digit ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-4 text-center">
          {timeLeft > 0 ? (
            <span className="text-text">
              Resend code in {formatTime(timeLeft)}
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="cursor-pointer text-blue-500 hover:text-blue-400 font-medium"
            >
              Resend code
            </button>
          )}
        </div>

        {/* Optionally show combined OTP for debug or submission */}
        {/* <pre className="mt-4 text-center text-gray-400">{otp.join("")}</pre> */}
      </div>
    </>
  );
};
export default EmailVerificationStep;
