export const connectLocalStorage = (key: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handle = (state: any) => {
    localStorage.setItem(key, window.btoa(JSON.stringify(state)));
  };

  handle.init = <T>(state: T) => {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(window.atob(value)) as T;
    localStorage.setItem(key, window.btoa(JSON.stringify(state)));
    return state;
  };

  return handle;
};
