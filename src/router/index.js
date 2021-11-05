import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Til from "../views/Til.vue";
import Contact from "../views/Contact.vue";
import SubmissionFail from "../components/SubmissionFail.vue";
import SubmissionSuccess from "../components/SubmissionSuccess.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Welcome to Francois DUMAS LATTAQUE personal website!",
    }
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/til",
    name: "Til",
    component: Til,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/thanks",
    name: "Thanks",
    component: SubmissionSuccess,
    meta: {
      title: "Thanks for your message!",
    }
  },
  {
    path: "/404",
    name: "fail",
    component: SubmissionFail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
