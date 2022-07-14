import axios from 'axios'
const URL = `http://rallylmsbackdevelopment-env.eba-ct4scggb.eu-west-3.elasticbeanstalk.com/v1/lms/course`

const state = {
    courses: []
};
const mutations = {
    setCourses: (state, data) => {
        state.courses = data
    }
};
const actions = {
    getCourses(context) {
        return new Promise((resolve, reject) => {
            axios.get(URL).then((res) => {
                context.commit("setCourses", res.data)
                resolve(res.data)

            })
                .catch((err) => {
                    console.log(err)
                    reject(err)
                })
        })
    },

};
const getters = {
    getCoursesList: state => state.courses
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}