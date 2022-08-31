<template lang="pug">
//- 購物車
v-navigation-drawer(v-model='drawers' location='right' temporary style="width: 450px;")
  #cart_header.d-flex.justify-center.align-center(style="width: 100%; height: 10%; position: fixed; top: 0; right: 0;")
    h1 您的購物車
  #cart_body.d-flex.flex-column.justify-start(style="width: 100%; height: 75%; position: fixed; top: 10%; right: 0;")
    v-row.space-between.my-2(style="width: 100%;" v-if='cart.length > 0' v-for='(item, idx) in cart' :key='item._id' :class="{ 'bg-red': !item.product.sell }")
      v-col.d-flex.justify-center.align-center(cols='5')
        v-img(style="width: 100px; height: 100px;" :src='item.product.image')
      v-col(cols='5')
        h3.text-center.my-2 {{                     item.product.name                     }}
        h4.text-center.my-2 ${{                     item.product.price                     }}
        v-row.justify-center.align-center.my-2
          v-btn(color='red' @click='updateCart(idx, item.quantity - 1)' variant="text") -
          | {{                     item.quantity                     }}
          v-btn(color='green' @click='updateCart(idx, item.quantity + 1)' variant="text") +
      v-col.d-flex.justify-center.align-center(cols='2')
        v-btn(icon variant="text")
          v-icon(@click='updateCart(idx, 0)') mdi-delete
    v-row.justify-center(v-else)
      h3.my-2 尚無商品
  #cart_footer(style="width: 100%; height: 15%; position: fixed; top: 85%; right: 0;")
    v-row.justify-center.align-center.my-4
      h2 Total : $
      h2.mx-1(style="color: green") {{                                                           totalPirce                                                           }}
    v-row.justify-center.align-center.my-4
      v-btn(color='primary' width="80%" size="large" @click='user.checkout' :disabled='!canCheckout') 結帳
//- 購物車收放按鈕
v-btn(
  color='black' icon='mdi-cart' @click.stop='drawers = !drawers'
  v-if='drawers === false' style="position: fixed; top: 50%; right: 0.5%; z-index: 1004;"
  )
v-btn(
  color='black' icon='mdi-cart' @click.stop='drawers = !drawers'
  v-else='drawers === true' style="position: fixed; top: 50%; right: calc(0.5% + 450px); z-index: 1004;"
  )
</template>

<script setup>
defineProps('cart')
</script>
