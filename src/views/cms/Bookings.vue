<template>
    <div class="page">
        <div class="pageheader d-flex">
            <h1>Bookings</h1>
            <v-spacer></v-spacer>
            <v-btn small to="/reservation" color="primary" class="ml-4">+ New Reservation</v-btn>
        </div>
        <v-card class="elevation-1" :loading="loading">
            <v-card-text>
                <div class="d-flex listitem" v-for="(item, index) in bookings" :key="item.id">
                    <v-chip small class="mr-2">{{item.chairs}}</v-chip>
                    <p class="mr-2">{{item.date}} {{item.hour}} - {{item.name}}</p>
                    <v-spacer />
                    <v-btn class="ml-2" small color="error" @click="remove(item)">Remove</v-btn>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

export default {
    data: () => ({
        loading: true,
        datePickerActive:false,
        date: null,
        dateFormatted: null,
        bookings: []
    }),
    beforeMount() {
        this.date = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
        this.dateFormatted =  this.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10))
    },
    async mounted() {
        await this.loadData()
        //this.dateFormatted = this.parseDate(this.date)
    },
    methods: {

        async loadData() {
            this.loading = true
            this.bookings = await this.$rest.get('/booking')
            this.loading = false
        },

        formatDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${month}/${day}/${year}`
        },
        parseDate (date) {
            if (!date) return null
            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },

        async remove(item) {
            let res = await this.$rest.del('/booking', item.id)
            await this.loadData()
        }
    },

    watch: {
        date(val) {
            this.formatDate = this.formatDate(val)
        }
    }
}
</script>
