<template>
  <div>
    <div :class="[ActiveClass, btnStyle]" class="button" @click="toggleActive">
      {{text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Comp_Button',
    props: ['text', 'bgcolor', 'isActive'],
    data() {

    },
    computed: {
      ActiveClass() {
        if (this.isActive) {
          return 'active';
        }
        else {
          return null
        }
      },
      btnStyle() {
        return this.bgcolor
      }
    },
    methods: {
      toggleActive() {
        this.$emit('onToggle');
      }
    }
  }
</script>

<style scoped>
  .button {
    border: 1px solid black;
    border-radius: 2px;
    padding: 20px;
    margin-top: 0px;
    text-align: center;
  }

  .active {
    border-left: 3px solid white;
  }

  .green {
    background-color: darkgoldenrod;
  }
    .green:hover {
      background-color: gold;
      color: black;
    }

  .red {
      background-color: red;
  }
    .red:hover {
      background-color: lightcoral;
      color: black;
    }

  .blue {
    background-color: blue;
  }
    .blue:hover {
      background-color: lightblue;
      color: black;
    }

  .brown {
    background-color: saddlebrown;
  }

    .brown:hover {
      background-color: rosybrown;
      color: black;
    }

  .purple {
    background-color: purple;
  }
    .purple:hover {
      background-color: pink;
      color: black;
    }

  .lightblue {
    background-color: darkblue;
  }
    .lightblue:hover {
      background-color: lightseagreen;
      color: black;
    }

  .orange {
    background-color: darkorange;
  }

    .orange:hover {
      background-color: yellow;
      color: black;
    }
</style>
