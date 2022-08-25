<template lang="pug">
#admin-services
  v-row.justify-center
    v-col(cols='9')
      h1.text-center.my-2 服務管理
    v-col(cols='9')
      v-row.justify-end.align-center(style="height: 150px;")
        v-btn(icon variant="text" @click="openDialog('', -1)")
          v-icon(color="green lighten-2") mdi-plus
    v-col(cols='9')
      v-table
        thead
          tr
            th.text-center.text-h6 編號
            th.text-center.text-h6 服務名稱
            th.text-center.text-h6 服務項目
            th.text-center.text-h6 價格
            th.text-center.text-h6 預計時間(hr)
            th.text-center.text-h6 上架
            th.text-center.text-h6 編輯
            th.text-center.text-h6 刪除
        tbody
          tr(v-if='services.length > 0' v-for='(service, idx) in services' :key='service._id')
            td.text-center {{ idx + 1 }}
            td.text-center {{ service.name }}
            td.text-center {{ service.category }}
            td.text-center {{ service.price }}
            td.text-center {{ service.costTime }}
            td.text-center(v-if='service.sell === true') 已上架
            td.text-center(v-if='service.sell === false') 未上架
            td
              v-row.justify-center
                v-btn(@click="openDialog(service._id, idx)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="blue lighten-2") mdi-pencil-outline
            td
              v-row.justify-center.align-center
                v-btn(@click="deleteProduct(service._id, idx)" style="width: 2rem; height: 2rem;" icon variant="text")
                  v-icon(style="font-size: large;" color="red lighten-2") mdi-delete
          tr(v-else)
            td.text-center.text-h6(colspan='8') 尚無服務

  v-dialog(v-model='form.dialog' persistent)
    v-form(v-model='form.valid' @submit.prevent='submitForm')
      v-card
        v-card-title.text-center.my-4
          .text-h5 {{ form._id.length > 0 ? '編輯服務' : '新增服務' }}
        v-card-text
          v-container
            v-row.justify-center
              v-col(cols='9')
                v-text-field(v-model='form.name' label='服務名稱' :rules='[rules.required]')
              v-col(cols='9')
                v-select(:items='categories' v-model='form.category' label='服務項目' :rules='[rules.required]')
              v-col(cols='9')
                v-text-field(type='number' min='0' v-model='form.price' label='價格' :rules='[rules.required, rules.price]')
              v-col(cols='9')
                v-text-field(type='number' min='0' v-model='form.costTime' label='預計時間' :rules='[rules.required, rules.costTime]')
              v-col(cols='9')
                v-checkbox(v-model='form.sell' label='上架')
        v-card-actions
          v-row.justify-center
            v-btn(type='submit' color='primary' :loading='form.submitting') 確定
            v-btn(color='error' @click='form.dialog = false' :disabled='form.submitting') 取消
</template>
<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const categories = reactive(['洗髮', '剪髮', '染髮', '燙髮', '護髮'])
const services = reactive([])
const form = reactive({
  _id: '',
  name: '',
  category: '',
  price: 0,
  costTime: 0,
  sell: false,
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false
})

const rules = reactive({
  required(v) {
    return !!v || '必填'
  },
  price(v) {
    return v > -1 || '必須大於等於 0'
  },
  costTime(v) {
    return v > -1 || '必須大於等於 0'
  }
})

const openDialog = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.name = services[idx].name
    form.category = services[idx].category
    form.price = services[idx].price
    form.costTime = services[idx].costTime
    form.sell = services[idx].sell
  } else {
    form.name = ''
    form.category = ''
    form.price = 0
    form.costTime = 0
    form.sell = false
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
    else if (key === 'image') fd.append(key, form[key][0])
    else fd.append(key, form[key])
  }
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/services', fd)
      services.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/services/' + form._id, fd)
      console.log(fd.name)
      services[form.idx] = data.result
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
      const { data } = await apiAuth.delete('/services/' + _id)
      services.splice(idx, 1)
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
    const { data } = await apiAuth.get('/services/all')
    services.push(...data.result)
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
