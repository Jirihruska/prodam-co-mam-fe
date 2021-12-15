export const routes = [
  {
    path: "/",
    name: "landing-page",
    component: () =>
      import(
        /* webpackChunkName: "confirm-email-page" */ "../components/loginPage/LoginPage.vue"
      ),
  },
  {
    path: "/login-page",
    name: "login-page",
    component: () =>
      import(
        /* webpackChunkName: "confirm-email-page" */ "../components/loginPage/LoginPage.vue"
      ),
  },
  {
    path: "/registration-page",
    name: "registration-page",
    component: () =>
      import(/* webpackChunkName: "preview-page" */ "../components/registrationPage/RegistrationPage.vue"),
  },
];