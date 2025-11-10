const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center md:px-[5rem]">
      <div className="hidden md:visible md:flex flex-1"></div>
      <div className="flex flex-none flex-col md:w-[30rem] w-[90%] h-[90%]">
        <div className="text-center text-[1.8rem] font-[600] text-white py-4">
          Sign In
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
          <div className="w-full flex items-center justify-end">
            <a href="" className="text-white">
              <span>Forgot password?</span>
            </a>
          </div>
          <button className="h-[3rem] w-full bg-white rounded-md">
            Signin
          </button>
          <div className="py-6">
            <div className="flex flex-row gap-2 items-center justify-center">
              <span className="text-text">Don't have an account? </span>
              <a href="/registration" className="">
                <span className="text-white">Create Account</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-center gap-4">
          <div className="flex flex-1 h-[.1rem] bg-text"></div>
          <div>
            <p className="text-text">or continue with </p>
          </div>
          <div className="flex flex-1 h-[.1rem] bg-text"></div>
        </div>
        <div className="flex flex-row gap-6">
          <button className="flex flex-row gap-4 items-center justify-center w-full mt-6 p-3 bg-foreground rounded-md text-white">
            <div className="w-[1.7rem] h-[1.7rem]">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
            </div>
            <span className="text-[1rem] text-white">Google</span>
          </button>
          <button className="flex flex-row gap-4 items-center justify-center w-full mt-6 p-3 bg-foreground rounded-md text-white">
            <div className="w-[1.7rem] h-[1.7rem]">
              <img
                width="150"
                height="150"
                src="https://img.icons8.com/ios-filled/150/mac-os.png"
                alt="mac-os"
              />
            </div>
            <span className="text-[1rem] text-white">Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
