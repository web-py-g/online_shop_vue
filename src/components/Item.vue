<template>
  <div class="catalog">
    <div class="breadcrumbs">Главная / Гибкие магниты / Магнитный винил</div>
    <h1>Каталог товаров</h1>
    <div class="catalog__main-categories">
      <div class="catalog__main-card">
        <h2>Гибкие магниты</h2>
        <h3>
          <router-link to="/catalog/category">Магнитный винил</router-link>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  data: () => ({
    categories: [
      {
        id: 1,
        title:
          "Магнитный винил без клеевого слоя, рулон 0.62х30 м, толщина 0.7 мм",
        img: "./assets/img/magnit.png",
      },
    ],
  }),
  components: {},
};
</script>
