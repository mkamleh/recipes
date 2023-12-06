import { toast } from "react-toastify";
import { IApiErrorPayload } from "./apiError.types";

export const apiError = (payload?: IApiErrorPayload): void => {
  const { options, message } = payload || {};

  toast.error(message || "Something went wrong, try again later", options);
};
