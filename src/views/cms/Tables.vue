<template>
    <div class="settings">
        <div class="pageheader d-flex">
            <h1>Tables</h1>
            <v-spacer/>
            <v-btn small @click="addTable" color="primary" class="ml-4">+ New Table</v-btn>
        </div>
        <v-card>
            <v-card-text>
                <div class="d-flex listitem">
                    <p class="mr-2">Table #1</p>
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
        weekDayNames: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        form: {
            openTime: "11:00", closeTime: "22:00",
            weekDays: [true, true, true, true, true, false, true],
        }
    }),

    methods: {
        addTable() {
            console.log('addTable')
        }
    }
}
</script>
