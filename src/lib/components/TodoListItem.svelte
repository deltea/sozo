<script lang="ts">
  import { cn } from "$lib/utils";
  import { createEventDispatcher } from "svelte";

  import Button from "$components/Button.svelte";
  import { currentTheme } from "$lib/stores";

  export let item: any;
  export let checked = false;
  export let important = false;
  export let unsure = false;

  const dispatch = createEventDispatcher();

  let value: string = item.body;

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
    "item rounded-2xl px-4 h-12 flex justify-between items-center w-96 text-black gap-2",
    { "text-opacity-20": checked },
  )}
>
  <div class="flex items-center gap-2 h-full flex-grow">
    <button
      on:click={() => (checked = !checked)}
      class={cn(
        "border-3 rounded-full aspect-square size-5 flex items-center justify-center duration-150 hover:scale-110 active:scale-100"
      )}
      style:background-color={checked ? $currentTheme : "white"}
      style:border-color={$currentTheme}
    >
      {#if checked}
        <iconify-icon icon="mdi:check-bold" class="text-[12px] text-white"></iconify-icon>
      {/if}
    </button>

    <input
      bind:value={value}
      on:keydown={keydown}
      placeholder="..."
      class={cn(
        "text-ellipsis w-full whitespace-nowrap overflow-hidden bg-inherit outline-none font-medium",
        { "line-through": checked }
      )}
    />
  </div>

  <div class="flex gap-2 items-center h-full">
    <div class="flex gap-1">
      {#if important}
        <Button
          on:click={() => (important = !important)}
          shadowSize="0px"
          color="#f87171"
          class="rounded-lg text-white p-0 aspect-square size-6 flex items-center justify-center font-mono text-base font-semibold"
        >!</Button>
      {/if}
      {#if unsure}
        <Button
          on:click={() => (unsure = !unsure)}
          color="#fbbf24"
          shadowSize="0px"
          class="rounded-lg text-white p-0 aspect-square size-6 flex items-center justify-center font-mono text-base font-semibold"
        >?</Button>
      {/if}
    </div>

    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <button
      class="handle font-black text-neutral-400 h-full block w-6 cursor-grab"
      id="handle"
    >
      <iconify-icon icon="mingcute:menu-fill" class="text-xl"></iconify-icon>
    </button>
  </div>
</Button>
