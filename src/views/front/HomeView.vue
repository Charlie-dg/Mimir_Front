<template lang="pug">
#home
  v-row.justify-center
    v-col(cols='9')
      v-carousel(cycle :show-arrows="false")
        v-carousel-item(v-for='(item, i) in news' :key='i' :src='item.image' cover)
    v-col(cols='9' style="height: 50px;")
    v-col(cols='9')
      v-row.justify-center
        v-col(cols='4')
          v-row.justify-center.align-center(style="height: 30%;")
            .text-lg-h3.text-md-h4.text-sm-h5.text-center.my-6 美髮、與創意
            v-divider
            .text-lg-h3.text-md-h4.text-sm-h5.text-center.my-2 ABOUT
        v-col(col='8')
          v-row.justify-start.align-center(style="height: 20%;")
            .text-lg-h3.text-md-h4.text-sm-h5.text-center.font-weight-bold.my-2 美有很多樣貌<br>不受框架侷限
          v-row.justify-start.align-start(style="height: 30%;")
            .text-lg-h5.text-md-h6.text-sm-subtitle-1 我們的核心概念是不想受到髮廊傳統的拘束<br>不管是護髮、染髮、燙髮、剪髮和洗髮<br>我們喜歡塑造新的規則，打破傳統髮廊的限制
          v-row(style="height: 50%;")
            v-img(:src="'https://img.freepik.com/free-photo/hand-businesswoman-writing-paper-office_1262-2119.jpg?w=996&t=st=1661602142~exp=1661602742~hmac=366f6e13f818e7bf381c0a7980f43e6d25699a7e85b20c43ff788d3629d1b107'" cover)
    v-col(cols='12')
      v-card.d-flex.justify-center(elevation='5')
        v-col(cols='9')
          h1.text-center.my-4 Our Team
            v-row.justify-center.align-center
              .designer.my-4(style="width: 100%; height: 30%;" )
                v-slide-group(:show-arrows="true" class="pa-4")
                  v-slide-group-item(v-for='(designer, idx) in designers' :key='idx + 1')
                    v-img(:src='designer.avatar' :class="m - 4" style="width: 310px; height: 300px;")
    v-col(cols='9')
      h1.text-center.my-2 Portfolio
      v-row.justify-center.align-center
        .designer(style="width: 100%; height: 30%;" )
          v-slide-group(:show-arrows="true" class="pa-4")
            v-slide-group-item(v-for='(designer, idx) in designers' :key='idx + 1')
              v-img(v-for='item in designer.portfolio' :src='item' :class="m - 4" style="width: 205px; height: 200px;")
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'

// const carousel = reactive([
//   { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
//   { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
//   { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
//   { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }
// ])

const designers = reactive([])
const news = reactive([])

const initNews = async () => {
  try {
    const { data } = await api.get('/news')
    news.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
initNews()

const initDesigners = async () => {
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
initDesigners()
</script>
