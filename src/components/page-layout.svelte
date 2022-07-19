<script>
  import NavBar from "./navigation/desktop/nav-bar.svelte";
  import MobileNavBar from "./navigation/mobile/mobile-nav-bar.svelte";
  import PageFooter from "./page-footer.svelte";
</script>

<div class="page-layout">
  <NavBar />
  <MobileNavBar />
  <div class="page-layout__content">
    <slot />
  </div>
  <PageFooter />
</div>
