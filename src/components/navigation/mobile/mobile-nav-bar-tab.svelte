<script>
  import { activeRoute } from "../../pager/router.svelte";
  import { mobileMenu } from "./mobile-menu.store";

  export let path;
  export let label;
</script>

<a
  href={path}
  on:click={mobileMenu.close}
  class="mobile-nav-bar__tab"
  class:mobile-nav-bar__tab--active={$activeRoute.path === path}
>
  {label}
</a>
