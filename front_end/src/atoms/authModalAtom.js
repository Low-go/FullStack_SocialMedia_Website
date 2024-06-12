import { atom } from "recoil";

// Define the default state without using TypeScript interfaces
const defaultModalState = {
    open: true,
    view: "signup"
}

// Create the atom without type annotations
export const AuthModalState = atom({
    key: 'authModalState',
    default: defaultModalState
});
