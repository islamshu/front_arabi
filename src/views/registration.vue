<template>
  <div class="createConsultaion">
    <navbar />

    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="user-info">
              <i class="el-icon-right"></i>

              <div class="user-img">
                <img src="../assets/cons-man.png" alt="" />
              </div>
              <h3>Mohammed Mohammed</h3>
              <p>احجز 4 جلسات تعليم بودكاست من الصفر الى الاحتراف</p>
              <div class="instruct">
                <i class="el-icon-time"></i>
                <span> hr 2</span>
              </div>

              <div class="instruct">
                <i class="el-icon-video-camera-solid"></i>
                <span>يتم توفير تفاصيل مؤتمرات الويب عند التأكيد</span>
              </div>

              <div class="instruct">
                <i class="el-icon-bank-card"></i>
                <span>$350 USD</span>
              </div>

              <div class="instruct">
                <i class="el-icon-date"></i>
                <span>20:00 - 22:00, Wednesday, August 31, 2022</span>
              </div>

              <div class="instruct">
                <i class="el-icon-location"></i>
                <span>أسيا / غزة </span>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="form">
              <h3>أدخل بياناتك</h3>
              <span class="arabi-mark">Arabi marketer</span>

              <el-form
                ref="form"
                :model="form"
                label-width="120px"
                label-position="top"
              >
                <el-form-item label="الاسم بالكامل  ">
                  <el-input
                    v-model="form.name"
                    placeholder="ادخل الاسم  "
                  ></el-input>
                </el-form-item>

                <el-form-item label="البريد الالكتروني ">
                  <el-input
                    v-model="form.name"
                    placeholder=" ادخل الايميل"
                  ></el-input>
                </el-form-item>

                <el-form-item
                  label="يرجى مشاركة أي شيء من شأنه أن يساعد في التحضير لاجتماعنا."
                >
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 10, maxRows: 14 }"
                    v-model="form.desc"
                  ></el-input>
                </el-form-item>

                <h5>معلومات الدفع</h5>
                <div class="infoPay">
                  <h6>السعر</h6>
                  <span>545 <span>usd</span></span>
                  <el-button
                    type="primary"
                    icon="el-icon-bank-card
"
                  >
                    دفع عن طريق
                  </el-button>
                </div>

                <el-button type="primary" @click="onSubmit"
                  >جدولة الحدث
                </el-button>
              </el-form>
            </div>
          </div>
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

      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },

  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
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
    padding: 50px;
    background-color: white;
    max-width: 70%;
    margin: 50px auto 0px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    .arabi-mark {
      width: 240px;
      font-size: 20px;
      font-weight: 700;
      color: white;
      background: linear-gradient(239.11deg, #70d644 -31.67%, #567a46 192.97%);
      position: absolute;
      left: -48px;
      top: 37px;
      padding: 10px 20px;
      transform: rotate(-43deg);
      text-align: center;
    }

    .form {
      text-align: right;
      max-width: 90%;
      // border-right: 1px solid #bcbbbb;
      border-right: none;
      padding-right: 40px;
      .el-form-item__label {
        display: block;
        text-align: right;
        padding-bottom: 0;
        font-weight: 700;
      }

      h3 {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 40px;
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

      h5 {
        margin-bottom: 15px;
        font-size: 18px;
      }

      .infoPay {
        border: 1px solid #dcdfe6;
        padding: 10px;
        border-radius: 10px;

        h6 {
          font-weight: 700;
        }

        span {
        }

        .el-button--primary {
          display: block;
          width: 100%;
          background: linear-gradient(
            239.11deg,
            #44bcd6 -31.67%,
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

    .user-info {
      text-align: right;

      .user-img {
        margin-bottom: 15px;
        img {
        }
      }

      h3 {
        margin-bottom: 10px;
        opacity: 0.5;
        font-size: 22px;
        color: #000;
      }

      p {
        margin-bottom: 40px;
        font-weight: 700;
      }

      .instruct {
        margin-bottom: 15px;

        span {
          margin-right: 10px;
        }
      }

      .el-icon-right {
        margin-bottom: 20px;
        color: #70d644;
        font-size: 25px;
        font-weight: 700;
        cursor: pointer;
      }

      .el-icon-time,
      .el-icon-video-camera-solid,
      .el-icon-bank-card,
      .el-icon-date,
      .el-icon-location {
        font-size: 22px;
        color: #8e8b8b;
      }
    }
  }
}
</style>