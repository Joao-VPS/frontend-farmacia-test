import axios from "axios";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8080'
})

export const cadastrar = async(endpoint: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(endpoint, dados)
    setDados(resposta.data)
}

export const buscar = async(endpoint: string, setDados: Function) => {
    const resposta = await api.get(endpoint)
    setDados(resposta.data)
}

export const atualizar = async(endpoint: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(endpoint, dados)
    setDados(resposta.data)
}

export const deletar = async(endpoint: string) => {
    await api.delete(endpoint)
}