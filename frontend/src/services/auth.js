export const TOKEN_KEY = "@simpleClass-Token";
export const USER_ID = "@museuVirtual-UserId";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const UserLogado = () => sessionStorage.getItem(USER_ID);
export const logIn = (token) => {
    sessionStorage.setItem(TOKEN_KEY, token);
};
export const logOut = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_ID);
};
export const userId = (user) => {
    sessionStorage.setItem(USER_ID, user);
};
// https://blog.rocketseat.com.br/reactjs-autenticacao/