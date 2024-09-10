const ESCAPE_ROOM_TOKEN = 'escape-room-token';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(ESCAPE_ROOM_TOKEN);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(ESCAPE_ROOM_TOKEN, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(ESCAPE_ROOM_TOKEN);
};
