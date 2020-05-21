import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from 'react-router-dom';

export const EditPlayer = (route) => {
  let history = useHistory();
  const { players, editPlayer } = useContext(GlobalContext);
  const [selectedUser, setSeletedUser] = useState({
    id: null,
    name: '',
    country: '',
    rank: '',
  });
  const currentUserId = route.match.params.id;

  useEffect(() => {
    const playerId = currentUserId;
    const selectedUser = players.find((p) => p.id === playerId);
    setSeletedUser(selectedUser);
  }, [currentUserId, players]);

  const onSubmit = (e) => {
    e.preventDefault();
    editPlayer(selectedUser);
    history.push('/');
  };

  const handleOnChange = (userKey, value) =>
    setSeletedUser({ ...selectedUser, [userKey]: value });

  // if (!selectedUser || !selectedUser.id) {
  //   alert('IDs do not match.');
  // }

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Player Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.name}
              onChange={(e) => handleOnChange('name', e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="country"
            >
              Country
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.country}
              onChange={(e) => handleOnChange('country', e.target.value)}
              type="text"
              placeholder="Enter country"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="rank"
            >
              Ranking
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.rank}
              onChange={(e) => handleOnChange('rank', e.target.value)}
              type="number"
              placeholder="Enter ranking"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Edit Player
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
