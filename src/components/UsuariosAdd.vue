<script setup>
import { ref } from 'vue'
import { useUsuariosStore } from '@/stores/usuarios';

let nombreUsuario = ref('')
let emailUsuario = ref('')
const usuariosStore = useUsuariosStore()

async function handleAddUsuario() {
    try {
        await usuariosStore.addUsuario({
            nombre: nombreUsuario.value,
            email: emailUsuario.value
        })
        nombreUsuario.value = ''
        emailUsuario.value = ''

    } catch (error) {
        console.error('falla en la vista al agregar')
    }
}

</script>
<template>
    <div class="container">
        <h2>Agregando Usuario</h2>
        <div class="row">
            <div class="col border">
                <form @submit.prevent="handleAddUsuario">
                    <label for="">Nombre</label>
                    <input type="text" v-model="nombreUsuario" required>
                    <label for="">Email</label>
                    <input type="text" v-model="emailUsuario" required>
                    <button type='submit' class="btn btn-info">Guardar Usuario</button>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
input {
    border: 1px solid black;
    margin: 3px;
}
</style>