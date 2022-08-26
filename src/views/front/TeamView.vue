<template lang="pug">
#team
  v-row.justify-center.align-center(style="height: 150px;")
    h1.text-center.text-decoration-underline.my-4 設計團隊
  v-row(style="height: 100px;")
  v-row.justify-center
    v-col(cols='9')
      v-col.align-stretch(v-if='designers.length > 0' v-for='designer in designers' cols='12')
        DesignerCard(:designer='designer')
      v-col(v-else cols='9')
        h1.text-center 尚無設計師
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import DesignerCard from '@/components/DesignerCard.vue'

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
