import { atom } from "jotai";

type Theme = "light" | "dark";

const storedTheme = localStorage.getItem("theme") as Theme | null;
const initialTheme: Theme = storedTheme ? storedTheme : "light";

export const themeAtom = atom<Theme>(initialTheme);

export const toggleThemeAtom = atom(
  (get) => get(themeAtom),
  (get, set) => {
    const currentTheme = get(themeAtom);
    const newTheme = currentTheme === "light" ? "dark" : "light";
    set(themeAtom, newTheme);
    localStorage.setItem("theme", newTheme);
  },
);
