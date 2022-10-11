<template>
  <div class="blog">
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
          <div class="col-lg-3">
            <div class="markerter-item">
              <div class="img-cover">
                <img src="../assets/back.png" alt="" />
                <img src="../assets/man.png" class="img-man" alt="" />
              </div>

              <div class="item-body">
                <h5>عبد الرحمن المشهراوي</h5>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                  <span>(4.9)</span>
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
          </div>

          <div class="col-lg-3">
            <div class="markerter-item">
              <div class="img-cover">
                <img src="../assets/back.png" alt="" />
                <img src="../assets/man.png" class="img-man" alt="" />
              </div>

              <div class="item-body">
                <h5>عبد الرحمن المشهراوي</h5>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                  <span>(4.9)</span>
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
          </div>

          <div class="col-lg-3">
            <div class="markerter-item">
              <div class="img-cover">
                <img src="../assets/back.png" alt="" />
                <img src="../assets/man.png" class="img-man" alt="" />
              </div>

              <div class="item-body">
                <h5>عبد الرحمن المشهراوي</h5>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                  <span>(4.9)</span>
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
          </div>

          <div class="col-lg-3">
            <div class="markerter-item">
              <div class="img-cover">
                <img src="../assets/back.png" alt="" />
                <img src="../assets/man.png" class="img-man" alt="" />
              </div>

              <div class="item-body">
                <h5>عبد الرحمن المشهراوي</h5>
                <div class="stars">
                  <i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                  <span>(4.9)</span>
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
          </div>
        </div>
                </div>
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
.blog {
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

  .markerter-item {
    position: relative;
    border: 1px solid #40d43f;
    padding: 10px;
    border-radius: 15px;
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
  }
    }
  }
}
</style>




