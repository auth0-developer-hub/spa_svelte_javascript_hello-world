<script>
  import NavBar from "../components/navigation/desktop/nav-bar.svelte";
  import MobileNavBar from "../components/navigation/mobile/mobile-nav-bar.svelte";
</script>

<div class="page-layout">
  <NavBar />
  <MobileNavBar />
  <div class="page-layout__content">
    <slot />
  </div>
</div>
