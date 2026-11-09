<template>
  <ContainerTemplate :templates="['w-720']">
    <HeadingTemplate
      :heading="{
        title: {
          level: 1,
          text: 'Bringing Stories of Faith to <br> Life Throught Theater',
          templates: ['fs-50', 'gold', 'uppercase']
        },
        subtitle: {
          level: 2,
          text: 'Subtitle'
        }
      }"
      :templates="['ff-primary', 'fw-bold', 'center']"
    />

    <InlineTemplate
      :slots="[0, 1, 2]"
      :templates="[
        'justify-content-center',
        'align-center',
        'justify-content-between'
      ]"
    >
      <template #0><h1>hehehhehe</h1></template>
      <template #1><h1>hehehhehe</h1></template>
      <template #2><h1>hehehhehe</h1></template>
    </InlineTemplate>
  </ContainerTemplate>
</template>
