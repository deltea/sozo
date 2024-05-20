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
  
</div>
