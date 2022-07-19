<script>
  export let title;
  export let description;
  export let resourceUrl;
  export let icon;
</script>

<a
  href={resourceUrl}
  class="auth0-feature"
  target="_blank"
  rel="noopener noreferrer"
>
  <h3 class="auth0-feature__headline">
    <img class="auth0-feature__icon" src={icon} alt="external link icon" />
    {title}
  </h3>
  <p class="auth0-feature__description">{description}</p>
</a>
