<script setup>
import { useUsuariosStore } from '@/stores/usuarios';
import { onMounted } from 'vue';

const usuariosStore=useUsuariosStore()

onMounted(()=>{
    usuariosStore.fetchUsuarios()
})

function handleDelete(id){
    usuariosStore.deleteUsuario(id)
}

</script>
<template>
    <div class="container">
        <h1>Lista de Usuarios</h1>
        <div class="row">
            <div class="col">
                <ul>
                    <li v-for="usuario in usuariosStore.usuarios" :key="usuario.id">
                        Nombre: {{ usuario.nombre }}, Email: {{ usuario.email }}
                        <button @click="handleDelete(usuario.id)">Eliminar</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
*{
    color: black;
}
input{
    margin: 2px;
    border: 1px solid black;
}
button{
    margin-top: 1rem;
}
</style>