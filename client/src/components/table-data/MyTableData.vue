<script setup lang="ts">
import { ref } from 'vue';
import { toDateTime } from '@/helpers/datetime.helpler';
import AsyncImg from '../async-img/AsyncImg.vue';

export type DataTableHeader = {
  key: string;
  value?: any;
  title: string;
  width?: number | string;
  minWidth?: string;
  maxWidth?: string;
  sortable?: boolean;
  sort?: any;
};

interface MyTableDataProps {
  icon?: string;
  title: string;
  data: any[];
  tableHeaders?: DataTableHeader[];
  addButtonTitle?: string;
  handleClickAdd?: Function;
  handleClickEdit?: Function;
  handleClickDelete?: Function;
  handleClickDetail?: Function;
}

defineProps<MyTableDataProps>();

const search = ref('');
</script>
<template>
  <v-card flat class="!flex flex-col" height="100%">
    <v-card-title class="d-flex align-center pe-2">
      <template v-if="icon"><v-icon :icon="icon" /> &nbsp;</template> {{ title }}

      <v-spacer />

      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        label="Search"
        single-line
        flat
        hide-details
        variant="solo-filled"
      />

      <div class="ml-3" v-if="handleClickAdd">
        <v-btn @click="handleClickAdd()">{{ addButtonTitle }}</v-btn>
      </div>
    </v-card-title>

    <v-divider />
    <v-data-table
      class="flex-1"
      v-model:search="search"
      :items="data"
      :headers="data.length ? tableHeaders : []"
      height="77vh"
    >
      <template v-slot:item.picture="props">
        <div class="p-4">
          <async-img :path="props.item.picture" />
        </div>
      </template>
      <template v-slot:item.logo="props">
        <div class="p-4">
          <async-img :path="props.item.logo" />
        </div>
      </template>
      <template v-slot:item.url="props">
        <v-btn :href="props.item.url" target="_blank">
          {{ props.item.url }}
        </v-btn>
      </template>
      <template v-slot:item.price="props"> $ {{ props.item.price }} </template>
      <template v-slot:item.description="props">
        <div v-html="props.item.description" />
      </template>
      <template v-slot:item.ranking="props">
        <v-rating readonly :length="5" :size="20" :model-value="props.item.ranking" />
      </template>
      <template v-slot:item.supplier="props">
        {{ props.item.supplier.fullName }}
      </template>
      <template v-slot:item.category="props">
        {{ props.item.category.fullName }}
      </template>
      <template v-slot:item.createdAt="props">
        {{ toDateTime(props.item.createdAt) }}
      </template>
      <template v-slot:item.updatedAt="props">
        {{ toDateTime(props.item.updatedAt) }}
      </template>
      <template v-slot:item.active="{ item }">
        <div class="text-end">
          <v-chip
            :color="item.active ? 'green' : 'red'"
            :text="item.active ? 'Active' : 'Inactive'"
            class="text-uppercase"
            label
            size="small"
          />
        </div>
      </template>
      <template v-slot:item.actions="props">
        <v-btn v-if="handleClickEdit" icon="mdi-pencil" class="mx-2" variant="plain" @click="handleClickEdit(props)" />
        <v-btn
          v-if="handleClickDetail"
          icon="mdi-text-box-search-outline"
          class="mx-2"
          variant="plain"
          @click="handleClickDetail(props)"
        />
        <v-btn
          v-if="handleClickDelete && props.item.active"
          icon="mdi-delete"
          class="mx-2"
          variant="plain"
          @click="handleClickDelete(props)"
        />
      </template>
    </v-data-table>
  </v-card>
</template>
