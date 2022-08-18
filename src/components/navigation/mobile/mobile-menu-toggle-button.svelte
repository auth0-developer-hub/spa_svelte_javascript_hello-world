<script>
  import { mobileMenu } from "./mobile-menu.store";
</script>

<span
  id="mobile-menu-toggle-button"
  on:click={mobileMenu.toggle}
  class="mobile-nav-bar__toggle material-icons"
>
  {$mobileMenu.icon}
</span>
