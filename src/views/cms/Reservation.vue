<template>
    <div class="reservation">
        <div class="pageheader d-flex">
            <h1>Reservation</h1>
            <v-spacer/>
        </div>
        <v-card>
            <v-card-text>
                <v-text-field label="Name" v-model="form.name"></v-text-field>
                <v-text-field label="Phone Number" v-model="form.phone"></v-text-field>
                <v-text-field label="Number of Chairs" v-model="form.person"></v-text-field>
                <v-text-field label="Date" v-model="form.date"></v-text-field>
                <div class="d-flex"><p>Available Tables:</p></div>
                <div class="d-flex">
                    <div :class="{'table':true, 'tableactive':h == form.hour}" v-for="h in hours" :key="h" @click="form.hour = h">
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
        form: {
            name: "Leandro", phone: "+55 11988898193", date: "08/06/2022", hour: "14:00", person: 1
        },
        hours: [
            "11:00", "12:00", "14:00", "15:00"
        ]
    }),
    methods: {

        onClickSave() {
            console.log(this.form)
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