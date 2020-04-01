<template>
  <div>
    <!-- Left drwaer -->
    <v-list dense>
      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group no-action prepend-icon="list" value="false">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>記念日</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="(menu,index) in menuList" :key="index" :to="menu.url">
          <v-list-item-action>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{menu.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import MEMenu from "./MEMenu";
export default MEMenu;
</script>