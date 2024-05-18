<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  let { supabase } = data;
  $: ({ supabase } = data)

  async function login() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      }
    });
  }
</script>

<h1>Login</h1>

<button on:click={login}>
  Sign in with Google
</button>
