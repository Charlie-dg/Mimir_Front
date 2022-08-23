<template lang="pug">
#home
v-row(justify='center')
  v-col(cols='7')
    v-carousel
      v-card-item(v-for='(item, i) in carousel' :key='i')
        v-img(:src='item.src' cover)
    v-divider
    #indexProfile
      v-card(width="200px" height="100px")
        v-img(:src='`https://picsum.photos/500/300?image=1`' )
</template>

<script setup>
import { reactive } from 'vue'

const carousel = reactive([
  { src: 'https://picsum.photos/500/400?image=1' },
  { src: 'https://picsum.photos/500/400?image=2' },
  { src: 'https://picsum.photos/500/400?image=3' }
])

const profiles = reactive([
  '../images/作品集/01.png',
  '../images/作品集/02.png',
  '../images/作品集/03.png'
])
</script>
