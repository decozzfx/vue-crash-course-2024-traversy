<script setup>
import { onMounted, ref } from "vue";

const name = ref("John Doe");
const status = ref("active");
const tasks = ref(["Task 1", "Task 2", "Task 3"]);
const links = "https://www.google.com";
const newTask = ref("");

function toggleStatus() {
  status.value = status.value === "active" ? "pending" : "active";
}

function addTask() {
  if (newTask.value !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
}

function deleteTask(idx) {
  tasks.value.splice(idx, 1);
}

onMounted(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {}
});
</script>

<template>
  <h1>{{ name }}</h1>

  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTaskInput" name="newTask" v-model="newTask" />
    <button @click="addTask">Add Task</button>
  </form>

  <h3 class="mt-10">Tasks:</h3>
  <ul>
    <li v-for="(task, idx) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(idx)">X</button>
    </li>
  </ul>
  <!-- <a v-bind:href="links" target="_blank">Click for Google</a> -->
  <a :href="links" target="_blank">Click for Google</a>

  <br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>
