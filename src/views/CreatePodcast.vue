<template>
  <div class="createConsultaion">
    <navbar />

    <div class="content">
      <div class="container">
        <div class="header">
          <h2>اضافة بودكاست</h2>
          <!-- <p>من خلال إنشاء استشارة ، ستظهر في منصة Arabi marketer</p> -->
        </div>

        <div class="form">
          <el-form
            ref="form"
            :model="form"
            label-width="120px"
            label-position="top"
          >
            <el-form-item label="عنوان البودكاست">
              <el-input
                v-model="form.name"
                placeholder="أدخل العنوان "
              ></el-input>
            </el-form-item>

            <el-form-item label="التصنيف">
              <el-select v-model="form.region" placeholder="اختر التصنيف">
                <el-option label="تسويقية" value="تسويقية "></el-option>
                <el-option label="تسويقية" value="تسويقية"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="الوصف">
              <el-input
                type="textarea"
                :autosize="{ minRows: 10, maxRows: 14 }"
                v-model="form.desc"
              ></el-input>
            </el-form-item>

            <span class="text-end d-block fw-bold mb-3">صورة البودكاست</span>

            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                ارفاق صورة البودكاست

                <div class="el-upload__tip" slot="tip">
                  القياس: (800x470) بكسل · الحجم الأقصى: 5MB. العدد المسموح: 1
                  ملف اختيار فيديو أو صورة مصممة بشكل جيد ستظهر خدمتك بشكل
                  احترافي وتزيد من مبيعاتك.
                </div>
              </div>

            </el-upload>


            <el-form-item label="رابط البودكاست">
              <el-input
                v-model="form.name"
                placeholder="أدخل الرابط "
              ></el-input>
            </el-form-item>

            <el-form-item label="مدة البودكاست ">
              <el-input
                v-model="form.name"
                placeholder="أدخل المدة "
              ></el-input>
            </el-form-item>

            <el-form-item label="كلمات مفتاحية ">
              <el-input
                v-model="form.name"
                placeholder="أدخل الكلمة المفتاحية "
              ></el-input>
            </el-form-item>

            <el-button type="primary" @click="onSubmit">اضافة</el-button>
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

       dialogImageUrl: '',
        dialogVisible: false,
        disabled: false


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
      }
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
      max-width: 60%;
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

      .el-upload-dragger {
        width: 100%;
        height: 200px;
      }
    }
  }
}
</style>