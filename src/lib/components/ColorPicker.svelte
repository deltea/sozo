<script lang="ts">
  import { currentTheme } from "$lib/stores";
  import { hslToHex, toast } from "$lib/utils";
  import { Slider } from "bits-ui";

  import Button from "$components/Button.svelte";

  let value: number[] = [0];
  $: currentTheme.set(hslToHex(value[0], 80, 70));

  function copyTheme() {
    navigator.clipboard.writeText($currentTheme);
    toast("Color copied!", $currentTheme);
  }
</script>

<Button
  element="div"
  shadowSize="4px"
  animation={false}
  class="w-60 cursor-auto p-6 flex flex-col items-center justify-center gap-6"
>
  <Button
    class="h-12 w-full flex justify-center items-center uppercase font-mono text-center text-sm"
    color={$currentTheme}
    on:click={copyTheme}
  >{$currentTheme}</Button>

  <Slider.Root
    min={0}
    max={360}
    bind:value
    let:thumbs
    class="relative flex items-center w-full hover:cursor-grab active:cursor-grabbing"
  >
    <span class="h-3 w-full rounded-full bg-white border-2 border-neutral-300 relative">
      <Slider.Range
        class="absolute rounded-full h-full bg-neutral-300"
      />
    </span>

    {#each thumbs as thumb}
      <Slider.Thumb
        {thumb}
        class="size-6 rounded-full bg-white border-2 border-neutral-300 outline-none"
      />
    {/each}
  </Slider.Root>
</Button>
