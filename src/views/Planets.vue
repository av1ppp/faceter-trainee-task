<template>
  <v-container>
    <v-row class="py-3 px-15">
      <v-btn @click="previousPage" outlined color="primary"><v-icon>mdi-chevron-left</v-icon>Назад</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="nextPage" outlined color="primary">Далее<v-icon>mdi-chevron-right</v-icon></v-btn>
    </v-row>
  
    <v-list>
      <v-list-item-group>
        <template
          v-for="(item, index) in items"
        >
          <v-list-item
            :key="item.title"
            :to="'/planets/'+item.id"
          >
            <v-list-item-content>
              <v-list-item-title v-html="item.name"></v-list-item-title>
              <v-list-item-subtitle v-html="item.terrain"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    }
  },

  methods: {
    previousPage() {
      if (this.$store.getters.planets.previous) {
        this.page = new URL(this.$store.getters.planets.previous).searchParams.get('page')
        this.refreshPlanets()
      }
    },

    nextPage() {
      if (this.$store.getters.planets.next) {
        this.page = new URL(this.$store.getters.planets.next).searchParams.get('page')
        this.refreshPlanets()
      }
    },

    refreshPlanets() {
      this.$store.dispatch('fetchPlanets', this.page)
        .catch(err => console.error(err))
    }
  },

  mounted() {
    this.refreshPlanets()
  },

  computed: {
    items() {
      return this.$store.getters.planets.results
    }
  }
}
</script>
