import React from "react";
// import { signupMonthlyEmail } from "@/app/api/email/membershipEmail";
export default function MembershipFeatureCardLarge() {
  return (
    <div className=" rounded-lg border border-gray-200 bg-gray-50 p-8 md:p-12 dark:border-gray-700 dark:bg-gray-800">
      {/* For Members Label */}
      <a
        href="#"
        className="mb-2 inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400"
      >
        <svg
          className="me-1.5 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 14"
        >
          <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
        </svg>
        For Members
      </a>
      <h1 className="mb-2 text-3xl font-extrabold text-gray-900 md:text-5xl dark:text-white">
        Exclusive Monthly Promotions
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
        Sign up now to be among the first to receive our exciting monthly
        promotions! Uncover exclusive deals and discounts available only to our
        registered members.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Read more
        {/* Arrow */}
        <svg
          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
