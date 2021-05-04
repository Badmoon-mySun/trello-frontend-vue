<template>
  <div class="modal">
    <div class="card_modal">
      <div class="card_modal__header">
        <div class="header__icon">

        </div>
        <div class="header__title">

        </div>
        <div class="header__close">

        </div>
      </div>
      <div class="card_modal__main">
        <div class="main__content">

        </div>
        <div class="main__sidebar">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardModal"
}
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: rgba(0,0,0,.5);

  overflow-y: auto;
}

.card_modal {
  position: relative;
  top: 8vh;

  min-height: 192vh;
  width: 80rem;
  max-width: 94vw;
  margin: 0 auto;

  background-color: white;
}
</style>