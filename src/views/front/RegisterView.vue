<template lang="pug">
v-row#register(justify='center')
  v-col(cols='6')
    h1.text-center 註冊
  v-divider
  v-col(cols='6')
    v-form(v-model='valid' @submit.prevent='register')
      v-text-field(
        type='text'
        label='帳號'
        v-model='form.account'
        :rules='rules.account'
        counter='20'
        maxlength='20'
      )
      v-text-field(
        type='password'
        label='密碼'
        v-model='form.password'
        :rules='rules.password'
        counter='20'
        maxlength='20'
      )
      v-text-field(
        type='email'
        label='信箱'
        v-model='form.email'
        :rules='rules.email'
        counter='20'
        maxlength='20'
      )
      v-text-field(
        type='text'
        label='姓名'
        v-model='form.name'
        counter='10'
        maxlength='10'
      )
      v-select(
        type='text'
        label='性別'
        v-model='form.gender'
        :items='genders'
        :rules='rules.gender'
      )
      v-text-field(
        type='text'
        label='手機'
        v-model='form.phone'
        counter='10'
        maxlength='10'
      )
      v-text-field(
        type='text'
        label='地址'
        v-model='form.address'
        counter='50'
        maxlength='50'
      )
      v-btn.mx-auto(color='black' type='submit' :loading='loading') 註冊
</template>

<script setup>
import { reactive, ref } from 'vue'
import { isEmail } from 'validator'
import { api } from '@/plugins/axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()

const valid = ref(false)
const loading = ref(false)
const genders = reactive(['男', '女'])

const form = reactive({
  account: '',
  password: '',
  email: '',
  name: '',
  gender: '',
  phone: '',
  address: ''
})

const rules = reactive({
  account: [
    v => !!v || '帳號必填',
    v => (v.length >= 4 && v.length <= 20) || '帳號長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號只能由英數字組成'
  ],
  password: [
    v => !!v || '密碼必填',
    v => (v.length >= 4 && v.length <= 20) || '密碼長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼只能由英數字組成'
  ],
  email: [
    v => !!v || '信箱必填',
    v => isEmail(v) || '信箱格式錯誤'
  ],
  name: [
    v => (v.length <= 10) || '名字必須 10 個字以下'
  ],
  gender: [
    v => !!v || '性別必填'
  ]
  // phone: [
  //   v => (v.length === 10) || '手機必須剛好10個數字',
  //   v => /^[0-9]+$/.test(v) || '手機只能由數字組成'
  // ],
  // address: [
  //   v => (v.length <= 50) || '地址必須 50 個字以下'
  // ]
})

const register = async () => {
  if (!valid.value) return
  loading.value = true
  try {
    await api.post('/users', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '註冊發生錯誤'
    })
  }
  loading.value = false
}
</script>
