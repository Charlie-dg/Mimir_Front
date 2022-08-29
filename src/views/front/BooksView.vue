<template lang="pug">
#books
  v-row.justify-center.align-center(style="height: 150px;")
    h1.text-center.text-decoration-underline.my-4 價目表
  v-row(style="height: 100px;")
  v-row.justify-center.align-center.my-2
    v-card(style="width: 900px;")
      v-tabs(v-model='tabs.tab' background-color="transparent" grow)
        v-tab(v-for='category in categories' :value='category')
          .text-h5.font-weight-bold {{ category }}
      v-window(v-model='tabs.tab')
        .info.d-flex.justify-center.align-center.my-8(style="width: 100%;")
          .text-h6.text-center.font-weight-bold(style="width: 40%;") 服務名稱
          .text-h6.text-center.font-weight-bold(style="width: 30%;") 服務價格
          .text-h6.text-center.font-weight-bold(style="width: 30%;") 預計時間
        v-divider
      v-window(v-model='tabs.tab')
        v-window-item.my-6(v-for='(service, idx) in services' :value='service.category')
          .content.d-flex.justify-center.align-center
            .text-h6.text-center(style="width: 40%;") {{ service.name }}
            .text-h6.text-center(style="width: 30%;") NT$ {{ service.price }}
            .text-h6.text-center(style="width: 30%;") {{ service.costTime }} hr
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import DesignerCard from '@/components/DesignerCard.vue'

const services = reactive([])
const categories = reactive(['洗髮', '剪髮', '染髮', '燙髮', '護髮'])
const tabs = reactive({
  tab: ''
})

const init = async () => {
  try {
    const { data } = await api.get('/services')
    services.push(...data.result)
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
