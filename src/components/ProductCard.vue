<template lang="pug">
v-card.product-card
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

v-dialog(v-model='openDialog' persistent)
  v-card.d-flex.flex-row(width="900px" height="400px")
    v-col.d-flex.justify-center.align-center(cols='5')
      v-img(:src='product.image')
    v-col.d-flex.flex-column(cols='6')
      #productInfo(style="width: 100%; height: 75%;")
        h1.my-2 {{ product.name }}
        h2.my-1 $ : {{ product.price }}
        h4(v-if='product.description.length > 0 && product.description !== "undefined"') 商品介紹 :
          p {{ product.description }}
        h4(v-else) 尚無商品介紹
      #productAction(style="width: 100%; height: 25%;")
    v-col.d-flex.justify-end.align-start(cols='1')
      v-btn(icon variant="text" size="x-small" @click="openDialog = false")
        v-icon mdi-close

</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { addCart } = user
defineProps(['product'])

const openDialog = ref(false)
</script>