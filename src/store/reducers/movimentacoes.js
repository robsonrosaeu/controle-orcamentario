import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = [
    {
        'descricao': '', 
        'valor': '',
        'historico': '',
        'tipo': ''
    }
];

const movimentacoesSlice = createSlice({
    name: 'movimentacoes',
    initialState: estadoInicial
});

export default movimentacoesSlice.reducer;