<script lang="ts">
  import type { PageData } from "./$types";

  import TodoList from "$components/TodoList.svelte";
  import ColorPicker from "$components/ColorPicker.svelte";
  import Button from "$components/Button.svelte";
  import { currentTheme } from "$lib/stores";

  export let data: PageData;
  let { supabase } = data;
  $: ({ supabase } = data)

  async function logOut() {
    await supabase.auth.signOut();
    location.reload();
  }
</script>

<main class="p-8 flex justify-evenly items-center h-full gap-4">
  <TodoList />
  <ColorPicker />

  <Button
    class="font-semibold flex items-center gap-2"
    color={$currentTheme}
    on:click={logOut}
  >
    log out
    <iconify-icon icon="mingcute:exit-fill" class="text-lg"></iconify-icon>
  </Button>
</main>
