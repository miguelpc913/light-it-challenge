function uid() {
  // simple, stable enough for UI IDs
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export default uid;
