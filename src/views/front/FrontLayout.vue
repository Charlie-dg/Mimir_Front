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
    v-btn(v-if='!isLogin || isLogin' to='/cart'  prepend-icon='mdi-cart' variant="plain")
      v-badge(color='error' dot floating v-if='cart > 0') 購物車
      span(v-else) 購物車
    v-btn(v-if='isLogin && isAdmin' to='/admin' variant="plain") 管理後台
    v-btn(v-if='(isLogin && !isAdmin) || (isLogin && isAdmin)' @click='logout' variant="plain") 登出

//- footer
v-navigation-drawer#footer(location='bottom' expand-on-hover rail color="black" class="overflow-x-hidden")
  #sm.d-flex.justify-center.my-1
    v-btn(v-for='socialMedia in socialMedias' icon variant="text")
      v-icon(style="font-size: large;") {{                                                                   socialMedia                                                                   }}
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
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

// User
const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin } = storeToRefs(user)

// footer SocialMedias
const socialMedias = reactive(['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'])

</script>
