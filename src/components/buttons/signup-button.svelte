<script>
  import { useAuth0 } from "../../services/auth0";

  /**
   * Using the Signup feature requires you to enable
   * the Auth0 New Universal Login Experience in your tenant.
   * Learn more: https://auth0.com/docs/universal-login/new-experience
   */
  const { login } = useAuth0;
</script>

<button
  class="button__sign-up"
  on:click={() =>
    login({
      prompt: "login",
      appState: {
        targetUrl: "/profile",
      },
      screen_hint: "signup",
    })}
>
  Sign Up
</button>
