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
            th.text-center.text-h6 發佈
            th.text-center.text-h6 查看
            th.text-center.text-h6 編輯
            th.text-center.text-h6 刪除
        tbody
          tr(v-if='designers.length > 0' v-for='(designer, idx) in designers' :key='designer._id')
            td.text-center {{ idx + 1 }}
            td
              v-img(:src='designer.avatar')
            td.text-center {{ designer.name }}
            td.text-center(v-if='designer.publish === true') 已發佈
            td.text-center(v-if='designer.publish === false') 未發佈
            td
              v-row.justify-center.align-center
                v-btn(@click="openDialog(designer._id, idx, true)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="purple lighten-2") mdi-eye
            td
              v-row.justify-center
                v-btn(@click="openDialog(designer._id, idx, false)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="blue lighten-2") mdi-pencil-outline
            td
              v-row.justify-center.align-center
                v-btn(@click="deleteProduct(designer._id, idx, false)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="red lighten-2") mdi-delete
          tr(v-else)
            td.text-center.text-h6(colspan='7') 尚無設計師

  v-dialog(v-model='form.dialog' persistent)
    v-form(v-if='!form.read' v-model='form.valid' @submit.prevent='submitForm')
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
                v-checkbox(v-model='form.publish' label='發佈')
              v-col(cols='9')
                v-file-input(v-model='form.avatar' show-size accept='avatar/*' label='頭像' :prepend-icon='"mdi-camera"' outlined :rules='[rules.size]')
              v-col(cols='9')
                v-file-input(multiple v-model='form.portfolio' show-size accept='portfolio/*' label='作品集' :prepend-icon='"mdi-image-multiple"' outlined :rules='[rules.size]')
        v-card-actions
          v-row.justify-center
            v-btn(type='submit' color='primary' :loading='form.submitting') 確定
            v-btn(color='error' @click='form.dialog = false' :disabled='form.submitting') 取消
    v-form(v-else)
      v-card(style="width: 600px;")
        v-col.d-flex.justify-end
          v-btn(icon variant="text" size="x-small" @click="form.dialog = false")
            v-icon mdi-close
        v-col.d-flex.justify-center
          v-avatar(size="250px")
            v-img(:src='form.avatar')
        v-card-title.text-center.my-2
          .text-h5.font-weight-bold {{ form.name }}
        v-card-text
          v-container
            v-row.justify-center.align-center
              v-col(cols='10')
                .text-h6.font-weight-bold.text-center 簡介:
                .text-h6.font-weight-bold.text-center.my-2 {{ form.description }}
            v-row.justify-center.align-center(style="height: 50px;")
              .text-h6.font-weight-bold.text-center.my-2 作品集:
            v-row.justify-center.align-center(style="height: 150px;")
              v-col(cols='2' v-for='item in form.portfolio')
                v-img(:src='item')
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
  read: false,
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

const openDialog = (_id, idx, read) => {
  form._id = _id
  // 是否為查看
  if (read) {
    // 查看，顯示設計師資訊
    form.name = designers[idx].name
    form.description = designers[idx].description
    form.publish = designers[idx].publish
    form.avatar = designers[idx].avatar
    for (const i in designers[idx].portfolio) {
      form.portfolio[i] = designers[idx].portfolio[i]
    }
    form.read = true
  } else {
    if (idx > -1) {
      // 編輯，設計師預設為元內容
      form.name = designers[idx].name
      form.description = designers[idx].description
      form.publish = designers[idx].publish
      form.avatar = []
      form.portfolio = []
    } else {
      // 新增，設計師資訊預設空白
      form.name = ''
      form.description = ''
      form.publish = false
      form.avatar = []
      form.portfolio = []
    }
    form.read = false
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
    else if (key === 'avatar') fd.append(key, form[key][0])
    else if (key === 'portfolio') {
      for (const i in form[key]) {
        fd.append(key, form[key][i])
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

const deleteProduct = async (_id, idx) => {
  try {
    if (_id.length !== 0) {
      const { data } = await apiAuth.delete('/designers/' + _id)
      designers.splice(idx, 1)
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
