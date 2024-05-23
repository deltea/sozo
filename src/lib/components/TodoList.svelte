<script lang="ts">
  import { onMount } from "svelte";
  import Sortable from "sortablejs";
  import { currentTheme } from "$lib/stores";
  import { flip } from "svelte/animate";

  import TodoListItem from "$components/TodoListItem.svelte";

  let items = [
    { body: "Babooka", checked: true },
    { body: "Wahoo, let's a-go", checked: true },
    { body: "Just do it.", checked: true },
    { body: "Take the dog out" },
    { body: "Epic todo list item" },
    { body: "wow, amazing" },
    { body: "hehe." },
    { body: "poqjfelkjalskdnljfjiwojqpoiefjwjfopqioewpqijpouehfihqw" },
    { body: "cool colors" },
    { body: "this is cool" },
    { body: "do stuff i'm supposed to do" },
    { body: "Do stuff" },
    { body: "Finish the thing" },
    { body: "Make the stuff" },
    { body: "fun" },
  ];

  let list: HTMLUListElement;
  let autoSort = true;

  function order() {
    items = items.toSorted((a, b) => {
      return (a.checked?1:-1) - (b.checked?1:-1)
    });
  }

  onMount(() => {
    Sortable.create(list, {
      animation: 150,
      forceFallback: true,
      handle: "#handle",
      onStart: (e: Sortable.SortableEvent) => {
        document.body.style.setProperty("cursor", "grabbing", "important");
      },
      onEnd: (e: Sortable.SortableEvent) => {
        document.body.style.setProperty("cursor", "auto");
      },
    });

    order();
  });
</script>

<ul
  bind:this={list}
  id="list"
  class="h-full space-y-2 overflow-y-scroll border-3 rounded-3xl p-4"
  style:border-color={$currentTheme}
>
  {#each items as item, index (item.body)}
    <li animate:flip={{ duration: 200 }} class="block">
      <TodoListItem
        {item}
        handle={!autoSort}
        on:delete={() => (items = items.filter((_, i) => i !== index))}
        on:checked={autoSort && order}
      />
    </li>
  {/each}
</ul>
