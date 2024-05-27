<script lang="ts">
  import { currentTheme } from "$lib/stores";
  import { cssVar, shadeColor } from "$lib/utils";
  import type { Session, SupabaseClient } from "@supabase/supabase-js";

  import Button from "$components/Button.svelte";
    import { DropdownMenu } from "bits-ui";
    import { fly } from "svelte/transition";

  export let session: Session | null;
  export let supabase: SupabaseClient;

  async function logOut() {
    await supabase.auth.signOut();
    location.reload();
  }
</script>

<nav class="fixed top-0 w-full h-nav px-6 flex justify-between items-center border-b-2 border-neutral-200 bg-white z-20">
  <!-- svelte-ignore a11y-missing-content -->
  <a
    href="/"
    class="size-8 border-[8px] rounded-full duration-150 hover:scale-110 active:scale-100"
    style:border-color={$currentTheme}
  ></a>

  <div class="flex items-center gap-1">
    <button
      class="rounded-full size-9 flex justify-center items-center bg-white duration-150 group active:scale-90"
      id="navButton"
      use:cssVar={{ backgroundColor: shadeColor($currentTheme, 110) }}
      style:color={$currentTheme}
    >
      <iconify-icon
        icon="mingcute:settings-3-fill"
        class="text-2xl group-hover:rotate-45 duration-150"
      ></iconify-icon>
    </button>

    <Button
      shadowSize="0"
      class="font-bold text-sm px-4 py-1 rounded-full hover:scale-105 active:scale-100 duration-150 w-fit font-cursive max-w-80 text-ellipsis overflow-hidden whitespace-nowrap"
      color={$currentTheme}
      contenteditable
    >
      My Project
    </Button>
  </div>

  <DropdownMenu.Root>
    <DropdownMenu.Trigger class="flex justify-center items-center">
      <button
        class="rounded-full size-9 border-3 border-neutral-300 hover:scale-110 duration-150 active:scale-100 bg-cover bg-center"
        style:border-color={$currentTheme}
        style:background-image="url('https://api.dicebear.com/8.x/thumbs/svg?seed={session?.user.id}')"
      ></button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Content
      class="w-60 z-30 bg-white border-2 border-neutral-200 rounded-2xl p-2 text-sm"
      transition={fly}
      sideOffset={8}
    >
      <DropdownMenu.Item>
        <button
          class="w-full flex justify-center items-center gap-1 p-2 rounded-full hover:bg-neutral-100 font-semibold duration-300 active:scale-90"
          style:color={$currentTheme}
          on:click={logOut}
        >
          log out
          <iconify-icon icon="mingcute:exit-fill" class=""></iconify-icon>
        </button>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</nav>

<style>
  #navButton:hover {
    background-color: var(--backgroundColor);
  }
</style>
