import { FormInputType } from '@/models/enum';
import type { FormField } from '@/components/dialog-form/MyDialogForm.vue';
import type { DataTableHeader } from '@/components/table-data/MyTableData.vue';
import { fullNameRule, imageRule } from '@/utils/validationRules';

export const formField: FormField[] = [
  {
    cols: '12',
    inputType: FormInputType.TEXT_BOX,
    label: 'Fullname',
    name: 'fullName'
  },
  {
    cols: '12',
    inputType: FormInputType.FILE,
    label: 'Image',
    name: 'picture'
  },
  {
    cols: '12',
    inputType: FormInputType.TEXT_AREA,
    label: 'Description',
    name: 'description'
  },
  {
    cols: '5',
    inputType: FormInputType.CHECK_BOX,
    label: 'Active',
    name: 'active'
  }
];

export const tableHeaders: DataTableHeader[] = [
  { title: 'Id', key: 'id' },
  { title: 'Full name', key: 'fullName' },
  { title: 'Description', key: 'description' },
  { title: 'Picture', key: 'picture' },
  { title: 'Actice', key: 'active' },
  { title: 'Created At', key: 'createdAt' },
  { title: 'Updated At', key: 'updatedAt' },
  { title: '', key: 'actions', sortable: false, width: '180px' }
];

export const validationSchema = {
  fullName: (fullName: string) => fullNameRule(fullName)
};
