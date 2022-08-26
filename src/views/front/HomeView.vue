<template lang="pug">
#home
  v-row(justify='center')
    v-col(cols='9')
      v-carousel(cycle :show-arrows="false")
        v-carousel-item(v-for='(item, i) in carousel' :key='i' :src='item.src' cover)
    v-col(cols='9')
      v-row.justify-start
        v-col(cols='3' v-for='designer in designers')
          v-img(:src='designer.avatar' cover)
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'

const carousel = reactive([
  { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }
])

const designers = reactive([])

const init = async () => {
  try {
    const { data } = await api.get('/designers')
    designers.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>
