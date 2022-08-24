<template lang="pug">
#store
  v-row.justify-center.align-center(style="height: 150px;")
    h1.text-center.text-decoration-underline.my-4 線上商店
  v-row(style="height: 100px;")
  v-row.justify-center
    v-col(cols='2')
      v-row(style="height: 200px;")
      v-list
        v-list-item.justify-center
          h2 篩選方式
        v-divider
        v-list-item.justify-center.mt-2
          h3 種類
        v-chip-group
          v-chip(v-for='item in categories' filter outlined label) {{ item }}
        v-divider
    v-col(cols='6')
      v-row.justify-end.align-center(style="height: 200px;")
        v-col(cols='3')
          v-select(:items='sorts' label='排序方式')
      v-row.justify-start
        v-col.align-stretch(v-if='products.length > 0' v-for='product in products' cols='12' md='6' lg='4' xl='3')
          ProductCard(:product='product')
        v-col(v-else cols='9')
          h1.text-center 尚無商品

</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import ProductCard from '@/components/ProductCard.vue'

const products = reactive([])

const sorts = reactive(['最新', '價格 (從低到高)', '價格 (從高到低)'])
const categories = reactive(['洗髮系列', '護髮系列', '造型梳', '造型夾', '電捲棒', '吹風機'])
const filters = reactive([])

const init = async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
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
