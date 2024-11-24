<script lang="ts">
  import { Page } from "../pages/memo/pageMemo";

  import classNames from "classnames/bind";
  import style from "./style.module.scss";
  const cx = classNames.bind(style);

  let { children } = $props();
</script>

{#snippet memo()}
  {#each Page as Memo, idx (idx)}
    <Memo></Memo>
  {/each}
{/snippet}

<div class={cx("main")}>
  {@render memo()}
  <div>
    <div>layout</div>
    <div>
      {@render children()}
    </div>
  </div>
</div>
