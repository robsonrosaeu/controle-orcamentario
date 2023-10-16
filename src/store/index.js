import { configureStore } from '@reduxjs/toolkit';
import movimentacoesSlice from './reducers/movimentacoes'

const store = configureStore({
    reducer: {
        movimentos: movimentacoesSlice
    }
});

export default store;