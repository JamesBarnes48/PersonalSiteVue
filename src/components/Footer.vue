<script>
export default {
    name: 'Footer'
}
</script>

<template>
    <div class="footer-container">
      <div class="links-container">
        <a class="footer-link" href="https://www.linkedin.com/in/james-barnes-6406821b1/"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
        <a class="footer-link" href="https://github.com/JamesBarnes48"><font-awesome-icon :icon="['fab', 'github']" /></a>
      </div>
      <h3 class="email-text">jamesbarnes20082000@gmail.com</h3>
    </div>
</template>

<style scoped>
  .footer-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 10vh;
    background-color: var(--off-background-hex);
    padding: 20px 0 20px 0;
    color: #EAF6F6;
    border-top: 1px solid var(--off-main-hex);
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

  .email-text {
    color: var(--off-main-hex);
    font-size: 20px;
  }

  @media (max-width: 600px) {
    .email-text {
      font-size: 14px;
    }

    .footer-link {
      font-size: 1.5rem;
      margin: 0 7px 0 7px
    }
  }

</style>