import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [{
      id: 1,
      title: 'Project One',
      tasks: [
        {
          id: 1,
          title: 'Schedule team building',
          completed: false
        },
        {
          id: 2,
          title: 'Check the project design',
          completed: false
        },
        {
          id: 3,
          title: 'Update mobile app build',
          completed: false,
          // completed: true,
        },
      ]
    },
    {
      id: 2,
      title: 'Project Two',
      tasks: [
        {
          id: 1,
          title: 'Call Sara from Los Angeles',
          completed: true
        },
        {
          id: 2,
          title: 'Send email to Jack',
          completed: false
        },
        {
          id: 3,
          title: 'Board meeting',
          completed: false,
        },
        {
          id: 4,
          title: 'Staff meeting',
          completed: false,
        },
      ]
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
    },

    updateTask(state, payload) {
      const projects = [...state.projects]
      const id = parseInt(payload.id)
      const projectIndex = projects.indexOf(state.projects.find(e => e.id === id))
      const project = projects[projectIndex]
      const taskIndex = project.tasks.indexOf(project.tasks.find(e => e.id === payload.taskId))

      projects[projectIndex].tasks[taskIndex].completed = payload.completed

      state.projects = [...projects]
    }
  },
  getters: {
    projects(state) {
      return state.projects
    },
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
    },
    updateTask ({ commit }, payload) {
      commit(
        'updateTask',
        {
          completed: payload.status,
          taskId: payload.taskId,
          id: payload.id
        })
    }
  },
  modules: {
  }
})
