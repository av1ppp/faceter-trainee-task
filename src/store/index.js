import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

const baseUrl = 'https://swapi.dev/api/'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        planets: {},
        starships: {},
        vehicles: {},
        people: {},
        films: {},
        species: {}
    },

    getters: {
        planets: state => state.planets,
        starships: state => state.starships,
        vehicles: state => state.vehicles,
        people: state => state.people,
        films: state => state.films,
        species: state => state.species,
    },

    mutations: {
        updatePlanets(state, planets) {
            state.planets = planets
        },
        updateStarships(state, starships) {
            state.starships = starships
        },
        updateVehicles(state, vehicles) {
            state.vehicles = vehicles
        },
        updatePeople(state, people) {
            state.people = people
        },
        updateFilms(state, films) {
            state.films = films
        },
        updateSpecies(state, species) {
            state.species = species
        },
    },

    actions: {
        async fetchPlanets({ commit }, page = 1) {
            const response = await axios.get(baseUrl + 'planets/?page=' + page)
            const planets = response.data

            // Устанавливаем ID для каждой планеты,
            // чтобы удобнее было переходить на страницу с подробной инф-й
            for (let p of planets.results)
                p.id = p.url.split('/')[5]

            commit('updatePlanets', planets)
        },

        async fetchStarships({ commit }, page = 1) {
            const response = await axios.get(baseUrl + 'starships/?page=' + page)
            commit('updateStarships', response.data)
        },

        async fetchVehicles({ commit }, page = 1) {
            const response = await axios.get(baseUrl + 'vehicles/?page=' + page)
            commit('updateVehicles', response.data)
        },

        async fetchPeople({ commit }, page = 1) {
            const response = await axios.get(baseUrl + 'people/?page=' + page)
            commit('updatePeople', response.data)
        },

        async fetchFilms({ commit }, page = 1) {
            const response = await axios.get(baseUrl + 'films/?page=' + page)
            commit('updateFilms', response.data)
        },

        async fetchSpecies({ commit }, page = 1) {
            const response = await axios.get(baseUrl + 'species/?page=' + page)
            commit('updateSpecies', response.data)
        },
    },
})