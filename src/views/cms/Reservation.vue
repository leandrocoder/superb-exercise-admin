<template>
    <div class="reservation" v-if="!loading">
        <div class="pageheader d-flex">
            <h1>Reservation</h1>
            <v-spacer/>
        </div>
        <v-card>
            <v-card-text>
                <v-text-field label="Name" v-model="form.name"></v-text-field>
                <v-text-field label="Phone Number" v-model="form.phone"></v-text-field>
                <v-text-field label="Number of Chairs" v-model="form.chairs" type="number" :min="1" :max="1000" @blur="validateChairs"></v-text-field>
                <v-text-field label="Date" v-model="form.date"></v-text-field>
                <div class="d-flex"><p>Available Tables:</p></div>
                <div class="d-flex flex-wrap">
                    <div :class="{'mb-4':true, 'table':true, 'tableactive':h == form.hour}" v-for="h in hours" :key="h" @click="form.hour = h">
                        <p>{{h}}</p>
                    </div>
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


export default {
    data: () => ({
        loading: true,
        form: {
            name: "Leandro", phone: "+55 11988898193", date: "08-06-2022", hour: null, chairs: 1
        },
        hours: []
    }),

    created() {
        // fill all possible hours
        
    },

    async mounted() {
        await this.loadData()
    },

    methods: {

        validateChairs() {
            console.log('blur!')
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
            let min = this.hourToInt(settings.openTime)
            let max = this.hourToInt(settings.closeTime)
            console.log('settings', settings)

            this.hours = []
            for (let i = 0; i < 24; i++) {
                if (i >= min && i < max) {
                    let t = ((i < 9) ? `0${i}` : i) + ':00'
                    this.hours.push(t)
                }
            }
            this.loading = false
        },

        async onClickSave() {
            console.log(JSON.stringify(this.form))
            await this.$rest.post('/booking', this.form)
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.table {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ccc; 
    margin-right: 0.5rem;
    cursor: pointer;
    p {
        margin: 0;
        padding: 0;
        user-select: none;
    }
}

.tableactive {
    border: 1px solid #1976d2 ;
    background-color: #1976d2;
    p {
        color: white ;
    } 
}
</style>