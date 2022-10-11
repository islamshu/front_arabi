<template>
  <div class="ourServices">
    <appNavInner />
    <breadcrumb />

    <div class="page-content">
      <div class="container">
        <div class="content">
          <div class="LearnWithUs">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div class="OurServices-item">
                    <div class="img-box">
                      <img src="../assets/unsplash_zBTssriiFm0.png" alt="" />
                    </div>

                    <div class="item-body">
                      <div class="title d-flex justify-content-between">
                        <h5>كتاب تسويق رقمي</h5>
                        <span>كتاب</span>
                      </div>
                      <p>
                        كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية ايجاد فرصة
                        عمل به مدون فيه جميع خبراتي من خمس سنين
                      </p>
                      <div class="bottom-card d-flex justify-content-between">
                        <span>سعر : <span>$145</span></span>
                        <span>
                          <span> 152</span> <i class="fa-solid fa-star"></i>
                          <span> 987 </span>
                          <i class="fa-solid fa-user-large"></i
                        ></span>
                      </div>

                      <div class="btn">
                        <router-link to="/OurServices/service" href="">شراء الخدمة </router-link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div class="OurServices-item">
                    <div class="img-box">
                      <img src="../assets/unsplash_zBTssriiFm0.png" alt="" />
                    </div>

                    <div class="item-body">
                      <div class="title d-flex justify-content-between">
                        <h5>كتاب تسويق رقمي</h5>
                        <span>كتاب</span>
                      </div>
                      <p>
                        كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية ايجاد فرصة
                        عمل به مدون فيه جميع خبراتي من خمس سنين
                      </p>
                      <div class="bottom-card d-flex justify-content-between">
                        <span>سعر : <span>$145</span></span>
                        <span>
                          <span> 152</span> <i class="fa-solid fa-star"></i>
                          <span> 987 </span>
                          <i class="fa-solid fa-user-large"></i
                        ></span>
                      </div>

                      <div class="btn">
                        <a href="">شراء الخدمة </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div class="OurServices-item">
                    <div class="img-box">
                      <img src="../assets/unsplash_zBTssriiFm0.png" alt="" />
                    </div>

                    <div class="item-body">
                      <div class="title d-flex justify-content-between">
                        <h5>كتاب تسويق رقمي</h5>
                        <span>كتاب</span>
                      </div>
                      <p>
                        كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية ايجاد فرصة
                        عمل به مدون فيه جميع خبراتي من خمس سنين
                      </p>
                      <div class="bottom-card d-flex justify-content-between">
                        <span>سعر : <span>$145</span></span>
                        <span>
                          <span> 152</span> <i class="fa-solid fa-star"></i>
                          <span> 987 </span>
                          <i class="fa-solid fa-user-large"></i
                        ></span>
                      </div>

                      <div class="btn">
                        <a href="">شراء الخدمة </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

                                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                  >
                  </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import appNavInner from "@/components/navComponentInner.vue";
import breadcrumb from "@/components/breadcrumb.vue";

export default {
  name: "ourServices",
  components: { appNavInner, breadcrumb },
};
</script>


<style lang="scss" scoped>
.ourServices {
  direction: rtl;
  font-family: "Cairo", sans-serif;

  .page-content {
    .sideBar {
      margin-top: 50px;
      form {
        .search {
          position: relative;
          input {
            background-color: #eee;
            border-radius: 3px;
            border: none;
            height: 45px;
          }

          .fa-magnifying-glass {
            position: absolute;
            left: 10px;
            top: 30%;
            color: #70d644;
          }
        }

        h3 {
          text-align: right;
          font-size: 18px;
          margin-top: 20px;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .reatItem {
          text-align: right;
          margin-bottom: 15px;
          input {
            margin-left: 8px;
          }

          span {
            font-size: 15px;
          }
        }
      }
    }
  }

  .content {
    .LearnWithUs {
      margin-top: 50px;

      .item {
        a {
          .img-cover {
            height: 250px;

            .video-img {
              width: 30px;
              height: 20px;
            }
          }
        }
      }
    }
  }


    .OurServices-item {
    border: 1px solid #c0c0c0;
    border-radius: 15px;
    direction: rtl;

    .img-box {
      width: 100%;
      height: 250px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .item-body {
      padding: 10px;

      .title {
        margin: 10px 0 10px 0;
        h5 {
          color: #302d2d;
          font-size: 18px;
          font-weight: 700;
        }

        span {
          color: white;
          background-color: #677a5f;
          border-radius: 6px;
          padding: 5px 8px;
        }
      }

      p {
        margin-bottom: 10px;
        text-align: right;
        color: black;
        font-weight: 500;
      }

      .bottom-card {
        span {
          margin-left: 6px;
        }
      }

      .btn {
        width: 100%;
        margin-top: 10px;
        a {
          background: linear-gradient(
            239.11deg,
            #70d644 -31.67%,
            #567a46 192.97%
          );
          border-radius: 8px;
          padding: 8px 20px;
          color: white;
          text-decoration: unset;
          display: inline-block;
          width: 100%;
          margin: auto;
        }
      }
    }
  }
  
}
</style>




