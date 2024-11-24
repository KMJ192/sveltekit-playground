<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  let cnt = $state(0);

  onMount(() => {
    console.log("Mount Memo1");
  });

  onDestroy(() => {
    console.log("Destroy Memo1");
  });
</script>

<div>memo1</div>
<div>count : {cnt}</div>

<button
  onclick={() => {
    cnt++;
  }}>increase</button
>
<button
  onclick={() => {
    cnt--;
  }}>decrease</button
>
