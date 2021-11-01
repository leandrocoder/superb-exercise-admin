<template>
    <div class="settings">
        <div class="pageheader d-flex">
            <h1>Tables</h1>
            <v-spacer/>
            <v-btn small @click="addTable" color="primary" class="ml-4">+ New Table</v-btn>
        </div>
        <v-card :loading="loading">
            <v-card-text>
                <div class="d-flex listitem" v-for="(item, index) in tables" :key="item.id">
                    <p class="mr-2">Table {{item.id}}</p>
                    <v-spacer />
                    <v-btn class="ml-2" small color="error" @click="removeItem(item)">Remove</v-btn>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        weekDayNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        form: {
            openTime: "11:00", closeTime: "22:00",
            weekDays: [true, true, true, true, true, false, true],
        },
        tables:[]
    }),

    async mounted() {
        await this.loadData()
    },

    methods: {

        async loadData() {
            this.loading = true
            this.tables = await this.$rest.get('/table')
            this.loading = false
        },

        async addTable() {
            await this.$rest.post('/table', {chairs:4})
            await this.loadData()
        },
        async removeItem(item) {
            await this.$rest.del('/table', item.id)
            await this.loadData()
        }
    }
}
</script>
