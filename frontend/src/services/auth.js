export const TOKEN_KEY = "@simpleClass-Token";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const logIn = (token) => {
    sessionStorage.setItem(TOKEN_KEY, token);
};
export const logOut = () => {
    sessionStorage.removeItem(TOKEN_KEY);
};

// https://blog.rocketseat.com.br/reactjs-autenticacao/