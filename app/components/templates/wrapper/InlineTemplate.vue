<script setup>
const props = defineProps({
  slots: {
    type: Array,
    default: () => []
  },
  templates: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div
    :class="[
      styl['template'],
      ...props.templates.map(template => styl[`template--${template}`])
    ]"
  >
    <template
      v-for="slot in props.slots"
      :key="slot"
    >
      <div
        v-if="$slots[slot] && $slots[slot]().length"
        :class="styl['template__item']"
      >
        <slot :name="slot" />
      </div>
    </template>
  </div>
</template>

<style lang="stylus" module="styl">
.template
  display: flex
  flex-flow: row wrap
  &--align-center
    align-items: center
  &--justify-content-start
    justify-content: flex-start
  &--justify-content-center
    justify-content: center
  &--justify-content-between
    justify-content: space-between
  &--justify-content-end
    justify-content: flex-end
</style>
