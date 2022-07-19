<script>
  import { onMount } from "svelte";
  import CodeSnippet from "../components/code-snippet.svelte";
  import PageLayout from "../components/page-layout.svelte";
  import { getPublicResource, message } from "../services/message.service";

  onMount(() => {
    getPublicResource();
  });
</script>

<PageLayout>
  <div class="content-layout">
    <h1 id="page-title" class="content__title">Public Page</h1>
    <div class="content__body">
      <p id="page-description">
        <span>
          This page retrieves a <strong>public message</strong> from an external
          API.
        </span>
        <span>
          <strong>Any visitor can access this page.</strong>
        </span>
      </p>
      <CodeSnippet title="Public Message" code={$message} />
    </div>
  </div>
</PageLayout>
