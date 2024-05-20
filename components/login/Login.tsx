"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { Form } from "antd";

const Login = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center max-w-[1640px] bg-[url('/bg.png')] bg-cover bg-no-repeat p-8 md:p-0">
      <main className=" flex flex-col items-center justify-center bg-white rounded-3xl w-full md:w-[560px] mx-auto px-8 py-16">
        <div className="space-y-8 w-full">
          <span className="space-y-2 text-center">
            <h1 className="font-bold text-[18px] md:text-[32px] text-[#000000]">
              Login to your Account
            </h1>
            <p className=" text-gray-700 md:text-[18px] text-[14px]">
              Please enter your email and password to continue
            </p>
          </span>

          <Form className="!w-full !space-y-8">
            <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
              <label
                htmlFor="email"
                className="text-[#181336] text-sm font-[500]"
              >
                Email Address
              </label>
              <Input
                className="w-full "
                placeholder="Email Address"
                id="email"
                type="email"
                name="email"
                size="large"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
              <label
                htmlFor="password"
                className="text-[#181336] text-sm font-[500]"
              >
                Password
              </label>
              <PasswordInput
                className="w-full"
                placeholder="Enter your password"
                id="password"
                type="password"
                name="password"
                required
              />
            </div>

            <div className="flex gap-8 justify-between">
              <span className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="rememberPassword"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="rememberPassword"
                  className="text-[13px] md:text-base text-[#202224] select-none"
                >
                  Remember Password
                </label>
              </span>
              <Link
                href="forgot-password"
                className="text-[13px] md:text-base hover:underline duration-300 text-[#202224] hover:text-[#202224]"
              >
                Forgot Password?{" "}
              </Link>
            </div>

            <span className="flex justify-center">
              <Button
                onClick={() => router.push("/dashboard")}
                htmlType="submit"
                type="primary"
                className="!h-[3rem] md:text-[18px] !bg-[#010101] w-full md:w-[80%]"
              >
                Sign In
              </Button>
            </span>
          </Form>
        </div>{" "}
      </main>
    </div>
  );
};

export default Login;