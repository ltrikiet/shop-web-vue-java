<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import MyTableData from '@/components/table-data/MyTableData.vue';
import MyDialogForm from '@/components/dialog-form/MyDialogForm.vue';
import AdminTemplate from '@/layouts/admin/AdminTemplate.vue';
import useManagement, { ManagementType } from '@/composables/useManagement';
import { useUsersStore } from '@/stores/usersStore';
import { formField, tableHeaders, validationSchema } from './constant';

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

onMounted(async () => {
  await usersStore.getUsers();
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
} = useManagement(ManagementType.USERS);
</script>
<template>
  <admin-template>
    <my-table-data
      title="Users Management"
      add-button-title="Add user"
      :data="users"
      :table-headers="tableHeaders"
      :handle-click-add="handleClickAdd"
      :handle-click-edit="handleClickEdit"
      :handle-click-delete="handleClickDelete"
    />
    <my-dialog-form
      title="User Form"
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
