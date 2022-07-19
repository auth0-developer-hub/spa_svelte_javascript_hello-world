<script>
  import { useAuth0 } from "../../../services/auth0";
  import MobileNavBarTab from "./mobile-nav-bar-tab.svelte";

  let { isAuthenticated } = useAuth0;
</script>

<div class="mobile-nav-bar__tabs">
  <MobileNavBarTab path="/profile" label="Profile" />
  <MobileNavBarTab path="/public" label="Public" />
  {#if $isAuthenticated}
    <MobileNavBarTab path="/protected" label="Protected" />
    <MobileNavBarTab path="/admin" label="Admin" />
  {/if}
</div>
