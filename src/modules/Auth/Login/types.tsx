import { Loading, Session, UserType } from "@components/types";

export type LoginSliceType = {
  user: UserType | {};
  loading: Loading;
  session: Session;
  errors: Array<string>;
};
