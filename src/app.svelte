<script>
  import Route from "./components/pager/route.svelte";
  import Router from "./components/pager/router.svelte";
  import AdminPage from "./pages/admin-page.svelte";
  import HomePage from "./pages/home-page.svelte";
  import NotFoundPage from "./pages/not-found-page.svelte";
  import ProfilePage from "./pages/profile-page.svelte";
  import ProtectedPage from "./pages/protected-page.svelte";
  import PublicPage from "./pages/public-page.svelte";

  let page;
  let params;
</script>

<Router>
  <Route path="/" component={HomePage} />
  <Route path="/profile" component={ProfilePage} />
  <Route path="/public" component={PublicPage} />
  <Route path="/protected" component={ProtectedPage} />
  <Route path="/admin" component={AdminPage} />
  <Route path="*" component={NotFoundPage} />
</Router>
