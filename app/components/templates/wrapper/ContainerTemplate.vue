<script setup>
const props = defineProps({
  templates: {
    type: Array,
    default: () => []
  }
})
</script>
<template>
  <section
    :class="[
      styl['template'],
      ...templates.map(template => styl[`template--${template}`])
    ]"
  >
    <slot />
  </section>
</template>

<style lang="stylus" module="styl">
.template
    width: 100%
    margin: 0 auto
    &--w-720
      max-width: 720px
    &--w-1280
        max-width: 1280px
</style>
