import { isEditLogIn , isEditLogOut   } from "./Type";
export const ReducerAuth = (stateinit = { isEdit: false }, action) => {
  if (action.type === isEditLogIn) {
    return { isEdit: true };
  }
  if (action.type === isEditLogOut) {
    return { isEdit: false };
  }

  return stateinit;
};
