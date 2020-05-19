import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import uuid from 'react-uuid';

const initialState = {
  players: [
    {
      id: uuid(),
      name: 'Rory McIlroy',
      rank: 1,
      country: 'N. Ireland',
    },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removePlayer(id) {
    dispatch({
      type: 'REMOVE_PLAYER',
      payload: id,
    });
  }

  function addPlayer(players) {
    dispatch({
      type: 'ADD_PLAYERS',
      payload: players,
    });
  }

  function editPlayer(players) {
    dispatch({
      type: 'EDIT_PLAYER',
      payload: players,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        players: state.players,
        removePlayer,
        addPlayer,
        editPlayer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
