<template>
  <div class="createConsultaion">
    <navbar />

    <div class="content">
      <div class="container">
        <div class="header">
          <h2>انشاء استشارة</h2>
          <p>من خلال إنشاء استشارة ، ستظهر في منصة Arabi marketer</p>
        </div>

        <div class="form">
          <el-form
            ref="form"
            :model="form"
            label-width="120px"
            label-position="top"
          >
            <el-form-item label="عنوان الاستشارة ">
              <el-input
                v-model="form.name"
                placeholder="أدخل العنوان "
              ></el-input>
            </el-form-item>

            <el-form-item label="نوع الاستشارة ">
              <el-select v-model="form.region" placeholder="نوع الاستشارة ">
                <el-option label="تسويقية" value="تسويقية "></el-option>
                <el-option label="تسويقية" value="تسويقية"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="مكان الاستشارة ">
              <el-select v-model="form.region" placeholder="مكان الاستشارة ">
                <el-option label="zoom" value="zoom"></el-option>
                <el-option label="zoom" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="الوصف">
              <el-input
                type="textarea"
                :autosize="{ minRows: 10, maxRows: 14 }"
                v-model="form.desc"
              ></el-input>
            </el-form-item>

            <!-- <el-radio-group v-model="radio1" label="لون الاستشار ة ">
              <el-radio-button bval="red"></el-radio-button>
              <el-radio-button bval="green"></el-radio-button>
              <el-radio-button bval="blue"></el-radio-button>
              <el-radio-button bval="yallow"></el-radio-button>
            </el-radio-group> -->

            <span class="text-end d-block fw-bold mb-3">لون الاستشار ة </span>
            <el-button-group>

              <el-button type="success" circle></el-button>
              <el-button type="info" circle></el-button>
              <el-button type="warning" circle></el-button>
              <el-button type="danger" circle></el-button>
                <el-button type="success" circle></el-button>
              <el-button type="info" circle></el-button>
              <el-button type="warning" circle></el-button>
              <el-button type="danger" circle></el-button>
            </el-button-group>

            <el-button type="primary" @click="onSubmit">التالي</el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import navbar from "@/components/navComponentInner.vue";
export default {
  components: {
    navbar,
  },

  data() {
    return {
      radio1: "red",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },



    };


  },

  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="scss">
.createConsultaion {
  font-family: "Cairo", sans-serif;
  direction: rtl;
  background-color: #f0efef;
    padding-bottom: 50px;

  .content {
    padding-top: 50px;
    padding-bottom: 50px;

    .header {
      text-align: right;
      h2 {
        font-weight: 700;
      }

      p {
      }
    }

    .form {
      max-width: 100%;
      margin: auto;

      .el-form-item__label {
        display: block;
        text-align: right;
        padding-bottom: 0;
        font-weight: 700;
      }

      .el-select {
        width: 100%;
      }

      .el-input__inner {
        height: 50px;
        border-radius: 10px;
      }

    .el-button-group{
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
    }

    .el-button-group>.el-button{
        border-radius: 50%;
        width: 50px;
        height: 50px;

    }

      .el-button--primary {
        display: block;
        width: 100%;
        background: linear-gradient(
          239.11deg,
          #70d644 -31.67%,
          #567a46 192.97%
        );
        border-radius: 10px;
        color: white;
        height: 50px;
        margin-bottom: 10px;
        margin-top: 40px;
        border: none;
      }



    }
  }
}
</style>