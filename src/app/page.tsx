import FilterField from "@/components/FilterField";
import SearchField from "@/components/SearchField";

export default function Home() {
  return (
    <section className="px-3 mt-12 container mx-auto sm:px-0 w-full">
      <div className="w-full flex flex-col items-center justify-center gap-2 sm:flex sm:flex-row sm:justify-between sm:items-center">
        <SearchField />
        <FilterField />
        h
      </div>
    </section>
  );
}
