import {useContext} from 'react'
import {storesContext} from '../utils/context'

export const useStores = () => useContext(storesContext)