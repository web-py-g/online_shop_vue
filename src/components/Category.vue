<template>
  <div class="category">
    <div class="breadcrumbs">
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    </div>
    <h1>{{ page_title }}</h1>

    <div class="category__panels">
      <vue-horizontal responsive>
        <a href="" v-for="item in sub_cateogrys" :key="item.id">
          <div class="category__panels-item">
            <img :src="item.img" alt="" />
            <h2>{{ item.title }}</h2>
          </div>
        </a>
      </vue-horizontal>
    </div>
    <div class="category__wrapper">
      <Filters />
      <div class="category__items">
        <div class="category__items-panel"></div>

        <div class="category__item" v-for="item in items" :key="item.id">
          <div class="item-panel">
            <div class="item-panel--wrapper">
              <span class="item-status--sale" v-if="item.status1 == 'sale'">
                <img src="../assets/img/fireRed.svg" class="mr-2" alt="" />
                Акция</span
              >
              <span
                class="item-status--new"
                v-if="item.status == 'new'"
                :style="item.status1 == 'sale' ? 'left: 100px' : 'left: 0px'"
                >Новинка</span
              >
            </div>

            <span class="item-favorites"
              ><img
                v-if="item.favorites"
                src="../assets/img/heartFav.svg"
                alt="" /><img v-else src="../assets/img/heartFav.svg" alt=""
            /></span>
          </div>
          <img :src="item.img" alt="" />
          <h5 class="item-title">{{ item.title }}</h5>
          <p class="item-price">
            {{ prettify(item.price) }} ₽
            <span class="item-sale-price" v-if="item.sale_price"
              >{{ item.sale_price }} ₽</span
            >
          </p>
          <div class="item-buttons-wrapper">
            <button class="btn">В корзину</button>
            <div class="item-count--wrapper">
              <v-icon class="item-count-icon">mdi-minus</v-icon>
              <input type="text" class="item-count" value="1" />
              <v-icon class="item-count-icon">mdi-plus</v-icon>
            </div>
          </div>
          <button class="btn">Купить в 1 клик</button>

          <div class="item-bottom">
            <ul class="item-bottom-price">
              <li
                class="item-bottom-el"
                v-for="sale in item.sales"
                :key="sale.id"
              >
                <span>от {{ sale.count }} шт. </span>
                <span
                  ><b>{{ sale.price }}</b> ₽ / шт.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueHorizontal from "vue-horizontal";
import Filters from "./Filters.vue";
import router from "../router";

export default {
  name: "Category",
  computed: {
    ...mapGetters(["page_title"]),
  },
  data: () => ({
    category_id: router.history.current.query.id,
    subcategory_id: router.history.current.query.sub,
    breadcrumbs: [
      // по дефолту главная и каталог, получая от бэка товары для катеогрии получаю json формата:
      /*
      {
        id: id категории,
        title: название категории,
        items: [] - Все элементы категории, если открыта страница только категории, либо элементы с выбранной подкатеогрией 
        subcategories: [{
          id: 1,
          title: Магинт1,
          img: 'magnit.png'
        }] 
        subcategory_id:  если открыта страницы с id подкатегории
        subcategory_title: название подкатегории если есть id подкатегории
      }
      */

      // Получаю название катоегрии и подкатеогрии
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
    sub_cateogrys: [
      // Сейчас тут фильтры, но нужно подкатеогрии на равне с выбранной подкатеогрией
      // Получаю все подкатеогрии общей катеогрии
      {
        id: 1,
        title: "С ПВХ слоем",
        img: require("@/assets/img/catalog1.png"),
      },
      {
        id: 2,
        title: "Винил с клеевым слоем",
        img: require("@/assets/img/catalog2.png"),
      },
      {
        id: 3,
        title: "Винил без клеевого слоя",
        img: require("@/assets/img/catalog3.png"),
      },
      {
        id: 4,
        title: "Винил толщиной 0.25 мм.",
        img: "",
      },
      {
        id: 5,
        title: "Винил толщиной 1.5 мм.",
        img: "",
      },
    ],
    items: [
      {
        id: 1,
        title:
          "Магнитный винил без клеевого слоя, рулон 0.62х30 м, толщина 0.7 мм",
        img: require("@/assets/img/magnit.png"),
        price: 1870,
        status: "new",
        favorites: false,
        sales: [
          {
            id: 1,
            count: 8,
            price: 395,
          },
          {
            id: 2,
            count: 14,
            price: 370,
          },
          {
            id: 3,
            count: 31,
            price: 320,
          },
          {
            id: 4,
            count: 100,
            price: 300,
          },
        ],
      },
      {
        id: 2,
        title:
          "Магнитный винил без клеевого слоя, рулон 0.62х30 м, толщина 0.7 мм",
        img: require("@/assets/img/magnit.png"),
        price: 2870,
        sale_price: 3870,
        status: "new",
        status1: "sale",
        favorites: true,
        sales: [
          {
            id: 1,
            count: 8,
            price: 395,
          },
          {
            id: 2,
            count: 14,
            price: 370,
          },
          {
            id: 3,
            count: 31,
            price: 320,
          },
          {
            id: 4,
            count: 100,
            price: 300,
          },
        ],
      },
      {
        id: 3,
        title:
          "Магнитный asd asdas dasвинил без клеевого слоя, рулон 0.62х30 м, толщина 0.7 мм",
        img: require("@/assets/img/magnit.png"),
        price: 2870,
        sale_price: 3870,
        status: "new",
        status1: "sale",
        favorites: true,
        sales: [
          {
            id: 1,
            count: 8,
            price: 395,
          },
          {
            id: 2,
            count: 14,
            price: 370,
          },
          {
            id: 3,
            count: 31,
            price: 320,
          },
          {
            id: 4,
            count: 100,
            price: 300,
          },
        ],
      },
      {
        id: 4,
        title:
          "Магнитный asd asdas dasвинил без клеевого слоя, рулон 0.62х30 м, толщина 0.7 мм",
        img: require("@/assets/img/magnit.png"),
        price: 2870,
        sale_price: 3870,
        status: "new",
        status1: "sale",
        favorites: true,
        sales: [
          {
            id: 1,
            count: 8,
            price: 395,
          },
          {
            id: 2,
            count: 14,
            price: 370,
          },
          {
            id: 3,
            count: 31,
            price: 320,
          },
          {
            id: 4,
            count: 100,
            price: 300,
          },
        ],
      },
      {
        id: 5,
        title:
          "Магнитный asd asdas dasвинил без клеевого слоя, рулон 0.62х30 м, толщина 0.7 мм",
        img: require("@/assets/img/magnit.png"),
        price: 2870,
        sale_price: 3870,
        status: "new",
        status1: "sale",
        favorites: true,
        sales: [
          {
            id: 1,
            count: 8,
            price: 395,
          },
          {
            id: 2,
            count: 14,
            price: 370,
          },
          {
            id: 3,
            count: 31,
            price: 320,
          },
          {
            id: 4,
            count: 100,
            price: 300,
          },
        ],
      },
    ],
  }),
  components: {
    VueHorizontal,
    Filters,
  },
  methods: {
    // функция для создания пробела между тысячами (1 000, 12 000)
    prettify(num) {
      var n = num.toString();
      var separator = " ";
      return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
    },
    initBreadCrumbs() {
      if (this.category_id) {
        this.breadcrumbs.push({
          text: "Гибкие магниты", // получать название катеогрии
          disabled: false,
          href: "/category?id=" + this.category_id,
        });

        if (this.subcategory_id) {
          this.breadcrumbs.push({
            text: "Магнитный винил", // получать название подкатегории
            disabled: false,
            href:
              "/category?id=" + this.category_id + "&sub" + this.subcategory_id,
          });
        }
      } else {
        router.push("/catalog");
      }
    },
  },
  mounted() {
    this.$store.dispatch("set_title", "Магнитный винил");
    this.initBreadCrumbs();
  },
};
</script>
<style lang="scss">
.category {
  &__wrapper {
    display: flex;

    .filters {
      width: 250px;
    }
  }

  .v-hl-container {
    padding-left: 7px !important;
    padding-right: 7px !important;
  }

  .category__panels-item {
    margin: 10px 0;
    padding: 15px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;

    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;

    &:hover {
      border: 1px solid var(--color);
    }

    h2 {
      font-size: 15px;
      line-height: 20px;
      color: #000;
    }

    img {
      width: 70px;
      height: 70px;
    }
  }

  &__items {
    width: calc(100% - 250px);
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .category__items-panel {
      width: 100%;
    }

    .category__item {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 30%;
      padding: 10px;
      border-radius: 4px;
      transition: 0.3s;

      &:hover {
        box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.08);
      }

      .item-title {
        height: 100px;
      }

      .btn {
        padding: 0 8px;
      }

      .item-bottom {
        margin-top: 10px;
        .item-bottom-price {
          display: flex;
          flex-direction: column;
          row-gap: 3px;
          .item-bottom-el {
            padding: 0px 8px;
            display: flex;
            justify-content: space-between;
            border: 1px solid #e4e4e4;
            border-radius: 4px;
            color: #969696;
          }
        }
      }

      .item-panel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;

        &--wrapper {
          display: flex;
          column-gap: 10px;
        }
      }

      .item-status--new {
        font-size: 12px;
        font-family: "Montserrat";
        border: 2px solid var(--color);
        font-weight: bold;
        color: var(--color);
        text-transform: uppercase;
        padding: 4px 6px;
      }

      .item-favorites {
        cursor: pointer;
        display: flex;
        align-items: center;

        img {
          height: 24px;
        }
      }

      .item-status--sale {
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Montserrat";
        top: 0;
        left: 0;
        border: 2px solid #ffce4c;
        background: #ffce4c;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px 10px;

        img {
          width: 14px;
        }
      }

      .item-price {
        display: flex;
        align-items: center;
        column-gap: 10px;
        font-size: 16px;
        margin-top: 15px;
        font-weight: bold;
      }

      .item-sale-price {
        position: relative;
        color: #1b2339;
        font-size: 14px;
        opacity: 0.6;

        &::after {
          content: "";
          background: #eb5757;
          bottom: 50%;
          height: 2px;
          left: 0;
          position: absolute;
          -webkit-transform: skewY(-12deg);
          transform: skewY(-12deg);
          width: 100%;
        }
      }

      .item-buttons-wrapper {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 5px;

        .item-count--wrapper {
          display: flex;
          justify-content: center;
          column-gap: 5px;
          border: 2px solid #e4e4e4;
          border-radius: 4px;
          height: 40px;
          flex-grow: 1;

          input {
            text-align: center;
            width: 40px;
            outline: none;
          }

          .item-count-icon {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
