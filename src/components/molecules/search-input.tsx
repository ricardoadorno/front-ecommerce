import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { useRef, useState } from "react";
import useSeachQuery from "@/hooks/use-search-query";
import { X } from "lucide-react";
import { Button } from "../ui/button";


export default function SearchInput() {
  const { currentSearchQuery, addSearchQuery } = useSeachQuery();

  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addSearchQuery("q", searchQuery);
  };

  const isClearable = currentSearchQuery.q || searchQuery !== "";

  const clearSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery("");
    addSearchQuery("q", "");
    inputRef.current?.focus();
  }

  return (
    <div className='relative w-full md:w-[400px]'>
      <form onSubmit={handleSearch}>
        <Input
          aria-label="Search Item"
          placeholder="Search"
          className="pr-8 "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ref={inputRef}
        />
      </form>
      {isClearable ? (
        <form onSubmit={clearSearch}>
          <Button variant={"ghost"} className="absolute right-3 top-1/3 h-4 p-0">
            <X className="size-4 text-destructive" />
            <span className="sr-only">Clear search</span>
          </Button>
        </form>
      ) : (
        <MagnifyingGlassIcon className="absolute right-3 top-1/3 size-4 text-muted-foreground" />
      )}
    </div>
  );
}
