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
          v-card.product-card(elevation='3')
            v-row.justify-center
              v-col
                v-img.ma-2(
                  :src='product.image'
                  v-if='this.display === md' width="500px" height="200px"
                )
                v-img.ma-2(
                  :src='product.image'
                  v-else-if='this.display === lg' width="400px" height="150px"
                )
                v-img.ma-2(
                  :src='product.image'
                  v-else-if='this.display === xl' width="300px" height="100px"
                )
                v-card-title.text-center
                  h4(@click="openDialog = true") {{ product.name }}
                v-card-subtitle.text-center(style="font-size: 1rem;") ${{ product.price }}
                v-card-actions.justify-center
                  v-btn(color='black' prepend-icon='mdi-cart' @click='addCart({ product: product._id, quantity: 1 })') 加入購物車
        v-col(v-else cols='9')
          h1.text-center 尚無商品
v-dialog(v-model='openDialog' persistent)
  v-card.d-flex.flex-row(width="900px" height="400px")
    v-col.d-flex.justify-center.align-center(cols='5')
      v-img(:src='product.image')
    v-col.d-flex.flex-column(cols='6')
      #productInfo(style="width: 100%; height: 80%;")
        #title.d-flex.align-center(style="width: 100%; height: 25%;")
          h1 {{ product.name }}
        #price.d-flex.align-center(style="width: 100%; height: 10%;")
          h2 $:
          h2(style="color: green") {{ product.price }}
        #description.d-flex.align-center(style="width: 100%; height: 55%;")
          h4(v-if='product.description.length > 0 && product.description !== "undefined"') 商品介紹 :
            p {{ product.description }}
          h4(v-else) 尚無商品介紹
        #category.d-flex.align-center(style="width: 100%; height: 10%;")
          h5 種類 : {{ product.category }}
      #productAction.d-flex.justify-start.align-center(style="width: 100%; height: 20%;")
        v-btn(color='black' size="x-large" prepend-icon='mdi-cart' @click='addCart({ product: product._id, quantity: 1 })') 加入購物車
    v-col.d-flex.justify-end.align-start(cols='1')
      v-btn(icon variant="text" size="x-small" @click="openDialog = false")
        v-icon mdi-close

</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { api } from '@/plugins/axios'
import ProductCard from '@/components/ProductCard.vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { addCart } = user

const products = reactive([])

const sorts = reactive(['最新', '價格 (從低到高)', '價格 (從高到低)'])
const categories = reactive(['洗髮系列', '護髮系列', '造型梳', '造型夾', '電捲棒', '吹風機'])
// const filters = reactive([])

const openDialog = ref(false)

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
