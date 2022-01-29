import { State } from "@/interfaces/store/Counter";
import { defineStore } from "pinia";

export const useState = defineStore("counter.state", {
  state: (): State => ({
    counter: 0,
  }),
});
