<template lang="pug">
#admin-orders
  v-row.justify-center
    v-col(cols='9')
      h1.text-center.my-2 會員管理
    v-col(cols='9')
      v-row.justify-end.align-center(style="height: 150px;")
    v-col(cols='9')
      v-table
        thead
          tr
            th.text-center.text-h6 編號
            th.text-center.text-h6 帳號
            th.text-center.text-h6 角色
            th.text-center.text-h6 姓名
            th.text-center.text-h6 性別
            th.text-center.text-h6 信箱
            th.text-center.text-h6 手機
            th.text-center.text-h6 編輯
            th.text-center.text-h6 刪除
        tbody
          tr(v-if='users.length > 0' v-for='(user, idx) in users' :key='user._id')
            td.text-center {{   idx + 1   }}
            td.text-center {{   user.account   }}
            td.text-center {{   user.role   }}
            td.text-center {{   user.name   }}
            td.text-center {{   user.gender   }}
            td.text-center {{   user.email   }}
            td.text-center {{   user.phone   }}
            td
              v-row.justify-center.align-center
                v-btn(@click="openDialog(user._id, idx)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="blue lighten-2") mdi-pencil-outline
            td
              v-row.justify-center.align-center
                v-btn(@click="deleteUser(user._id, idx)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="red lighten-2") mdi-delete
          tr(v-else)
            td.text-center(colspan='3') 沒有會員
  v-dialog(v-model='form.dialog' persistent)
    v-form(v-model='form.valid' @submit.prevent='submitForm' class="overflow-auto")
      v-card
        v-col.d-flex.justify-end
          v-btn(icon variant="text" size="x-small" @click="form.dialog = false")
            v-icon mdi-close
        v-card-title.text-center.my-2
          .text-h5.font-weight-bold 編輯會員資料
        v-card-text
          v-container
            v-row.justify-center
              v-col(cols='10')
                v-text-field(type='text' label='帳號' v-model='form.account' :rules='rules.account' counter='20' maxlength='20')
              v-col(cols='10')
                v-select(type='text' label='角色' :items='roles' v-model='form.role')
              v-col(cols='10')
                v-text-field(type='text' label='姓名' v-model='form.name' counter='10' maxlength='10')
              v-col(cols='10')
                v-select(type='text' label='性別' :items='genders' v-model='form.gender' :rules='rules.gender')
              v-col(cols='10')
                v-text-field(type='email' label='信箱' v-model='form.email' :rules='rules.email' counter='20' maxlength='20')
              v-col(cols='10')
                v-text-field(type='text' label='手機' v-model='form.phone' counter='10' maxlength='10')
              v-col(cols='10')
                v-text-field(type='text' label='地址' v-model='form.address' counter='50' maxlength='50')
        v-card-actions
          v-row.justify-center
            v-btn(type='submit' color='primary' :loading='form.submitting') 確定
            v-btn(color='error' @click='form.dialog = false' :disabled='form.submitting') 取消
</template>
<script setup>
import { reactive } from 'vue'
import { isEmail } from 'validator'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const users = reactive([])
const roles = reactive(['管理員', '會員'])
const genders = reactive(['男', '女'])
const form = reactive({
  _id: '',
  account: '',
  role: '',
  name: '',
  gender: '',
  email: '',
  phone: '',
  address: '',
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
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
    // v => isEmail(v) || '信箱格式錯誤'
  ],
  name: [
    v => (v.length <= 10) || '名字必須 10 個字以下'
  ],
  gender: [
    v => !!v || '性別必填'
  ]
})

const openDialog = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.account = users[idx].account
    form.role = users[idx].role
    form.name = users[idx].name
    form.gender = users[idx].gender
    form.email = users[idx].email
    form.phone = users[idx].phone
    form.address = users[idx].address
  }
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

const submitForm = async () => {
  if (!form.valid) return
  form.submitting = true

  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    else fd.append(key, form[key])
  }
  try {
    if (form._id.length !== 0) {
      const { data } = await apiAuth.patch('/users/' + form._id, fd)
      users[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const deleteUser = async (_id, idx) => {
  try {
    if (_id.length !== 0) {
      const { data } = await apiAuth.delete('/users/' + _id)
      users.splice(idx, 1)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '刪除成功'
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>
