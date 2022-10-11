<template>
  <div class="createConsultaion">
    <navbar />

    <div class="content">
      <div class="container">
        <div class="header">
          <h2>انشاء مقال</h2>
          <p>ستتم مراجعة خدمتك فور انشاءه واعلامك باشعار اذا كان متاح لنشر</p>
        </div>
        <div v-if="show" class="alert alert-danger" role="alert">
            {{ alert }} <br />
        </div>
        <div v-if="show2" class="alert alert-danger" role="alert">
          {{ alert2 }} <br />
        </div>
        <div v-if="show3" class="alert alert-danger" role="alert">
          {{ alert3 }} <br />
        </div>
        <div v-if="show4" class="alert alert-danger" role="alert">
          {{ alert4 }} <br />
        </div>


        <div class="form">
          <el-form
            ref="form"
            :model="form"
            label-width="120px"
            label-position="top"
            method="post"
            @submit="postData"
          >
            <el-form-item label="عنوان المقال">
              <el-input
                v-model="form.title"
                placeholder="أدخل العنوان "
              ></el-input>
            </el-form-item>

            <el-form-item label="التصنيف">
              <el-select
                v-model="form.category"
                multiple
                placeholder="اختر التصنيف"
              >
                <el-option
                  v-for="item in selectItems"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="الوصف">
              <el-input
                type="textarea"
                :autosize="{ minRows: 10, maxRows: 14 }"
                v-model="form.description"
              ></el-input>
            </el-form-item>

            <el-slider v-model="form.sliderVal" :marks="marks">
              <el-slider v-model="form.sliderVal"></el-slider>
            </el-slider>

            <p class="text-end mb-4">
              في حالة زادت كلمات المقال عن 600 كلمة سيتم دفع 5 دولار
            </p>

            <span class="text-end d-block fw-bold mb-3">صورة المقال</span>
            <!-- <el-upload
              class="upload-demo"
              drag
              action="http://arabicreators.com/api/add_blog"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="image"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">ارفاق صورة المقال</div>
            </el-upload> -->

            <!-- <el-upload
              class="upload-demo"
              action="http://arabicreators.com/api/add_blog"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="form.image"
              list-type="picture"
              :auto-upload="false"
            >
              <el-button size="small" type="primary">Click to upload</el-button>
              <div slot="tip" class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </el-upload> -->

            <!-- <el-upload
              class="upload-demo"
              ref="upload"
              action="http://arabicreators.com/api/add_blog"
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary"
                >select file</el-button
              >
              <el-button
                style="margin-left: 10px"
                size="small"
                type="success"
                @click="submitUpload"
                >upload to server</el-button
              >
              <div class="el-upload__tip" slot="tip">
                jpg/png files with a size less than 500kb
              </div>
            </el-upload> -->

            <input type="file" @change="onfileSelected" />

            <el-form-item label="كلمات مفتاحية ">
              <el-input
                v-model="form.keywords"
                placeholder="أدخل  كلمات مفتاحية   "
              ></el-input>
            </el-form-item>

            <el-button type="primary" @click="postData">انشاء</el-button>
          </el-form>
          <!-- 
          <form action="" method="post" @submit="postData">

            <input type="text" v-model="form.title">
             <textarea name="" v-model="form.description" id="" cols="30" rows="10"></textarea>
            <input type="text" v-model="form.keywords">

             <input type="file" @change="onfileSelected">
            <button type="submit">send</button>

          </form> -->
        </div>


      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";

import navbar from "@/components/navComponentInner.vue";
export default {
  components: {
    navbar,
  },

  data() {
    return {
      radio1: "red",
      form: {
        title: "",
        category:[],
        description: "",
        keywords: "",

        // date1: "",
        // date2: "",
        // sliderVal: [],
        // image: null,

        // delivery: false,
        // type: [],
        // resource: "",
      },

      marks: {
        100: "0",
        0: "5000",
      },

      alert: "",
      alert2: "",
      alert3: "",
      alert4: "",

      show: false,
      show2: false,
      show3: false,
      show4: false,

      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      imageSelcteed: null,

      selectItems: undefined,
    };
  },

  mounted() {
    Vue.axios
      .get("https://dashboard.arabicreators.com/api/blog_category")
      .then((rr) => {
        console.log(rr);
        this.selectItems = rr.data.data;
      });
  },

  methods: {
    onfileSelected(event) {
      this.imageSelcteed = event.target.files[0];
    },


    postData(e) {

      // let newarr=[]
      //  let newform=  this.form.category.toString().split(",")
      //   for(var i = 0; i < this.form.category.length; i++){
      //      newarr.push(newform[i]);
      //   }



      const dataForm = new FormData();

      dataForm.append("image", this.imageSelcteed, this.imageSelcteed.name);
      dataForm.append("title", this.form.title);
      dataForm.append("category",JSON.stringify(this.form.category) );
      dataForm.append("description", this.form.description);
      dataForm.append("keywords", this.form.keywords);

      this.axios
        .post("https://dashboard.arabicreators.com/api/add_blog", dataForm, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          this.alert = res.data.message[0];
          this.alert2 = res.data.message[0];
          this.alert3 = res.data.message[0];
          this.alert4 = res.data.message[0];

          if (res.data.code == 400) {
            if(res.data.message =="العنوان مطلوب."){
              this.show = !this.show;
            }else if(res.data.message =="التصنيفات  مطلوب."){
           this.show2 = !this.show2;

            }
            else if(res.data.message =="صورة مطلوب."){
           this.show3 = !this.show3;

            }else if(res.data.message =="الكلمات المفتاحية مطلوب."){
           this.show4 = !this.show4;

            }
          }
        }),
        e.preventDefault();
    },

    // onUplad(){

    //   const image= new FormData()
    //   image.append('image',this.imageSelcteed.name)

    // },

    // submitUpload() {
    //   this.$refs.upload.submit();
    // },
    onSubmit() {
      console.log("submit!");
    },

    // handleRemove(image) {
    //   console.log(image);
    // },
    // handlePreview(image) {
    //   console.log(image);
    // },
    // handleRemove(file) {
    //   console.log(file);
    // },
    // handlePictureCardPreview(file) {
    //   this.dialogImageUrl = file.url;
    //   this.dialogVisible = true;
    // },
    // handleDownload(file) {
    //   console.log(file);
    // },
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

      .el-upload {
        width: 100%;
        margin-bottom: 30px;
      }

      .el-slider__runway {
        background: linear-gradient(
          270.1deg,
          rgba(227, 0, 0, 0.99) 10.15%,
          #66b345 69.1%
        );
      }
    }

    .el-tag .el-icon-close {
      right: unset;
      left: 0;
    }

    .el-select .el-tag {
      margin: unset;
      margin-right: 6px;
    }
  }

    .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #ff4040;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
}
</style>