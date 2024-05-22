<script lang="ts">
  import { cn } from "$lib/utils";

  export let item: any;

  let checked = false;
</script>

<li class={cn(
  "rounded-2xl bg-white px-4 h-12 flex justify-between items-center w-96 hover:bg-neutral-100",
  { "text-opacity-20": checked }
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
    <div class="rounded-lg bg-red-500 text-white aspect-square size-6 flex items-center justify-center font-mono text-base">
      <!-- <iconify-icon icon="material-symbols:exclamation-rounded" class="text-base"></iconify-icon> -->
      !
    </div>
    <div class="rounded-lg bg-amber-500 text-white aspect-square size-6 flex items-center justify-center font-mono text-base">
      <!-- <iconify-icon icon="material-symbols:exclamation-rounded" class="text-base"></iconify-icon> -->
      ?
    </div>
  </div>
</li>
