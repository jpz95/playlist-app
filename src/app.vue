<template>
  <div class="h-screen bg-gray-900 text-white-lighter">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
  computed: {
    layout() {
      const routeLayout = this.$route.meta.layout || 'single';
      return `${routeLayout}-layout`;
    },
  },
};
</script>
