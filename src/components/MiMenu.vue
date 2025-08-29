<template>
    <div>
        <menu class="menu">
            <li>INICIO</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>CONTACT</li>
        </menu>
    </div>
</template>

<script>
export default {
  name: 'MiMenu',
}
</script>

<style>

.menu{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: darkgreen;
    color: aliceblue;
    list-style: none;
    gap: 1rem;
}
</style>