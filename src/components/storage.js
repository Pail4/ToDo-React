import Cookies from "js-cookie"
export const storage = {
  freeId: 0,
  lists: {
    high: [],
    low: []
  },
  save() {
    Cookies.set('storage', this);
  }
}