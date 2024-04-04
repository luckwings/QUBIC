import { create } from "zustand";

type State = {
  pageState: string;
};

type Action = {
  setPageState: (pageState: State["pageState"]) => void;
};

export const usePageStore = create<State & Action>((set) => ({
  pageState: "stake",
  setPageState: (importPageState) =>
    set(() => ({ pageState: importPageState })),
}));

type dayRange = {
  dayRange: number;
};

type dayRangeSetting = {
  setDayRange: (dayRange: dayRange["dayRange"]) => void;
};

export const useDataRange = create<dayRange & dayRangeSetting>((set) => ({
  dayRange: 1,
  setDayRange: (importDayRange) => set(() => ({ dayRange: importDayRange })),
}));
