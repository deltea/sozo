<script lang="ts">
  import type { PageData } from "./$types";
  import { currentTheme } from "$lib/stores";

  import TodoList from "$components/TodoList.svelte";
  import ColorPicker from "$components/ColorPicker.svelte";
	import Button from "$components/Button.svelte";

  export let data: PageData;
  let { supabase } = data;
  $: ({ supabase } = data)

  async function logOut() {
    await supabase.auth.signOut();
    location.reload();
  }
</script>

<div class="p-8 flex justify-evenly items-center h-full w-full">
  <Button borderWidth="3px" shadowSize="6px" class="rounded-2xl p-3" color={$currentTheme}>
    <img src="/sozo.svg" alt="Sozo Logo" class="invert">
  </Button>

  <TodoList />
  <ColorPicker />
</div>
