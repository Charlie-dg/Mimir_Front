<template lang="pug">
#admin-news
  v-row.justify-center
    v-col(cols='9')
      h1.text-center.my-2 消息管理
    v-col(cols='9')
      v-row.justify-end.align-center(style="height: 150px;")
        v-btn(icon variant="text" @click="openDialog('', -1)")
          v-icon(color="green lighten-2") mdi-plus
    v-col(cols='9')
      v-table
        thead
          tr
            th.text-center.text-h6 編號
            th.text-center.text-h6 圖片
            th.text-center.text-h6 標題
            th.text-center.text-h6 發佈
            th.text-center.text-h6 編輯
            th.text-center.text-h6 刪除
        tbody
          tr(v-if='news.length > 0' v-for='(newItem, idx) in news' :key='newItem._id')
            td.text-center {{ idx + 1 }}
            td
              v-img(:src='newItem.image')
            td.text-center {{ newItem.title }}
            td.text-center(v-if='newItem.publish === true') 已發佈
            td.text-center(v-if='newItem.publish === false') 未發佈
            td
              v-row.justify-center
                v-btn(@click="openDialog(newItem._id, idx)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="blue lighten-2") mdi-pencil-outline
            td
              v-row.justify-center.align-center
                v-btn(@click="deleteProduct(newItem._id, idx)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="red lighten-2") mdi-delete
          tr(v-else)
            td.text-center.text-h6(colspan='6') 尚無消息
  v-dialog(v-model='form.dialog' persistent)
    v-form(v-model='form.valid' @submit.prevent='submitForm' class="overflow-auto")
      v-card
        v-col.d-flex.justify-end
          v-btn(icon variant="text" size="x-small" @click="form.dialog = false")
            v-icon mdi-close
        v-card-title.text-center.my-4
          .text-h5 {{ form._id.length > 0 ? '編輯消息' : '新增消息' }}
        v-card-text
          v-container
            v-row.justify-center
              v-col(cols='9')
                v-text-field(v-model='form.title' label='標題' :rules='[rules.required]')
              v-col(cols='9')
                v-checkbox(v-model='form.publish' label='發佈')
              v-col(cols='9')
                v-textarea(v-model='form.description' label='內文' :rules='[rules.required]')
              v-col(cols='9')
                v-file-input(v-model='form.image' show-size accept='image/*' label='圖片' :prepend-icon='"mdi-image"' outlined :rules='[rules.size]')
        v-card-actions
          v-row.justify-center
            v-btn(type='submit' color='primary' :loading='form.submitting') 確定
            v-btn(color='error' @click='form.dialog = false' :disabled='form.submitting') 取消
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const news = reactive([])
const form = reactive({
  _id: '',
  title: '',
  publish: false,
  description: '',
  image: '',
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
})

const openDialog = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.title = news[idx].title
    form.publish = news[idx].publish
    form.description = news[idx].description
  } else {
    form.title = ''
    form.publish = false
    form.description = ''
  }
  form.image = []
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

const rules = reactive({
  required(v) {
    return !!v || '必填'
  },
  size(v) {
    return !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024 || '檔案格式不符')
  }
})

const submitForm = async () => {
  if (!form.valid) return
  form.submitting = true

  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    else if (key === 'image') {
      fd.append(key, form[key][0])
    } else fd.append(key, form[key])
  }
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/news', fd)
      news.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/news/' + form._id, fd)
      console.log(fd.name)
      news[form.idx] = data.result
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
      const { data } = await apiAuth.delete('/news/' + _id)
      news.splice(idx, 1)
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
    const { data } = await apiAuth.get('/news/all')
    news.push(...data.result)
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
