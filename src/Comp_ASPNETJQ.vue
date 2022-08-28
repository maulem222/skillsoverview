<template>
  <div>
    <div class="cont">
      <div class="body">
        <div class="txt">
          <div id="headertxt">
            <div id="subheader">
              Pizzeria iDeal Payments
            </div>
            <p>
              We proudly present to you our pizza ordering site. This is the result of 12 months of hard work.
              The pizza ordering site is built in jQuery and uses ASP.NET C# Web Services to access the database.
              You can operate the website yourself as a test. Go to
              <a class='link' :href="`https://pizzeria.aspworld.nl/Home.html`">https://pizzeria.aspworld.nl/Home.html</a>.
              Test payment can be made via Stripe iDeal.
            </p>
          </div>
        </div>
        <video width="900" controls>
          <source src="https://res.cloudinary.com/dk4i5hhps/video/upload/v1651924831/upload/Pizzeria_iDeal_betalingen_Engelse_ondertiteling_fq4k0k.mp4" type="video/mp4">
        </video>
        <div class="txt">
          <div id="headertxt">
            <div id="subheader">
              Pizzeria OrdersManager
            </div>
            <p>
              Together with the online Pizzeria comes the OrdersManager backend. Orders can be easily adapted to the state
              of the dishes, whether ready or still being processed, invoiced or not yet invoiced. An invoice can be generated
              and printed from the browser.
            </p>
          </div>
        </div>
        <video width="900" controls>
          <source src="https://res.cloudinary.com/dk4i5hhps/video/upload/v1652095982/upload/BestellingenManager_Engelse_ondertiteling_o4z2fo.mp4" type="video/mp4">
        </video>
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
