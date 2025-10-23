import { createContext, useContext } from 'react';
import api from './lib/api';

export const ApiContext = createContext(api);

export const useApi = () => useContext(ApiContext);
