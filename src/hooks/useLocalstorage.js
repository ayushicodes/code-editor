import React, { useEffect, useState } from "react";
const PREFIX = "CODE-EDITOR";
export default function useLocalstorage(key, initalValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initalValue === "function") {
      return initalValue();
    } else {
      return initalValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
