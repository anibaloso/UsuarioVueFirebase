import { $db } from "@/firebaseApp";
import { onSnapshot, collection, deleteDoc, doc, addDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from 'vue'

export const useUsuariosStore = defineStore('usuarios', () => {
    const usuarios = ref([])

    async function fetchUsuarios() {
        try {
            const usuariosRef = collection($db, 'usuarios')

            onSnapshot(usuariosRef, (snapshot) => {
                usuarios.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            })
        } catch (error) {
            console.error('falla en la conexion ala bd')
        }
    }

    async function deleteUsuario(id) {
        try {
            const usuariosRef = doc($db, 'usuarios', id)
            await deleteDoc(usuariosRef)
        } catch (error) {
            console.error('fallo al borrar')
        }
    }

    async function addUsuario(data) {
        try {
            const usuarioRef = collection($db, 'usuarios')
            await addDoc(usuarioRef, {
                nombre: data.nombre,
                email: data.email
            })
        } catch (error) {
            console.error('falla al agregar un nuevo usuario')
        }
    }

    return {
        usuarios,
        fetchUsuarios,
        deleteUsuario,
        addUsuario
    }
})