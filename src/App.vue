<template>
  <v-app>
    <Navigation />
    <v-main style="margin-top: 150px" class="wrapper">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
:root {
  --color: #2d6846;
  --color-hover: #1c472f;
  --color-bg: #f5f5f5;
  --shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
}

.text {
  font-size: 16px;
  line-height: 24px;
}
.text-helper {
  font-size: 14px;
  line-height: 20px;
}
@font-face {
  font-family: "PT Root UI";
  src: url("./assets/fonts/PT-Root-UI_Regular.ttf");
}
* {
  font-family: "PT Root UI", "Roboto", "sans-serif";
}
a {
  color: #000;
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0 !important;
}
h1 {
  font-size: 36px;
  line-height: 40px;
}

h2 {
  font-size: 32px;
  line-height: 40px;
}

h3 {
  font-size: 24px;
  line-height: 32px;
}

h4 {
  font-size: 20px;
  line-height: 28px;
}

h5 {
  font-size: 18px;
  line-height: 24px;
}

h6 {
  font-size: 16px;
  line-height: 24px;
}

i {
  font-style: normal;
}
.mdi {
  font-size: 20px;
  color: var(--color);
}
.wrapper {
  width: 80%;
  margin: 00px auto;
}
</style>
