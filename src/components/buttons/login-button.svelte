<script>
  import { useAuth0 } from "../../services/auth0";

  const { login } = useAuth0;
</script>

<button
  class="button__login"
  on:click={() =>
    login({
      prompt: "login",
      appState: {
        targetUrl: "/profile",
      },
    })}
>
  Log In
</button>
