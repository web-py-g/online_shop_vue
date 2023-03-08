<template>
  <nav class="nav">
    <v-dialog v-model="dialog" max-width="560">
      <v-card class="d-flex call-dialog">
        <a @click="dialog = false" class="dialog-close"
          ><img src="../assets/img/close.svg" alt=""
        /></a>
        <v-card-text>
          <h3>Обратный звонок</h3>
          <div class="form">
            <label for="call-name">Ваше имя <b color="red ">*</b></label>
            <input id="call-name" type="text" placeholder="Введите имя" />
            <label for="call-phone">Телефон <b color="red ">*</b></label>
            <input id="call-phone" type="text" placeholder="Введите имя" />
            <button
              @click="
                dialog = false;
                dialog_thanks = true;
              "
              class="btn"
            >
              Отправить
            </button>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog_thanks" max-width="560">
      <v-card class="d-flex call-dialog thanks-dialog">
        <a @click="dialog_thanks = false" class="dialog-close"
          ><img src="../assets/img/close.svg" alt=""
        /></a>
        <v-card-text>
          <h3>Спасибо!</h3>
          <div class="thanks-text">
            <p>
              Мы свяжемся с вами в ближайшее время <br />
              График работы: пн-пт, 9:00 - 20:00
            </p>
            <button @click="dialog_thanks = false" class="btn btn-invert">
              Вернуться к покупкам
            </button>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <div class="wrapper d-flex">
      <div class="nav__main">
        <div class="nav__main-left">
          <div class="nav__logo">
            <router-link to="/">
              <img src="../assets/img/logo.png" alt="izoprint" height="45px"
            /></router-link>
          </div>

          <div class="nav-city">
            <img src="../assets/img/Location.svg" class="mr-2" alt="" />
            Санкт-Петербург
          </div>
        </div>
        <div class="nav__main-right">
          <button class="btn" height="40px">
            <img class="mr-2" src="../assets/img/catalog.svg" alt="" /> Каталог
            товаров
          </button>
          <div class="nav__main-right--input">
            <input
              type="text"
              class="nav-search"
              placeholder="Поиск в магазине"
            />
            <i class="mdi mdi-magnify nav-search-icon"></i>
          </div>

          <div class="nav-icon">
            <router-link to="" class="nav-icon-link">
              <img src="../assets/img/Heart.svg" alt="" />
              <span>Избранное</span>
            </router-link>
          </div>
          <div class="nav-icon">
            <router-link to="" class="nav-icon-link">
              <img src="../assets/img/user.svg" alt="" />
              <span>Профиль</span>
            </router-link>
          </div>
          <div class="nav-icon">
            <router-link to="" class="nav-icon-link">
              <img src="../assets/img/cart.svg" alt="" />
              <span>Корзина</span>
            </router-link>
          </div>
          <div class="nav__main-right--bottom">
            <div class="nav__main-menu">
              <router-link to="/sale" class="nav__main-menu--items text">
                <img src="../assets/img/fire.svg" class="mr-1" alt="" />
                Акции</router-link
              >
              <router-link to="/delivery" class="nav__main-menu--items text"
                >Доставка</router-link
              >

              <router-link to="/contacts" class="nav__main-menu--items text"
                >Контакты</router-link
              >
              <router-link to="/about" class="nav__main-menu--items text"
                >О компании</router-link
              >
              <router-link to="/catalog" class="nav__main-menu--items text"
                >Каталог</router-link
              >
            </div>
            <div class="nav__main-phone">
              <a href="tel:+7(812)327-60-60"> +7 (812) 327-60-60</a>
              <button small class="btn ml-3" @click="dialog = true">
                <img src="../assets/img/phone.svg" class="mr-2" alt="" />
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",

  data: () => ({
    dialog: false,
    dialog_thanks: false,
  }),
};
</script>
<style lang="scss">
body .primary--text {
  color: var(--color) !important;
  caret-color: var(--color) !important;
}

.nav {
  background: #fff;
  box-shadow: 0 3px 20px rgb(0 5 115 / 8%);
  margin-bottom: 30px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  .wrapper {
    width: 95%;
    margin: 10px auto;
  }

  &__main {
    display: flex;
    column-gap: 25px;
    flex-grow: 1;

    &-left {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;

      .nav-city {
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        height: 40px;
      }
    }

    &-right {
      display: flex;
      column-gap: 20px;
      row-gap: 10px;
      flex-grow: 1;
      flex-wrap: wrap;
      .nav__main-right--input {
        flex-grow: 1;
        display: flex;
        position: relative;
        height: 40px;
        background: var(--color-bg);
        border-radius: 4px;
        align-items: center;
      }
      .nav-search {
        outline: none;
        height: 40px;
        padding: 0 10px;
        border-radius: 4px;
        flex-grow: 1;
      }
      .nav-search-icon {
        margin-right: 10px;
        cursor: pointer;
      }

      .nav-icon-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #a4a4ad;
        img {
          height: 24px;
          width: 24px;
        }
      }
      .nav__main-right--bottom {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;

        .nav__main-menu {
          display: flex;
          align-items: center;
          column-gap: 20px;

          &--items {
            display: inline-block;
            color: #000;

            &:hover {
              color: var(--color);
            }
          }
        }

        .nav__main-phone {
          display: flex;
          align-items: center;
          a {
            color: var(--color);
            font-weight: bold;
          }
        }
      }
    }
  }
}
.thanks-dialog {
  text-align: center;
  .thanks-text {
    .btn {
      background: #fff;
      border: 1px solid var(--color);
      margin: 0 auto;
      color: var(--color);
    }
  }
}
.call-dialog {
  display: flex;
  position: relative;

  &.v-card > .v-card__text {
    padding: 50px 25px;
    color: #000;
  }

  h3 {
    margin-bottom: 20px;
  }

  .form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 12px;
      margin-bottom: 8px;
    }

    input {
      background: #ffffff;
      border: 1px solid #e4e4e4;
      border-radius: 4px;
      padding: 12px 15px;
      outline: none;
      margin-bottom: 20px;
    }

    .btn {
      max-width: 150px;
    }

    b {
      color: red;
    }
  }

  .dialog-close {
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 50% !important;
    width: 32px;
    height: 32px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.btn {
  background: var(--color);
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  padding: 0 30px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  height: 40px;

  &:hover {
    background: var(--color-hover);
  }
  &[small] {
    padding: 0 12px;
  }

  .mdi {
    color: #fff;
  }
}
</style>
