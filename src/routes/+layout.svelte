<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";
  import type { LayoutData } from "./$types";

  import "@fontsource-variable/inter";
  import "@fontsource/ubuntu-mono";
  import "@fontsource-variable/nunito";
  import "@fontsource-variable/quicksand";
  import "../app.css";
  import "iconify-icon";

  export let data: LayoutData;

  let { supabase, session } = data;
  $: ({ supabase, session } = data)

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<svelte:head>
  <title>Pip</title>
</svelte:head>

<div class="h-screen w-full overflow-hidden font-nunito">
  <slot />
</div>
