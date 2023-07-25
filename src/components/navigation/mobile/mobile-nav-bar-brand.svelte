<script>
  import { mobileMenu } from "./mobile-menu.store";
</script>

<div on:click={mobileMenu.close} class="mobile-nav-bar__brand">
  <a href="/">
    <img
      class="mobile-nav-bar__logo"
      src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
      alt="Auth0 shield logo"
      width="82"
      height="24"
    />
  </a>
</div>
