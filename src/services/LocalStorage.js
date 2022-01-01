export const logged = () => {
  if (localStorage.getItem('user')) {
    return true;
  }
  return false;
}