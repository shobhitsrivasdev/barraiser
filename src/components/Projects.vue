<template>
  <div class="time-tracker">
    <div class="action-bar">
      <input type="text" placeholder="Project Name" v-model="projectName" />
      <b-button class="start" variant="primary" @click="createProject"
        >Create New Project</b-button
      >
    </div>
    <div class="projects-table" v-if="projects.length">
      <b-table striped hover :items="projects"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      projectName: "",
      actions: [{ action: "Remove Project" }],
    };
  },
  computed: {
    projects() {
      return this.$store.getters.getAllProjects;
    },
  },
  methods: {
    createProject() {
      this.$store.commit("addProject", {
        id: new Date().getTime(),
        name: this.projectName,
        title: "client",
        tracked: "0.00h",
        amount: "0.00USD",
        action: "Remove",
      });
      this.projectName = "";
    },
  },
};
</script>

<style scoped>
.action-bar {
  width: 800px;
  height: 50px;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
}
.action-bar input {
  width: 50%;
}
.timer {
  font-weight: bold;
  margin-top: 10px;
}
.create-project {
  margin-top: 10px;
  color: darkblue;
}
.action-bar {
  width: 800px;
  height: 50px;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
}
.action-bar input {
  width: 50%;
}
</style>
