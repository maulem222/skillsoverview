<template>
  <div>
    <div class="cont">
      <div class="body">
        <div class="txt">
          <div id="headertxt">
            <div id="subheader">
              About Me
            </div>
            <p>
              I am a senior programmer from the Netherlands. I started programming in 1996 when I was 27, being a graduate
              MBA. I studied economics, but my true heart lies at Information Technology.
            </p>
            <p>
              I started programming in Pascal, then I studied the basics of C. I bought Delphi 2 Developer, and I learned how to
              query a database.
            </p>
            <p>
              Then, in 1996, I bought Linux Slackware and installed it on my old computer. What a mess! It didn't run.. it
              lasted months before I got Linux running, and it lasted 4 years before I managed to run a complete webserver on it.
              At the end, in 2001 I was invited by a IT-company in Maastricht to install a Linux webserver for them.
            </p>
            <p>
              In 2003 I took part in a development project for a small IT-company in Heerlen for a couple of months, and
              I developed a database structure and made an interface blueprint in Borland Delphi for them.
            </p>
            <p>
              From 2005 to 2009 I was engaged in other activities, but not related to IT.
            </p>
            <p>
              In 2010 I restarted my activities in IT, mainly PHP and MySQL. I started programming in Macromedia DreamWeaver
              but with no commercial purpose. After that, in 2011/2012, I restarted programming in Borland Delphi but this
              time I made a complete database application intended for automobile repair. But due to an awful bug in the
              software (which I could not identify) the whole project ended worthless and it never got off ground.
            </p>
            <p>
              It took a while before I got busy again and this time, in 2014 I started PHP programming again, mainly a PHP
              frontend with some categorical layering. I started to enjoy webscripting and in 2015 I started programming
              in ASP.NET. IN 2016 I developed an application in Alpha Anywhere that ran on an Access database. In 2017 I
              re-engaged in ASP.NET programming, I learned jQuery and I started to develop a semi-real online appointment
              planner. I developed an appointment planner meant for sporting activities (mountain climbing). After that,
              in 2020 I developed an online pizza ordering site with a couple of backend managers. I tried to market the
              site at a local pizza baker, but he was not interested, not even in competing (and free!) software for pizza
              ordering.
            </p>
            <p>
              Then, I developed another appointment planner, which was a planner for physiotherapists, again with a couple of
              backend managers. Again, I tried to market the planner at a local physiotherapist, but again, he was not interested.
              I called him and I told him that the application was capable of planning appointments online.
              He answered that he already had an application for his customers and the appointments, and he was not planning
              to buy another.
            </p>
            <p>
              So I got a bit stuck. In 2021 I discovered the job board jooble.org and saw many remote jobs in ASP.NET MVC,
              jQuery, Vue, React, CSS, SQL and so on. I started to learn programming in ASP.NET MVC, and after that, In Vue.js
              and React.js, until now. Which I enjoy very much. I made a basic dynamic product catalog with a TreeView, in MVC,
              then remade it in Vue.js, and then I made the same catalog in React.js. I do MVC (paid) hosting on Mochahost,
              California, and Vue and React hosting on a couple of free Heroku accounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Comp_ASPNETJQ',
    props: [],
    data() {
      return {

      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style scoped>
  .cont {
    text-align: center;
    border: 0px solid red;
  }

  .body {
    text-align: center;
    border: 0px solid yellow;
  }

  .txt {
    width: 790px;
    clear: both;
    text-align: justify;
    border: 0px solid red;
    display: inline-block;
  }

  #header {
    font-family: Calibri;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }

  #subheader {
    font-family: Calibri;
    font-size: 20px;
    color: black;
    text-align: center;
    margin-bottom: 20px;
    border: 0px solid;
  }

  #headertxt {
    font-family: Calibri;
    font-size: 16px;
    color: white;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border: 0px solid;
  }

  .list {
    list-style-type: none;
  }

  .smallspacer {
    height: 20px;
  }

  .link {
      color: white;
  }


  @media only screen and (min-width: 0px) and (max-width: 1210px) {
    .cont {
      height: 0;
      padding-bottom: 56.25%; /* 16:9 */
      position: relative;
      border: 0px solid red;
    }

    .body {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0px solid;
    }

    .txt {
      width: 100%;
    }

    video {
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
</style>
