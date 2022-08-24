<template lang="pug">
#home
  v-row(justify='center')
    v-col(cols='9')
      v-carousel(cycle :show-arrows="false")
        v-carousel-item(v-for='(item, i) in carousel' :key='i' :src='item.src' cover)
    v-col(cols='9')
      v-row.justify-start
        v-col(cols='3' v-for='(item, i) in carousel' :key='i')
          v-img(:src='item.src' cover)
</template>

<script setup>
import { reactive } from 'vue'

const carousel = reactive([
  { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }
])

const profiles = reactive([
  '../images/作品集/01.png',
  '../images/作品集/02.png',
  '../images/作品集/03.png'
])
</script>
