export const routes = [
  {
    path: "/",
    name: "landing-page",
    component: () =>
      import(
        /* webpackChunkName: "confirm-email-page" */ "../components/landingPage/LandingPage.vue"
      ),
  },
  {
    path: "/confirmation-page",
    name: "confirmation-page",
    component: () =>
      import(/* webpackChunkName: "preview-page" */ "../components/confirmationPage/ConfirmationPage.vue"),
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
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "preview-page" */ "../components/dashboard/LandingPage.vue"),
  },
  {
    path: "/sell",
    name: "sell",
    component: () =>
      import(/* webpackChunkName: "preview-page" */ "../components/sellProduct/SellProduct.vue"),
  },
  {
    path: "/user-profile",
    name: "user-profile",
    component: () =>
      import(/* webpackChunkName: "preview-page" */ "../components/userProfile/UserProfile.vue"),
  },
];