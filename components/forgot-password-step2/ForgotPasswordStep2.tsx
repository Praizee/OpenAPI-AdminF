"use client";

import { useRouter } from "next/navigation";
import { CustomButton as Button } from "@/lib/AntdComponents";
import { Form, Input } from "antd";

const ForgotPasswordStep2 = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center max-w-[1640px] bg-[url('/bg.png')] bg-cover bg-no-repeat p-8 md:p-0">
      <main className=" flex flex-col items-center justify-center bg-white rounded-3xl w-full md:w-[560px] mx-auto px-8 py-16">
        <div className="space-y-8 w-full">
          <span className="space-y-2 text-center">
            <h1 className="font-bold text-[18px] md:text-[32px] text-[#000000]">
              Email Verification
            </h1>
            <p className=" text-gray-700 md:text-base text-[14px]">
              Kindly enter the 6 digit code that has been sent to your email
              address
            </p>
          </span>

          <Form className="!w-full !space-y-8">
            <div className="w-full flex justify-center">
              <Input.OTP
                // mask="•"
                size="large"
                autoFocus
                className="!text-2xl !h-24 w-12 text-center"
              />
            </div>

            <span className="flex justify-center">
              <Button
                onClick={() => router.push("/reset-password")}
                htmlType="submit"
                type="primary"
                className="!h-[3rem] md:text-[18px] !bg-[#010101] w-full md:w-[80%]"
              >
                Send
              </Button>
            </span>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default ForgotPasswordStep2;
