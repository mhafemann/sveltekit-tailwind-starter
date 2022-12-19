<!-- prettier-ignore -->
<script lang="ts">
  // https://css-tricks.com/accessible-svg-icons/
  export let paths: any,
             ariaHidden: boolean = true,
             url: string | undefined = undefined,
             label: string = '';
  const isArray = Array.isArray(paths)

</script>

<svelte:element
  this={url ? 'a' : 'span'}
  href={url || null}
  aria-label={url ? label : null}>
  <svg
    role={ariaHidden ? '' : 'img'}
    aria-hidden={ariaHidden}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    {#if !ariaHidden}
      <title>{label}</title>
    {/if}
    {#if paths && isArray}
      {#each paths as icon}
        <path stroke-linecap="round" stroke-linejoin="round" d={icon} />
      {/each}
    {:else}
      <path stroke-linecap="round" stroke-linejoin="round" d={paths} />
    {/if}
  </svg>
</svelte:element>
