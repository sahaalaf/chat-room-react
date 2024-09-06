const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!name || !room) {
    return { error: "Username and room are required." };
  }

  // Check for existing user in the same room
  const existingUser = users.find((user) => user.room === room && user.name === name);

  if (existingUser) {
    return { error: "Username is taken." };
  }

  // Create a new user and add to the list
  const user = { id, name, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }

  return null;
};

const getUser = (id) => users.find((user) => user.id === id);
const usersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, usersInRoom };
