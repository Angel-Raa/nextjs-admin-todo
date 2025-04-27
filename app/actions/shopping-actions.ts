/**
 * Cookie : cart
 * {
 *  'uuui-112-1':1,
 *  'uui-121--2':2
 * }
 */

import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie("cart")) {
    const cookieCart = JSON.parse((getCookie("cart") as string) ?? "{}");

    return cookieCart;
  }
  return {};
};

export const addProductCart = ({ id }: { id: string }): void => {
  const cookieCart = getCookieCart();
  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  }
  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductCart = ({ id }: { id: string }): void => {
  const cookies = getCookieCart();

  delete cookies[id];

  setCookie("cart", JSON.stringify(cookies));
};

export const removeSingleItemFromCart = ({ id }: { id: string }): void => {
  const cookieCart = getCookieCart();
  if (!cookieCart[id]) return;
  if (cookieCart[id]) {
    cookieCart[id] -= 1;
    if (cookieCart[id] <= 0) {
      delete cookieCart[id];
    }
    setCookie("cart", JSON.stringify(cookieCart));
  }
};
