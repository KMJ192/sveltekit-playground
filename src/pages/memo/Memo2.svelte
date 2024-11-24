<script lang="ts">
  let cnt = $state(0);
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
