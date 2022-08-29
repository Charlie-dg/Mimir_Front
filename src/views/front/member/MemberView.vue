<template lang="pug">
#member
  v-row.justify-center.align-center(style="height: 150px;")
    h1.text-center.text-decoration-underline.my-4 會員專區
  v-row(style="height: 100px;")
  v-row.justify-center
    v-col(cols='2')
      v-row
        v-tabs(v-model='tabs.tab' direction="vertical" color="primary")
          v-tab(v-for='item in userInfo' :value="item")
            .text-h5.font-weight-bold {{ item }}
    v-col(cols='6')
      v-window(v-model='tabs.tab')
        v-window-item(:value="'會員資料'")
          v-row.justify-center
            v-col(cols='10')
              .text-h5 帳號 : {{ account }}
            v-col(cols='10')
              .text-h5 姓名 : {{ name }}
            v-col(cols='10')
              .text-h5 性別 : {{ gender }}
            v-col(cols='10')
              .text-h5 手機 : {{ phone }}
            v-col(cols='10')
              .text-h5 信箱 : {{ email }}
            v-col(cols='10')
              .text-h5 地址 : {{ address }}
        v-window-item(:value="'訂單資料'")
</template>

<script setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const userInfo = reactive(['會員資料', '訂單資料'])
const tabs = reactive({
  tab: ''
})

const user = useUserStore()
const { logout } = user
const { account, name, gender, phone, email, address } = storeToRefs(user)

const userContent = reactive([])
// const init = async () => {
//   try {
//     const data = await user.getUser()
//     userContent.push(data)
//     console.log('data: ', data)
//   } catch (error) {
//     console.log(error)
//     Swal.fire({
//       icon: 'error',
//       title: '失敗',
//       text: error.isAxiosError ? error.response.data.message : error.message
//     })
//   }
// }
// init()
</script>
