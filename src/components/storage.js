import Cookies from "js-cookie"
export const storage = {
  freeId: 0,
  lists: {
    high: [],
    low: []
  },
  save() {
    Cookies.set('storage', this);
  },
  get() {
    try {
      const data = JSON.parse(Cookies.get('storage'))
      
      for (const key of data){
        this[key] = data[key];
      }
    } catch(err) {
      return;
    }
  }
}