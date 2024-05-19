<script lang="ts">
  import { cn } from "$lib/utils";

  let className = "";
  export { className as class };
</script>

<button class={cn(
  "shadow-button px-8 py-3 bg-[#4255ff] rounded-2xl text-white font-bold font-mono tracking-wider active:shadow-button-down active:translate-y-[4px] border-[#4525ff] outline-none lowercase",
  className,
)} on:click {...$$restProps}>
  <slot />
</button>
