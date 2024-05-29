import { atom } from "recoil";

// Define the default state without using TypeScript interfaces
const defaultModalState = {
    open: false,
    view: "login"
}

// Create the atom without type annotations
export const AuthModalState = atom({
    key: 'authModalState',
    default: defaultModalState
});
