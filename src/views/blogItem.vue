<template>
  <div class="blogItem">
    <app-nav-inner />
    <div class="container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">الرئيسية </el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">المقالات </a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">UX UI</a></el-breadcrumb-item>
      </el-breadcrumb>
      <h2>ﻣﺒﺎدىء ﺗﺼﻤﻴﻢ ﺗﺠﺮﺑﺔ وواﺟﻬﺔ اﻟﻤﺴﺘﺨﺪم UI/UX</h2>

      <div class="row">
        <div class="col-lg-8">
          <div class="main-content">
            <div class="atical-item">
              <div class="img-box">
                <img src="../assets/blog-img.png" alt="" />
                <img src="../assets/img-overlay-2.png" alt="" />
              </div>
              <div class="item-body">
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة النص هو
                  مثال لنص يمكن أن يستبدل في نفس المساحةالنص هو مثال لنص يمكن أن
                  يستبدل في نفس المساحة
                </p>

              </div>
            </div>

            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>

            <div class="descripion">
              <h2>الوصف</h2>
              <p>
                ﺚﻴﺣ ًﺎﻴﻟﺎﺣ ﺔﻴﻤﻟﺎﻌﻟا تﺎﺼﺼﺨﺘﻟا ﻢﻫأ ﻦﻣ ﺺﺼﺨﺘﻟا اﺬﻫ ﺮﺒﺘﻌﻳ ﺔﺴﻣﺎﺨﻟا
                ةرﺎﻬﻤﻟﺎﺑ ناﺪﻜﻨﻴﻟ ﻲﻤﻟﺎﻌﻟا ﻒﻴﻇﻮﺘﻟا ﺔﻜﺒﺷ ﻪﻔﻴﻨﺼﺗ ﻢﺗ ﺐﻠﻄﻟا ﺎﻬﻴﻓ ﺮﺜﻜﻳ
                ﺔﻴﻤﻟﺎﻌﻟا ﻊﻗاﻮﻤﻟا ﻦﻣ ﺪﻳﺪﻌﻟا نا ﺎﻤﻛ ،ًﺎﻴﻤﻟﺎﻋ.مﺪﺨﺘﺴﻤﻟا ﺔﺑﺮﺠﺗ ﻢﻴﻤﺼﺘﺑ
                ﻖﻠﻌﺘﺗ ﻲﺘﻟا ﻒﺋﺎﻇﻮﻟا ﻊﻴﻤﺟ ﻰﻠﻋ ﻦﻣ ﺎﻬﻴﻓ أﺪﺒﻧ ﺔﻠﻣﺎﺷ ﺔﻠﺣر ﺮﺒﻋ ﺺﺼﺨﺘﻟا
                اﺬﻫ ﻲﻓ كﺬﺧﺄﻨﺳ،لوﺄﻟا ﺎﻨﻗﺎﺴﻣ ﻊﻣ ﻢﻠﻌﻟا اﺬﻫ تﺎﺤﻠﻄﺼﻣو تﺎﻴﺳﺎﺳﺄﺑ
                ﻒﻳﺮﻌﺘﻟاﺎﻣو ،أﺪﺑ ﻒﻴﻛو ،ﻢﻠﻌﻟا اﺬﻫ ﺦﻳرﺎﺗ ﻰﻠﻋ فﺮﻌﺘﻟﺎﺑ مﻮﻘﻨﺳ ﺚﻴﺣ
                ﺞﺘﻨﻤﻟ "مﺪﺨﺘﺴﻤﻟا ﺔﺑﺮﺠﺗ" سﺎﻴﻗ ﺎﻨﻨﻜﻤﻳ ﻒﻴﻛو ،ﻪﺗاودأ ﻲﻫ ﺔﻋﻮﻤﺠﻣ ﺎﻬﻧأ
                مأ ؟ﺞﻣاﺮﺒﻟﺎﺑ مأ مﺎﻗرﺄﻟﺎﺑ سﺎﻘﺗ ﻞﻫ ،ﻦﻴﻌﻣ ،ﺎﻨﺠﺘﻨﻤﻟ مﺪﺨﺘﺴﻤﻟا اﺬﻫ
                ماﺪﺨﺘﺳا ﻖﻓاﺮﺗ ﺮﻋﺎﺸﻣو ﺲﻴﺳﺎﺣأ ﺎﻬﺑ مﻮﻘﻧ ﻒﻴﻛو مﺪﺨﺘﺴﻤﻟا ﺔﺑﺮﺠﺗ ﻢﻴﻤﺼﺗ
                ﻞﺣاﺮﻣ ًﺎﻀﻳأ فﺮﻌﻨﺳ ﺔﺑﺮﺠﺗو UI ماﺪﺨﺘﺳﺎﻟا ﺔﻬﺟاو ﻦﻴﺑ قﺮﻔﻟا ﺎﻣو ،ةﻮﻄﺧ
                ةﻮﻄﺧ .......... UX، ماﺪﺨﺘﺳﺎﻟا
              </p>

              <p>
                ﺚﻴﺣ ًﺎﻴﻟﺎﺣ ﺔﻴﻤﻟﺎﻌﻟا تﺎﺼﺼﺨﺘﻟا ﻢﻫأ ﻦﻣ ﺺﺼﺨﺘﻟا اﺬﻫ ﺮﺒﺘﻌﻳ ﺔﺴﻣﺎﺨﻟا
                ةرﺎﻬﻤﻟﺎﺑ ناﺪﻜﻨﻴﻟ ﻲﻤﻟﺎﻌﻟا ﻒﻴﻇﻮﺘﻟا ﺔﻜﺒﺷ ﻪﻔﻴﻨﺼﺗ ﻢﺗ ﺐﻠﻄﻟا ﺎﻬﻴﻓ ﺮﺜﻜﻳ
                ﺔﻴﻤﻟﺎﻌﻟا ﻊﻗاﻮﻤﻟا ﻦﻣ ﺪﻳﺪﻌﻟا نا ﺎﻤﻛ ،ًﺎﻴﻤﻟﺎﻋ.مﺪﺨﺘﺴﻤﻟا ﺔﺑﺮﺠﺗ ﻢﻴﻤﺼﺘﺑ
                ﻖﻠﻌﺘﺗ ﻲﺘﻟا ﻒﺋﺎﻇﻮﻟا ﻊﻴﻤﺟ ﻰﻠﻋ ﻦﻣ ﺎﻬﻴﻓ أﺪﺒﻧ ﺔﻠﻣﺎﺷ ﺔﻠﺣر ﺮﺒﻋ ﺺﺼﺨﺘﻟا
                اﺬﻫ ﻲﻓ كﺬﺧﺄﻨﺳ،لوﺄﻟا ﺎﻨﻗﺎﺴﻣ ﻊﻣ ﻢﻠﻌﻟا اﺬﻫ تﺎﺤﻠﻄﺼﻣو تﺎﻴﺳﺎﺳﺄﺑ
                ﻒﻳﺮﻌﺘﻟاﺎﻣو ،أﺪﺑ ﻒﻴﻛو ،ﻢﻠﻌﻟا اﺬﻫ ﺦﻳرﺎﺗ ﻰﻠﻋ فﺮﻌﺘﻟﺎﺑ مﻮﻘﻨﺳ ﺚﻴﺣ
                ﺞﺘﻨﻤﻟ "مﺪﺨﺘﺴﻤﻟا ﺔﺑﺮﺠﺗ" سﺎﻴﻗ ﺎﻨﻨﻜﻤﻳ ﻒﻴﻛو ،ﻪﺗاودأ ﻲﻫ ﺔﻋﻮﻤﺠﻣ ﺎﻬﻧأ
                مأ ؟ﺞﻣاﺮﺒﻟﺎﺑ مأ مﺎﻗرﺄﻟﺎﺑ سﺎﻘﺗ ﻞﻫ ،ﻦﻴﻌﻣ ،ﺎﻨﺠﺘﻨﻤﻟ مﺪﺨﺘﺴﻤﻟا اﺬﻫ
                ماﺪﺨﺘﺳا ﻖﻓاﺮﺗ ﺮﻋﺎﺸﻣو ﺲﻴﺳﺎﺣأ ﺎﻬﺑ مﻮﻘﻧ ﻒﻴﻛو مﺪﺨﺘﺴﻤﻟا ﺔﺑﺮﺠﺗ ﻢﻴﻤﺼﺗ
                ﻞﺣاﺮﻣ ًﺎﻀﻳأ فﺮﻌﻨﺳ ﺔﺑﺮﺠﺗو UI ماﺪﺨﺘﺳﺎﻟا ﺔﻬﺟاو ﻦﻴﺑ قﺮﻔﻟا ﺎﻣو ،ةﻮﻄﺧ
                ةﻮﻄﺧ .......... UX، ماﺪﺨﺘﺳﺎﻟا
              </p>
            </div>

            <div class="comments">
              <el-form ref="form" :model="form" label-width="120px">
                <h3>التعليقات </h3>
                <ckeditor
                  :editor="editor"
                  v-model="editorData"
                  :config="editorConfig"
                >
                </ckeditor>

                <el-form-item>
                  <el-button type="primary" @click="onSubmit">أرسل</el-button>
                </el-form-item>
<!-- 
                <div class="allComments">
                  <p>asdasdasd <span>0</span></p>

                  <div class="sort">
                    <p>dasdasd:</p>
                    <el-select
                      v-model="no"
                      placeholder="please select your zone"
                    >
                      <el-option label="Zone one" value="shanghai"></el-option>
                      <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                  </div>
                </div> -->

                <el-divider></el-divider>
                <p>
                لا توجد تعليقات حتى الأن . لم لا تكن اول من يكتب تعليق ؟
                </p>
              </el-form>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sideBar">
            <div class="markerter-item">
              <div class="img-cover">
                <img src="../assets/back.png" alt="" />
                <img src="../assets/man.png" class="img-man" alt="" />
              </div>

              <div class="item-body">
                <h5>عبد الرحمن المشهراوي</h5>
                <div class="stars">
                  <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                  >
                  </el-rate>
                </div>
                <div class="info">
                  <div class="massege">
                    <i class="fa-regular fa-message"></i>
                  </div>

                  <div class="user">
                    <i class="fa-regular fa-user"></i>
                  </div>

                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="another-blogs">
              <h2>مقالات ذات صلة</h2>
              <div class="blog-item">
                <div class="row">
                  <div class="col-4">
                    <div class="img-item">
                      <img
                        src="../assets/unsplash_zBTssriiFm0.png"
                        class="img-man"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="txt">
                      <h3>حملات التسويق عبر البريد الالكتروني</h3>
                      <div class="info">
                        <div class="item">
                          <i class="fa-regular fa-message"></i
                          ><span> <span>2</span> تعليق</span>
                        </div>
                        <div class="item">
                          <i class="fa-solid fa-star"></i
                          ><span class="rate">(4.9)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="blog-item">
                <div class="row">
                  <div class="col-4">
                    <div class="img-item">
                      <img
                        src="../assets/unsplash_zBTssriiFm0.png"
                        class="img-man"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="txt">
                      <h3>حملات التسويق عبر البريد الالكتروني</h3>
                      <div class="info">
                        <div class="item">
                          <i class="fa-regular fa-message"></i
                          ><span> <span>2</span> تعليق</span>
                        </div>
                        <div class="item">
                          <i class="fa-solid fa-star"></i
                          ><span class="rate">(4.9)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="share-blog">
              <p>شارك المقال</p>
              <div class="soial">
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>

                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>

                <a href=""><i class="fa-brands fa-snapchat"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import appNavInner from "@/components/navComponentInner.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Vue from 'vue'   

export default {
  data() {
    return {
      value: 3.5,
      blog:undefined,
      link:undefined,
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },

  mounted(){



      // Vue.axios.get("https://dashboard.arabicreators.com/api/get_all_blogs")
      // .then((res=>{
      //   // console.log(res)
      //   this.link=res.data.data.data
      // }))


      Vue.axios.get("https://dashboard.arabicreators.com/api/single_blog")
      .then((res2=>{
        console.log(res2)
        this.blog=res2.data.data.data
      }))
  },

  components: {
    appNavInner,
  },

  methods(){

      

  }
};
</script>



<style lang="scss" scoped>
.blogItem {
  direction: rtl;
  font-family: "Cairo", sans-serif;
  h2 {
    text-align: right;
    font-size: 40px;
    color: #70d644;
    margin-bottom: 30px;
    font-weight: 600;
    position: relative;
  }

  .el-breadcrumb {
    display: flex;
    justify-content: start;
    margin-bottom: 15px;
    margin-top: 20px;

    .el-breadcrumb__item {
      font-size: 18px;
    }
  }

  .el-rate {
    text-align: start;
    margin-top: 15px;
    margin-bottom: 15px;
    direction: ltr;

    .el-rate__item {
      .el-rate__icon {
        font-size: 25px;
      }
    }
  }

  .atical-item {
    text-align: right;
    position: relative;
    width: 100%;
    height: 600px;
    margin: 10px;
    color: black;
    .img-box {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;

        &:first-child {
          z-index: 3;
        }

        &:last-child {
          z-index: 4;
        }
      }
    }

    .item-body {
      position: absolute;
      bottom: 0;
      z-index: 5;
      padding: 10px;
      p {
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 5px;
        color: white;
      }
    }
  }

  .descripion {
    h2 {
      text-align: right;
    }

    p {
      text-align: right;
    }
  }

  .markerter-item {
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 10px;
    border-radius: 15px;
    width: 70%;
    .img-cover {
      position: relative;
      top: 0;
      height: 200px;
      width: 100%;
      margin-bottom: 15px;

      img {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
      }

      .img-man {
        right: 10%;
        width: 75%;
      }
    }

    .item-body {
      h5 {
        font-weight: 700;
        margin-bottom: 15px;
      }

      .stars {
        margin-bottom: 15px;
        .fa-star {
          color: gold;
          margin-left: 6px;
        }
      }

      .info {
        display: flex;
        justify-content: center;
        align-items: center;

        div {
          color: white;
          background: linear-gradient(
            239.11deg,
            #70d644 -31.67%,
            #567a46 192.97%
          );
          border-radius: 2px;
          padding: 6px 16px;
          margin: 8px;
        }
      }
    }

    .el-rate {
      display: flex;
      justify-content: center;
    }
  }

  .another-blogs {
    background-color: #f8f8f8;
    padding: 10px;
    width: 70%;
    margin-top: 40px;
    border-radius: 15px;
    h2 {
      font-size: 16px;
      color: #535151;
    }
    .blog-item {
      width: 100%;
      padding: 8px;
      margin-bottom: 8px;
      box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
      .txt {
        h3 {
          text-align: right;
          font-size: 16px;
        }

        .info {
          display: flex;
          justify-content: start;
          .item {
            display: flex;
            span {
              font-size: 12px;
              margin-left: 4px;
            }

            .fa-message {
              margin-left: 5px;
              color: #70d644;
            }

            .fa-star {
              margin-left: 5px;
              color: gold;
            }

            .rate {
              color: gold;
            }
          }
        }
      }

      .img-item {
        width: 100%;
        height: 70px;
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .share-blog {
    padding: 10px;
    width: 70%;
    background-color: #f8f8f8;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    margin-top: 30px;
    border-radius: 15px;
    p {
      text-align: right;
      font-weight: 600;
      font-size: 18px;
      margin-top: 10px;
      display: block;
    }

    .soial {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      margin-bottom: 20px;
      a {
        margin-left: 6px;

        .fa-facebook-f,
        .fa-twitter,
        .fa-instagram,
        .fa-snapchat {
          font-size: 25px;
          color: #70d644;
        }
      }
    }
  }

  .comments {
    background-color: #f8f8f8;
    border-radius: 5px;
    padding: 15px;

    .el-form-item {
      .el-form-item__content {
        margin-left: unset !important;
      }
    }
    .el-button {
      width: 100%;
      background: linear-gradient(239.11deg, #70d644 -31.67%, #567a46 192.97%);
      height: 50px;
      margin: 30px auto;
    }

    .allComments {
        display: flex;

        .sort{
          display: flex;
        }
    }


  }
}
</style>


<style lang="scss">
    .el-form-item__content{
      margin-left: 0 !important;
    }
</style>