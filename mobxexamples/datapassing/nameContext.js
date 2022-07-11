import React from 'react'
import { createNamesStore } from './ipstore'
import { useLocalObservable } from 'mobx-react'

const NameContext = React.createContext(null);

export const NameProvider = ({children}) => {
  const nameStore = useLocalObservable(createNamesStore)

  return ( 
  <NameContext.Provider value={nameStore}>
    {children}
  </NameContext.Provider>);
};

export const useNameStore = () => React.useContext(NameContext)