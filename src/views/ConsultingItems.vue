<template>
  <div class="consultingsItems">
    <appNav />
    <div class="pagehead">
      <div class="container">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">الرئيسية </el-breadcrumb-item>
          <el-breadcrumb-item
            ><a href="/">استشارات</a></el-breadcrumb-item
          >
        </el-breadcrumb>
        <div class="row">
          <div class="col-lg-6">
            <div class="headItem">
              <h3>بروفايل</h3>
              <h3>استشارات اخرى</h3>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="headItem justify-content-end">
              <el-button type="success" icon="el-icon-document-copy">
                رابط الصفحة
              </el-button>
              <el-button type="success" plain icon="el-icon-plus"
                >اضافة استشارة</el-button
              >
            </div>
          </div>
        </div>

        <el-divider></el-divider>
      </div>
    </div>

    <div class="pageContent">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="consult-item">
              <div class="itemHead">
                <el-checkbox v-model="checked"></el-checkbox>

                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-caret-bottom"></i>
                    <i class="el-icon-s-tools"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>

              <h3>كيفية التسويق لنفسك بكفاءة</h3>
              <p>
                لترقى بنفسك وتصقل مهاارتك الشخصية وتطور من نفسك أسعى لتغطية ذلك
                ..
              </p>
              <span>استشارة تسويقية </span>
              <div class="cons-marketing">
                <div class="item">
                  <img src="../assets/zoom.png" alt="" />
                  <span>zoom</span>
                </div>

                <p><span>30</span> دقيقة</p>
              </div>

              <el-divider></el-divider>

              <div class="copyLink">
                <div class="item">
                  <i class="el-icon-document-copy"></i>

                  <a href="">نسخ الرابط </a>
                </div>

                <div class="item">
                  <el-button type="success">مشاركة</el-button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="consult-item">
              <div class="itemHead">
                <el-checkbox v-model="checked"></el-checkbox>

                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-caret-bottom"></i>
                    <i class="el-icon-s-tools"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>

              <h3>كيفية التسويق لنفسك بكفاءة</h3>
              <p>
                لترقى بنفسك وتصقل مهاارتك الشخصية وتطور من نفسك أسعى لتغطية ذلك
                ..
              </p>
              <span>استشارة تسويقية </span>
              <div class="cons-marketing">
                <div class="item">
                  <img src="../assets/zoom.png" alt="" />
                  <span>zoom</span>
                </div>

                <p><span>30</span> دقيقة</p>
              </div>

              <el-divider></el-divider>

              <div class="copyLink">
                <div class="item">
                  <i class="el-icon-document-copy"></i>

                  <a href="">نسخ الرابط </a>
                </div>

                <div class="item">
                  <el-button type="success">مشاركة</el-button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="consult-item">
              <div class="itemHead">
                <el-checkbox v-model="checked"></el-checkbox>

                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-caret-bottom"></i>
                    <i class="el-icon-s-tools"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>

              <h3>كيفية التسويق لنفسك بكفاءة</h3>
              <p>
                لترقى بنفسك وتصقل مهاارتك الشخصية وتطور من نفسك أسعى لتغطية ذلك
                ..
              </p>
              <span>استشارة تسويقية </span>
              <div class="cons-marketing">
                <div class="item">
                  <img src="../assets/zoom.png" alt="" />
                  <span>zoom</span>
                </div>

                <p><span>30</span> دقيقة</p>
              </div>

              <el-divider></el-divider>

              <div class="copyLink">
                <div class="item">
                  <i class="el-icon-document-copy"></i>

                  <a href="">نسخ الرابط </a>
                </div>

                <div class="item">
                  <el-button type="success active">تفعيل</el-button>
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
import appNav from "@/components/navComponentInner.vue";

export default {
  components: {
    appNav,
  },
  data() {
    return {
      checked: false,
    };
  },
};
</script>



<style lang="scss" scoped>
.consultingsItems {
  font-family: "Cairo", sans-serif;
  direction: rtl;
  background-color: #f0efef;
  .pagehead {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .headItem {
      display: flex;
      h3 {
        margin-left: 10px;
        font-size: 18px;
        &:first-child {
          font-weight: 700;
        }
      }

      .el-button {
        margin-left: 10px;
      }
    }
  }

  .pageContent {
    padding-bottom: 100px;
    .consult-item {
      background-color: white;
      border-radius: 10px;
      margin: 10px;
      padding: 15px;
      border-top: #4acc12 solid 10px;
      text-align: right;
      margin-bottom: 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      .itemHead {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        .el-dropdown {
          .el-icon-s-tools {
            font-size: 20px;
          }
        }
      }

      h3 {
        margin-bottom: 10px;
        font-size: 22px;
      }

      p {
        color: rgb(159, 150, 150);
        margin-bottom: 15px;
      }

      span {
        font-weight: 600;
        margin-bottom: 8px;
      }

      .cons-marketing {
        display: flex;
        justify-content: start;
        margin-top: 10px;
        .item {
          margin-left: 20%;
          img {
            margin-left: 8px;
          }

          span {
          }
        }

        p {
          font-weight: 600;
          color: black;
          margin-bottom: 0;
          span {
            font-weight: 600;
          }
        }
      }

      .copyLink {
        display: flex;
        justify-content: space-between;
        .item {
          a {
            margin-right: 5px;
            color: black;
            text-decoration: unset;
          }

          .el-icon-document-copy {
          }

          .el-button {
            padding: 6px 15px;
          }
        }
      }
    }
  }
  .unActive {
    opacity: 0.5;
  }

  .active {
    opacity: 1;
  }

    .el-breadcrumb {
    display: flex;
    justify-content: start;
    margin-bottom: 80px;
    margin-top: 20px;

    .el-breadcrumb__item {
      font-size: 24px;
    }
  }
}
</style>