import Searchbar from "@/components/Searchbar";
export default function Hero() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col items-center bg-[url(/Hero.png)] bg-cover bg-center px-4 py-32 dark:bg-gray-900">
        <h1 className="mb-4 max-w-2xl  animate-pulse bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text py-2 text-center text-8xl font-extrabold leading-none tracking-tight text-transparent">
          {"It's more than just a trip"}
        </h1>
        <div className="py-10">
          <Searchbar />
        </div>
      </section>
    </>
  );
}
