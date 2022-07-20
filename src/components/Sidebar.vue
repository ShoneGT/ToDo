<template>
  <div>
    <aside
      v-if="showSidebar"
      style="background: #fff; width: 300px; padding-top: 40px; border-right: 1px solid orange; height: 100vh"
    >
      <div class="px-3 py-2">

        <b-list-group>
          <router-link to="/">
            <b-list-group-item>
              Home
            </b-list-group-item>
          </router-link>


            <b-list-group-item
                v-for="(project, index) in projects"
                :key="project.id"
                class="d-flex justify-content-between align-items-center"
            >
              <router-link :to="`/project/${project.id}`">
                {{ project.title }}
                {{project.tasks.length}}
              </router-link>
              <b-icon icon="trash" variant="danger" @click="deleteProject(index)"></b-icon>
            </b-list-group-item>

        </b-list-group>

       <button class="btn btn-default" @click="showNewProjectForm = true">Add Project</button>

        <b-input-group  class="mt-3" v-if="showNewProjectForm">
          <b-form-input v-model="projectName"></b-form-input>
          <b-input-group-append>
            <b-button
              variant="outline-success"
              size="sm"
              @click="handleAddProject"
            >
              Save
            </b-button>
            <b-button variant="default" size="sm">Cancel</b-button>
          </b-input-group-append>
        </b-input-group>


      </div>
    </aside>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['projects'])
    },
    data () {
      return {
        showNewProjectForm: false,
        projectName: '',
        showSidebar: true
      }
    },
    methods: {
      ...mapActions(['addProject', 'deleteProject']),
      handleAddProject () {
        this.addProject({id: this.projects.length + 1 ,title: this.projectName})
        this.projectName = ''
        this.showNewProjectForm = false
      }
    },
    mounted () {
      this.showSidebar = true
      console.log(this.$store.getters.projects);
    }
  }
</script>
