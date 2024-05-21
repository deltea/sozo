<script lang="ts">
  export let item: any;
</script>

<li class="rounded-2xl border-2 bg-white border-neutral-400 px-3 h-12 flex items-center gap-2 cursor-grab w-96">
  <button
    class="border-2 border-neutral-400 rounded-md aspect-square w-5"
  ></button>
  <p class="text-ellipsis w-full whitespace-nowrap overflow-hidden">
    {item.body}
  </p>
</li>
