<script lang="ts">
  import { cn } from "$lib/utils";
  import { scale, slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let item: any;

  const dispatch = createEventDispatcher();

  let value: string = item.body;

  let checked = false;
  let important = false;
  let unsure = false;

  function keydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      // Save
    } else if (e.key === " ") {
      // Modifier shortcuts
      if (value.startsWith("!") || value.endsWith("!")) {
        e.preventDefault();
        value = value.replace("!", "");
        important = !important;
      } else if (value.startsWith("?") || value.endsWith("?")) {
        e.preventDefault();
        value = value.replace("?", "");
        unsure = !unsure;
      }
    } else if (e.key === "Backspace" && value.length === 0 || e.key === "Delete") {
      dispatch("delete");
    }
  }
</script>

<li
  transition:slide={{ duration: 150, axis: "y" }}
  class={cn(
    "rounded-2xl bg-white px-4 h-12 flex justify-between items-center w-96 hover:bg-neutral-100",
    { "text-opacity-20": checked },
    // { "border-[3.5px] border-dashed border-amber-400": unsure },
    // { "font-bold text-red-400": important },
    // { "border-red-400": important && unsure }
  )}
>
  <div class="flex items-center gap-2 h-full w-[80%]">
    <button
      on:click={() => (checked = !checked)}
      class={cn(
        "border-2 border-blue-400 rounded-full aspect-square w-5 flex items-center justify-center duration-150 hover:scale-110 active:scale-100",
        { "bg-blue-400": checked }
      )}
    >
      {#if checked}
        <iconify-icon icon="mingcute:check-fill" class="text-[10px] text-white"></iconify-icon>
      {/if}
    </button>

    <input
      bind:value={value}
      on:keydown={keydown}
      class={cn(
        "text-ellipsis w-full whitespace-nowrap overflow-hidden bg-inherit outline-none",
        { "line-through": checked }
      )}
    />
  </div>

  <div class="flex gap-2 items-center">
    {#if important}
      <button
        on:click={() => (important = !important)}
        transition:scale={{ duration: 150 }}
        class="rounded-lg bg-red-400 text-white aspect-square size-6 flex items-center justify-center font-mono text-base font-semibold duration-150 hover:scale-110 active:scale-100"
      >!</button>
    {/if}

    {#if unsure}
      <button
        on:click={() => (unsure = !unsure)}
        transition:scale={{ duration: 150 }}
        class="rounded-lg bg-amber-400 text-white aspect-square size-6 flex items-center justify-center font-mono text-base font-semibold duration-150 hover:scale-110 active:scale-100"
      >?</button>
    {/if}
  </div>
</li>
