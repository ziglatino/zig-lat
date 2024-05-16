<script lang="ts">
  import type { Item } from "../types/types";
  export let buttonText: string;
  export let items: Item[] = [];

  let isSubmenuOpen: boolean = false;

  function dropdown() {
    isSubmenuOpen = !isSubmenuOpen;
  }
</script>

<button
  class="p-2.5 mt-3 flex items-center w-full rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
  on:click={dropdown}
>
  <div class="flex justify-between w-full items-center">
    <span class="text-[14px] ml-4 text-gray-200 font-bold">{buttonText}</span>
    <img
      src="/arrow.svg"
      class="w-6 h-6 transition-all {isSubmenuOpen ? 'rotate-90' : 'rotate-0'}"
      alt=""
    />
  </div>
</button>
<div
  class="{isSubmenuOpen
    ? 'block'
    : 'hidden'} text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
  id="submenu"
>
  {#each items as item (item.id)}
    <a href="{item.url}"
      ><p class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 ml-4 text-white">
        {item.label}
      </p></a
    >
  {/each}
</div>
