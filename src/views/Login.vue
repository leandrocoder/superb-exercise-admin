<template>
    <div class="login">
        <v-container align-center justify-center class="loginbox">
            <v-card class="elevation-4 pb-4">
                <v-card-title class="justify-center">Restaurant Booking Manager</v-card-title>
                <v-card-text>
                    <v-text-field label="username" v-model="form.name"></v-text-field>
                    <v-text-field dense label="password" v-model="form.password"></v-text-field>
                </v-card-text>
                <p class="error-message">ERROR</p>
                <v-card-actions class="justify-center">
                        <v-btn color="primary" @click="submit">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: {
            name: "",
            password: ""
        }
    }),

    methods: {
        async submit() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.login {

    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #ccc;

    .loginbox {
        position: relative;
        max-width: 420px;
    }

    .error-message {
        font-size: 0.7rem;
    }
}
</style>
