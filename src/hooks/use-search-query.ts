import { useSearchParams } from "react-router-dom";

export default function useSeachQuery() {
  const [searchQuery, setSearchParams] = useSearchParams();
  const currentSearchQuery: Record<string, string> = {};

  searchQuery.forEach((value, key) => {
    currentSearchQuery[key] = value;
  });

  const addSearchQuery = (key: string, value: string) => {
    setSearchParams((prev) => {
      if (prev.keys().find((k) => k === key)) prev.delete(key);
      prev.append(key, value);
      return prev;
    });
  };

  const clearSearchQuery = () => {
    setSearchParams();
  };

  return { currentSearchQuery, addSearchQuery, clearSearchQuery };
}
