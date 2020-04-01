<template>
  <div>
    <v-footer app color="primary" class="white--text">
      <span>
        <v-icon dark>mdi-alpha-m-circle-outline</v-icon>
        {{ SystemName }}
      </span>
      <v-spacer />
      <span>&copy; By 2020-02</span>
    </v-footer>
  </div>
</template>

<script lang='ts'>
import MEFooter from "./MEFooter";
export default MEFooter;
</script>