<template>
  <div class="sidebar">
    <div>
      <b-sidebar
        id="sidebar-variant"
        title="Sidebar"
        bg-variant="light"
        no-header-close="true"
        text-variant="light"
        visible="true"
        shadow
      >
        <div class="px-3 py-2">
          <div class="sidebar-items">Time Tracker</div>
          <div class="sidebar-items">Projects</div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.sidebar-items {
  color: black;
  width: 100%;
  height: 50px;
  border:1px solid black;
  margin-top:10px;
  cursor: pointer;
}
</style>
