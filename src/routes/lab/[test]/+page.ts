import { error } from "@sveltejs/kit";
import type { RouteParams } from "./$types";

type Params = {
  params: RouteParams;
};

export function load({ params }) {
  // console.log(params);
  // error(404, "Not found");
}
