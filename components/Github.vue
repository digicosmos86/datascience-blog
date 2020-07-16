<template>
  <div>
    <a href="https://github.com/digicosmos86" target="_blank" class="github">
      <github-icon size="1.5x" />Github
    </a>
  </div>
</template>

<script>
import { GithubIcon } from 'vue-feather-icons'

export default {
  components: {
    GithubIcon,
  },
}
</script>

<style lang="stylus" scoped>
@import '~@app/style/config';

.github
  width: min-content;
  display: flex;
  padding: 8px 15px;
  background-color: $accentColor;
  color: #fff;
  border-radius: 25px;
  align-items: center;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  svg
    margin-right: 0.5rem

  &:hover
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6)
    transform: translateY(-1px)
    background-color: darken($accentColor, 10%)
    text-decoration: none
    color: #fff
</style>
