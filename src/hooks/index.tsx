import { create } from "zustand";

// page state

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

// wallet connect state

type walletState = {
  walletState: string;
};

type walletAction = {
  setWalletState: (walletState: walletState["walletState"]) => void;
};

export const useWalletStore = create<walletState & walletAction>((set) => ({
  walletState: "disConnected",
  setWalletState: (importWalletState) =>
    set(() => ({ walletState: importWalletState })),
}));

// staking duration

type dayRange = {
  dayRange: number;
};

type dayRangeSetting = {
  setDayRange: (dayRange: dayRange["dayRange"]) => void;
};

export const useDataRange = create<dayRange & dayRangeSetting>((set) => ({
  dayRange: 7,
  setDayRange: (importDayRange) => set(() => ({ dayRange: importDayRange })),
}));

// staking percent

type percent = {
  percent: number;
};

type percentSetting = {
  setPercent: (percent: percent["percent"]) => void;
};

export const usePercent = create<percent & percentSetting>((set) => ({
  percent: 50,
  setPercent: (importPercent) => set(() => ({ percent: importPercent })),
}));
