<script lang="ts">
  import type { Item } from "../types/types";
  import { Lenguaje } from "../constants/sideMenu";

  import DropMenu from "./DropMenu.svelte";

  let isSidebarOpen: boolean = true;

  function openSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }
  const items: Item[] = [
    { id: 1, label: "Social", url: "social" },
    { id: 2, label: "Personal", url: "personal" },
    { id: 3, label: "Friends", url: "friends" },
  ];
</script>

<div
  class="sidebar sticky h-screen bottom-0 lg:left-0 top-0 p-2 w-[300px] overflow-y-auto text-center bg-[#1b1b1d] border-r-[0.1px] border-gray-500"
>
  <!-- <div class="text-gray-100 text-xl">
    <div class="p-2.5 mt-1 flex items-center">
      <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
      <h1 class="font-bold text-gray-200 text-[15px] ml-3">TailwindCSS</h1>
      <button
        class="ml-28 lg:hidden"
        on:click={openSidebar}
        aria-label="Close sidebar"
      >
        <i class="bi bi-x cursor-pointer">G</i>
      </button>
    </div>
    <div class="my-2 bg-gray-600 h-[1px]"></div>
  </div> -->
  <!-- <div
    class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
  >
    <i class="bi bi-search text-sm"></i>
    <input
      type="text"
      placeholder="Search"
      class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
    />
  </div> -->
  <a
    href="/guia"
    class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
  >
    <span class="text-[15px] ml-4 text-gray-200 font-bold">Inicio</span>
  </a>

  <a
    href="/guia"
    class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
  >
    <span class="text-[15px] ml-4 text-gray-200 font-bold">Instalacion</span>
  </a>

  <a
    href="/guia/hola-mundo"
    class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
  >
    <span class="text-[15px] ml-4 text-gray-200 font-bold">Hola Mundo</span>
  </a>

  <div class="my-4 bg-gray-600 h-[1px]"></div>

  <DropMenu buttonText="Lenguaje" items={Lenguaje} />
  <DropMenu buttonText="Libreria Estandar" {items} />
  <DropMenu buttonText="Sistema de construcción" {items} />
  <DropMenu buttonText="Trabajando con C" {items} />
  <DropMenu buttonText="Asincronia" {items} />

</div>
