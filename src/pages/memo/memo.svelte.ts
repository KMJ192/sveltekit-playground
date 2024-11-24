import { mount, type Component } from "svelte";
import Memo1 from "./Memo1.svelte";
import Memo2 from "./Memo2.svelte";

export type MemoPageMap = {
  [key: string]: Component;
};
class MemoPage {
  private pages: MemoPageMap;

  private instances: {
    [key: string]: Record<string, any>;
  };

  constructor(pages: MemoPageMap) {
    this.pages = pages;

    this.instances = {};
  }

  public mount = (key: string, target: HTMLElement, props?: any) => {
    const component = this.pages[key];
    // const instance = new Component(target, props);
    this.instances[key] = mount(component, {
      target,
      props,
    });
  };

  public destroy = (key: string) => {
    if (this.instances[key]) {
      console.log(this.instances[key]);
      console.log(this.instances[key], "destroy");
      // this.instances[key].$destroy();
    }
  };
}

const pages: MemoPageMap = {
  page1: Memo1,
  page2: Memo2,
};

export const memoPages = new MemoPage(pages);
