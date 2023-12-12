<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import AdminTemplate from '@/layouts/admin/AdminTemplate.vue';
import MyTableData from '@/components/table-data/MyTableData.vue';
import MyDialogForm from '@/components/dialog-form/MyDialogForm.vue';
import useManagement, { ManagementType } from '@/composables/useManagement';
import { useProductsStore } from '@/stores/productsStore';
import { useSuppliersStore } from '@/stores/suppliersStore';
import { useCategoriesStore } from '@/stores/categoriesStore';
import { formField, validationSchema, tableHeaders } from './constant';

const productsStore = useProductsStore();
const suppliersStore = useSuppliersStore();
const categoriesStore = useCategoriesStore();
const { products } = storeToRefs(productsStore);
const { suppliers } = storeToRefs(suppliersStore);
const { categories } = storeToRefs(categoriesStore);

onMounted(async () => {
  await productsStore.getProducts();
  await suppliersStore.getSuppliers();
  await categoriesStore.getCategories();
});

const {
  showDialog,
  isEdit,
  selectedItem,
  handleClickAdd,
  handleClickEdit,
  handleClickDelete,
  handleCloseDialog,
  handleSubmitForm
} = useManagement(ManagementType.PRODUCTS);
</script>
<template>
  <admin-template>
    <my-table-data
      :data="products"
      :title="'Products Management'"
      :add-button-title="'Add product'"
      :table-headers="tableHeaders"
      :handle-click-add="handleClickAdd"
      :handle-click-edit="handleClickEdit"
      :handle-click-delete="handleClickDelete"
    />
    <my-dialog-form
      :title="'Product Form'"
      :image-key-for-preview-on-edit="'picture'"
      :form-field="formField(suppliers, categories)"
      :validation-schema="validationSchema"
      :is-edit="isEdit"
      :initial-value="selectedItem"
      :is-show-dialog="showDialog"
      :handle-close-dialog="handleCloseDialog"
      :handle-submit-form="handleSubmitForm"
    />
  </admin-template>
</template>
@/composables/useManagement
