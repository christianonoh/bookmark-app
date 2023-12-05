"use client";

import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  Controller,
} from "react-hook-form";
import Button from "../shared/Button";
import Image from "next/image";
import { ErrorIcon } from "../icons";
import { cx } from "@/utils";

interface FormInputs {
  email: string;
}

const NewsletterForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      // Perform your subscription logic here (e.g., send data to server)
      console.log("Email submitted:", data.email);
    } catch (error) {
      // Handle any subscription errors
      setError("email", {
        type: "manual",
        message: "Subscription failed. Please try again later.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col md:flex-row gap-4 px-5 md:px-10">
      <div className="flex w-full">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Whoops, make sure it's an email",
            },
          }}
          render={({ field }) => (
            <span className="relative flex flex-col flex-1 w-full">
              <input
                {...field}
                type="text"
                id="email"
                placeholder="Enter your email"
                className={cx(
                  "rounded-md border px-4 py-3 w-full text-dark text-sm",
                  errors.email ? "border-red" : "border-gray-light"
                )}
              />
              {errors.email && (
                <>
                  <ErrorIcon className="h-5 w-5 absolute top-1/3 -translate-y-1/2 right-2 text-red" />
                  <span className="text-white bg-red text-sm italic p-1 w-full">
                    {errors.email.message}
                  </span>
                </>
              )}
            </span>
          )}
        />
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="flex-none w-full md:w-fit shadow-md bg-red text-white hover:text-red hover:border-red border border-transparent text-sm  hover:bg-white px-4 md:px-6 py-3 rounded-md whitespace-nowrap"
        >
          Contact Us
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
