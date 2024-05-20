<script lang="ts">
    import { cn } from "$lib/utils";

  let className = "";
  export { className as class };
</script>

<input
  class={cn(
    "px-4 py-3 rounded-xl text-black font-nunito border-2 border-neutral-400 outline-none",
    className,
  )}
  type="text"
  {...$$restProps}
/>
