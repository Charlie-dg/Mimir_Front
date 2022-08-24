<template lang="pug">
#admin-orders
  v-row.justify-center
    v-col(cols='9')
      h1.text-center.my-2 訂單管理
    v-col(cols='9')
      v-row.justify-end.align-center(style="height: 150px;")
    v-col(cols='9')
      v-table
        thead
          tr
            th.text-center.text-h6 編號
            th.text-center.text-h6 單號
            th.text-center.text-h6 日期
            th.text-center.text-h6 會員
            th.text-center.text-h6 金額
            th.text-center.text-h6 查看
            th.text-center.text-h6 刪除
        tbody
          tr(v-if='orders.length > 0' v-for='(order, idx) in orders' :key='order._id')
            td.text-center {{ idx + 1 }}
            td.text-center {{ order._id }}
            td.text-center {{ new Date(order.date).toLocaleDateString() }}
            td.text-center {{ order.user.account }}
            td.text-center {{ order.totalPrice }}
            td
              v-row.justify-center.align-center
                v-btn(@click="openDialog(order._id, idx)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="purple lighten-2") mdi-eye
            td
              v-row.justify-center.align-center
                v-btn(style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="red lighten-2") mdi-delete
          tr(v-else)
            td.text-center(colspan='3') 沒有訂單

  v-dialog(v-model='form.dialog' persistent)
    v-form(v-model='form.valid')
      v-card
        v-col.d-flex.justify-end
          v-btn(icon variant="text" size="x-small" @click="form.dialog = false")
            v-icon mdi-close
        v-card-title.text-center.my-2
          .text-h5.font-weight-bold 訂單編號 : {{ form._id }}
        v-card-text
          v-container
            v-row.justify-center
              v-col(cols='10')
                .text-h6.font-weight-bold 訂購日期 : {{ new Date(form.date).toLocaleDateString() }}
              v-col(cols='10')
                .text-h6.font-weight-bold 會員帳號 : {{ form.account }}
              v-col(cols='10')
                .text-h6.font-weight-bold 訂單金額 : $:{{ form.totalPrice }}
              v-col.d-flex.justify-center(cols='10')
                v-row
                  v-col.justify-start(cols='2')
                    .text-h6.font-weight-bold 訂購商品 :
                  v-col.justify-center(cols='10')
                    v-table(height="300px")
                      thead
                        tr
                          th.text-center.text-h6.font-weight-bold 商品名稱
                          th.text-center.text-h6.font-weight-bold 商品價格
                          th.text-center.text-h6.font-weight-bold 購買數量
                      tbody
                        tr(cols='8' v-for='(item, idx) in form.products')
                          th.text-center.text-subtitle-1 {{ item.product.name }}
                          th.text-center.text-subtitle-1 {{ item.product.price }}
                          th.text-center.text-subtitle-1 {{ item.quantity }}
</template>
<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const orders = reactive([])
const form = reactive({
  _id: '',
  date: '',
  account: '',
  totalPrice: 0,
  products: {},
  idx: -1,
  dialog: false,
  valid: false
})

const openDialog = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.date = orders[idx].date
    form.account = orders[idx].user.account
    form.totalPrice = orders[idx].totalPrice
    form.products = orders[idx].products
  }
  form.idx = idx
  form.dialog = true
  form.valid = false
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>
