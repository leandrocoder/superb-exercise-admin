<template>
    <div class="page">
        <div class="pageheader d-flex">
            <!--
            <div>
                <v-menu
                    ref="menu1"
                    v-model="datePickerActive"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        v-model="dateFormatted"
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        v-on="on"
                        dense
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        no-title
                        @input="datePickerActive = false"
                    ></v-date-picker>
                </v-menu>
            </div>
            -->
            <h1>Bookings</h1>
            <v-spacer></v-spacer>
            <v-btn small to="/reservation" color="primary" class="ml-4">+ New Reservation</v-btn>
        </div>
        <v-card class="elevation-1">
            <v-card-text>

                <div class="d-flex listitem">
                    <v-chip small class="mr-2">4</v-chip>
                    <p class="mr-2">12/10/2021 14:00 - Leandro Carlos</p>
                    <v-spacer />
                    <v-btn class="ml-2" small color="error">Remove</v-btn>
                </div>

            </v-card-text>
        </v-card>
    </div>
</template>

<script>

export default {
    data: () => ({
        datePickerActive:false,
        date: null,
        dateFormatted: null,
    }),
    beforeMount() {
        this.date = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
        this.dateFormatted =  this.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10))
    },
    mounted() {
        //this.dateFormatted = this.parseDate(this.date)
    },
    methods: {
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
    },

    watch: {
        date(val) {
            this.formatDate = this.formatDate(val)
        }
    }
}
</script>
