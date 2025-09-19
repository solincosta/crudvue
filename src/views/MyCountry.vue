<template>
    <div class="contenedor">
        <div class="banner">
            MY BANNER 
        </div>
        <div class="descripcion">
            <p>DESCRIPCION: {{ id }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiCards',
    data() {
        return {
            id: 0,
        }
    },

    created() {
        this.id = this.$router.params.id;
    }
}
</script>

<style></style>