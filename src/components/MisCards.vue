<template>
    <div class="contenedor">

        <!-- <div v-for="pais in paises" :key="pais.id" class="carta">
            <img :src="pais.url_imagen" alt="" class="imagen-contenedor">
            <div  class="nombre-contenedor">{{ pais.nombre }}</div>
            <div v-if="pais.habitantes > tazaHabitantesMinima" class="habitantes-contenedor verde">{{ pais.habitantes }}
            </div>
            <div v-else class="habitantes-contenedor rojo">{{ pais.habitantes }}</div>
        </div> -->

        <!-- <ButtonPrime>BOTON PRIMEVUE</ButtonPrime>
        <ButtonPrime label="Info" severity="info" />
        <RatingPrime v-model="rating" />
        <SliderPrime v-model="slider" class="w-56" />
        <TextArea v-model="textoArea" rows="5" cols="30" /> -->

        <ButtonPrime @click="abrirFormulario()" label="Nuevo" severity="success" />

        <DataTable :value="estudiantes" tableStyle="min-width: 50rem">
            <ColumnTable field="cedula" header="Cedula"></ColumnTable>
            <ColumnTable field="nombre" header="Nombre"></ColumnTable>
            <ColumnTable>
                <template #body="slotProps">
                    <ButtonPrime @click="verEstudiante(slotProps.data)" label="Consultar" severity="info" />
                    <ButtonPrime @click="eliminarEstudiante(slotProps.data)" label="Eliminar" severity="danger" />
                </template>
            </ColumnTable>

        </DataTable>



        <DialogPrime v-model:visible="modalVisible" modal header="Ver estudiante" :style="{ width: '50rem' }">

        </DialogPrime>

        <DialogPrime v-model:visible="modalGuardarVisible" modal header="Guardar estudiante"
            :style="{ width: '50rem' }">
            <div class="formulario">
                <InputText class="campo" placeholder="Digite N° de Cédula" type="text" v-model="estudiante.cedula" />
                <InputText class="campo" placeholder="Digite Nombre" type="text" v-model="estudiante.nombre" />
                <ToggleSwitch class="campo" v-model="estudiante.matriculado" />
                <ButtonPrime v-if="accionGuardar" class="campo" @click="guardarEstudiante()" label="Guardar"
                    severity="success" />
                <ButtonPrime v-else class="campo" @click="guardarEstudiante()" label="Actualizar" severity="success" />
            </div>

        </DialogPrime>


        <ToastPrime />
    </div>
</template>

<script>

export default {
    name: 'MiCards',

    //   Aquí inicializo mis variables
    data() {
        return {
            estudiante: {
                cedula: null,
                nombre: "",
                matriculado: true
            },
            accionGuardar: true,
            modalGuardarVisible: false,
            modalVisible: false,
            estudianteSeleccionado: "",
            tazaHabitantesMinima: 10000000,
            slider: null,
            rating: null,
            textoArea: "TEXTO CUALQUIERA",
            estudiantes: [],
            paises: [
                // {
                //     id: 1,
                //     nombre: "NORUEGA",
                //     url: "paisaje-1.png",
                //     habitantes: 9567890,
                //     descripcion: "Noruega es un país escandinavo que incluye montañas, glaciares y profundos fiordos costeros. Oslo, su capital, es una ciudad de áreas verdes y museos. En el Museo de barcos vikingos de Oslo, se muestran navíos vikingos preservados del siglo IX. Bergen, con coloridas casas de madera, es el punto de partida de los cruceros hacia el sorprendente fiordo de Sogn. Noruega también es famosa por la pesca, el excursionismo y el esquí, especialmente en el centro olímpico Lillehammer. "
                // },
                // {
                //     id: 2,
                //     nombre: "DINAMARCA",
                //     url: "paisaje-2.jpg",
                //     habitantes: 11567890,
                //     descripcion: "Dinamarca es un país escandinavo que abarca la península de Jutlandia y varias islas. Está conectado con Suecia a través del puente de Öresund. Copenhague, su capital, cuenta con palacios reales y el colorido puerto de Nyhavn, junto con el parque de atracciones Tívoli y la icónica estatua de La Sirenita. Odense es la ciudad natal del escritor Hans Christian Andersen, con un centro medieval con calles de adoquines y casas con entramado de madera"
                // },
                // {
                //     id: 3,
                //     nombre: "CANADA",
                //     url: "paisaje-3.jpg",
                //     habitantes: 16590890,
                //     descripcion: "Canadá es el país norteamericano que se extiende desde los Estados Unidos en el sur hasta el círculo polar ártico en el norte. Las ciudades principales incluyen la enorme Toronto, Vancouver, el centro cinematográfico de la costa oeste, las ciudades de habla francesa Montreal y Quebec, y la capital Ottawa. Las vastas franjas de naturaleza de Canadá incluyen el Parque Nacional Banff ubicado en un lago en las Montañas Rocosas. También incluye las cataratas del Niágara, un famoso grupo de enormes"
                // },
            ]
        }
    },

    //Aquí van las funciones
    methods: {
        mostrarEstudiantes: async function () {
            let self = this;
            await this.axios.get('http://cobuses.com.co/APIV2/model/estudiante.php?dato=getallestudiantes')
                .then(function (response) {
                    console.log(response.data);
                    self.estudiantes = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });

        },

        guardarEstudiante: async function () {
            //

            if (this.estudiante.cedula === null) {
                this.$toast.add({ severity: 'warn', summary: 'Validación', detail: 'Debe digitar una cedula válida', life: 3000 });
                return;
            }

            if (this.estudiante.nombre === "") {
                this.$toast.add({ severity: 'warn', summary: 'Validación', detail: 'Debe digitar un nombre válido', life: 3000 });
            }

            let urlAPI = 'http://cobuses.com.co/APIV2/model/estudiante.php?dato=insertestudiante';
            let parametros = {
                nombre: this.estudiante.nombre,
                cedula: parseInt(this.estudiante.cedula),
                matriculado: this.estudiante.matriculado
            }



            if (!this.accionGuardar) {
                urlAPI = 'http://cobuses.com.co/APIV2/model/estudiante.php?dato=updateestudiante';
            }

            let self = this;

            await this.axios.post(urlAPI,
                parametros)
                .then(function (response) {
                    console.log(response.data);
                    console.log(response.status);
                    console.log(response);
                    if (response.status == 200) {
                        self.modalGuardarVisible = false;
                        self.$toast.add({ severity: 'success', summary: 'Confirmación', detail: 'Estudiante Agregado Exitosamente', life: 3000 });
                    }
                    // console.log(response.data);
                    // self.estudiantes = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });

        },

        eliminarEstudiante: async function (estudiante) {
            //
            let urlAPI = 'http://cobuses.com.co/APIV2/model/estudiante.php?dato=deletestudiante';
            let parametros = {
                cedula: parseInt(estudiante.cedula)
            }

            let self = this;

            await this.axios.post(urlAPI,
                parametros)
                .then(function (response) {
                    console.log(response.data);
                    console.log(response.status);
                    console.log(response);
                    if (response.status == 200) {
                        self.modalGuardarVisible = false;
                        self.$toast.add({ severity: 'success', summary: 'Confirmación', detail: 'Estudiante Eliminado Exitosamente', life: 3000 });
                    }
                    // console.log(response.data);
                    // self.estudiantes = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });

        },

        abrirFormulario: function () {
            //this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
            this.modalGuardarVisible = true;
            this.accionGuardar = true;

            this.estudiante = {
                cedula: null,
                nombre: "",
                matriculado: true
            };


        },

        verEstudiante: function (estudiante) {
            this.modalGuardarVisible = true;
            this.accionGuardar = false;
            this.estudiante.cedula = estudiante.cedula;
            this.estudiante.nombre = estudiante.nombre;

            if (estudiante.matriculado == 1) {
                this.estudiante.matriculado = true;
            } else {
                this.estudiante.matriculado = false;
            }
        }
    },

    //INICIALIZADOR
    created() {
        // this.hola();
        this.mostrarEstudiantes();
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.formulario {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.campo {
    width: 80%;
    margin: 0 10%;
}

.contenedor {
    /* display: flex;
    flex-direction: row;
    gap: 1rem;
    height: 300px; */
}

.carta {
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5% 5% 0 0;
    position: relative;
}


.imagen-contenedor {
    width: 100%;
    height: 80%;
    margin: 0;
    object-fit: cover;
    object-position: center center;
    border-radius: 5% 5% 0 0;
}

.imagen-contenedor:hover {
    background-image: rgba(0, 0, 0, 0.6);
    cursor: pointer;
}

.nombre-contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    background-color: darkgreen;
    color: white;
    cursor: pointer;
}

.habitantes-contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    color: white;
}

.verde {
    background-color: rgb(0, 69, 0);
}

.rojo {
    background-color: rgb(241, 5, 5);
}
</style>
