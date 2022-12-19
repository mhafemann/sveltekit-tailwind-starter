<script>
  import '../app.postcss';
  import { afterNavigate, beforeNavigate } from '$app/navigation';

  beforeNavigate(() => {
    document.documentElement?.classList.remove('smoothscroll');
  });

  afterNavigate(() => {
    document.documentElement?.classList.add('smoothscroll');
  });
</script>

<slot />
