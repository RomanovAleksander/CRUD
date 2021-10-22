import {createContext} from "react";

function noop() {}

export const ModalContext = createContext({
  toggle: noop()
});
