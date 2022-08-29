<template lang="pug">
#register
  v-row.justify-center.align-center(style="height: 150px;")
    h1.text-center.text-decoration-underline.my-4 最新消息
  v-row(style="height: 100px;")
  v-row.justify-center
    v-col(cols='9')
      v-col.align-center(v-if='news.length > 0' v-for='(newItem, idx) in news' cols='12')
        v-card.leftside(v-if='idx % 2 === 0' elevation='5')
          v-row.justify-center.align-center
            v-col(cols='6')
              v-img(:src='newItem.image' width="700px" height="400px" cover)
            v-col(cols='6')
              .text-h4.text-center.mx-4 {{ newItem.title }}
              .text-h6.text-center.mx-4 {{ newItem.description }}
        v-card.rightside(v-else  elevation='5')
          v-row.justify-center.align-center
            v-col(cols='6')
              .text-h4.text-center.mx-4 {{ newItem.title }}
              .text-h6.text-center.mx-4 {{ newItem.description }}
            v-col(cols='6')
              v-img(:src='newItem.image' width="700px" height="400px" cover)
      v-col(v-else cols='9')
        h1.text-center 尚無消息 敬請期待
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'

const news = reactive([])

const init = async () => {
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
init()
</script>
