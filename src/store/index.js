import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [{
      id: 1,
      title: 'Project One',
      tasks: [{
        title: 'Task one',
        description: 'Complete your task!'
      }]
    }]
  },
  mutations: {
    addProject(state, payload) {
      const projects = state.projects
      projects.push(payload)
      state.projects = projects.map((project) => {
        if (!project.tasks) {
          project.tasks = []
        }
        return project
      })
    },
    deleteProject (state, payload) {
      state.projects.splice(payload, 1)
    },
    addTask(state, payload) {
      const projects = [...state.projects]
      const project = projects.find(e => e.id === parseInt(payload.id))
      project.tasks.push(payload.task)

      state.projects = [...projects]
    }
  },
  getters: {
    projects(state) {
      return state.projects
    }
  },
  actions: {
    addProject({ commit }, payload) {
      commit('addProject', payload)
    },
    deleteProject({commit}, payload) {
      commit('deleteProject', payload)
    },
    addTask({commit}, payload) {
      commit('addTask', payload)
    }
  },
  modules: {
  }
})
