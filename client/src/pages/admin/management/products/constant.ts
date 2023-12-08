import type { FormField } from '@/components/dialog-form/MyDialogForm.vue';
import type { DataTableHeader } from '@/components/table-data/MyTableData.vue';
import { FormInputType } from '@/models/enum';
import type { CategoryResponse } from '@/services/category/types';
import type { SupplierResponse } from '@/services/supplier/types';
import { discountRule, fullNameRule, imageRule, priceRule, stocksRule } from '@/utils/validationRules';

export const formField = (supplierList: SupplierResponse[], categoryList: CategoryResponse[]): FormField[] => [
  {
    cols: '12',
    inputType: FormInputType.TEXT_BOX,
    label: 'Fullname',
    name: 'fullName'
  },
  {
    cols: '2',
    inputType: FormInputType.TEXT_BOX,
    label: 'Stocks',
    name: 'stocks'
  },
  {
    cols: '4',
    inputType: FormInputType.TEXT_BOX,
    label: 'Price',
    name: 'price',
    prefix: '$'
  },
  {
    cols: '4',
    inputType: FormInputType.TEXT_BOX,
    label: 'Discount',
    name: 'discount',
    prefix: '$'
  },
  {
    cols: '2',
    inputType: FormInputType.CHECK_BOX,
    label: 'Discount Available',
    name: 'discountAvailable'
  },
  {
    cols: '12',
    inputType: FormInputType.FILE,
    label: 'Picture',
    name: 'picture'
  },
  {
    cols: '12',
    inputType: FormInputType.RICH_TEXT_EDITOR,
    label: 'Description',
    name: 'description'
  },
  {
    cols: '6',
    inputType: FormInputType.AUTOCOMPLETE,
    label: 'Supplier',
    name: 'supplier',
    itemList: supplierList,
    itemTitle: 'fullName',
    itemValue: 'id',
    returnObject: true
  },
  {
    cols: '6',
    inputType: FormInputType.AUTOCOMPLETE,
    label: 'Category',
    name: 'category',
    itemList: categoryList,
    itemTitle: 'fullName',
    itemValue: 'id',
    returnObject: true
  },
  {
    cols: '12',
    inputType: FormInputType.TEXT_AREA,
    label: 'Notes',
    name: 'notes'
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
  // { title: 'Description', key: 'description' },
  { title: 'Picture', key: 'picture' },
  { title: 'Supplier', key: 'supplier' },
  { title: 'Category', key: 'category' },
  { title: 'Price', key: 'price' },
  { title: 'Stocks', key: 'stocks' },
  { title: 'Notes', key: 'notes' },
  { title: 'Actice', key: 'active' },
  { title: 'Created At', key: 'createdAt' },
  { title: 'Updated At', key: 'updatedAt' },
  { title: '', key: 'actions', sortable: false, width: '180px' }
];

export const validationSchema = {
  fullName: (fullName: string) => fullNameRule(fullName),
  stocks: (stocks: number) => stocksRule(stocks),
  price: (price: number) => priceRule(price),
  discount: (discount: number) => discountRule(discount)
};
