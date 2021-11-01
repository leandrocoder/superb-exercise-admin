<template>
    <div class="settings">
        <div class="pageheader d-flex">
            <h1>Settings</h1>
            <v-spacer/>
        </div>
        <v-card :loading="loading">
            <v-card-text>
                <v-container  v-if="!loading">
                    <v-select :items="hours" v-model="form.openTime" label="Open Time"></v-select>
                    <v-select :items="hours" v-model="form.closeTime" label="Close Time"></v-select>
                    <div class="d-flex"><p style="margin:0; padding:0">Working days</p></div>
                    <v-checkbox v-for="(item, index) in form.openDays" :key="index"
                        v-model="form.openDays[index]"
                        :label="weekDayNames[index]"
                        hide-details
                        ></v-checkbox>
                    <v-card-actions class="mt-6">
                        <v-spacer />
                        <v-btn>Cancel</v-btn>
                        <v-btn color="primary" @click="save">Save</v-btn>
                    </v-card-actions>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        weekDayNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        hours: [],
        form: {
            openTime: "00:00", closeTime: "24:00",
            openDays: [false, false, false, false, false, false, false],
        }
    }),

    async mounted() {
        for (let i = 0; i <= 24; i++) {
            let t = ((i <= 9) ? `0${i}` : i) + ':00'
            this.hours.push(t)
        }

        this.form = await this.$rest.get('/settings')
        this.loading = false
    },

    methods: {
        async save()
        {
            await this.$rest.put('/settings', this.form)
            this.$router.push('/')
        }
    }
}
</script>
