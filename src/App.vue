<template>
  <v-app>
    <Navside />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navside from '@/components/Navside'

export default {
  name: 'App',

  components: {
    Navside
  },

  data() {
    return {}
  },
};
</script>
