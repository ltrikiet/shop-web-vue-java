import { FormInputType } from '@/models/enum';
import type { FormField } from '@/components/common/dialog-form/MyDialogForm.vue';
import type { DataTableHeader } from '@/components/common/table-data/MyTableData.vue';
import { emailRule, fullNameRule, passwordRule, phoneRule } from '@/utils/validationRules';

export const formField: FormField[] = [
  {
    cols: '12',
    inputType: FormInputType.TEXT_BOX,
    label: 'Fullname',
    name: 'fullName'
  },
  {
    cols: '12',
    inputType: FormInputType.TEXT_BOX,
    label: 'Email',
    name: 'email'
  },
  {
    cols: '12',
    inputType: FormInputType.TEXT_BOX,
    label: 'Password',
    name: 'password',
    type: 'password'
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
    label: 'City',
    name: 'city'
  },
  {
    cols: '6',
    inputType: FormInputType.TEXT_BOX,
    label: 'Phone',
    name: 'phone'
  }
];

export const validationSchema = {
  fullName: (fullName: string) => fullNameRule(fullName),
  phone: (phone: string) => phoneRule(phone),
  email: (email: string) => emailRule(email),
  password: (password: string) => passwordRule(password)
};

export const tableHeaders: DataTableHeader[] = [
  { title: 'Id', key: 'id' },
  { title: 'Full name', key: 'fullName' },
  { title: 'Address', key: 'address' },
  { title: 'City', key: 'city' },
  { title: 'Phone', key: 'phone' },
  { title: 'Email', key: 'email' },
  { title: 'Password', key: 'password' },
  { title: 'Active', key: 'active' },
  { title: 'Created At', key: 'createdAt' },
  { title: 'Updated At', key: 'updatedAt' },
  { title: '', key: 'actions', sortable: false, width: '180px' }
];
