<script lang="ts">
  import Button from "$components/Button.svelte";
  import { currentTheme } from "$lib/stores";
</script>

<main class="p-6 flex flex-col items-center h-full gap-4">
  <Button
    borderWidth="3px"
    shadowSize="6px"
    color={$currentTheme}
    class="rounded-2xl p-3"
  >
    <img src="/logo.svg" alt="Sozo Logo">
  </Button>
</main>
