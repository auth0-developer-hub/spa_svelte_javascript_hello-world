<script>
  import { useAuth0 } from "../../services/auth0";

  const { logout } = useAuth0;
</script>

<button
  class="button__logout"
  on:click={() =>
    logout({
      returnTo: window.location.origin,
    })}
>
  Log Out
</button>
