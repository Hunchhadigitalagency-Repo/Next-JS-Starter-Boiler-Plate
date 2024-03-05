"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../../schema/auth/login";
import { ILoginType } from "@/types/auth/login";



const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginType>({
    resolver: yupResolver(loginSchema),
  });

  // Handle form submission
  const onSubmitHandler = (data: ILoginType) => {
    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen  bg-gray-200">
      <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md w-[400px]">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <h2 className="text-2xl mb-4">Lets sign you in.</h2>
          <input
            {...register("email")}
            placeholder="Email"
            type="email"
            className="block w-full mb-2 p-2 border border-gray-300 rounded-md"
          />
          <p className="text-red-400">{errors.email?.message}</p>
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
            className="block w-full mb-2 p-2 border border-gray-300 rounded-md"
          />
          <p className="text-red-400">{errors.password?.message}</p>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
