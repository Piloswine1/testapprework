export const connectLocalStorage = (key: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handle = (state: any) => {
    localStorage.setItem(key, JSON.stringify(state));
  };

  handle.init = <T>(state: T) => {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value) as T;
    localStorage.setItem(key, JSON.stringify(state));
    return state;
  };

  return handle;
};
