<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import AdminTemplate from '@/layouts/admin/AdminTemplate.vue';
import MyTableData from '@/components/table-data/MyTableData.vue';
import useManagement, { ManagementType } from '@/composables/useManagement';
import { useSuppliersStore } from '@/stores/suppliersStore';
import MyDialogForm from '@/components/dialog-form/MyDialogForm.vue';
import { formField, tableHeaders, validationSchema } from './constant';

const suppliersStore = useSuppliersStore();
const { suppliers } = storeToRefs(suppliersStore);

onMounted(async () => await suppliersStore.getSuppliers());

const {
  showDialog,
  isEdit,
  selectedItem,
  handleClickAdd,
  handleClickEdit,
  handleClickDelete,
  handleCloseDialog,
  handleSubmitForm
} = useManagement(ManagementType.SUPPLIERS);
</script>

<template>
  <admin-template>
    <my-table-data
      :data="suppliers"
      :title="'Suppliers Management'"
      :add-button-title="'Add Supplier'"
      :table-headers="tableHeaders"
      :handle-click-add="handleClickAdd"
      :handle-click-edit="handleClickEdit"
      :handle-click-delete="handleClickDelete"
    />
    <my-dialog-form
      :title="'Supplier Form'"
      :form-field="formField"
      :image-key-for-preview-on-edit="'logo'"
      :is-edit="isEdit"
      :validation-schema="validationSchema"
      :initial-value="selectedItem"
      :is-show-dialog="showDialog"
      :handle-close-dialog="handleCloseDialog"
      :handle-submit-form="handleSubmitForm"
    />
  </admin-template>
</template>
@/composables/useManagement
