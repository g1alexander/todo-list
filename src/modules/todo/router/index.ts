import { Router } from "@/interfaces/Router";

const route: Router = {
  name: "todo",
  component: () =>
    import(
      /* webpackChunkName: "todo-layout" */ "@m/todo/layout/TodoLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "todo-home",
      component: () =>
        import(/* webpackChunkName: "todo-home" */ "@m/todo/view/TodoView.vue"),
    },
  ],
};

export default route;
