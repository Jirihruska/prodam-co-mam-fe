import axios from 'axios';

export const api_register = async (ctx) => {
  try {
    const register = await axios.post(`${process.env.VUE_APP_STRAPI_API_URL}/auth/local/register`, {
      username: ctx.username,
      email: ctx.email,
      password: ctx.password,
    })
    return register;
  } catch (e) {
    console.log(e)
  }
}

export const api_login = async (ctx) => {
  try {
    const login = await axios.post(`${process.env.VUE_APP_STRAPI_API_URL}/auth/local`, {
      identifier: ctx.email,
      password: ctx.password,
    })
    localStorage.setItem('jwt', login.data.jwt);
    localStorage.setItem('user', JSON.stringify(login.data.user));
    return login;
  } catch (e) {
    console.log(e)
  }
}