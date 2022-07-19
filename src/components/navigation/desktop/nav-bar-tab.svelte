<script>
  import { activeRoute } from "../../pager/router.svelte";
  export let path;
  export let label;
</script>

<a
  href={path}
  class="nav-bar__tab"
  class:nav-bar__tab--active={$activeRoute.path === path}
>
  {label}
</a>
