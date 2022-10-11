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
                  <input class="form-control" type="search" name="" id="" placeholder="ابحث عن الفيديو" />
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <h3>التصنيف</h3>
                <div v-for="catg in catge" :key="catg.id" class="reatItem">
                  <input type="checkbox" name="" id="" />
                  <span>{{catg.title}}</span>
                </div>

                <!-- <div class="reatItem">
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
                </div> -->
              </form>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="content">
              <div class="LearnWithUs">
                <div class="container">
                  <div class="row">
                    <div v-for="item in list" :key="item.id" class="col-lg-4 col-md-6 col-sm-6 col-12">
                      <router-link to="/blog/blogItem">
                        <div class="atical-item">
                          <div class="img-box">
                            <img :src="item.image" alt="" />
                            <img src="../assets/img-overlay.png" alt="" />
                          </div>
                          <div class="item-body">
                            <p>{{item.description}}</p>
                            <span>
                              <span> {{item.user_info.name}} </span>
                              <i class="fa-solid fa-user ms-2"></i>
                              <span>2 تعليق</span><i class="fa-solid fa-message ms-2"></i>
                            </span>
                          </div>
                        </div>
                      </router-link>
                    </div>

                    <!-- <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div class="atical-item height-short">
                    <div class="img-box">
                      <img src="../assets/artical-img2.png" alt="" />
                      <img src="../assets/img-overlay.png" alt="" />
                    </div>
                    <div class="item-body">
                      <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                      <span>
                        <span>محمد عبد الكريم </span>
                        <i class="fa-solid fa-user ms-2"></i>
                        <span>2 تعليق</span
                        ><i class="fa-solid fa-message ms-2"></i>
                      </span>
                    </div>
                  </div>

                  <div class="atical-item height-short">
                    <div class="img-box">
                      <img src="../assets/artical-img2.png" alt="" />
                      <img src="../assets/img-overlay.png" alt="" />
                    </div>
                    <div class="item-body">
                      <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                      <span>
                        <span>محمد عبد الكريم </span>
                        <i class="fa-solid fa-user ms-2"></i>
                        <span>2 تعليق</span
                        ><i class="fa-solid fa-message ms-2"></i>
                      </span>
                    </div>
                  </div>
                </div> -->

                    <!-- <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <router-link to="/Consulting">
                    <div class="atical-item">
                    <div class="img-box">
                      <img src="../assets/artical-img.png" alt="" />
                      <img src="../assets/img-overlay.png" alt="" />
                    </div>
                    <div class="item-body">
                      <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                      <span>
                        <span>محمد عبد الكريم </span>
                        <i class="fa-solid fa-user ms-2"></i>
                        <span>2 تعليق</span
                        ><i class="fa-solid fa-message ms-2"></i>
                      </span>
                    </div>
                  </div>
                  </router-link>
                </div> -->
                  </div>
                </div>
                <div v-if="paginationInfo" class="el-pagination is-background" >
                  <ul class="el-pager">
                    <li v-for="(page, index) in pageLinks" :key="index" class="number" :class="{'active' : page.active}"
                    @click="updatePage(page)">
                      <button v-if="page.label === 'prev'" class="btn-prev" :disabled="!page.number">
                        <i class="el-icon el-icon-arrow-left"></i>
                      </button>
                      <button v-else-if="page.label === 'next'" class="btn-next" :disabled="!page.number">
                        <i class="el-icon el-icon-arrow-right"></i>
                      </button>
                      <span v-else>{{ page.label }}</span>
                    </li>
                  </ul>
                </div>
                  <!-- <el-pagination background layout="prev, pager, next" 
                  :page-size="pagination.per_page"  :total="67" prev-click="/blog?page=1"
                  :current-page="pagination.current_page" next-click="sddsf">
                  </el-pagination> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import appNavInner from "@/components/navComponentInner.vue";
import breadcrumb from "@/components/breadcrumb.vue";
export default {
  name: "ourServices",
  components: { appNavInner, breadcrumb },

  data() {
    return {
      list: undefined,
      catge: undefined,
      pagination: null
    }
  },
  computed: {
    paginationInfo() {
      if(!this.pagination) return null;

      return this.pagination;
    },
    pageLinks() {
      const p = this.pagination
      if(!p) return [];

      let links = JSON.parse(JSON.stringify(p.links));

      return links.map((link, i) => {
        link.number = link.url ? parseInt(link.url.split('=')[1]) : 0;

        if(i === 0) {
          link.label = 'prev';
        }
        if(i === (links.length - 1)) {
          link.label = 'next';
          if(p.current_page >= p.last_page) {
            link.number = 0;
          }
          else {
            link.number = p.current_page + 1;
          }
        }

        return link;
      });
    },
    currentPage() {
      if(!this.pagination) return 0;

      return this.pagination.current_page;
    },
    pageTotal() {
      const p = this.pagination
      if(!p) return 0;

      return p.last_page;
    }
  },
  methods: {
    getPosts(page = 1) {
      let url = `https://dashboard.arabicreators.com/api/get_all_blogs?page=${page}`;

      Vue.axios.get(url).then((res => {
        const response = res.data.data;
        this.list = response.data;
        this.pagination = response.meta;
      }));
    },
    updatePage(page) {
      if(page.number) {
        this.getPosts(page.number);
      }
    },

  },

  mounted() {
    this.getPosts();

    Vue.axios.get("https://dashboard.arabicreators.com/api/blog_category")
      .then((catge => {
        // console.log(catge)
        this.catge = catge.data.data
      }))
  },

};
</script>


<style lang="scss" scoped>

.el-pager {
  display: flex;
  justify-content: center;
}
.el-pagination .el-pager li {
  height: 40px !important;
  width: 40px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
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

      .atical-item {
        position: relative;
        width: 100%;
        height: 350px;
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
          }

          span {
            margin-left: 5px;
            font-size: 14px;
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
    background: linear-gradient(239.11deg,
        #70d644 -31.67%,
        #567a46 192.97%);
    color: white;
  }
}
</style>

