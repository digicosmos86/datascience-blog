<template>
  <div class="banner">
    <div class="px-avatar">
      <img src="/datascience-blog/assets/img/myAvatar.png" alt="avatar" />
    </div>
    <div class="name">Paul Xu</div>
    <div class="occupation">
      <span>Data Scientist</span> | The Policy Lab at Brown University
    </div>
    <div class="passion">
      Data Visualization - Machine Learning - Causal Inference - Web Development
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="stylus">
.banner
  text-align: center
  margin-bottom: 40px

.px-avatar img
  width: 150px
  height: 150px
  border-radius: 50%
  padding: 2px
  border: 1px solid #ccc

.name
  font-size: 2em
  font-weight: 700

.occupation
  font-size: 1.2em

.occupation span
  color: $accentColor
  font-weight: 700
</style>
