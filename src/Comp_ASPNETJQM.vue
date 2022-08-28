<template>
  <div>
    <div class="cont">
      <div class="body">
        <div class="txt">
          <div id="headertxt">
            <div id="subheader">
              Physiotherapist Appointment Planner
            </div>
            <p>
              We also have made a site for physiotherapists. Clients can make appointments online. The therapist has
              an appointment overview with all appointments per date. You can create an account and make appointments
              yourself as a test. Go to
              <a class='link' :href="`https://fysiocare.aspworld.nl/Afspraak maken.html`">https://fysiocare.aspworld.nl/Afspraak maken.html</a>.

              This website had been programmed in jQuery Mobile together with ASP.NET C# Web Services for database interaction.
            </p>
          </div>
        </div>
        <video width="900" controls>
          <source src="https://res.cloudinary.com/dk4i5hhps/video/upload/v1651944985/upload/Fysiocare_Afspraak_maken_Eng._ondertitels_tvzs74.mp4" type="video/mp4">
        </video>
        <div class="txt">
          <div id="headertxt">
            <div id="subheader">
              Physiotherapist Appointment Overview
            </div>
            <p>
              The therapist has an appointment overview with all appointments per date. He can create accounts and make
              appointments for customers. He can also manage specific treatments per client.
             </p>
          </div>
        </div>
        <video width="900" controls>
          <source src="https://res.cloudinary.com/dk4i5hhps/video/upload/v1651945005/upload/Fysiocare_Afsprakenplanner_Eng._ondertitels_dxalre.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Comp_ASPNETJQM',
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
