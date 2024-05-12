import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-indigo-300 to-white text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 ">
        <Hero />
      </div>
    </main>
  );
}
