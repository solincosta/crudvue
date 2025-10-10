<template>
    <div class="contenedor">
       

    </div>
</template>

<script>

export default {
    name: 'MisProducts',

    data() {
        return {
            id_api: 0 
        }
    },

    //Aquí van las funciones
    methods: {

        //API X ID
        //http://cobuses.com.co/APIV2/model/productos.php?dato=getproductoxid&id=190834092


        //CSS COPY
        //https://www.locatelcolombia.com/7702560009525-alcohol-antiseptico-jgb-x-700ml/p?skuId=28534
        
        recibir: function(){
            this.id_api = this.$route.params.id
            console.log(this.$route.params.id);
        }

        

    },

    //INICIALIZADOR
    created() {
        this.recibir();
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.contenedor {
    height: fit-content;
    width: 80%;
    margin: 1rem 10%;

    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    gap: 1rem;
}

.imagen-producto {
    height: 60%;
    object-fit: cover;
    object-position: center center;

}

.card {
    height: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    position: relative;
}

.nombre {
    height: 10%;

    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 0 0 1rem;
    color: #01962D;
}

.precio {
    height: 10%;

    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 0 0 1rem;
    color: black;
}

.rating {
    height: 10%;

    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 0 0 1rem;
}

.tag-flotante{
    position: absolute;
    top: 5px;
    right: 5px;
}

.btn-compra {
    height: 10%;

    padding: 0 0 0 1rem;
}
</style>
