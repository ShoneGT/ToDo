<template>
  <div>
    <label class="container cursor-pointer" :class="{'disabled-wrapper': disabled}">
      <input type="checkbox" v-model="status" :disabled="disabled">
      <span
          class="checkmark"
          :class="[{disabled: disabled}, size, type, hover && hoverClass]"
          @mouseover="handleMouseHover(true)"
          @mouseleave="handleMouseHover(false)"
      >
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      required: true,
      type: String
    },
    type: {
      required: true,
      type: String
    },
    disabled: {
      type: Boolean
    },
    checked: {
      required: true,
      type: Boolean
    },
  },
  computed: {
    hoverClass () {
      return this.type === 'primary' ? 'hoverPrimary' : 'hoverSecondary'
    },
    status: {
      get() {
        return this.checked
      },
      set (val) {
        return this.$emit('checked', val)
      }
    }
  },
  data () {
    return {
      hover: false
    }
  },
  methods: {
    handleMouseHover (state) {
      if (!this.disabled) {
        this.hover = state
      }
    }
  }
}
</script>
<style>


/* Types */
.primary {
  border: 1px solid #fbbf00 !important;
}
.secondary {
  background-color: white !important;
  border: 1px solid #cacaca !important;
}
.hoverPrimary {
  background: #eab000 !important;
}
.hoverSecondary {
  border: 1px solid #9896b6 !important;
}

/* Checkbox icon */
.sm.primary:after {
  left: 5px;
  top: 2px;
  width: 3px;
  height: 7px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.md.primary:after {
  left: 7px !important;
  top: 2px !important;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.lg.primary:after {
  left: 9px !important;
  top: 5px !important;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.secondary:after {
  left: 9px !important;
  top: 5px !important;
  width: 5px !important;
  height: 10px !important;
  border: solid #d2d1e3 !important;
  border-width: 0 3px 3px 0 !important;
  -webkit-transform: rotate(45deg) !important;
  -ms-transform: rotate(45deg) !important;
  transform: rotate(45deg) !important;
}
.disabled.primary {
  border: solid 1px #fcefb5 !important;
}

.disabled.secondary {
  border: solid 1px #ededf5 !important;
}

.disabled-wrapper input:checked ~ .primary {
  background-color: #fcefb5 !important;
}

.disabled-wrapper input:checked ~ .secondary {
  background-color: white !important;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark{
  position: absolute;
  background-color: #fff;
  border-radius: 4px;
}

.checkmark.sm {
  position: absolute  !important;
  top: 9px !important;
  left: 10px !important;
  height: 15px !important;
  width: 15px !important;
}

.checkmark.md {
  position: absolute  !important;
  top: 9px !important;
  left: 10px !important;
  height: 20px !important;
  width: 20px !important;
}
.checkmark.lg {
  position: absolute  !important;
  top: 9px !important;
  left: 10px !important;
  height: 25px !important;
  width: 25px !important;
}

/*!* On mouse-over, add a grey background color *!*/
/*.checkmark:hover:after {*/
/*  background-color: #dc991d;*/
/*}*/

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #fbbf00;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

</style>
