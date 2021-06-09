<template>
  <v-container>
    <h1 class="text-center my-5">Статистика</h1>
    <v-row align="center">

      <v-col v-for="(item, index) in items" :key="index">
        <v-sheet
          class="stat-card"
          height="220px"
          width="240px"
          elevation="1"
          :color="item.color"
        >
          <h1>{{ item.name }}</h1>
          <div class="count-card">{{ item.count }}</div>
        </v-sheet>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    items() {
      return [
        {
          name: 'Planets',
          color: 'light-blue darken-3',
          count: this.$store.getters.planets.count,
        },
        {
          name: 'Spaceships',
          color: 'light-blue darken-2',
          count: this.$store.getters.starships.count,
        },
        {
          name: 'Vehicles',
          color: 'light-blue darken-3',
          count: this.$store.getters.vehicles.count,
        },
        {
          name: 'People',
          color: 'light-blue darken-2',
          count: this.$store.getters.people.count,
        },
        {
          name: 'Films',
          color: 'light-blue darken-3',
          count: this.$store.getters.films.count,
        },
        {
          name: 'Species',
          color: 'light-blue darken-2',
          count: this.$store.getters.species.count,
        },
      ]
    }
  },

  mounted() {
    this.$store.dispatch('fetchPlanets').catch(err => console.error(err))
    this.$store.dispatch('fetchStarships').catch(err => console.error(err))
    this.$store.dispatch('fetchVehicles').catch(err => console.error(err))
    this.$store.dispatch('fetchPeople').catch(err => console.error(err))
    this.$store.dispatch('fetchFilms').catch(err => console.error(err))
    this.$store.dispatch('fetchSpecies').catch(err => console.error(err))
  },
}
</script>

<style>
.stat-card *{
  color: white !important;
  font-size: 20px;
  text-align: center;
  padding: 8px;
}

.count-card {
  font-size: 5rem;
}
</style>