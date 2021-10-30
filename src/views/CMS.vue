<template>
    <div class="cms">
        <sidebar></sidebar>
        <v-container align-center justify-center class="pagecontainer">
            <router-view class="page"/>
        </v-container>
    </div>
</template>

<script>

import Sidebar from '../components/Sidebar.vue'

export default {
    components: { Sidebar }
}
</script>

<style lang="scss">
.cms {
    position: relative;
    min-height: 100vh;
    background-color: #dfe6ed;
    display: flex;
}

.pagecontainer {
    max-width: 900px;
}

.page {
    position: relative;
    padding-top: 1rem;
    min-height: 100%;
}

.pageheader {
    position: relative;
    min-height: 48px;
}

.listitem {
    align-items: center;
    padding: 0.5rem;
    p {
        margin: 0 !important;
    }
}

.listitem:hover {
    background-color: #f0f0f0;
}


</style>