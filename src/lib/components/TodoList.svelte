<script lang="ts">
  import { onMount } from "svelte";
  import Sortable from "sortablejs";

  import TodoListItem from "$components/TodoListItem.svelte";

  let items = [
    { body: "Babooka", checked: true },
    { body: "Wahoo, let's a-go", checked: true },
    { body: "Just do it.", checked: true },
    { body: "Take the dog out" },
    { body: "Epic todo list item" },
    { body: "wow, amazing" },
    { body: "hehe." },
    { body: "ooooooooooooooooooooooooooooooooo" },
    { body: "cool colors" },
    { body: "this is cool" },
    { body: "do stuff i'm supposed to do" },
    { body: "Do stuff" },
    { body: "Finish the thing" },
    { body: "Make the stuff" },
    { body: "fun" },
  ];

  let list: HTMLUListElement;

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
      }
    });
  });
</script>

<ul
  bind:this={list}
  id="list"
  class="h-full space-y-2 overflow-y-scroll py-2 focus:bg-red-500"
>
  {#each items as item, index (item.body)}
    <TodoListItem
      {item}
      on:delete={() => (items = items.filter((_, i) => i !== index))}
      checked={item.checked}
    />
  {/each}
</ul>
