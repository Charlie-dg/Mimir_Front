<template lang="pug">
v-app-bar(color='black')
  v-app-bar-title Mimir 後台管理系統
  template(#append)
  v-btn(v-if='(isLogin && !isAdmin) || (isLogin && isAdmin)' @click='logout' variant="plain") 登出

v-navigation-drawer(expand-on-hover rail permanent)
  v-list
    v-list-item(:prepend-avatar='avatar' :title='account')
  v-divider
  v-list
    v-list-item(to='/admin/news' title='消息管理' prepend-icon='mdi-newspaper-variant')
    v-list-item(to='/admin/designers' title='團隊管理' prepend-icon='mdi-account-group')
    v-list-item(to='/admin/services' title='服務管理' prepend-icon='mdi-hair-dryer')
    v-list-item(to='/admin/users' title='會員管理' prepend-icon='mdi-account-circle')
    v-list-item(to='/admin/orders' title='訂單管理' prepend-icon='mdi-format-list-checkbox')
    v-list-item(to='/admin/products' title='商品管理' prepend-icon='mdi-shopping')

    v-list-item(to='/' title='回前台' prepend-icon='mdi-home')
v-main
  v-container
    router-view
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, avatar, account } = storeToRefs(user)
</script>
