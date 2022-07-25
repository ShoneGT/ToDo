<template>
  <div class="tasks mt-2">
    <h2>
    {{ project.title }}
    </h2>
    <hr>
    <div class="d-flex justify-content-between mb-3">
      <b-button
        variant="info"
        size="sm"
        class="mb-3 text-white"
        @click="showForm = true"
      >
        Add Task
      </b-button>

      <b-button
        variant="info"
        size="sm"
        class="mb-3 float-end text-white"
        @click="showCompleted = !showCompleted"
      >
        {{ showCompleted ? 'Uncompleted tasks' : 'Completed Tasks' }}
      </b-button>
    </div>

    <b-input-group  class="mt-3 mb-5" v-if="showForm">
      <b-form-input
          placeholder="Add new task"
          v-model="taskName"
          autofocus
      />
      <b-input-group-append>
        <b-button
          variant="outline-success"
          size="sm"
          @click="handleAddTask"
        >
          Save
        </b-button>
        <b-button variant="default" size="sm" @click="showForm = false">Cancel</b-button>
      </b-input-group-append>
    </b-input-group>

    <tasks-list
      :project="project"
      :tasks="tasks"
      :show-completed="showCompleted"
    />

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import TasksList from "@/components/TasksList";

export default {
  components: {
    TasksList
  },
  computed: {
    ...mapGetters(['projects']),
    project () {
      return this.projects.find(e => e.id === parseInt(this.$route.params.id))
    },
    tasks () {
      return this.project.tasks.filter(task => {
        return task.completed === this.showCompleted
      })
    }
  },
  data () {
    return {
      showForm: false,
      taskName: '',
      showCompleted: false,
      test: []
    }
  },
  methods: {
    ...mapActions(['addTask', 'updateTask']),
    handleAddTask () {
      let taskId = 0
      if (this.tasks.length > 0) {
        const { id } = this.tasks[this.tasks.length - 1]
        taskId = id
      }

      this.addTask({
        id: this.$route.params.id,
        task: {
          id:  taskId + 1,
          title: this.taskName,
          completed: false
        }
      })
      this.taskName = ''
      this.showForm = false
    },
  },
}

</script>

<style>
.tasks {
  margin: 0 20px;
}
</style>
