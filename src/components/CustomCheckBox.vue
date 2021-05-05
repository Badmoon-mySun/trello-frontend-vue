<template>
  <div class="remember_me_input">
    <label class="check">
      <input type="checkbox" v-model="value" class="cbx" style="display: none;">
      <svg viewBox="0 0 18 18">
        <path
            d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
        <polyline points="1 9 7 14 15 4"></polyline>
      </svg>
    </label>
  </div>
</template>

<script>
export default {
  name: "CustomCheckBox",
  data() {
    return {
      value: false
    }
  }
}
</script>

<style lang="scss" scoped>
.remember_me_input {
  cursor: pointer;
  position: relative;
  width: 1.8rem;
  height: 1.8rem;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0, 0, 0);

  & svg {
    width: 1.8rem;
    height: 1.8rem;
    position: relative;
    z-index: 1;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #c8ccd4;
    stroke-width: 1.5;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease;

    & path {
      stroke-dasharray: 60;
      stroke-dashoffset: 0;
    }

    & polyline {
      stroke-dasharray: 22;
      stroke-dashoffset: 66;
    }
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover svg {
    stroke: #4285f4;
  }
}

.cbx:checked + svg {
  stroke: #4285f4;
}

.cbx:checked + svg path {
  stroke-dashoffset: 60;
  transition: all 0.3s linear;
}

.cbx:checked + svg polyline {
  stroke-dashoffset: 42;
  transition: all 0.2s linear;
  transition-delay: 0.15s;
}
</style>