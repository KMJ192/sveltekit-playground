import type { Component } from "svelte";
import Memo1 from "./Memo1.svelte";
import Memo2 from "./Memo2.svelte";

class MemoComponent {
  private pages: Component[];

  constructor(pages: Component[]) {
    this.pages = pages;

    this.onMount();
  }

  public onMount = () => {
    for (let i = 0; i < this.pages.length; i++) {}
  };

  public onDestroy = () => {};
}
