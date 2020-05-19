export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_PLAYER':
      return {
        ...state,
        players: state.players.filter((player) => player.id !== action.payload),
      };
    case 'ADD_PLAYERS':
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    case 'EDIT_PLAYER':
      const updatedPlayer = action.payload;

      const updatedPlayers = state.players.map((player) => {
        if (player.id === updatedPlayer.id) {
          return updatedPlayer;
        }
        return player;
      });
      return {
        ...state,
        players: updatedPlayers,
      };
    default:
      return state;
  }
};
