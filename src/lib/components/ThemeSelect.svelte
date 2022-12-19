<script lang="ts">
  import { theme } from '$lib/stores';
  import Svg from '$lib/components/Svg.svelte';
  import { sunIcon, moonIcon } from '$lib/icons';

  const toggleTheme = () => {
    $theme = $theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
  };
</script>

<div class="inline">
  <button
    class="w-11 h-11 flex justify-center items-center rounded-md"
    on:click|preventDefault={toggleTheme}
    type="button">
    {#if $theme}
      <Svg paths={$theme === 'dark' ? sunIcon : moonIcon} />
    {/if}
  </button>
</div>
