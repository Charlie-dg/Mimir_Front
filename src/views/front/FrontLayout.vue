<template lang="pug">
//- header
v-app-bar(color='black')
  v-app-bar-title Mimir
  template(#append)
    v-btn(v-if='!isLogin || isLogin' to='/' variant="plain") 首頁
    v-btn(v-if='!isLogin || isLogin' to='/news' variant="plain") 最新消息
    v-btn(v-if='!isLogin || isLogin' to='/team' variant="plain") 設計團隊
    v-btn(v-if='!isLogin || isLogin' to='/books' variant="plain") 價目表
    v-btn(v-if='!isLogin || isLogin' to='/store' variant="plain") 線上商店
    v-btn(v-if='!isLogin' to='/register' variant="plain") 註冊
    v-btn(v-if='!isLogin' to='/login' variant="plain") 登入

    v-btn(v-if='(isLogin && !isAdmin) || (isLogin && isAdmin)' to='/member' variant="plain") 會員專區
    v-btn(v-if='isLogin && isAdmin' to='/admin' variant="plain") 管理後台
    v-btn(v-if='(isLogin && !isAdmin) || (isLogin && isAdmin)' @click='logout' variant="plain") 登出

//- 購物車
v-navigation-drawer#cart(v-model='drawers' location='right' temporary style="width: 450px;")
  #cart_header.d-flex.justify-center.align-center(style="width: 100%; height: 10%; position: fixed; top: 0; right: 0;")
    h1 您的購物車
  #cart_body.d-flex.flex-column.justify-start(style="width: 100%; height: 75%; position: fixed; top: 10%; right: 0;")
    v-row.space-between.my-2(style="width: 100%;" v-if='cart.length > 0' v-for='(item, idx) in cart' :key='item._id' :class="{ 'bg-red': !item.product.sell }")
      v-col.d-flex.justify-center.align-center(cols='5')
        v-img(style="width: 100px; height: 100px;" :src='item.product.image')
      v-col(cols='5')
        h3.text-center.my-2 {{          item.product.name          }}
        h4.text-center.my-2 ${{          item.product.price          }}
        v-row.justify-center.align-center.my-2
          v-btn(color='red' @click='updateCart(idx, item.quantity - 1)' variant="text") -
          | {{          item.quantity          }}
          v-btn(color='green' @click='updateCart(idx, item.quantity + 1)' variant="text") +
      v-col.d-flex.justify-center.align-center(cols='2')
        v-btn(icon variant="text")
          v-icon(@click='updateCart(idx, 0)') mdi-delete
    v-row.justify-center(v-else)
      h3.my-2 尚無商品
  #cart_footer(style="width: 100%; height: 15%; position: fixed; top: 85%; right: 0;")
    v-row.justify-center.align-center.my-4
      h2 Total : $
      h2.mx-1(style="color: green") {{                                                totalPirce                                                }}
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

//- footer
v-navigation-drawer#footer(location='bottom' expand-on-hover rail color="black" class="overflow-x-hidden")
  #sm.d-flex.justify-center.my-1
    v-btn(v-for='socialMedia in socialMedias' icon variant="text")
      v-icon(style="font-size: large;") {{                                                socialMedia                                                }}
  #footerInfo.d-flex.justify-center.align-center
    v-row.justify-center.align-center
      v-col.d-flex.justify-end.align-end(cols='6')
        <img src="../images/logo.png" style="width: 150px; height: 140px;">
      v-col(cols='6')
        .text-h6.my-2 聯絡我們
        .text-subtitle-4 Tel : 02-8772-5501<br>Email : mimir.store2022@gmail.com
  v-col(cols='12')
    .text-subtitle-4.text-center ©MimirSalon.All Rights Reserved.

v-main
  v-container(style="padding: 0;")
    router-view

</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { apiAuth } from '../../plugins/axios'
import Swal from 'sweetalert2'

// User
const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin } = storeToRefs(user)

// footer SocialMedias
const socialMedias = reactive(['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'])

// Cart
const drawers = ref(false) // 判斷收放購物車頁面，false: 收起；true: 顯示
const cart = reactive([])

const totalPirce = computed(() => {
  return cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
})

const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(item => {
    return !item.product.sell
  })
})

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

const init = async () => {
  try {
    if (!isLogin.value) {
      console.log('尚未登入')
    } else {
      const { data } = await apiAuth.get('/users/cart')
      cart.push(...data.result)
    }
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
