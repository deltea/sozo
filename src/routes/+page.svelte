<script lang="ts">
  import type { PageData } from "./$types";

	import Button from "$components/Button.svelte";
  import TodoList from "$components/TodoList.svelte";

  export let data: PageData;
  let { supabase } = data;
  $: ({ supabase } = data)

  async function logOut() {
    await supabase.auth.signOut();
    location.reload();
  }
</script>

<div class="p-8 flex justify-center items-center space-y-4 h-full w-full">
  <TodoList />
</div>
