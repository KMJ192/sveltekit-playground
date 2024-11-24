<script lang="ts">
  import { onDestroy, onMount, tick } from "svelte";
  import { memoPages } from "../pages/memo/memo.svelte";

  import classNames from "classnames/bind";
  import style from "./style.module.scss";
  const cx = classNames.bind(style);

  let { children } = $props();

  let node: HTMLElement | null = null;

  onMount(async () => {
    await tick();

    if (node) {
      memoPages.mount("page1", node);
    }
  });

  onDestroy(() => {
    memoPages.destroy("page1");
  });
</script>

<div class={cx("main")}>
  <div bind:this={node}>
    <div>layout</div>
    <div>
      {@render children()}
    </div>
  </div>
</div>
