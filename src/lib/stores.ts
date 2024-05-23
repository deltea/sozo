import { writable } from "svelte/store";

export const currentTheme = writable("#60a5fa");
currentTheme.subscribe(value => {
  console.log(value);
});
