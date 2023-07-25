<script>
  import { onMount } from "svelte";
  import CodeSnippet from "../components/code-snippet.svelte";
  import PageLayout from "../components/page-layout.svelte";
  import { useAuth0 } from "../services/auth0.js";
  import { getProtectedResource, message } from "../services/message.service";

  const { getAccessToken } = useAuth0;

  onMount(async () => {
    const accessToken = await getAccessToken();

    await getProtectedResource(accessToken);
  });
</script>

<PageLayout>
  <div class="content-layout">
    <h1 id="page-title" class="content__title">Protected Page</h1>
    <div class="content__body">
      <p id="page-description">
        <span>
          This page retrieves a <strong>protected message</strong> from an external
          API.
        </span>
        <span>
          <strong>Only authenticated users can access this page.</strong>
        </span>
      </p>
      <CodeSnippet title="Protected Message" code={$message} />
    </div>
  </div>
</PageLayout>
