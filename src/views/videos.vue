<template>
  <div class="ourServices">
    <appNavInner />
    <breadcrumb />

    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="sideBar">
              <form action="">
                <div class="search">
                  <input
                    class="form-control"
                    type="search"
                    name=""
                    id=""
                    placeholder="ابحث عن الفيديو"
                  />
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <h3>التصنيف</h3>
                <div class="reatItem">
                  <input type="checkbox" name="" id="" />
                  <span>تصميم تجربة المستخدم</span>
                </div>

                <div class="reatItem">
                  <input type="checkbox" name="" id="" />
                  <span>تصميم تجربة المستخدم</span>
                </div>
                <div class="reatItem">
                  <input type="checkbox" name="" id="" />
                  <span>تصميم تجربة المستخدم</span>
                </div>
                <div class="reatItem">
                  <input type="checkbox" name="" id="" />
                  <span>تصميم تجربة المستخدم</span>
                </div>
                <div class="reatItem">
                  <input type="checkbox" name="" id="" />
                  <span>تصميم تجربة المستخدم</span>
                </div>
                <div class="reatItem">
                  <input type="checkbox" name="" id="" />
                  <span>تصميم تجربة المستخدم</span>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="content">
              <div class="LearnWithUs">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="item">
                        <a href="">
                          <div class="img-cover">
                            <img src="../assets/learn-img.png" alt="" />
                            <img src="../assets/learn-cover.png" alt="" />
                            <img
                              src="../assets/video.png"
                              class="video-img"
                              alt=""
                            />
                          </div>
                          <div class="item-body">
                            <p>التسويق بالفيديو على مواقع التواصل الاجتماعي</p>
                            <div class="auther">
                              <div class="img-box">
                                <img src="../assets/auther.png" alt="" />
                              </div>
                              <span>عبد الرحمن المشهراوي </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="item">
                        <a href="">
                          <div class="img-cover">
                            <img src="../assets/learn-img.png" alt="" />
                            <img src="../assets/learn-cover.png" alt="" />
                            <img
                              src="../assets/video.png"
                              class="video-img"
                              alt=""
                            />
                          </div>
                          <div class="item-body">
                            <p>التسويق بالفيديو على مواقع التواصل الاجتماعي</p>
                            <div class="auther">
                              <div class="img-box">
                                <img src="../assets/auther.png" alt="" />
                              </div>
                              <span>عبد الرحمن المشهراوي </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div class="item">
                        <a href="">
                          <div class="img-cover">
                            <img src="../assets/learn-img.png" alt="" />
                            <img src="../assets/learn-cover.png" alt="" />
                            <img
                              src="../assets/video.png"
                              class="video-img"
                              alt=""
                            />
                          </div>
                          <div class="item-body">
                            <p>التسويق بالفيديو على مواقع التواصل الاجتماعي</p>
                            <div class="auther">
                              <div class="img-box">
                                <img src="../assets/auther.png" alt="" />
                              </div>
                              <span>عبد الرحمن المشهراوي </span>
                            </div>
                          </div>
                        </a>
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
            color:#70d644;
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

          span{
            font-size: 15px;
          }
        }
      }
    }
  }

  .content{

    .LearnWithUs{
      margin-top: 50px;


      .item {

         a{

           .img-cover{
            height: 250px;

            .video-img{
              width: 30px;
              height: 20px;
            }
           }
         }
      }
    }
  }
}
</style>


<style lang="scss">
    .el-pagination {
      direction: ltr;
      margin-top: 40px;
      margin-bottom: 60px;
      .el-pager li,
      .btn-prev,
      .btn-next {
        color: white;
        border-radius: 50% !important;
        height: 40px !important;
        min-width: 40px !important;
        border: 1px solid #4ebb1f;
        background-color: white !important;
        line-height: 40px;
        color: #4ebb1f;
        font-weight: 700 !important;
        font-size: 15px;
      }

      .el-pager li:not(.disabled) {
        &:hover {
          color: #173b07 !important;
        }
      }

      .el-pager li:not(.disabled).active {
        background: linear-gradient(
          239.11deg,
          #70d644 -31.67%,
          #567a46 192.97%
        );
        color: white;
      }
    }
</style>




