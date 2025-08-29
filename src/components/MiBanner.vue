<template>
    <div>
        <main class="banner">
            <img class="banner-img" src="../assets/paisaje-og.png" alt="">
        </main>
    </div>
</template>

<script>
export default {
  name: 'MiBanner',
}
</script>

<style>
.banner{
    width: 100%;
    height: 400px;
    background-color: cornflowerblue;
}

.banner-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
}

</style>