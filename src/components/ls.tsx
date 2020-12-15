import { UserType } from "@components/types";
export const ls = {
  basket: {
    set: {
      list: (list: [], user?: string) => {
        user = user ?? "d";
        const lsdataStr = localStorage.getItem(user);
        const lsdata = JSON.parse(lsdataStr);
        const data = { ...lsdata, list };
        localStorage.setItem(user, JSON.stringify(data));
      },
    },
    get: (user?: string) => {
      user = user ?? "d";
      const data: string | null = localStorage.getItem(user);
      return data ? JSON.parse(data) : {};
    },
    clear: (user: string) => localStorage.removeItem(user),
  },
  currentUser: {
    set: (user: UserType) =>
      localStorage.setItem("currentUser", JSON.stringify(user)),
    get: () => JSON.parse(localStorage.getItem("currentUser")),
    clear: () => localStorage.removeItem("currentUser"),
  },
};
