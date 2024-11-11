import axios from "axios";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import notification from "./notification.util";
import { signOut } from "@/store/slicers/auth.slicer";

export const useApiClient = () => {
  const token = useAppSelector((state: any) => state.auth.token);
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const dispatch = useAppDispatch();
  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    headers,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { message, name } = error.response.data;
      if (message) notification.error(message);
      if (error.response?.status == 401) {
        notification.error(error.response?.data?.message ?? "Unauthorized user log in again.");
        dispatch(signOut());
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const getApiClient = (token?: string) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    headers,
  });
};

export const makeParams = (params: any) => {
  Object.keys(params).forEach((k) => params[k] == null && delete params[k]);
  return params;
};
