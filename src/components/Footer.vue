<template>
  <footer class="footer">
    <div class="wrapper">
      <v-row>
        <v-col class="col-3">
          <h3 class="footer-title">Контакты</h3>
          <ul class="footer__nav footer_links">
            <li class="footer__nav-item">
              <img src="../assets/img/phoneFooter.svg" alt="" />
              <a style="font-weight: bold" href="tel:+7(812)327-60-60">
                +7 (812) 327-60-60</a
              >
            </li>
            <li class="footer__nav-item">
              <img src="../assets/img/email.svg" alt="" />info@izoprint.ru
            </li>
            <li class="footer__nav-item">
              <img src="../assets/img/mark.svg" alt="" />195221,
              Санкт-Петербург, <br />
              Богословская улица
            </li>
            <li class="footer__nav-item">
              <img src="../assets/img/clock.svg" alt="" />Пн-Чт: 9:00 — 18:00
              <br />
              Пт: 9:00 — 17:00
            </li>
            <li class="footer__nav-item"></li>
          </ul>
        </v-col>
        <v-col class="col-3">
          <h3 class="footer-title">Каталог</h3>
          <ul class="footer__nav">
            <li class="footer__nav-item"><a>Гибкие магниты</a></li>
            <li class="footer__nav-item"><a>Магнитные инструменты</a></li>
            <li class="footer__nav-item"><a>Крепления и держатели</a></li>
            <li class="footer__nav-item"><a>Для офиса и школы</a></li>
            <li class="footer__nav-item"><a>Постоянные магниты</a></li>
            <li class="footer__nav-item"><a>Лечебные магниты</a></li>
            <li class="footer__nav-item"><a>Для дома и авто</a></li>
            <li class="footer__nav-item"><a>Заготовки для магнитов</a></li>
          </ul>
        </v-col>
        <v-col class="col-3">
          <h3 class="footer-title">Покупателям</h3>
          <ul class="footer__nav">
            <li class="footer__nav-item"><a>Акции</a></li>
            <li class="footer__nav-item"><a>Оплата</a></li>
            <li class="footer__nav-item"><a>Доставка</a></li>
            <li class="footer__nav-item"><a>Обмен и возврат</a></li>
            <li class="footer__nav-item"><a>Статьи</a></li>
          </ul>
        </v-col>
        <v-col class="col-3">
          <h3 class="footer-title">Компания</h3>
          <ul class="footer__nav">
            <li class="footer__nav-item"><a>О нас</a></li>
            <li class="footer__nav-item"><a>Преимущества</a></li>
            <li class="footer__nav-item"><a>Реквизиты</a></li>
            <li class="footer__nav-item"><a>Правовая информация</a></li>
            <li class="footer__nav-item"><a>Контакты</a></li>
          </ul>
        </v-col>
        <p class="footer_bottom">
          2023 © Все права защищены. IZOPRINT 1999-2023 г. | Сайт не является
          публичной офертой и носит информационный характер.
        </p>
      </v-row>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    dialog: false,
    dialog_thanks: false,
  }),
};
</script>
<style lang="scss">
footer.footer {
  margin-top: 20px;
  background: #f5f5f5;
  padding: 40px 0;

  .footer-title {
    margin-bottom: 20px;
    font-weight: 500;
  }
  .footer_links {
    .footer__nav-item {
      margin-bottom: 20px;
    }
  }

  .footer__nav-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      margin-right: 12px;
    }

    a {
      color: #000;
    }
  }
  .footer_bottom {
    margin-top: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #8a8a8a;
  }
}
</style>
