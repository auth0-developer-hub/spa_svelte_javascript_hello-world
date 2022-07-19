<script>
  import { useAuth0 } from "../../../services/auth0";
  import LoginButton from "../../buttons/login-button.svelte";
  import LogoutButton from "../../buttons/logout-button.svelte";
  import SignupButton from "../../buttons/signup-button.svelte";

  let { isAuthenticated } = useAuth0;
</script>

<div class="nav-bar__buttons">
  {#if $isAuthenticated}
    <LogoutButton />
  {:else}
    <SignupButton />
    <LoginButton />
  {/if}
</div>
