import Searchbar from "@/components/Searchbar";
export default function Hero() {
  return (
    <>
      <section className="w-full flex-1 bg-[url(/Hero.png)] bg-cover bg-center dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center px-4 py-32">
          <h1 className="mb-4 max-w-2xl  animate-pulse bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text py-2 text-center text-8xl font-extrabold leading-none tracking-tight text-transparent">
            {"It's more than just a trip"}
          </h1>
          <div className="py-10">
            <Searchbar />
          </div>
        </div>
      </section>
    </>
  );
}
