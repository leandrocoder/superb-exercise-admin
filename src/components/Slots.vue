<template>
    <div class="slots">
        <div class="box" v-for="(item, index) in 24" :key="index"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.slots {
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
        width: 0.5rem;
        height: 0.5rem;
        margin-left: 0.25rem;
        border: 1px solid #bbb;
        border-radius: 0.2rem;
    }
}
</style>