<template>
  <div class="filters">
    <div class="filters_top">
      <h4>Фильтры</h4>
      <a class="folters-clear" v-if="active">
        <img src="../assets/img/refresh.svg" alt="" /> Очистить</a
      >
    </div>
    <div class="folters_availability">
      <v-checkbox label="В наличии"></v-checkbox>
    </div>
    <div class="filters_price">
      <MultiRangeSlider
        baseClassName="multi-range-slider-bar-only"
        :min="-10"
        :max="100"
        :ruler="true"
        :label="true"
        :minValue="barMinValue"
        :maxValue="barMaxValue"
        @input="UpdateValues"
      />
    </div>
  </div>
</template>

<script>
import MultiRangeSlider from "multi-range-slider-vue";
import "../../node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css";

export default {
  name: "Filters",
  data: () => ({
    active: false,
    barMinValue: 10,
    barMaxValue: 90,
  }),
  components: {
    MultiRangeSlider,
  },
  methods: {
    UpdateValues(e) {
      this.barMinValue = e.minValue;
      this.barMaxValue = e.maxValue;
    },
  },
};
</script>
<style lang="scss">
.filters {
  .multi-range-slider-bar-only {
    padding: 0;
    .bar {
      height: 4px;
    }

    .bar-inner {
      box-shadow: none;
      background: var(--color);
    }

    .bar-left,
    .bar-right {
      padding: 0;
      background: #fff;
      box-shadow: none;
      border: 1px solid var(--color);
    }
    .thumb {
      .caption {
        display: none;
      }

      &-left {
        transform: translateX(-2px);
      }
      &-right {
        transform: translateX(-2px);
      }
      &::before {
        width: 16px;
        height: 16px;
        border-width: 0;
        background: #f9fafb;
        box-shadow: 0px 1px 2px rgba(145, 158, 171, 0.7);
        margin: 0;
        top: -6px;
      }
    }
  }
  .filters_top {
    display: flex;
    column-gap: 10px;
    align-items: center;
    a {
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 5px;
      color: #afafaf;
    }
  }
  .v-input--checkbox {
    .primary--text {
      color: var(--color) !important;
    }
    .v-input--selection-controls__ripple {
      display: none;
      &::after,
      &::before {
        content: none;
      }
    }
  }
}
</style>
