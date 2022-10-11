<template>
  <div class="service">
    <appNavInner />
    <div class="contentPage">
      <div class="container">
        <div class="back"></div>
        <div class="row">
          <div class="col-lg-6">
            <div class="service-dec">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">الرئيسية</a></li>
                  <li class="breadcrumb-item"><a href="#">الخدمات</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    خدمة UI/UX
                  </li>
                </ol>
              </nav>
              <span>كتاب</span>
              <h3>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</h3>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم
                توليد هذا النص من مولد النص العربي
              </p>
            </div>

            <div class="content">
              <h3>الوصف</h3>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم
                توليد هذا النص من مولد النص العربي هذا النص هو مثال لنص يمكن أن
                يستبدل في نفس المساحة , لقد تم توليد هذا النص من مولد النص
                العربي هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد
                تم توليد هذا النص من مولد النص العربي
              </p>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم
                توليد هذا النص من مولد النص العربي هذا النص هو مثال لنص يمكن أن
                يستبدل في نفس المساحة , لقد تم توليد هذا النص من مولد النص
                العربي هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد
                تم توليد هذا النص من مولد النص العربي
              </p>
             <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم
                توليد هذا النص من مولد النص العربي هذا النص هو مثال لنص يمكن أن
                يستبدل في نفس المساحة , لقد تم توليد هذا النص من مولد النص
                العربي هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد
                تم توليد هذا النص من مولد النص العربي
              </p>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم
                توليد هذا النص من مولد النص العربي هذا النص هو مثال لنص يمكن أن
                يستبدل في نفس المساحة , لقد تم توليد هذا النص من مولد النص
                العربي هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد
                تم توليد هذا النص من مولد النص العربي
              </p>
            </div>
          </div>
          <div class="col-lg-6 d-flex justify-content-center">
            <div class="service-pay">
              <div class="img-ser">
                <img src="../assets/unsplash_zBTssriiFm0.png" alt="" />
              </div>
              <div class="priceLabel">
                <span class="price">150 <span>$</span></span>
                <span class="book">كتاب</span>
              </div>
              <div class="features">
                <div class="feature">
                  <i class="fa-solid fa-star"></i>
                  <span>هذا النص هو مثال لنص يمكن</span>
                </div>

                <div class="feature">
                  <i class="fa-solid fa-user-large"></i>
                  <span>هذا النص هو مثال لنص يمكن</span>
                </div>

                <div class="feature">
                  <i class="fa-regular fa-face-smile"></i>
                  <span>هذا النص هو مثال لنص يمكن</span>
                </div>

                <div class="feature">
                  <i class="fa-solid fa-check"></i>
                  <span>هذا النص هو مثال لنص يمكن</span>
                </div>

                <div class="feature">
                  <i class="fa-solid fa-infinity"></i>
                  <span>هذا النص هو مثال لنص يمكن</span>
                </div>
              </div>

              <a href="" class="btn">شراء الخدمة</a>

              <div class="ser-btns">
                <a href="" class="btn">صورة الخدمة</a>
                <a href="" class="btn">عرض الخدمة</a>
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

export default {
  components: {
    appNavInner,
  },
};
</script>



<style lang="scss" scoped>
.service {
  direction: rtl;
  font-family: "Cairo", sans-serif;

  .contentPage {
    color: white;
    position: relative;
    // height: 60vh;
    .back {
      height: 60vh;
      background: linear-gradient(239.11deg, #70d644 -31.67%, #567a46 109.9%);
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      z-index: -1;
    }
    .service-dec {
      text-align: right;
      padding-top: 50px;
      span {
        background-color: #677a5f;
        padding: 6px;
        border-radius: 4px;
        margin-bottom: 20px;
        display: inline-block;
      }

      h3 {
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 40px;
      }

      p {
        font-weight: 600;
        font-size: 18px;
      }
    }

    .service-pay {
      position: relative;
      top: 19%;
      width: 400px;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 15px;
      height: 615px;
      .img-ser {
        width: 100%;
        height: 240px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .priceLabel {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        .price {
          font-weight: 700;
          font-size: 28px;
          color: #000;
        }
        span {
        }

        .book {
          background-color: #677a5f;
          padding: 6px;
          border-radius: 4px;
          display: inline-block;
        }
      }

      .features {
        padding: 10px;
        text-align: right;
        color: black;
        margin-top: 15px;
        margin-bottom: 15px;
        .feature {
          margin-bottom: 6px;
          .fa-user-large,
          .fa-star,
          .fa-face-smile,
          .fa-check,
          .fa-infinity {
            margin-left: 10px;
          }

          span {
          }
        }
      }

      a {
        display: block;
        color: white;
        background: linear-gradient(
          239.11deg,
          #70d644 -31.67%,
          #567a46 192.97%
        );
        padding: 8px;
        margin: 1%;
      }

      .ser-btns {
        margin-top: 15px;

        a {
          display: inline-block;
          background: white;
          width: 48%;
          color: #70d644;
          border: 1px solid #70d644;
          margin: 0.5%;
        }
      }
    }
  }

  .content {
    margin-top: 140px;
    text-align: right;
    h3 {
      font-weight: 700;
      font-size: 20px;
      color: black;
      margin-bottom: 20px;
    }

    p {
      color: #666;
    }
  }

  .breadcrumb {
    .breadcrumb-item {
      font-size: 20px;
      color: white;
      font-weight: 700;
      a {
        color: white;
        text-decoration: none;
      }

      &::before {
        float: right;
        color: white;
        margin-left: 5px;
      }
    }
  }
}
</style>