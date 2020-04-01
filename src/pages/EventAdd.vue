<template>
  <div>
    <v-card loading="primary">
      <v-card-title>Input</v-card-title>
      <v-text-field title="Test" v-model="text"></v-text-field>
    </v-card>

    <v-card loading="red">
      <v-card-title>Output</v-card-title>
      <H3>{{ text }}</H3>
    </v-card>
  </div>
</template>

<script lang='ts'>
import EventAdd from "./EventAdd";
export default EventAdd;
</script>