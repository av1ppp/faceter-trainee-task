<template>
    <v-navigation-drawer
        app
        permanent
        :clipped="true"
    >
        <v-list
            dense
            nav
        >
            <v-list-item
                v-for="item in items"
                :to="item.path"
                :key="item.title"
                link
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
export default {
    data: function() {
        return {
            items: [
                {
                    title: 'Планеты',
                    icon: 'mdi-earth',
                    path: '/planets'
                },
                {
                    title: 'Статистика',
                    icon: 'mdi-home-analytics',
                    path: '/statistics'
                },
            ],
            right: null,
        }
    }
}
</script>
