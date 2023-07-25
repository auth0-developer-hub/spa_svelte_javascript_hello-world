<script context="module">
  import { writable } from "svelte/store";

  export const activeRoute = writable({});

  const routes = {};

  export function register(route) {
    routes[route.path] = route;
  }
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import page from "page";

  export let disabled = false;
  export let basePath = undefined;

  const last = (route) => {
    return function (ctx) {
      $activeRoute = { ...route, params: ctx.params };
    };
  };

  const setupPage = () => {
    for (let [path, route] of Object.entries(routes)) {
      page(path, ...route.middleware, last(route));
    }
    // set the base url path for our router
    if (basePath) {
      page.base(basePath);
    }
    // setup page and its click handlers
    page.start();
  };

  onMount(setupPage);

  onDestroy(page.stop);
</script>

{#if !disabled}
  <slot />
{/if}
