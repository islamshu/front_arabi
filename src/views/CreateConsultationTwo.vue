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
            <el-form-item label="مدة الاستشارة ">
              <el-select v-model="form.region" placeholder="اختيار وقت اخر  ">
                <el-option label="تسويقية" value="تسويقية "></el-option>
                <el-option label="تسويقية" value="تسويقية"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="مكان الاستشارة ">
              <el-input
                class="m-2"
                v-model="form.name"
                placeholder="أدخل العنوان "
              ></el-input>
              <el-select class="m-2" v-model="form.region" placeholder="دقائق ">
                <el-option label="zoom" value="zoom"></el-option>
                <el-option label="zoom" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="الوصف">
              <el-date-picker v-model="value1" type="date"> </el-date-picker>

              <el-date-picker v-model="value2" type="date"> </el-date-picker>
            </el-form-item>

            <el-form-item label="مكان الاستشارة ">
              <el-select class="m-2" v-model="form.region" placeholder=" ">
                <el-option label="zoom" value="zoom"></el-option>
                <el-option label="zoom" value="beijing"></el-option>
              </el-select>
              <el-time-select
                class="m-2"
                v-model="value"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                }"
                placeholder="00:00"
              >
              </el-time-select>

              <el-time-select
                class="m-2"
                v-model="value"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                }"
                placeholder="00:00"
              >
              </el-time-select>
            </el-form-item>
            <el-button class="add-more">اضافة اخر +</el-button>

            <span class="text-end d-block fw-bold mb-3">سعر الاستشارة </span>

            <el-slider v-model="value4" :marks="marks">
              <el-slider v-model="value4"></el-slider>
            </el-slider>

            <el-form-item label="طريقة الدفع  ">
              <el-select v-model="form.region" placeholder="فيزا ">
                <el-option label="فيزا" value="فيزا" style="background-image:url();"></el-option>
                <el-option label="فيزا" value="فيزا"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="رابط الاستشارة  ">
              <el-input
                v-model="form.name"
                placeholder="arabimarketing.com"
              ></el-input>
            </el-form-item>

            <el-button type="primary" plain @click="onSubmit">نشر</el-button>
            <el-button class="prev">السابق</el-button>
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
      value: "",
      value1: "",
      value2: "",

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

      value4: [30, 60],
      marks: {
        0: "1",
        100: "100",
        // 50: {
        //   style: {
        //     color: '#1989FA'
        //   },
        //   label: this.$createElement('strong', '50%')
        // }
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

      .el-button-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
      }

      .el-button-group > .el-button {
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

      .el-form-item__content {
        display: flex;
        // justify-content: space-between;
      }

      .el-date-editor.el-input,
      .el-date-editor.el-input__inner {
        width: 49%;
        margin: 1%;
      }

      .prev {
        display: block;
        width: 100%;
        border-radius: 10px;
        color: #70d644;
        height: 50px;
        margin-bottom: 10px;
        margin-top: 40px;
        border: 1px solid #70d644;
        background-color: white;
      }

      .add-more {
        background-color: #70d644;
        color: white;
        padding: 6px;
        display: block;
        margin-bottom: 20px;
      }

      .el-slider {
        margin-bottom: 30px;
      }

      .el-slider__bar {
        background-color: unset;
      }
      .el-slider__runway {
        background-color: #BFBFBF;
        height: 10px;
      }

      .el-slider__stop{
        height: 10px;
        width: 10px;
      }
      .el-slider__button {
        border-color: #70d644;
        border-width: 3px;
        width: 23px;
        height: 23px;
      }
    }
  }
}
</style>