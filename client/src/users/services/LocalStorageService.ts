import React from "react";
import jwtDecode from "jwt-decode";
import { TokenType } from "../models/types/userTypes";

const TOKEN = "token";

export const setTokenInLocalStorage = (encryptedToken: string) => {
  return localStorage.setItem(TOKEN, encryptedToken);
};

export const getUser = () => {
  const token = localStorage.getItem(TOKEN);
  if (!token) return null;
  try {
    const user: TokenType = jwtDecode(token);
    return user;
  } catch (error) {
    return null;
  }
};
export const getToken = () => localStorage.getItem(TOKEN);

export const removeToken = () => localStorage.removeItem(TOKEN);
