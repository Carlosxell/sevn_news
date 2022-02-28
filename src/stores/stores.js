import { writable } from 'svelte/store';

const loadStore = writable({ text: '', active: false });

export const loader = {
  subscribe: loadStore.subscribe,
  set: loadStore.set,
  update: loadStore.update,
  reset: () => loadStore.set({ text: '', active: false }),
};

export default loader;
