<template>
    <div>
        <menu class="menu">
            <h1 class="logon"> SHOPPING</h1>
            <input class="input-search" type="text">
            <li>
                <span class="material-icons">local_mall</span>
                 COMPRAS</li>
            <li>
                <span class="material-icons">account_circle</span> CUENTA</li>
            <li><span class="material-icons">shopping_cart</span> CARRITO</li>

        </menu>
    </div>
</template>

<script>
export default {
    name: 'MiMenu',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.logon {
    font-family: "Red Hat Display", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
}

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #01962D;
    color: aliceblue;
    list-style: none;
    gap: 1rem;
}

.menu li:hover {
    cursor: pointer;
}

.input-search {
    height: 2rem;
    border: none;
    border-radius: 9999px;
    font-family: "Red Hat Display", sans-serif;
    font-size: 1.6rem;
    padding: 1rem;
    color: rgb(27, 27, 27);
}
</style>