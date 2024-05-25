<script lang="ts">
  import Button from "$components/Button.svelte";
  import { currentTheme } from "$lib/stores";
</script>

<main class="p-6 flex flex-col items-center h-full gap-4">
  <div class="flex w-full gap-4 justify-center items-center">
    <Button
      borderWidth="3px"
      color={$currentTheme}
      class="p-0"
    >
      <a href="/login" class="block h-full w-full p-3">
        <img src="/logo.svg" alt="Sozo Logo">
      </a>
    </Button>
  </div>
</main>
