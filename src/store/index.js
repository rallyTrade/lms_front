import { createStore } from 'vuex'
import Courses from "./modules/Courses";

// initial state
const initialState = {
  Courses: Courses.state,

}

//Convert object in string 
const COPY = JSON.stringify(initialState);

export default new createStore({
  modules: {
    Courses,
  },

  mutations: {
    reset(state) {
      //Convert string in object 
      let copyState = JSON.parse(COPY);
      Object.keys(state).forEach(key => {
        Object.assign(state[key], copyState[key]);
      })
    }
  }
});