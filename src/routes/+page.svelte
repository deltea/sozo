<script lang="ts">
  import type { PageData } from "./$types";

  import TodoList from "$components/TodoList.svelte";
  import ColorPicker from "$components/ColorPicker.svelte";

  export let data: PageData;
  $: ({ supabase } = data)
  let { supabase } = data;

  async function logOut() {
    await supabase.auth.signOut();
    location.reload();
  }
</script>

<main class="p-8 flex justify-evenly items-center h-full">
  <TodoList />
  <ColorPicker />
</main>
