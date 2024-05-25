<script lang="ts">
  import { currentTheme } from "$lib/stores";
  import { cssVar, shadeColor } from "$lib/utils";
  import type { Session, SupabaseClient } from "@supabase/supabase-js";

  import Button from "$components/Button.svelte";

  export let session: Session | null;
  export let supabase: SupabaseClient;

  async function logOut() {
    await supabase.auth.signOut();
    location.reload();
  }
</script>

<nav class="fixed top-0 w-full h-nav px-6 flex justify-between items-center border-b-3 border-neutral-200 bg-white z-20">
  <!-- svelte-ignore a11y-missing-content -->
  <a
    href="/"
    class="size-6 border-[6px] rounded-full duration-150 hover:scale-110 active:scale-100"
    style:border-color={$currentTheme}
  ></a>

  <div class="flex items-center gap-1">
    <button
      class="rounded-full size-9 flex justify-center items-center bg-white duration-150 group"
      id="navButton"
      use:cssVar={{ backgroundColor: shadeColor($currentTheme, 110) }}
      style:color={$currentTheme}
    >
      <iconify-icon
        icon="mingcute:settings-3-fill"
        class="text-2xl group-hover:rotate-90 duration-150"
      ></iconify-icon>
    </button>

    <Button
      shadowSize="0"
      class="font-bold text-base px-4 py-1 rounded-full hover:scale-105 active:scale-100 duration-150"
      color={$currentTheme}
    >
      Sozo Web App
    </Button>
  </div>

  <button
    class="rounded-full size-9 border-3 border-neutral-300 hover:scale-110 duration-150 active:scale-100 bg-cover bg-center"
    style:background-image="url('https://api.dicebear.com/8.x/thumbs/svg?seed={session?.user.id}')"
    on:click={logOut}
  ></button>
</nav>

<style>
  #navButton:hover {
    background-color: var(--backgroundColor);
  }
</style>
