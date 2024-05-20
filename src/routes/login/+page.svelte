<script lang="ts">
  import type { PageData } from "./$types";
  import { Separator } from "bits-ui";

  import Button from "$components/Button.svelte";
  import Input from "$components/Input.svelte";

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

<main class="flex justify-center items-center h-screen">
  <div class="flex flex-col gap-3">
    <Button
      on:click={login}
      class="flex items-center gap-2 font-nunito"
      color="#ff0000"
    >
      <iconify-icon icon="carbon:logo-google" class="text-lg"></iconify-icon>
      Log in with Google
    </Button>

    <Button
      on:click={login}
      class="flex items-center gap-2 font-nunito"
      color="#207bf3"
    >
      <iconify-icon icon="mingcute:facebook-fill" class="text-lg"></iconify-icon>
      Log in with Facebook
    </Button>
  </div>

  <div class="flex flex-col items-center gap-2 font-mono text-lg font-bold text-neutral-500">
    <Separator.Root orientation="vertical" class="h-12 mx-8 w-0.5 rounded-full bg-neutral-300" />
    <span>or</span>
    <Separator.Root orientation="vertical" class="h-12 mx-8 w-0.5 rounded-full bg-neutral-300" />
  </div>

  <form class="flex flex-col gap-2">
    <Input placeholder="Your email..." type="email" />
  </form>
</main>
