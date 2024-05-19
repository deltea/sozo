<script lang="ts">
	import Button from "$components/Button.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  let { supabase } = data;
  $: ({ supabase } = data)

  async function logOut() {
    await supabase.auth.signOut();
    location.reload();
  }
</script>

<div class="m-8 space-y-4">
  <h1 class="font-nunito font-bold text-2xl lowercase flex items-center gap-2">
    <iconify-icon icon="mingcute:home-3-fill" class="text-xl"></iconify-icon>
    Home
  </h1>

  <Button on:click={logOut} class="flex items-center gap-2">
    Log out
    <iconify-icon icon="mingcute:exit-fill" class="text-xl"></iconify-icon>
  </Button>
</div>
