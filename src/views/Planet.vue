<template>
    <v-container class="pa-10 mx-auto planet-info">
        <v-card
            elevation="2"
            class="mx-auto"
            width="60%"
        >
            <v-card-title>{{ planet.name }}</v-card-title>
            <v-card-text>
                <p> Период вращения: {{ planet.rotation_period }} </p>
                <p> Орбитальный период: {{ planet.orbital_period }} </p>
                <p> Диаметр: {{ planet.diameter }} </p>
                <p> Климат: {{ planet.climate }} </p>
                <p> Гравитация: {{ planet.gravity }} </p>
                <p> Местность: {{ planet.terrain }} </p>
                <p> Поверхность воды: {{ planet.surface_water }} </p>
                <p> Население: {{ planet.population }} </p>
                <p> Жители: {{ residents }} </p>
                <p> Фильмы: {{ films }} </p>
            </v-card-text>
        </v-card>

        <v-btn
            fab
            large
            bottom
            absolute
            left
            to="/planets"
            color="primary"
            class="v-btn--prev"
        >
            <v-icon dark>
                mdi-arrow-left
            </v-icon>
        </v-btn>
        
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            planet: {},
            residents: '-',
            films: '-'
        }
    },

    computed: {
        id() {
            return this.$route.params.id
        },
    },

    methods: {
        async fetchHumar(id) {
            const response = await this.$http.get('https://swapi.dev/api/people/'+id)
            return response.data
        },

        async fetchFilm(id) {
            const response = await this.$http.get('https://swapi.dev/api/films/'+id)
            return response.data
        },
    },

    async mounted() {
        const response = await this.$http.get('https://swapi.dev/api/planets/'+this.id)
        this.planet = response.data

        // Форматируем residents в читабельный вид
        let residents = ''
        for (let h of this.planet.residents) {
            const human = await this.fetchHumar(h.split('/')[5])
            residents += human.name + '; '
        }
        this.residents = residents || '-'

        // Форматируем films в читабельный вид
        let films = ''
        for (let f of this.planet.films) {
            const film = await this.fetchFilm(f.split('/')[5])
            films += film.title + '; '
        }
        this.films = films || '-'
    }
}
</script>

<style>
.v-btn--prev {
    left: 100px !important;
    bottom: 50px !important;
}
</style>