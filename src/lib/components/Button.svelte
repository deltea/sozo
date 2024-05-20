<script lang="ts">
  import { cn, cssVar, shadeColor } from "$lib/utils";

  let className = "";
  export { className as class };

  export let color = "#ffffff";

  let button: HTMLButtonElement;
</script>

<button
  class={cn(
    "px-8 py-3 rounded-2xl text-white font-bold font-nunito tracking-wider active:translate-y-[4px] outline-none lowercase",
    className,
  )}
  bind:this={button}
  id="button"
  on:click
  use:cssVar={{ color, border: shadeColor(color, -35) }}
  {...$$restProps}
>
  <slot />
</button>

<style>
  #button {
    background-color: var(--color);
    border-width: 2px;
    border-color: var(--border);
    box-shadow: var(--border) 0 4px;
  }

  #button:active {
    box-shadow: var(--border) 0 0;
  }
</style>
