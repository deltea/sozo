<script lang="ts">
  import { onMount } from "svelte";
  import Sortable from "sortablejs";
  import { flip } from "svelte/animate";

  import TodoListItem from "$components/TodoListItem.svelte";
    import { cn } from "$lib/utils";

  let items = [
    { body: "Babooka", checked: true, important: false },
    { body: "Wahoo, let's a-go", checked: true, important: false },
    { body: "Just do it.", checked: true, important: false },
    { body: "Take the dog out", important: false },
    { body: "Epic todo list item", important: false },
    { body: "wow, amazing", important: false },
    { body: "hehe.", important: false },
    { body: "poqjfelkjalskdnljfjiwojqpoiefjwjfopqioewpqijpouehfihqw", important: false },
    { body: "cool colors", important: false },
    { body: "this is cool", important: false },
    { body: "do stuff i'm supposed to do", important: false },
    { body: "Do stuff", important: false },
    { body: "Finish the thing", important: false },
    { body: "Make the stuff", important: false },
    { body: "fun", important: false },
  ];

  let list: HTMLUListElement;
  let autoSort = false;
  let scrollPosition: "bottom" | "middle" | "top" = "top";

  function order() {
    items = items.toSorted((a, b) => (b.important?1:-1) - (a.important?1:-1));
    items = items.toSorted((a, b) => (a.checked?1:-1) - (b.checked?1:-1));
  }

  function setScrollPosition(e: Event) {
    if (list.scrollTop === 0) {
      scrollPosition = "top";
    } else if (list.scrollHeight - list.scrollTop - list.clientHeight < 1) {
      scrollPosition = "bottom";
    } else {
      scrollPosition = "middle";
    }
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

    list.addEventListener("scroll", setScrollPosition);

    return () => {
      list.removeEventListener("scroll", setScrollPosition);
    }
  });
</script>

<ul
  bind:this={list}
  id="list"
  class={cn(
    "space-y-2 overflow-y-scroll border3 p4 py-2 rounded3xl h-full w-96 bg-white border-neutral-300",
    {
      "border-t-3": scrollPosition !== "top",
      "border-b-3": scrollPosition !== "bottom",
    }
  )}
>
  {#each items as item, index (item.body)}
    <li animate:flip={{ duration: 200 }} class="block">
      <TodoListItem
        {item}
        handle={!autoSort}
        on:delete={() => (items = items.filter((_, i) => i !== index))}
        on:change={autoSort ? order : () => {}}
      />
    </li>
  {/each}
</ul>
