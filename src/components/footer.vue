<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="footer-col">
            <div class="">
              <a href="">
                 <i class="fa-solid fa-chevron-left"></i>
              <span>الرئيسية </span>
              </a>
            </div>

            <div class="">
              <a href="">
                 <i class="fa-solid fa-chevron-left"></i>
              <span>خدماتنا</span>
              </a>
            </div>

            <div class="">
              <a href="">
                <i class="fa-solid fa-chevron-left"></i>
              <span>المتجر</span>
              </a>
            </div>

            <div class="">
              <a href="">
                 <i class="fa-solid fa-chevron-left"></i>
              <span>المدونات </span>
              </a>
            </div>

            <div class="">
              <a href="">
                <i class="fa-solid fa-chevron-left"></i>
              <span>بودكاست</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="footer-col">
            <img src="../assets/siteLogo/logo.png" alt="" />
            <div class="soial">
              <a href=""><i class="fa-brands fa-twitter"></i></a>
              <a href=""><i class="fa-brands fa-facebook-f"></i></a>
              <a href=""><i class="fa-brands fa-youtube"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
            </div>

            <form action="">
              <div class="input">
                <input
                  class="form-control"
                  type="search"
                  placeholder="ادخل البريد الالكتروني "
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  تسجيل
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="footer-col">
            <div class="">
              <i class="fa-solid fa-location-dot"></i>
              <p>تفاصیل العنوان تفاصیل العنوان تفاصیل العنوان</p>
            </div>

            <div class="">
              <i class="fa-solid fa-phone"></i>
              <p>0096-55887799</p>
            </div>

            <div class="">
              <i class="fa-solid fa-envelope"></i>
              <p>www.arbimarketer.com</p>
            </div>
          </div>
        </div>
      </div>

      <div class="copyRight">
        <p>© 2020 by ROUND TABLE PIZZA A GLOBAL FRANCHISE GROUP® LLC COMPANY</p>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "footerSection",
};
</script>




<style lang="scss" scoped>
.footer {
  font-family: "Cairo", sans-serif;
  margin-top: 0px;
  padding: 30px;
  padding-top: 80px;
  padding-bottom: 10px;
  background: #27272e;
  color: white;
  direction: rtl;

  .footer-col {
    margin-bottom: 40px;

    div {
      margin-bottom: 10px;
      display: flex;
      span {
        font-weight: 700;
        font-size: 20px;
      }

      a{
        color: #fff;
        text-decoration: unset;
      }

      .fa-chevron-left {
        color: #70d644;
        margin-left: 10px;
      }

      p {
      }

      .fa-location-dot {
        font-size: 20px;
        margin-left: 10px;
      }

      .fa-phone {
        font-size: 20px;
        margin-left: 10px;
      }

      .fa-envelope {
        font-size: 20px;
        margin-left: 10px;
      }
    }

    .soial {
      margin-top: 15px;
      display: flex;
      justify-content: center;
      a {
        color: white;
        margin: 8px;
        .fa-twitter {
          font-size: 20px;
        }

        .fa-facebook-f {
          font-size: 20px;
        }

        .fa-youtube {
          font-size: 20px;
        }

        .fa-instagram {
          font-size: 20px;
        }
      }
    }

    form {
      display: flex;
      position: relative;
      justify-content: center;
      height: 50px;
      .input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        background-color: white;
        border-radius: 15px;
        width: 80%;
        direction: rtl;
        height: 100%;
      }

      input {
        height: 100%;
        border: none;
      }

      .form-control {
        &:focus {
          box-shadow: unset !important;
          border: none !important;
        }
      }

      button {
        // position: absolute;
        // right: 10px;
        // top: 0;
        background-color: #70d644;
        color: white;
        height: 100%;
        border: none;
        padding: 6px 26px;
        border-radius: 15px !important;
      }
    }
  }

  .copyRight {
    direction: ltr;
    text-align: left;
    border-top: 1px solid #70d644;
    padding-top: 8px;
    p {
      font-size: 18px;
      margin-bottom: 0;
    }
  }
}
</style>