import { atom } from "recoil";

export const selectedExpertTypeState = atom<string>({
  key: "selectedExpertTypeState",
  default: "",
});
