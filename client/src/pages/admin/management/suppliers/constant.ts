import type { FormField } from '@/components/dialog-form/MyDialogForm.vue';
import type { DataTableHeader } from '@/components/table-data/MyTableData.vue';
import { FormInputType } from '@/models/enum';
import { emailRule, fullNameRule, imageRule, phoneRule, urlRule } from '@/utils/validationRules';

export const formField: FormField[] = [
  {
    cols: '6',
    inputType: FormInputType.TEXT_BOX,
    label: 'Fullname',
    name: 'fullName'
  },
  {
    cols: '6',
    inputType: FormInputType.TEXT_BOX,
    label: 'Email',
    name: 'email'
  },
  {
    cols: '12',
    inputType: FormInputType.TEXT_BOX,
    label: 'Url',
    name: 'url'
  },
  {
    cols: '12',
    inputType: FormInputType.FILE,
    label: 'Picture',
    name: 'picture'
  },
  {
    cols: '6',
    inputType: FormInputType.TEXT_BOX,
    label: 'Address',
    name: 'address'
  },
  {
    cols: '6',
    inputType: FormInputType.TEXT_BOX,
    label: 'Phone',
    name: 'phone'
  },
  {
    cols: '12',
    inputType: FormInputType.TEXT_AREA,
    label: 'Description',
    name: 'description'
  },
  {
    cols: '6',
    inputType: FormInputType.CHECK_BOX,
    label: 'Active',
    name: 'active'
  }
];

export const tableHeaders: DataTableHeader[] = [
  { title: 'Id', key: 'id' },
  { title: 'Full name', key: 'fullName' },
  { title: 'Description', key: 'description' },
  { title: 'Actice', key: 'active' },
  { title: 'Address', key: 'address' },
  { title: 'Phone', key: 'phone' },
  { title: 'Email', key: 'email' },
  { title: 'Url', key: 'url' },
  { title: 'Picture', key: 'picture' },
  { title: 'Created At', key: 'createdAt' },
  { title: 'Updated At', key: 'updatedAt' },
  { title: '', key: 'actions', sortable: false, width: '180px' }
];

export const validationSchema = {
  fullName: (fullName: string) => fullNameRule(fullName),
  phone: (phone: string) => phoneRule(phone),
  email: (email: string) => emailRule(email),
  url: (url: string) => urlRule(url)
};
