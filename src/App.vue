<template>
  <div id="app">
    <div id="header">
      <Comp_Header></Comp_Header>
    </div>
    <div id="body">
      <div id="sidebar">
        <div v-for="(el,index) in array">
          <router-link class="menulink" style="text-decoration: none;"
                       :to="{ path: el.path }">
            <Comp_Button :text="el.text" :bgcolor="el.bgcolor" :isActive="activeIndex === index" 
             @onToggle="onToggle(index)"></Comp_Button>
          </router-link>
        </div>
      </div>
      <div id="main">
        <Comp_ABOUTME v-if="isABOUTME"></Comp_ABOUTME>
        <Comp_ASPNETJQ v-if="isASPNETJQ"></Comp_ASPNETJQ>
        <Comp_ASPNETJQM v-if="isASPNETJQM"></Comp_ASPNETJQM>
      </div>
    </div>

  </div>
</template>

<script>
  import Comp_Header from "./Comp_Header.vue";
  import Comp_Button from "./Comp_Button.vue";
  import Comp_ASPNETJQ from "./Comp_ASPNETJQ.vue";
  import Comp_ASPNETJQM from "./Comp_ASPNETJQM.vue";
  import Comp_ABOUTME from "./Comp_ABOUTME.vue";
  import axios from 'axios';
  import qs from 'qs';
  export default {
    name: 'app',
    components: {
      Comp_Header,
      Comp_Button,
      Comp_ASPNETJQ,
      Comp_ASPNETJQM,
      Comp_ABOUTME
    },
    data() {
      return {
        tree: [],
        activeIndex: 0,
        array: [
          { "text": "About Me", "bgcolor": "green", "path": "/aboutme" },
          { "text": "ASP.NET/jQuery", "bgcolor": "red", "path": "/aspnetjquery"  },
          { "text": "ASP.NET/jQuery Mobile", "bgcolor": "brown", "path": "/aspnetjqm"  },
          { "text": "ASP.NET MVC", "bgcolor": "lightblue", "path": "/aspnetmvc"  },
          { "text": "Node.js/Express", "bgcolor": "orange", "path": "/nodejs"  },
          { "text": "Vue", "bgcolor": "blue", "path": "/vue"  },
          { "text": "React", "bgcolor": "purple", "path": "/react"  }
        ]
      }
    },
    mounted() {
      this.$router.push("/aboutme");
    },
    methods: {
      onToggle(index) {
        if (this.activeIndex !== index) {
          this.activeIndex = index;
        }
      }
    },
    computed: {
      isABOUTME() {
        if (this.$route.name == 'aboutme') {
          return this.$route.name == 'aboutme'
        }
      },
      isASPNETJQ() {
        if (this.$route.name == 'aspnetjquery') {
          return this.$route.name == 'aspnetjquery'
        }
      },
      isASPNETJQM() {
        if (this.$route.name == 'aspnetjqm') {
          return this.$route.name == 'aspnetjqm'
        }
      },
    },
    watch: {
      $route(to, from) {

      }
    }
  }
</script>

<style>
  body {
    font-family: Arial;
    overflow: visible;
  }

  #header {
    width: 100%;
    border: solid 1px;
    height: calc(24vh - 2px);
    position: fixed;
    top: 0;
    left: 0;
    background-color: orange;
    margin-top: 0px;
  }

  #body {
    width: 100%;
    border: solid 0px;
    height: calc(76vh);
    position: fixed;
    left: 0;
    background-color: yellow;
    top: 24vh;
  }

  #sidebar {
    width: 300px;
    float: left;
    border: solid 0px;
    height: calc(76vh);
    background-color: green;
  }

  #main {
    width: calc(100% - 300px);
    float: right;
    border: solid 0px;
    height: calc(76vh);
    background-color: blue;
    overflow-y: scroll;
  }

  .menulink {
      display: block;
      color: white;
  }
</style>

