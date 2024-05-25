<script lang="ts">
  import { cn } from "$lib/utils";
  import { createEventDispatcher } from "svelte";

  import Button from "$components/Button.svelte";
  import { currentTheme } from "$lib/stores";

  export let item: {
    body: string;
    checked?: boolean;
    important?: boolean;
    unsure?: boolean;
  };
  export let handle: boolean;

  const dispatch = createEventDispatcher();

  function onChecked() {
    item.checked = !item.checked;
    dispatch("change");
  }

  function keydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      // Save
    } else if (e.key === " ") {
      // Modifier shortcuts
      if (item.body.startsWith("!") || item.body.endsWith("!")) {
        e.preventDefault();
        item.body = item.body.replace("!", "");
        item.important = !item.important;
        dispatch("change");
      } else if (item.body.startsWith("?") || item.body.endsWith("?")) {
        e.preventDefault();
        item.body = item.body.replace("?", "");
        item.unsure = !item.unsure;
        dispatch("change");
      }
    } else if (e.key === "Backspace" && item.body.length === 0 || e.key === "Delete") {
      dispatch("delete");
    }
  }
</script>

<Button
  shadowSize="3px"
  class={cn(
    "item rounded-2xl px-4 h-12 flex justify-between items-center w-full text-black gap-2",
    { "text-opacity-20": item.checked },
  )}
>
  <div class="flex items-center gap-2 h-full flex-grow">
    <button
      on:click={onChecked}
      class={cn(
        "border-3 rounded-lg aspect-square size-5 flex items-center justify-center duration-150 hover:scale-110 active:scale-100"
      )}
      style:background-color={item.checked ? $currentTheme : "white"}
      style:border-color={$currentTheme}
    >
      {#if item.checked}
        <iconify-icon icon="mdi:check-bold" class="text-[12px] text-white"></iconify-icon>
      {/if}
    </button>

    <input
      bind:value={item.body}
      on:keydown={keydown}
      placeholder="..."
      class={cn(
        "text-ellipsis w-full whitespace-nowrap overflow-hidden bg-inherit outline-none font-medium text-sm",
        { "line-through": item.checked }
      )}
    />
  </div>

  <div class="flex gap-2 items-center h-full">
    <div class="flex gap-1">
      {#if item.important}
        <Button
          on:click={() => (item.important = !item.important)}
          shadowSize="0"
          borderWidth="0"
          color="#f87171"
          class="rounded-full text-white p-0 aspect-square size-[22px] flex items-center justify-center font-mono text-sm font-semibold"
        >!</Button>
      {/if}

      {#if item.unsure}
        <Button
          on:click={() => (item.unsure = !item.unsure)}
          color="#fbbf24"
          shadowSize="0"
          borderWidth="0"
          class="rounded-full text-white p-0 aspect-square size-[22px] flex items-center justify-center font-mono text-sm font-semibold"
        >?</Button>
      {/if}
    </div>

    {#if handle}
      <button
        class="handle font-black text-neutral-400 h-full block w-6 cursor-grab"
        id="handle"
      >
        <iconify-icon icon="mingcute:menu-fill" class="text-xl"></iconify-icon>
      </button>
    {/if}
  </div>
</Button>
