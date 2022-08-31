<template lang="pug">
v-card.product-card(elevation='3')
  v-row.justify-center
    v-col
      v-img.ma-2(:src='product.image' width="400px" height="150px")
  v-card-title.text-center
    h4(@click="openDialog = true") {{   product.name   }}
  v-card-subtitle.text-center(style="font-size: 1rem;") ${{   product.price   }}
  v-card-actions.justify-center
    v-btn(color='black' prepend-icon='mdi-cart' @click='addCart({ product: product._id, quantity: 1 })') 加入購物車

v-dialog(v-model='openDialog' persistent)
  v-card.d-flex.flex-row(width="900px" height="400px")
    v-col.d-flex.justify-center.align-center(cols='5')
      v-img(:src='product.image')
    v-col.d-flex.flex-column(cols='6')
      #productInfo(style="width: 100%; height: 80%;")
        #title.d-flex.align-center(style="width: 100%; height: 25%;")
          h1 {{   product.name   }}
        #price.d-flex.align-center(style="width: 100%; height: 10%;")
          h2 $:
          h2(style="color: green") {{   product.price   }}
        #description.d-flex.align-center(style="width: 100%; height: 55%;")
          h4(v-if='product.description.length > 0 && product.description !== "undefined"') 商品介紹 :
            p {{   product.description   }}
          h4(v-else) 尚無商品介紹
        #category.d-flex.align-center(style="width: 100%; height: 10%;")
          h5 種類 : {{   product.category   }}
      #productAction.d-flex.justify-start.align-center(style="width: 100%; height: 20%;")
        v-btn(color='black' size="x-large" prepend-icon='mdi-cart' @click='addCart({ product: product._id, quantity: 1 })') 加入購物車
    v-col.d-flex.justify-end.align-start(cols='1')
      v-btn(icon variant="text" size="x-small" @click="openDialog = false")
        v-icon mdi-close
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { addCart } = user
defineProps(['product'])

const openDialog = ref(false)
</script>
