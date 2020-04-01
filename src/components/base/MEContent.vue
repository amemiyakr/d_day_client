<template>
  <div>
    <v-content>
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <v-col align="center"></v-col>
          <router-view style="width:100%" />
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import MEContent from "./MEContent";
export default MEContent;
</script>