import React from "react";

export default function MembershipFeatureCards(props: {
  benefit: { title: string; body: string };
  index: number;
}) {
  const { benefit, index } = props;
  return (
    <li
      key={index}
      className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
    >
      <a
        href="#"
        className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
      >
        <svg
          className="w-2.5 h-2.5 me-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
        </svg>
        Members Only
      </a>
      <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
        {benefit.title}
      </h2>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
        {benefit.body}
      </p>
      <a
        href="#"
        className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
      >
        Signup Now!
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
    </li>
  );
}
