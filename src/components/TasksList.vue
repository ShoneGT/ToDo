<template>
  <div>
    <b-list-group>
      <b-list-group-item
          v-for="task in tasks" :key="task.id"
          class="d-flex justify-content-between align-items-center"
      >
        <div class="d-flex">
          <Checkbox
              ref="checkbox"
              size="md"
              type="primary"
              :checked="task.completed"
              :disabled="false"
              @checked="handleTaskChange($event, task.id)"
          />
          {{ task.title }}
        </div>
        <div class="d-flex justify-content-between">
          <div
              class="cursor-pointer"
              style="font-size: 12px; color: #646464; margin-right: 7px"
              @click="$router.push(`/project/${project.id}`)"
          >
            {{ project.title }}
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'TaskList',
  props: {
    showCompleted: {
      type: Boolean,
      defaults: false
    },
    project: {
      required: true,
      type: Object
    },
    tasks: {
      required: true,
      type: Array
    }
  },
  components: { Checkbox },
  computed: {
    ...mapGetters(['projects']),
  },
  data () {
    return {
      taskName: '',
    }
  },
  methods: {
    ...mapActions(['updateTask']),
    async handleTaskChange(status, taskId) {
      this.updateTask({
        status,
        taskId,
        id: this.project.id
      })
    }
  },
}
</script>
