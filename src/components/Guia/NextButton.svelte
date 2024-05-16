<script lang="ts">
  export let text: string;
  export let subText: string;
  export let isRight: boolean;
  export let url: string;
</script>
<a
  href={url}
  class="border rounded-md flex {isRight
    ? 'justify-end'
    : 'justify-start'} w-full hover:border-green-400"
>
  <div class="p-2">
    <p class="text-[12px] m-0 text-white">{subText}</p>
    <p class="text-[14px] m-0 text-purple-400">
      {text}
    </p>
  </div>
</a>
