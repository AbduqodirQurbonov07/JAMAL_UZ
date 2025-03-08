import { defineStore } from "pinia";
import { reactive, ref } from "vue";
export const UseCountStore = defineStore("counter", () => {
  const counts = reactive({ ism: "hello world" });

  return counts;
});
