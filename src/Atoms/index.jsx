import { atom } from "jotai";

const atomWithLocalStorage = (key, initialValue) => {
  const getInitialValue = () => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
    return initialValue;
  };
  const baseAtom = atom(getInitialValue());
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === "function" ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    }
  );
  return derivedAtom;
};

export const tableNumberAtom = atomWithLocalStorage("table", "001");

export const loginAtom = atomWithLocalStorage("login", {
  url: "https://iiko.biz:9900/api/0",
  user: "api@flagman-it.ru",
  password: "gxX-PvN-8zu-2Gm",
});

export const orgAtom = atomWithLocalStorage("org", {
  id: null,
  oname: null,
  fullName: null,
});

export const tokenAtom = atomWithLocalStorage("token", {
  token: null,
  given: null,
});

export const MenuAtom = atom("settings closed");

export const dataAtom = atom([]);
