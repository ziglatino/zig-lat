<script lang="ts">
  export let editor: string;
  export let date: string;
  export let url: string;
</script>

<div class="w-full flex flex-row justify-between place-items-center">
  <a target="_blank"
    class="text-[12px] text-purple-400 underline hover:text-purple-300 flex place-items-center space-x-2"
    href={"https://github.com/ziglatino/zig-lat/blob/main/src/content" + url}
    >
    <img class="h-4 w-4" src="/pencil.svg" alt="">
    <span>Edita esta pagina</span>
    </a
  >
  <span class="text-[12px]"
    >Última actualización: {date} por
    <span class="font-bold text-green-300">{editor}</span></span
  >
</div>
