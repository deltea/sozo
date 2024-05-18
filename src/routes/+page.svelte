<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  let { supabase } = data;
  $: ({ supabase } = data)

  async function logOut() {
    await supabase.auth.signOut();
    location.reload();
  }
</script>

<h1>Dashboard</h1>

<button on:click={logOut}>
  Log out
</button>
