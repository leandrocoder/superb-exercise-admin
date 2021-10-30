<template>
    <div class="listitem">
        <p>TABLE 001</p>
        <v-chip small class="ml-2">fghj</v-chip>
        <v-chip small class="ml-2">fghj</v-chip>
        <v-spacer />
        <slots />
        <v-btn class="ml-2" small>Change Date</v-btn>
        <v-btn class="ml-2" small color="error">Remove</v-btn>
    </div>
</template>

<script>
import Slots from './Slots.vue'
export default {
    components : { Slots }
}
</script>

<style lang="scss" scoped>
.listitem {
    display: flex;
    p { margin: 0; padding: 0; }
    padding: 0.5rem 0.5rem;
    border-radius: 0.3rem;
}

.listitem:hover {
    background-color: #f3f3f3;
}

</style>