import VueRouter from "vue-router";
import timetracker from "../components/TimeTracker.vue";
import projects from "../components/Projects.vue";
const routes = [
  { path: "/timetracker", component: timetracker },
  { path: "/projects", component: projects },
];
const router = new VueRouter({
  routes,
});

export default router;
