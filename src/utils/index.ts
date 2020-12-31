export function getViewPort() {
  const { clientWidth, clientHeight } = document.documentElement;
  const { innerWidth, innerHeight } = window;

  return {
    width: Math.max(clientWidth || 0, innerWidth || 0),
    height: Math.max(clientHeight || 0, innerHeight || 0),
  };
}
