<template>
  <div>
    <h1>User Table Columns</h1>
    <ul>
      <li v-for="column in columns" :key="column.Field">
        {{ column.Field }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      columns: []
    };
  },
  created() {
    axios.get('http://localhost:3000/users/columns')
      .then(response => {
        this.columns = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>