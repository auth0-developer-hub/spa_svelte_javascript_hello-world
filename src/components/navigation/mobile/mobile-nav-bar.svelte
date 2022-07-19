<script>
  import MobileMenuToggleButton from "./mobile-menu-toggle-button.svelte";
  import { mobileMenu } from "./mobile-menu.store";
  import MobileNavBarBrand from "./mobile-nav-bar-brand.svelte";
  import MobileNavBarButtons from "./mobile-nav-bar-buttons.svelte";
  import MobileNavBarTabs from "./mobile-nav-bar-tabs.svelte";
</script>

<div class="mobile-nav-bar__container">
  <nav class="mobile-nav-bar">
    <MobileNavBarBrand />
    <MobileMenuToggleButton />

    {#if $mobileMenu.status === "open"}
      <div class="mobile-nav-bar__menu">
        <MobileNavBarTabs />
        <MobileNavBarButtons />
      </div>
    {/if}
  </nav>
</div>
