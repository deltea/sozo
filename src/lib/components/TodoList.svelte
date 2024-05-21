<script lang="ts">
  import { onMount } from "svelte";
  import Sortable from "sortablejs";

  import TodoListItem from "$components/TodoListItem.svelte";

  let items = [
    { body: "Stuff 1" },
    { body: "Stuff 2" },
    { body: "Stuff 3" },
    { body: "Stuff 4" },
    { body: "Stuff 5" },
    { body: "Stuff 6" },
    { body: "Stuff 7" },
    { body: "Stuff 8" },
    { body: "Stuff 9" },
    { body: "Stuff 10" },
    { body: "Stuff 11" },
    { body: "Stuff 12" },
    { body: "Stuff 13" },
    { body: "Stuff 14" },
    { body: "Stuff 151515151515151515151515151515151515151515" },
  ];

  let list: HTMLUListElement;
  let sortable;

  onMount(() => {
    sortable = Sortable.create(list, {
      animation: 150,
      forceFallback: true,
    });
  });
</script>

<ul
  bind:this={list}
  class="h-full space-y-2 overflow-y-scroll" id="list"
>
  {#each items as item (item.body)}
    <TodoListItem {item} />
  {/each}
</ul>
