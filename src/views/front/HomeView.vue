<template lang="pug">
#home
  v-row.justify-center
    v-col(cols='9')
      v-carousel(cycle :show-arrows="false")
        v-carousel-item(v-for='(item, i) in carousel' :key='i' :src='item.src' cover)
    v-col(cols='9')
      v-row.justify-center.align-center
        .designer(style="width: 100%; height: 30%;" )
          v-slide-group(:show-arrows="true" class="pa-4")
            v-slide-group-item(v-for='(designer, idx) in designers' :key='idx + 1')
              v-img(:src='designer.avatar' :class="m-4" style="width: 310px; height: 300px;")
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
