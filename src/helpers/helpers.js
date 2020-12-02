const adjustHeight = () => {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

const adjustWidth = () => {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

const ScrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
  return null;
};

export { adjustWidth, adjustHeight, ScrollToTop }