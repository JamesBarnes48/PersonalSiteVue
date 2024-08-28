<script>
export default {
    name: 'Footer'
}
</script>

<template>
    <div class="footer-container">
      <a class="footer-link" href="https://www.linkedin.com/in/james-barnes-6406821b1/"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      <a class="footer-link" href="https://github.com/JamesBarnes48"><font-awesome-icon :icon="['fab', 'github']" /></a>
      <p>© 2020 James Barnes</p>
    </div>
</template>

<style scoped>
  .footer-container {
    background-color: var(--off-background-hex);
    padding: 20px 0 20px 0;
    color: #EAF6F6;
  }

  .footer-link {
    color: var(--off-main-hex);
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;
    margin: 0 15px 0 15px;
  }
  
  .footer-embedded-link {
    color: #EAF6F6;
    text-decoration: none;
    font-weight: bold;
  }
  
  .spacedText {
    display: inline;
    margin-left: 20px;
    margin-right: 20px;
  }
</style>