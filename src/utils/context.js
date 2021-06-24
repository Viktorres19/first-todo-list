import React from 'react'
import store from '../stores'
export const storesContext = React.createContext({
	...store
})