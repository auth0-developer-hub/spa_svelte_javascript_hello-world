<script>
  import { onMount } from "svelte";
  import CodeSnippet from "../components/code-snippet.svelte";
  import PageLayout from "../components/page-layout.svelte";
  import { getAdminResource, message } from "../services/message.service";

  onMount(() => {
    getAdminResource();
  });
</script>

<PageLayout>
  <div class="content-layout">
    <h1 id="page-title" class="content__title">Admin Page</h1>
    <div class="content__body">
      <p id="page-description">
        <span>
          This page retrieves an <strong>admin message</strong> from an external
          API.
        </span>
        <span>
          <strong>
            Only authenticated users with the{" "}
            <code>read:admin-messages</code> permission should access this page.
          </strong>
        </span>
      </p>
      <CodeSnippet title="Admin Message" code={$message} />
    </div>
  </div>
</PageLayout>
