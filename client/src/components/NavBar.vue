<template>
  <v-app-bar app>
    <v-toolbar-title>My App</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text :to="{ name: 'Home' }" router>Home</v-btn>
    <v-btn text :to="{ name: 'About' }" router>About</v-btn>
  </v-app-bar>
</template>

<script setup></script>
