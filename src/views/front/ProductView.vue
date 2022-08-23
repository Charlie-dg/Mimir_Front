<template lang="pug">
#product
  v-row(justify='center')
    v-col(cols='4')
      v-img(:src='product.image')
    v-col(cols='5')
      h2.text-start {{ product.name }}
      h2.text-start NT : ${{ product.price }}
      p 商品介紹 : {{ product.description }}
      v-col
      p 種類 : {{ product.category }}
      v-col
      v-row(justify='center')
        v-form(v-model='valid' @submit.prevent='submit')
          v-text-field(
            type='number'
            label='數量'
            v-model='quantity'
            :rules='quantityRule'
          )
        v-spacer
        v-btn(color='black' type='submit') 加入購物車
      v-overlay.align-center.justify-center(:model-value='!product.sell')
        h1.text-black 已下架


</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const router = useRouter()
const user = useUserStore()

const quantity = ref(0)
const quantityRule = reactive([
  v => v >= 1 || '請選擇商品數量'
])

const valid = ref(false)

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  sell: true,
  category: '',
  image: '',
  description: ''
})

const submit = () => {
  if (!valid.value) return
  user.addCart({ product: product._id, quantity: quantity.value })
}

const init = async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.description = data.result.description
    product.image = data.result.image
    product.category = data.result.category
    product.sell = data.result.sell
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品資料失敗'
    })
    router.go(-1)
  }
}
init()
</script>