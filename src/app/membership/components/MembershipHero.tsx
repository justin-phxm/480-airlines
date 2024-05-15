// import MembershipRegistrationControl from "../membershipRegistrationControl";

export default function MembershipHero() {
  return (
    <section className="relative bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <a
          href="#"
          className="mb-7 inline-flex items-center justify-between rounded-full bg-blue-100 px-1 py-1 pe-4 text-sm text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
        >
          <span className="me-3 rounded-full bg-blue-600 px-4 py-1.5 text-xs text-white">
            New
          </span>
          <span className="text-sm font-medium">
            Exclusive monthly promotions! See whats new
          </span>
          <svg
            className="ms-2 h-2.5 w-2.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Our Members Get The Best Benefits
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:px-48 lg:text-xl dark:text-gray-200">
          Here at 480Airlines we believe in giving our members the best
          benefits. Sign up now for free!
        </p>
        {/* <MembershipRegistrationControl></MembershipRegistrationControl> */}
      </div>
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900"></div>
    </section>
  );
}
