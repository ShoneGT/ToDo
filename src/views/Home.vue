<template>
  <div class="container mt-2">
    <h2>Project Management App</h2>
    <hr>

   <div class="d-flex justify-content-end">
     <b-button
         variant="info"
         size="sm"
         class="mb-3 float-end text-white"
         @click="showCompleted = !showCompleted"
     >
       {{ showCompleted ? 'Uncompleted tasks' : 'Completed Tasks' }}
     </b-button>
   </div>


    <div v-for="project in projects" :key="project.id">
      <tasks-list
          :project="project"
          :tasks="filteredTasks(project)"
          :show-completed="showCompleted"
      />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from "vuex";
import TasksList from "@/components/TasksList";

export default {
  name: 'Home',
  components: {
    TasksList
  },
  computed: {
    ...mapGetters(['projects']),
  },
  data () {
    return {
      showCompleted: false
    }
  },
  methods: {
    filteredTasks (project) {
      return project.tasks.filter(task => task.completed === this.showCompleted)
    }
  }
}
</script>
<style>

</style>
