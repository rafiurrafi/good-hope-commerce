import _ from "lodash";
import { useEffect, useRef } from "react";
export function getProductFromId(id, products) {
  return products.find((product) => product.id === +id);
}
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
export function useClickOutside(handler) {
  const domRef = useRef();
  useEffect(() => {
    function maybeHandler(event) {
      if (!domRef.current.contains(event.target)) {
        handler();
      }
    }
    document.addEventListener("mousedown", maybeHandler);
    return () => document.removeEventListener("mousedown", maybeHandler);
  }, []);
  return domRef;
}
