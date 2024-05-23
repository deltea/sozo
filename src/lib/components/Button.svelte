<script lang="ts">
  import { cn, cssVar, shadeColor } from "$lib/utils";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { scale } from "svelte/transition";

  let className = "";
  export { className as class };
  interface $$Props extends HTMLButtonAttributes {
    class?: string;
    color?: string;
    borderWidth?: string;
    shadowSize?: string;
    element?: string;
  };

  export let color = "#ffffff";
  export let borderWidth = "2px";
  export let shadowSize = "4px";
  export let element = "button";

  let button: HTMLButtonElement;
</script>

<svelte:element
  this={element}
  role="button"
  id="button"
  tabindex="0"
  bind:this={button}
  on:click
  use:cssVar={{ color, shadowSize, borderWidth, border: shadeColor(color, -35) }}
  transition:scale={{ duration: 150 }}
  {...$$restProps}
  class={cn(
    "px-8 py-3 rounded-2xl text-white font-bold font-nunito tracking-wider outline-none lowercase",
    className,
  )}
>
  <slot />
</svelte:element>

<style>
  #button {
    background-color: var(--color);
    border-width: var(--borderWidth);
    border-color: var(--border);
    box-shadow: var(--border) 0 var(--shadowSize);
  }

  #button:active {
    box-shadow: var(--border) 0 0;
    translate: 0 var(--shadowSize);
  }
</style>
