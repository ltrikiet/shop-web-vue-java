<template>
  <div class="pt-24">
    <v-sheet rounded="t-lg" class="flex flex-col">
      <div class="p-6 border-b-2 border-dashed">
        <p class="text-xs tracking-widest mb-4">REVIEWS:</p>
        <div class="flex items-top justify-center">
          <v-rating hover :length="5" :size="32" :model-value="3" />
          <span class="mb-1 ml-3 font-medium">(0)</span>
        </div>
      </div>
      <div class="p-6 border-b-2 border-dashed">
        <p class="text-xs tracking-widest mb-4">PRICE:</p>
        <p class="text-center text-3xl tracking-widest">25.00$</p>
      </div>
      <div class="py-6 pl-6 flex justify-between items-center">
        <p class="text-xs tracking-widest">QUANTITY:</p>
        <div class="flex items-center">
          <v-btn icon="mdi-minus" variant="plain" />
          <v-text-field class="w-14" hide-details />
          <v-btn icon="mdi-plus" variant="plain" />
        </div>
      </div>
    </v-sheet>
    <v-btn block class="rounded-b-lg !rounded-t-none" size="x-large" color="grey-darken-3">
      ADD TO CART
    </v-btn>
  </div>
</template>
