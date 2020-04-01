<template>
  <div>
    <!-- Header -->
    <v-app-bar app clipped-right color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <v-icon dark>mdi-alpha-m-circle-outline</v-icon>
        {{ SystemName }}
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <!-- Left drwaer -->
    <v-navigation-drawer v-model="drawer" app>
      <ME-Menu />
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import MEHeader from "./MEHeader";
export default MEHeader;
</script>