<template>
  <div class="tasks">
    <h1>
    {{ project.title }}
    </h1>

    <button
      class="btn btn-primary"
      @click="showForm = true"
    >
      Add Task
    </button>

    <b-input-group  class="mt-3" v-if="showForm">
      <b-form-input placeholder="Add new task" v-model="taskName"></b-form-input>
      <b-input-group-append>
        <b-button
          variant="outline-success"
          size="sm"
          @click="handleAddTask"
        >
          Save
        </b-button>
        <b-button variant="default" size="sm">Cancel</b-button>
      </b-input-group-append>
    </b-input-group>

    <!-- Task list -->
    <pre>{{project}}</pre>

    <b-list-group>
      <b-list-group-item
          v-for="task in project.tasks" :key="task.id"
          class="d-flex justify-content-between align-items-center"
      >
        {{ task.title }} - {{ task.description }}
        <div class="d-flex justify-content-between">
          <div style="font-size: 12px; color: #646464; margin-right: 7px" >{{ project.title }}</div>
          <b-icon icon="trash" variant="danger" class="cursor-pointer" @click="deleteProject(index)"></b-icon>
        </div>
      </b-list-group-item>

    </b-list-group>


  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['projects']),
    project () {
      return this.projects.find(e => e.id === parseInt(this.$route.params.id))
    }
  },
  data () {
    return {
      showForm: false,
      taskName: ''
    }
  },
  methods: {
    ...mapActions(['addTask']),
    handleAddTask () {
      this.addTask({
        id: this.$route.params.id,
        task: {
          title: this.taskName
        }
      })
      this.taskName = ''
    }
  }
}

</script>

<style>
.tasks {
  margin: 0 20px;
}
</style>
