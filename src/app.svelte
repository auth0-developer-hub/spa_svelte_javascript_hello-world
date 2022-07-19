<script>
  import { onMount } from "svelte";
  import PageLoader from "./components/page-loader.svelte";
  import Route from "./components/pager/route.svelte";
  import Router from "./components/pager/router.svelte";
  import AdminPage from "./pages/admin-page.svelte";
  import CallbackPage from "./pages/callback-page.svelte";
  import HomePage from "./pages/home-page.svelte";
  import NotFoundPage from "./pages/not-found-page.svelte";
  import ProfilePage from "./pages/profile-page.svelte";
  import ProtectedPage from "./pages/protected-page.svelte";
  import PublicPage from "./pages/public-page.svelte";
  import { useAuth0 } from "./services/auth0";

  let page;
  let params;

  let { isLoading, isAuthenticated, login, initializeAuth0 } = useAuth0;

  const authenticationGuard = (ctx, next) => {
    if ($isAuthenticated) {
      next();
    } else {
      login({ appState: { targetUrl: ctx.pathname } });
    }
  };

  const onRedirectCallback = (appState) => {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };

  onMount(async () => {
    await initializeAuth0({ onRedirectCallback });
  });
</script>

{#if $isLoading}
  <div class="page-layout">
    <PageLoader />
  </div>
{:else}
  <Router>
    <Route path="/" component={HomePage} />
    <Route
      path="/profile"
      component={ProfilePage}
      middleware={[authenticationGuard]}
    />
    <Route path="/public" component={PublicPage} />
    <Route
      path="/protected"
      component={ProtectedPage}
      middleware={[authenticationGuard]}
    />
    <Route
      path="/admin"
      component={AdminPage}
      middleware={[authenticationGuard]}
    />
    <Route path="/callback" component={CallbackPage} />
    <Route path="*" component={NotFoundPage} />
  </Router>
{/if}
