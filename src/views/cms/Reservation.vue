<template>
    <div class="reservation">
        <div class="pageheader d-flex">
            <h1>Reservation</h1>
            <v-spacer/>
        </div>
        <v-card :loading="loading">
            <v-card-text>
                <v-text-field label="Name" v-model="form.name"></v-text-field>
                <v-text-field label="Phone Number" v-model="form.phone"></v-text-field>
                <v-text-field label="Number of Chairs" v-model="form.chairs" type="number" :min="1" :max="1000" @blur="validateChairs"></v-text-field>
                <!-- <v-text-field label="Date" v-model="form.date"></v-text-field> -->
                <date-picker :openDays="openDays" label="Date" v-model="form.date" @change="searchAvailableHours" />
                <div v-if="hours == null">
                    <v-progress-linear indeterminate />
                </div>
                <div v-else-if="hours && hours.length > 0">
                    <div class="d-flex"><p>Available Tables:</p></div>
                    <div class="d-flex flex-wrap">
                    <div :class="{'hourbox':true, 'hourboxactive':form.hour==h.time, 'hourboxdisabled': h.tables <= 0}" v-for="h in hours" :key="h.time" @click="form.hour=h.time">{{h.time}}</div>
                    </div>
                </div>
                <div v-else>
                    <div class="d-flex"><p>No available tables for this date</p></div>
                </div>
                <v-card-actions>
                    <v-spacer />
                    <v-btn to="/">Cancel</v-btn>
                    <v-btn color="primary" @click="onClickSave">Save</v-btn>
                </v-card-actions>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

import DatePicker from '../../components/DatePicker.vue'

export default {
    data: () => ({
        loading: true,
        form: {
            name: "", phone: "", date: "", hour: null, chairs: 1
        },
        openDays:[],
        hours: null
    }),

    components: {
        DatePicker
    },

    created() {
        // fill all possible hours
        
    },

    async mounted() {
        await this.loadData()
    },

    methods: {

        validateChairs() {
            this.form.chairs = Math.ceil(this.form.chairs)
            if (this.form.chairs <= 0) this.form.chairs = 1
            if (this.form.chairs > 1000) this.form.chairs = 1000
        },

        hourToInt(hour) {
            let parts = hour.split(':')
            let n = parseInt(parts[0])
            return n
        },

        async loadData() {
            this.loading = true
            let settings = await this.$rest.get('/settings')
            this.openDays = settings.openDays
            this.loading = false
            await this.searchAvailableHours()
        },

        async searchAvailableHours() {
            this.hours = null
			this.form.hour = null
			this.hours = await this.$rest.get(`/hours/${this.form.date}`)
		},

        async onClickSave() {
            await this.$rest.post('/booking', this.form)
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>

.hourbox {
	cursor: pointer;
	padding: 0.25rem 0.5rem;
	margin: 0.5rem;
	border: 1px solid #ccc;
}

.hourboxactive {
	background-color: #1976d2;
	border: 1px solid #1976d2;
	color: #fff;
}

.hourboxdisabled {
	pointer-events: none;
	background-color: #aaa;
	border: 1px solid #aaa;
	color: #fff;
}
</style>