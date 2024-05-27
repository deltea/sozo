<script lang="ts">
  import type { PageData } from "./$types";

  import { currentTheme } from "$lib/stores";
  import { shadeColor } from "$lib/utils";

  import Button from "$components/Button.svelte";
  import ColorPicker from "$components/ColorPicker.svelte";
  import TodoList from "$components/TodoList.svelte";
  import Nav from "$components/Nav.svelte";

  export let data: PageData;
  let { supabase, session } = data;
  $: ({ supabase, session } = data)

  async function logOut() {
    await supabase.auth.signOut();
    location.reload();
  }
</script>

<!-- <main class="p-8 flex justify-evenly items-center h-full gap-4">
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
</main> -->

<main class="h-full pt-nav">
  <Nav {session} {supabase} />

  <div class="flex justify-evenly items-center relative h-full">
    <div class="absolute z-10 left-0 top-0 h-full p-4">
      <TodoList />
    </div>

    <ColorPicker />
  </div>
</main>
