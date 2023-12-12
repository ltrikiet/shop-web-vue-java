<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import AdminTemplate from '@/layouts/admin/AdminTemplate.vue';
import MyTableData from '@/components/table-data/MyTableData.vue';
import MyDialogForm from '@/components/dialog-form/MyDialogForm.vue';
import { useCategoriesStore } from '@/stores/categoriesStore';
import useManagement, { ManagementType } from '@/composables/useManagement';
import { formField, tableHeaders, validationSchema } from './constant';

const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

onMounted(async () => await categoriesStore.getCategories());
const {
  showDialog,
  isEdit,
  selectedItem,
  handleClickAdd,
  handleClickEdit,
  handleClickDelete,
  handleCloseDialog,
  handleSubmitForm
} = useManagement(ManagementType.CATEGORIES);
</script>
<template>
  <admin-template>
    <my-table-data
      title="Categories Management"
      add-button-title="Add category"
      :data="categories"
      :table-headers="tableHeaders"
      :handle-click-add="handleClickAdd"
      :handle-click-edit="handleClickEdit"
      :handle-click-delete="handleClickDelete"
    />
    <my-dialog-form
      title="Category Form"
      image-key-for-preview-on-edit="picture"
      :form-field="formField"
      :initial-value="selectedItem"
      :validation-schema="validationSchema"
      :is-edit="isEdit"
      :is-show-dialog="showDialog"
      :handle-close-dialog="handleCloseDialog"
      :handle-submit-form="handleSubmitForm"
    />
  </admin-template>
</template>
@/composables/useManagement
