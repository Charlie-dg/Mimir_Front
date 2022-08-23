<template lang="pug">
#home
v-row(justify='center')
  v-col(cols='7')
    v-carousel(hide-delimiters)
      v-card-item(v-for='(item, i) in items' :key='i' :src='item.src' cover)

</template>

<script setup>
import { reactive } from 'vue'

const items = reactive([
  { src: '../images/index/carousel/carousel_01.webp' },
  { src: '../images/index/carousel/carousel_02.webp' },
  { src: '../images/index/carousel/carousel_03.jpg' }
])
</script>
