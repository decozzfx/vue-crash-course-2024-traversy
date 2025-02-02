<script>
export default {
  data() {
    return {
      name: "John Doe",
      status: "pending",
      tasks: ["Task 1", "Task 2", "Task 3"],
      links: "https://www.google.com",
    };
  },

  methods: {
    toggleStatus() {
      this.status = this.status === "active" ? "inactive" : "active";
    },
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inactive</p>

  <h3 class="mt-10">Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task }}
    </li>
  </ul>
  <!-- <a v-bind:href="links" target="_blank">Click for Google</a> -->
  <a :href="links" target="_blank">Click for Google</a>

  <br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>
