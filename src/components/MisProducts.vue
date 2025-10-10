<template>
    <div class="contenedor">
        <div v-for="pro in productos" :key="pro.id_producto" class="card">
            <TagPrime v-if="(pro.nombre_estado)=='DISPONIBLE'" class="tag-flotante" severity="success">{{ pro.nombre_estado  }}</TagPrime>
            <TagPrime v-else-if="(pro.nombre_estado)=='AGOTADO'" class="tag-flotante" severity="secondary">{{ pro.nombre_estado }}</TagPrime>
            <TagPrime v-else class="tag-flotante" severity="danger" value="Success">{{ pro.nombre_estado }}</TagPrime>
            
            <img class="imagen-producto" :src="pro.imagen" alt="">
            <!-- <div class="imagen-producto"></div> -->
            <h4 class="nombre">{{ pro.nombre }}</h4>
            <h4 class="precio"> {{ pesoCOL(pro.precio) }}</h4>
            <RatingPrime class="rating" v-model="pro.raiting" readonly />
            <ButtonPrime @click="verProducto(pro.id_producto)" label="COMPRAR" class="btn-compra" severity="success" />
        </div>

    </div>
</template>

<script>

export default {
    name: 'MisProducts',

    data() {
        return {
            productos: [],
            rating: 4,
        }
    },

    //Aquí van las funciones
    methods: {
        mostrarProductos: async function () {
            let self = this;
            await this.axios.get('http://cobuses.com.co/APIV2/model/productos.php?dato=getallproductos')
                .then(function (response) {
                    console.log(response.data);
                    self.productos = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });

        },

        verProducto: function(id){
            this.$router.push({ name: 'myproduct', params: {id: id}});
        },


        dimeElTipo: function(valor){
            return typeof valor;
        },

        pesoCOL: function (valor) {
            const formatoMonedaColombia = new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0, // Ensures two decimal places for cents
                maximumFractionDigits: 0  // Ensures two decimal places for cents
            }).format(valor);

            return formatoMonedaColombia;
        }

    },

    //INICIALIZADOR
    created() {
        this.mostrarProductos();
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
