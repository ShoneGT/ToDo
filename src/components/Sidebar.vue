<template>
  <div>
    <aside
      v-if="showSidebar"
      style="background: #fff; width: 300px; padding-top: 40px; border-right: 1px solid #cacaca; height: 100vh"
    >
      <div class="px-3 py-2">
        <b-list-group>
            <b-list-group-item>
              <router-link to="/" class="link"> Home </router-link>
            </b-list-group-item>

            <b-list-group-item
                v-for="(project, index) in projects"
                :key="project.id"
                class="d-flex justify-content-between align-items-center"
            >
              <router-link :to="`/project/${project.id}`" class="link">
                {{ project.title }}
                <span style="color: #cacaca">{{project.tasks.length}}</span>
              </router-link>
              <b-icon icon="trash" variant="danger" @click="deleteProject(index), $router.push('/')"></b-icon>
            </b-list-group-item>

        </b-list-group>


        <div class="d-flex justify-content-center ">
          <b-button size="sm"  variant="secondary" class="mt-3"  @click="showNewProjectForm = true">Add project</b-button>

        </div>

        <b-input-group  class="mt-3" v-if="showNewProjectForm">
          <b-form-input v-model="projectName" autofocus></b-form-input>
          <b-input-group-append>
            <b-button
              variant="outline-success"
              size="sm"
              @click="handleAddProject"
            >
              Save
            </b-button>
            <b-button variant="default" size="sm" @click="showNewProjectForm = false">Cancel</b-button>
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
    }
  }
</script>
<style>
.link {
  text-decoration: none;
  color: #616161;
}
</style>
