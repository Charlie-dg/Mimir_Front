<template lang="pug">
#admin-designers
  v-row.justify-center
    v-col(cols='9')
      h1.text-center.my-2 團隊管理
    v-col(cols='9')
      v-row.justify-end.align-center(style="height: 150px;")
        v-btn(icon variant="text" @click="openDialog('', -1)")
          v-icon(color="green lighten-2") mdi-plus
    v-col(cols='9')
      v-table
        thead
          tr
            th.text-center.text-h6 編號
            th.text-center.text-h6 頭像
            th.text-center.text-h6 姓名
            th.text-center.text-h6 簡介
            th.text-center.text-h6 發佈
            th.text-center.text-h6 編輯
            th.text-center.text-h6 刪除
        tbody
          tr(v-if='designers.length > 0' v-for='(designer, idx) in designers' :key='designer._id')
            td.text-center {{ idx + 1 }}
            td
              v-img(:src='designer.avatar')
            td.text-center {{ designer.name }}
            td.text-center {{ designer.description }}
            td.text-center(v-if='designer.publish === true') 已發佈
            td.text-center(v-if='designer.publish === false') 未發佈
            td.text-center 編輯
            td.text-center 刪除
          tr(v-else)
            td.text-center.text-h6(colspan='7') 尚無設計師

  v-dialog(v-model='form.dialog' persistent)
    v-form(v-model='form.valid' @submit.prevent='submitForm')
      v-card
        v-card-title.text-center.my-4
          .text-h5 {{ form._id.length > 0 ? '編輯設計師' : '新增設計師' }}
        v-card-text
          v-container
            v-row.justify-center
              v-col(cols='9')
                v-text-field(v-model='form.name' label='名稱' :rules='[rules.required]')
              v-col(cols='9')
                v-textarea(v-model='form.description' label='簡介' :rules='[rules.required]')
              v-col(cols='9')
                v-file-input(v-model='form.avatar' show-size accept='avatar/*' label='頭像' :prepend-icon='""' outlined :rules='[rules.size]')
              v-col(cols='9')
                v-file-input(v-model='form.portfolio' show-size accept='portfolio/*' label='作品集' :prepend-icon='""' outlined :rules='[rules.size]')
              v-col(cols='9')
                v-img(:src='form.portfolio')
        v-card-actions
          v-row.justify-center
            v-btn(type='submit' color='primary' :loading='form.submitting') 確定
            v-btn(color='error' @click='form.dialog = false' :disabled='form.submitting') 取消
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const designers = reactive([])
const form = reactive({
  _id: '',
  name: '',
  description: '',
  avatar: '',
  portfolio: [],
  publish: false,
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
})

const rules = reactive({
  required(v) {
    return !!v || '必填'
  },
  size(v) {
    return !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024 || '檔案格式不符')
  }
})

const openDialog = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.name = designers[idx].name
    form.description = designers[idx].description
    form.publish = designers[idx].publish
  } else {
    form.name = ''
    form.description = ''
    form.publish = false
  }
  form.avatar = []
  form.portfolio = []
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
    else if (key === 'avatar') fd.append(key, form[key][0])
    else if (key === 'portfolio') {
      for (const path in form[key]) {
        fd.append(key, path)
      }
    } else fd.append(key, form[key])
  }
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/designers', fd)
      designers.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/designers/' + form._id, fd)
      console.log(fd.name)
      designers[form.idx] = data.result
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

const init = async () => {
  try {
    const { data } = await apiAuth.get('/designers/all')
    designers.push(...data.result)
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
