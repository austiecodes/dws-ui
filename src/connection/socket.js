import io from 'socket.io-client';

const backendURL = "http://localhost:9998"

export const socket = io(backendURL);
