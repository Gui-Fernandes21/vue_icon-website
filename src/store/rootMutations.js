export default {
  checkMobile(state) {
    if (screen.width <= 760) {
      return (state.isMobile = true);
    } else {
      return (state.isMobile = false);
    }
  }
}