<script>
  import { useAuth0 } from "../services/auth0";
  import NavBar from "../components/navigation/desktop/nav-bar.svelte";
  import MobileNavBar from "../components/navigation/mobile/mobile-nav-bar.svelte";
  import PageLayout from "../components/page-layout.svelte";

  let { error } = useAuth0;
</script>

{#if $error}
  <PageLayout>
    <div class="content-layout">
      <h1 id="page-title" class="content__title">Error</h1>
      <div class="content__body">
        <p id="page-description">
          <span>{$error.message}</span>
        </p>
      </div>
    </div>
  </PageLayout>
{:else}
  <div class="page-layout">
    <NavBar />
    <MobileNavBar />
    <div class="page-layout__content" />
  </div>
{/if}
