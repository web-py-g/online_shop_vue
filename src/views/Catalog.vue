<template>
  <div class="catalog">
    <div class="breadcrumbs">
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    </div>
    <h1>{{ page_title }}</h1>
    <div class="catalog__main-categories">
      <div class="catalog__main-card" v-for="cat in categories" :key="cat.id">
        <h4>
          <router-link :to="'/category?id=' + cat.id">{{
            cat.title
          }}</router-link>
        </h4>
        <p v-for="item in cat.subCat" :key="item.id">
          <router-link :to="'/category?id=' + cat.id + '&sub=' + item.id">{{
            item.title
          }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Catalog",
  computed: {
    ...mapGetters(["page_title"]),
  },
  data: () => ({
    target: "",
    breadcrumbs: [
      {
        text: "Главная",
        disabled: false,
        href: "/",
      },
      {
        text: "Каталог",
        disabled: false,
        href: "/catalog",
      },
    ],
    categories: [
      {
        id: 1,
        title: "Гибкие магниты",
        subCat: [
          {
            id: 1,
            title: "Магнитный винил",
          },
          {
            id: 2,
            title: "Магнитная лента",
          },
          {
            id: 3,
            title: "Мягкое железо",
          },
          {
            id: 4,
            title: "Магнитная бумага",
          },
          {
            id: 5,
            title: "Магнитные наклейки",
          },
        ],
        img: "./assets/img/magnit.png",
      },
      {
        id: 2,
        title: "Широкоформатные материалы",
        subCat: [
          {
            id: 1,
            title: "Ферропленка",
          },
          {
            id: 2,
            title: "Магнитный винил с ПВХ",
          },
          {
            id: 3,
            title: "Пленка самоклеящаяся",
          },
        ],
        img: "./assets/img/magnit.png",
      },
    ],
  }),
  components: {},
  mounted() {
    this.$store.dispatch("set_title", "Каталог");
  },
};
</script>
<style lang="scss">
.breadcrumbs {
  .v-breadcrumbs {
    padding: 0;
    a {
      color: #a1a1a1;
      font-size: 14px;
    }
  }
}
.catalog__main-categories {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}
.catalog__main-card {
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 20px;
  width: 30%;

  p a {
    color: #000;
    &:hover {
      color: var(--color-hover);
    }
  }

  h4 {
    margin-bottom: 20px;
    a {
      color: #000;
      &:hover {
        color: var(--color);
      }
    }
  }
}
</style>
