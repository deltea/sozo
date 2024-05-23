<script lang="ts">
  import type { PageData } from "./$types";

  import TodoList from "$components/TodoList.svelte";
  import ColorPicker from "$components/ColorPicker.svelte";

  export let data: PageData;
  let { supabase } = data;
  $: ({ supabase } = data)

  async function logOut() {
    await supabase.auth.signOut();
    location.reload();
  }
</script>

<div class="p-8 flex justify-evenly items-center space-y-4 h-full w-full">
  <TodoList />
  <ColorPicker />
</div>
