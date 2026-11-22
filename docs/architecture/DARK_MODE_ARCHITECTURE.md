# Architecture: Zero-FOUC Dark Mode Implementation

## 1. Injected Blocking Initialization
To prevent flash of unstyled content during client hydration:
```html
<script>
  (function() {
    var stored = localStorage.getItem('theme');
    var isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
  })();
</script>
```
