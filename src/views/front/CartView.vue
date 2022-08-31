<template lang="pug">
#cart
  #process.d-flex.justify-center.align-center(style="width: 100%;")
    v-col.d-flex.justify-center.align-center(cols='3' v-for='(item, idx) in process')
      .text-h6( class="mr-auto") {{                  idx + 1 + ` ${item}`                 }}
      v-icon(v-if='idx >= 0 && idx < 2') mdi-chevron-right
  v-divider
  #product
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const user = useUserStore()

const process = reactive(['查看購物車', '訂單確認', '訂單結算'])

const cart = reactive([])

const updateCart = async (idx, quantity) => {
  const result = await user.updateCart({ product: cart[idx].product._id, quantity })
  if (result) {
    if (quantity === 0) {
      cart.splice(idx, 1)
    } else {
      cart[idx].quantity = quantity
    }
  }
}

const totalPrice = computed(() => {
  return cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
})

const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(item => {
    return !item.product.sell
  })
})

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
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
