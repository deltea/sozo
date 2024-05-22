<script lang="ts">
  import { cn } from "$lib/utils";
  import { scale, slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  import Button from "$components/Button.svelte";

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

<!-- transition:slide={{ duration: 150, axis: "y" }} -->
<Button
  element="li"
  shadowSize="3px"
  class={cn(
    "rounded-2xl px-4 h-12 flex justify-between items-center w-96 text-black font-semibold cursor-default",
    { "text-opacity-20": checked },
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
      placeholder="..."
      class={cn(
        "text-ellipsis w-full whitespace-nowrap overflow-hidden bg-inherit outline-none",
        { "line-through": checked }
      )}
    />
  </div>

  <div class="flex gap-2 items-center h-full">
    {#if important}
      <Button
        on:click={() => (important = !important)}
        shadowSize="0px"
        color="#f87171"
        class="rounded-lg text-white p-0 aspect-square h-6 flex items-center justify-center font-mono text-base font-semibold"
      >!</Button>
    {/if}

    {#if unsure}
      <Button
        on:click={() => (unsure = !unsure)}
        color="#fbbf24"
        shadowSize="0px"
        class="rounded-lg text-white p-0 aspect-square h-6 flex items-center justify-center font-mono text-base font-semibold"
      >?</Button>
    {/if}

    <button
      class="font-black text-neutral-400 h-full block"
      id="handle"
    >
      ---
    </button>
  </div>
</Button>
