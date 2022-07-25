<template>
  <div class="container mt-2">
<!--   <pre>{{ projects }}</pre>-->
    <h2>Projects Management App</h2>
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
          :tasks="project.tasks"
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
    tasks () {
      return this.projects.map(e => e.tasks)
    }
  },
  data () {
    return {
      showCompleted: false
    }
  }
}
</script>
<style>

</style>
