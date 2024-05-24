<script lang="ts">
  import Button from "$components/Button.svelte";
  import { currentTheme } from "$lib/stores";
</script>

<main class="p-6 flex flex-col items-center h-full gap-4">
  <div class="flex w-full gap-4 justify-center items-center">
    <Button
      element="a"
      href="/login"
      color="#00dd00"
      class="font-semibold font-mono px-4 py-0 h-10"
    >
      Log in
    </Button>

    <Button
      borderWidth="3px"
      color={$currentTheme}
      class="p-3"
    >
      <img src="/logo.svg" alt="Sozo Logo">
    </Button>

    <Button
      color="#ee0000"
      class="font-semibold font-mono px-4 py-0 h-10"
    >
      Sign Up
    </Button>
  </div>
</main>
