<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { getCategoryPath } from './src/utils/categoryUtils';

const categories = [
  {
    name: 'category1',
    subcategories: [
      { name: 'category2', subcategories: [] },
      {
        name: 'category3',
        subcategories: [{ name: 'category4', subcategories: [] }]
      }
    ]
  },
  { name: 'category5', subcategories: [] }
];


onMounted(()=>{
  console.log(getCategoryPath(categories, 'category4'));
  console.log(getCategoryPath(categories, 'category2')); 
  console.log(getCategoryPath(categories, 'category5'));
});

</script>