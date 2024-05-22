<script lang="ts">
  import { cn } from "$lib/utils";

  export let item: any;

  let checked = false;
  let important = true;
  let unsure = true;
</script>

<li class={cn(
  "rounded-2xl bg-white px-4 h-12 flex justify-between items-center w-96 hover:bg-neutral-100",
  { "text-opacity-20": checked },
  { "border-[3.5px] border-dashed border-amber-400": unsure },
  { "font-bold text-red-400": important },
  { "border-red-400": important && unsure }
)}>
  <div class="flex items-center gap-2 h-full w-[80%]">
    <button
      on:click={() => (checked = !checked)}
      class={cn(
        "border-2 border-blue-400 rounded-full aspect-square w-5 flex items-center justify-center",
        { "bg-blue-400": checked }
      )}
    >
      {#if checked}
        <iconify-icon icon="mingcute:check-fill" class="text-[10px] text-white"></iconify-icon>
      {/if}
    </button>
    <p class={cn(
      "text-ellipsis w-full whitespace-nowrap overflow-hidden",
      { "line-through": checked }
    )}>
      {item.body}
    </p>
  </div>

  <div class="flex gap-2 items-center">
    {#if important}
      <button
        on:click={() => (important = !important)}
        class="rounded-lg bg-red-400 text-white aspect-square size-6 flex items-center justify-center font-mono text-base font-semibold"
      >
        <!-- <iconify-icon icon="material-symbols:exclamation-rounded" class="text-base font-semibold"></iconify-icon> -->
        !
      </button>
    {/if}

    {#if unsure}
      <button
        on:click={() => (unsure = !unsure)}
        class="rounded-lg bg-amber-400 text-white aspect-square size-6 flex items-center justify-center font-mono text-base font-semibold"
      >
        <!-- <iconify-icon icon="material-symbols:exclamation-rounded" class="text-base font-semibold"></iconify-icon> -->
        ?
      </button>
    {/if}
  </div>
</li>
