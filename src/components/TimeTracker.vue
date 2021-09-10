<template>
  <div class="time-tracker">
    <div class="action-bar">
      <input
        type="text"
        placeholder="What are you working on"
        v-model="title"
      />
      <div class="create-project">+ Project</div>
      <div class="timer">{{ hours }}:{{ minutes }}:{{ seconds }}</div>
      <b-button
        class="start"
        v-if="showStart"
        variant="primary"
        @click="startTimer"
        >Start</b-button
      >
      <b-button
        class="start"
        v-if="!showStart"
        variant="primary"
        @click="stopTimer"
        >Stop</b-button
      >
    </div>
    <div class="projects-table">
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
      hours: 0,
      minutes: 0,
      seconds: 0,
      showStart: true,
      title: "",
      interval: null,
      startTime: null,
      stopTime: null,
      totalTime: 0,
    };
  },
  computed: {
    projects() {
      return this.$store.getters.getProject;
    },
  },
  methods: {
    startTimer() {
      this.startTime = `${new Date().getHours()} :${new Date().getMinutes()}:${new Date().getSeconds()}`;
      this.showStart = false;
      this.interval = setInterval(() => {
        this.seconds += 1;
        if (this.seconds == 60) {
          this.seconds = 0;
          this.minutes += 1;
        }
        if (this.minutes == 60) {
          this.seconds = 0;
          this.minutes = 0;
          this.hours += 1;
        }
      }, 1000);
    },
    stopTimer() {
      this.showStart = true;
      this.totalTime = `${this.hours}:${this.minutes}:${this.seconds}`;
      clearInterval(this.interval);
      this.stopTime = `${new Date().getHours()} :${new Date().getMinutes()}:${new Date().getSeconds()}`;
      this.captureProjectDetails();
    },
    captureProjectDetails() {
      this.$store.commit("addDataToProject", {
        id: new Date().getTime(),
        name: "test",
        title: this.title,
        start_time: this.startTime,
        end_time: this.stopTime,
        total_time: this.totalTime,
      });
      this.resetData();
    },
    resetData() {
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.totalTime = 0;
      this.title = "";
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
</style>
