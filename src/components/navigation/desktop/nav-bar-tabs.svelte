<script>
  import { useAuth0 } from "../../../services/auth0";
  import NavBarTab from "./nav-bar-tab.svelte";

  let { isAuthenticated } = useAuth0;
</script>

<div class="nav-bar__tabs">
  <NavBarTab path="/profile" label="Profile" />
  <NavBarTab path="/public" label="Public" />
  {#if $isAuthenticated}
    <NavBarTab path="/protected" label="Protected" />
    <NavBarTab path="/admin" label="Admin" />
  {/if}
</div>
