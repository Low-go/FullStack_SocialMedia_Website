import { atom } from 'recoil';

//this will serve as global storage for if a user is autheticated
// I wonder about the token though >:0 let me mess around with it
// a bit

export const authState = atom({ 
    key: 'authState',
    default: {
        isAuthenticated: false,
        user: null,
        userId: null,
        role: null,
        created_at: null,
    }
})

export const AuthModalState = atom({
    key: 'AuthModalState',
    default: {
        open: false,
        view: 'login',
    },
});