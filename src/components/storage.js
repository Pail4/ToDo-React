import Cookies from "js-cookie"
export const storage = {
  freeId: 0,
  lists: {
    high: [],
    low: []
  },
  save() {
    Cookies.set('storage', JSON.stringify(this));
  },
  get(priorirty) {
    try {
      const data = JSON.parse(Cookies.get('storage'))
      
      this.freeId = data.freeId;
      this.lists.high = data.lists.high
      this.lists.low = data.lists.low
      

      return this.lists[priorirty] || [];
    } catch(err) {
      return [];
    }
  }
}