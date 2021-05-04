<template>
  <div class="module">
    <div class="module__header">
      <div class="header__title">
        <div class="title__icon">
          <img src="../../../assets/img/check.svg" alt="" width="32" height="32">
        </div>
        <div class="title__text">
          <h4>Чек-лист</h4>
        </div>
      </div>
    </div>
    <div class="module__body">
      <div class="module__body__checkbox_list">
        <div class="checkbox_list__checkbox_line">
          <custom-check-box/>

          <span class="checkbox_line__text">
            hello body
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomCheckBox from "../../CustomCheckBox";
export default {
  name: "CardModuleCheckList",
  components: {CustomCheckBox}
}
</script>

<style scoped lang="scss">
.module {
  @include card-module;
}
</style>