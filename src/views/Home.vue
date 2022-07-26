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

<!--    <pre>{{ tasksList(showCompleted) }}</pre>-->
    <tasks-list
        :tasks="tasksList(showCompleted)"
    />

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
    ...mapGetters(['projects', 'tasks', 'tasksList']),
  },
  data () {
    return {
      showCompleted: false
    }
  },
}
</script>
<style>

</style>
