<template>
  <div class="home">
    <appNav />

    <header>
      <div class="innerHeader">
        <div class="container">
          <h1>Arabi marketer</h1>
          <p>يضم جميع المسوقين العرب وويقدم جميع الخدمات في مجال التسويق</p>
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
      <div class="overlay"></div>
    </header>

    <div class="about text-center">
      <div class="container">
        <h2>عن الموقع</h2>
        <p>
          موقع الكتروني يجمع اشهر المسوقين العرب بجميع التخصصات مثل الoffline
          marketing و الoline و الcommunication و العلاقات العامة بالإضافة لمتجر
          به كل ما يحتاجه المسوقين من مقالات وثيمات جاهزة وكتب و خدمات أخرى قد
          يحتاجها المسوقين مثل التصوير و الonground activities
        </p>
      </div>
    </div>

    <div class="howToUse">
      <div class="container">
        <h2>ألية استخدم الموقع</h2>

        <div class="innerContent">
          <div class="line">
            <div class="item">
              <div class="item-content">
                <div class="img-item">
                  <img src="../assets/bx_log-in.png" alt="" />
                </div>
                <h4>إشترك</h4>
                <p>
                  ! سجل الدخول في الموقع والتحق بكوكبة من ألمع المسوقين العرب
                </p>
              </div>
              <span class="numActive">01</span>
            </div>

            <div class="item">
              <div class="item-content">
                <div class="img-item">
                  <img src="../assets/eos-icons_pull-request.png" alt="" />
                </div>
                <h4>إشترك</h4>
                <p>
                  ! سجل الدخول في الموقع والتحق بكوكبة من ألمع المسوقين العرب
                </p>
              </div>
              <span>02</span>
            </div>

            <div class="item">
              <span>03</span>

              <div class="item-content">
                <div class="img-item">
                  <img src="../assets/simple-icons_codereview.png" alt="" />
                </div>
                <h4>إشترك</h4>
                <p>
                  ! سجل الدخول في الموقع والتحق بكوكبة من ألمع المسوقين العرب
                </p>
              </div>
            </div>

            <div class="item">
              <span>04</span>
              <div class="item-content">
                <div class="img-item">
                  <img src="../assets/carbon_connection-receive.png" alt="" />
                </div>
                <h4>إشترك</h4>
                <p>
                  ! سجل الدخول في الموقع والتحق بكوكبة من ألمع المسوقين العرب
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fields">
      <div class="container">
        <h2>المجالات</h2>

        <carousel :autoplay="true" :items="6" :dots="false" :responsive="{0:{items:2,nav:false},700:{items:3,nav:false}  ,1000:{items:6,nav:true} }">
          <div class="item">
            <div class="img-item">
              <img src="../assets/fields/design.png" alt="" />
            </div>

            <h4>تصميم جرافيك</h4>
          </div>

          <div class="item">
            <div class="img-item">
              <img src="../assets/fields/design.png" alt="" />
            </div>

            <h4>تصميم جرافيك</h4>
          </div>

          <div class="item">
            <div class="img-item">
              <img src="../assets/fields/design.png" alt="" />
            </div>

            <h4>تصميم جرافيك</h4>
          </div>
          <div class="item">
            <div class="img-item">
              <img src="../assets/fields/design.png" alt="" />
            </div>

            <h4>تصميم جرافيك</h4>
          </div>
          <div class="item">
            <div class="img-item">
              <img src="../assets/fields/design.png" alt="" />
            </div>

            <h4>تصميم جرافيك</h4>
          </div>
          <div class="item">
            <div class="img-item">
              <img src="../assets/fields/design.png" alt="" />
            </div>

            <h4>تصميم جرافيك</h4>
          </div>

          <div class="item">
            <div class="img-item">
              <img src="../assets/fields/design.png" alt="" />
            </div>

            <h4>تصميم جرافيك</h4>
          </div>
          <div class="item">
            <div class="img-item">
              <img src="../assets/fields/design.png" alt="" />
            </div>

            <h4>تصميم جرافيك</h4>
          </div>
        </carousel>
      </div>
    </div>

    <div class="OurServices">
      <div class="container">
        <div class="heading d-flex justify-content-between mb-2">
          <h2>خدماتنا</h2>
          <a href="">عرض الكل </a>
        </div>

        <carousel :autoplay="true" :items="3" :nav="false" :responsive="{0:{items:1,nav:false},600:{items:2,nav:false}  ,1000:{items:3,nav:false} }">
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
                كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية ايجاد فرصة عمل به
                مدون فيه جميع خبراتي من خمس سنين
              </p>
              <div class="bottom-card d-flex justify-content-between">
                <span>سعر : <span>$145</span></span>
                <span>
                  <span> 152</span> <i class="fa-solid fa-star"></i>
                  <span> 987 </span> <i class="fa-solid fa-user-large"></i
                ></span>
              </div>

              <div class="btn">
                <a href="">شراء الخدمة </a>
              </div>
            </div>
          </div>

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
                كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية ايجاد فرصة عمل به
                مدون فيه جميع خبراتي من خمس سنين
              </p>
              <div class="bottom-card d-flex justify-content-between">
                <span>سعر : <span>$145</span></span>
                <span>
                  <span> 152</span> <i class="fa-solid fa-star"></i>
                  <span> 987 </span> <i class="fa-solid fa-user-large"></i
                ></span>
              </div>

              <div class="btn">
                <a href="">شراء الخدمة </a>
              </div>
            </div>
          </div>

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
                كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية ايجاد فرصة عمل به
                مدون فيه جميع خبراتي من خمس سنين
              </p>
              <div class="bottom-card d-flex justify-content-between">
                <span>سعر : <span>$145</span></span>
                <span>
                  <span> 152</span> <i class="fa-solid fa-star"></i>
                  <span> 987 </span> <i class="fa-solid fa-user-large"></i
                ></span>
              </div>

              <div class="btn">
                <a href="">شراء الخدمة </a>
              </div>
            </div>
          </div>

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
                كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية ايجاد فرصة عمل به
                مدون فيه جميع خبراتي من خمس سنين
              </p>
              <div class="bottom-card d-flex justify-content-between">
                <span>سعر : <span>$145</span></span>
                <span>
                  <span> 152</span> <i class="fa-solid fa-star"></i>
                  <span> 987 </span> <i class="fa-solid fa-user-large"></i
                ></span>
              </div>

              <div class="btn">
                <a href="">شراء الخدمة </a>
              </div>
            </div>
          </div>

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
                كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية ايجاد فرصة عمل به
                مدون فيه جميع خبراتي من خمس سنين
              </p>
              <div class="bottom-card d-flex justify-content-between">
                <span>سعر : <span>$145</span></span>
                <span>
                  <span> 152</span> <i class="fa-solid fa-star"></i>
                  <span> 987 </span> <i class="fa-solid fa-user-large"></i
                ></span>
              </div>

              <div class="btn">
                <a href="">شراء الخدمة </a>
              </div>
            </div>
          </div>

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
                كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية ايجاد فرصة عمل به
                مدون فيه جميع خبراتي من خمس سنين
              </p>
              <div class="bottom-card d-flex justify-content-between">
                <span>سعر : <span>$145</span></span>
                <span>
                  <span> 152</span> <i class="fa-solid fa-star"></i>
                  <span> 987 </span> <i class="fa-solid fa-user-large"></i
                ></span>
              </div>

              <div class="btn">
                <a href="">شراء الخدمة </a>
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </div>

    <div class="OurArticles">
      <div class="container">
        <h2>مقالاتنا</h2>
        <p class="p-top">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم توليد هذا
          النص من مولد النص العربي
        </p>

        <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true">
          <el-tab-pane label="المنتجات" name="first">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-3 col-md-6 col-sm-6 col-10">
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
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6 col-10">
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
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6 col-10">
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
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="التحول الرقمي " name="second">Config</el-tab-pane>
          <el-tab-pane label="الأدوات" name="third">Role</el-tab-pane>
          <el-tab-pane label="الترند " name="fourth">Task</el-tab-pane>
          <el-tab-pane label="بودكاست " name="five">Task</el-tab-pane>
          <el-tab-pane label="التسويق " name="sex">Task</el-tab-pane>
          <el-tab-pane label="ريادة الأعمال " name="seven">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-3 col-md-6 col-sm-6 col-10">
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
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6 col-10">
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
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6 col-10">
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
              </div>
            </div>
            <el-link
              icon="el-icon-d-arrow-right
" type="success"
              >عرض الكل </el-link
            >
          </el-tab-pane>
        </el-tabs>

        <!-- <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              ريادة الأعمال
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              التسويق
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              بودكاست
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              الترند
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              الأدوات
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              التحول الرقمي
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              المنتجات
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="container">
            <div
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <div class="row d-flex justify-content-center">
                <div class="col-lg-3">
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
                </div>

                <div class="col-lg-3">
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
                </div>

                <div class="col-lg-3">
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
                </div>
              </div>
              <a href=""> عرض الكل<i class="fa-solid fa-angles-right"></i></a>
            </div>
            <div
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              lkdsfjklsdfjldskfjsdf
            </div>
            <div
              class="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              lkdsfjklsdfjldskfjsdf
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="marketers">
      <div class="container">
        <h2>المسوقين</h2>
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم توليد هذا
          النص من مولد النص العربي
        </p>

        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4 col-sm-6 col-10">
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

          <div class="col-lg-3 col-md-4 col-sm-6 col-10">
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

          <div class="col-lg-3 col-md-4 col-sm-6 col-10">
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

          <div class="col-lg-3 col-md-4 col-sm-6 col-10">
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

        <router-link to="/marketers" class="btn m-auto mt-4">الكل</router-link>
      </div>
    </div>

    <div class="LearnWithUs">
      <div class="container">
        <div class="heading d-flex justify-content-between mb-2">
          <h2>تعلم معنا</h2>
          <router-link to="/videos" href="">عرض الكل </router-link>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4 col-sm-6 col-10">
            <div class="item">
              <a href="">
                <div class="img-cover">
                  <img src="../assets/learn-img.png" alt="" />
                  <img src="../assets/learn-cover.png" alt="" />
                  <img src="../assets/video.png" class="video-img" alt="" />
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

          <div class="col-lg-3 col-md-4 col-sm-6 col-10">
            <div class="item">
              <a href="">
                <div class="img-cover">
                  <img src="../assets/learn-img.png" alt="" />
                  <img src="../assets/learn-cover.png" alt="" />
                  <img src="../assets/video.png" class="video-img" alt="" />
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

          <div class="col-lg-3 col-md-4 col-sm-6 col-10">
            <div class="item">
              <a href="">
                <div class="img-cover">
                  <img src="../assets/learn-img.png" alt="" />
                  <img src="../assets/learn-cover.png" alt="" />
                  <img src="../assets/video.png" class="video-img" alt="" />
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

          <div class="col-lg-3 col-md-4 col-sm-6 col-10">
            <div class="item">
              <a href="">
                <div class="img-cover">
                  <img src="../assets/learn-img.png" alt="" />
                  <img src="../assets/learn-cover.png" alt="" />
                  <img src="../assets/video.png" class="video-img" alt="" />
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
    </div>

    <div class="JoinPodcast">
      <div class="row">
        <div class="col-lg-9">
          <carousel
            :autoplay="false"
            :items="4"
            :dots="false"
            class="podcast-part"
            :responsive="{0:{items:2,nav:false},700:{items:3,nav:false}  ,1000:{items:4,nav:true} }"
          >
            <div class="podcast-item">
              <div class="img-box">
                <img src="../assets/girlPodcast.png" alt="" />
                <div class="time">
                  <i class="fa-regular fa-clock ms-1"></i>
                  <span>25 <span>دقيقة</span></span>
                </div>
              </div>

              <div class="item-body">
                <h3>شُعاع ينيّر دِربك للحيِاة الجامعيّة</h3>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم
                  توليد
                </p>
              </div>
              <div class="item-bottom">
                <div class="icons">
                  <img src="../assets/apple.png" alt="" />
                  <img src="../assets/soundCloud.png" alt="" />
                  <img src="../assets/podcast.png" alt="" />
                </div>

                <div class="btn">
                  <a href="" class="">استمع</a>
                  <img src="../assets/run.png" alt="" />
                </div>
              </div>
            </div>

            <div class="podcast-item">
              <div class="img-box">
                <img src="../assets/girlPodcast.png" alt="" />
                <div class="time">
                  <i class="fa-regular fa-clock ms-1"></i>
                  <span>25 <span>دقيقة</span></span>
                </div>
              </div>

              <div class="item-body">
                <h3>شُعاع ينيّر دِربك للحيِاة الجامعيّة</h3>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم
                  توليد
                </p>
              </div>
              <div class="item-bottom">
                <div class="icons">
                  <img src="../assets/apple.png" alt="" />
                  <img src="../assets/soundCloud.png" alt="" />
                  <img src="../assets/podcast.png" alt="" />
                </div>

                <div class="btn">
                  <a href="" class="">استمع</a>
                  <img src="../assets/run.png" alt="" />
                </div>
              </div>
            </div>

            <div class="podcast-item">
              <div class="img-box">
                <img src="../assets/girlPodcast.png" alt="" />
                <div class="time">
                  <i class="fa-regular fa-clock ms-1"></i>
                  <span>25 <span>دقيقة</span></span>
                </div>
              </div>

              <div class="item-body">
                <h3>شُعاع ينيّر دِربك للحيِاة الجامعيّة</h3>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم
                  توليد
                </p>
              </div>
              <div class="item-bottom">
                <div class="icons">
                  <img src="../assets/apple.png" alt="" />
                  <img src="../assets/soundCloud.png" alt="" />
                  <img src="../assets/podcast.png" alt="" />
                </div>

                <div class="btn">
                  <a href="" class="">استمع</a>
                  <img src="../assets/run.png" alt="" />
                </div>
              </div>
            </div>

            <div class="podcast-item">
              <div class="img-box">
                <img src="../assets/girlPodcast.png" alt="" />
                <div class="time">
                  <i class="fa-regular fa-clock ms-1"></i>
                  <span>25 <span>دقيقة</span></span>
                </div>
              </div>

              <div class="item-body">
                <h3>شُعاع ينيّر دِربك للحيِاة الجامعيّة</h3>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم
                  توليد
                </p>
              </div>
              <div class="item-bottom">
                <div class="icons">
                  <img src="../assets/apple.png" alt="" />
                  <img src="../assets/soundCloud.png" alt="" />
                  <img src="../assets/podcast.png" alt="" />
                </div>

                <div class="btn">
                  <a href="" class="">استمع</a>
                  <img src="../assets/run.png" alt="" />
                </div>
              </div>
            </div>

            <div class="podcast-item">
              <div class="img-box">
                <img src="../assets/girlPodcast.png" alt="" />
                <div class="time">
                  <i class="fa-regular fa-clock ms-1"></i>
                  <span>25 <span>دقيقة</span></span>
                </div>
              </div>

              <div class="item-body">
                <h3>شُعاع ينيّر دِربك للحيِاة الجامعيّة</h3>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم
                  توليد
                </p>
              </div>
              <div class="item-bottom">
                <div class="icons">
                  <img src="../assets/apple.png" alt="" />
                  <img src="../assets/soundCloud.png" alt="" />
                  <img src="../assets/podcast.png" alt="" />
                </div>

                <div class="btn">
                  <a href="" class="">استمع</a>
                  <img src="../assets/run.png" alt="" />
                </div>
              </div>
            </div>

            <div class="podcast-item">
              <div class="img-box">
                <img src="../assets/girlPodcast.png" alt="" />
                <div class="time">
                  <i class="fa-regular fa-clock ms-1"></i>
                  <span>25 <span>دقيقة</span></span>
                </div>
              </div>

              <div class="item-body">
                <h3>شُعاع ينيّر دِربك للحيِاة الجامعيّة</h3>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم
                  توليد
                </p>
              </div>
              <div class="item-bottom">
                <div class="icons">
                  <img src="../assets/apple.png" alt="" />
                  <img src="../assets/soundCloud.png" alt="" />
                  <img src="../assets/podcast.png" alt="" />
                </div>

                <div class="btn">
                  <a href="" class="">استمع</a>
                  <img src="../assets/run.png" alt="" />
                </div>
              </div>
            </div>
          </carousel>
        </div>

        <div class="col-lg-3">
          <div class="text-part">
            <h2>انضم الى غندور بودكاست</h2>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة , لقد تم توليد
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="statistics">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6 col-sm-6 col-10">
            <div class="percentegeItem">
              <PercentageCircle
                :percent="55"
                :animate="true"
                size="huge"
                active-color="green"
                complete-color="blue"
              />
              <p>55+</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-10">
            <div class="percentegeItem">
              <PercentageCircle
                :percent="70"
                :animate="true"
                size="huge"
                active-color="green"
                complete-color="blue"
              />
              <p>70+</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-10">
            <div class="percentegeItem">
              <PercentageCircle
                :percent="88"
                :animate="true"
                size="huge"
                active-color="green"
                complete-color="blue"
              />
              <p>88+</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-10">
            <div class="percentegeItem">
              <PercentageCircle
                :percent="90"
                :animate="true"
                size="huge"
                active-color="green"
                complete-color="blue"
              />
              <p>90+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import carousel from "vue-owl-carousel";
import PercentageCircle from "vue-css-percentage-circle";
import footerSection from "@/components/footer.vue";
import appNav from "@/components/navComponent";

export default {
  name: "HomeView",
  components: { carousel, PercentageCircle, footerSection, appNav },
  data() {
    return {
      activeName: "seven",
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss">
.navbar {
  background-color: transparent !important;
}

header {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-image: url("../assets/headerimg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Cairo", sans-serif;

  .innerHeader {
    max-width: 70%;
    margin: auto;
    position: relative;
    z-index: 2;
    h1 {
      font-size: 60px;
      font-weight: 700;
      margin-bottom: 20px;
      color: white;
    }
    p {
      font-size: 40px;
      font-weight: 500;
      margin-bottom: 20px;
      color: white;
    }

    form {
      display: flex;
      position: relative;
      justify-content: center;
      height: 60px;
      .input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        background-color: white;
        border-radius: 15px;
        width: 60%;
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

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
    z-index: 1;
  }
}

.about {
  margin-top: 100px;
  margin-bottom: 100px;
  direction: rtl;
  font-family: "Cairo", sans-serif;

  h2 {
    font-size: 40px;
    color: #70d644;
    margin-bottom: 30px;
    font-weight: 700;
    position: relative;
    display: inline-block;

    &::before {
      content: "";
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAGCAYAAACIE681AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA8SURBVHgB7dIhDgAgEAPBO77X9/Z9oEjwCJKyoyortiXNwpds996vOjg/3P4YBYQgZsQgZsQgZsQgZsRYMlAJ7AqLy0MAAAAASUVORK5CYII=);
      width: 185px;
      height: 5px;
      right: 3%;
      position: absolute;
      bottom: -18px;
      background-size: contain;
    }
  }

  p {
    font-size: 22px;
    font-weight: 600;
    max-width: 75%;
    margin: auto;
    color: rgb(45, 44, 44);
    text-align: right;
    line-height: 38px;
  }
}

.howToUse {
  direction: rtl;
  font-family: "Cairo", sans-serif;
  background-color: #f2f2f2;
  padding: 30px;
  height: 800px;
  h2 {
    font-size: 40px;
    color: #302d2d;
    margin-bottom: 80px;
    font-weight: 700;
    position: relative;
    display: inline-block;

    &::before {
      content: "";
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAGCAYAAACIE681AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA8SURBVHgB7dIhDgAgEAPBO77X9/Z9oEjwCJKyoyortiXNwpds996vOjg/3P4YBYQgZsQgZsQgZsQgZsRYMlAJ7AqLy0MAAAAASUVORK5CYII=);
      width: 153px;
      height: 5px;
      position: absolute;
      bottom: -18px;
      right: 25%;
      background-size: contain;
    }
  }
  .innerContent {
    margin-top: 200px;
    margin-bottom: 300px;
    position: relative;

    .line {
      width: 100%;
      height: 3px;
      background-color: #70d644;
      display: flex;
      justify-content: space-between;
      position: relative;
      top: 100px;

      .item {
        position: absolute;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
        border: 1px solid #70d644;

        &:first-child {
          right: 1%;
          top: -270px;
          color: white;
          background: linear-gradient(
            239.11deg,
            #70d644 -31.67%,
            #567a46 192.97%
          );

          .item-content .img-item {
            background-color: white !important;
          }

          span {
            bottom: -60%;
          }
        }

        &:nth-child(2) {
          right: 46%;
          top: -270px;

          .item-content .img-item {
            background: linear-gradient(
              239.11deg,
              #70d644 -31.67%,
              #567a46 192.97%
            );
          }

          span {
            bottom: -60%;
          }
        }

        &:nth-child(3) {
          left: 46%;
          bottom: -270px;

          .item-content .img-item {
            background: linear-gradient(
              239.11deg,
              #70d644 -31.67%,
              #567a46 192.97%
            );
          }

          span {
            top: -65%;
          }
        }

        &:last-child {
          left: 1%;
          bottom: -270px;

          .item-content .img-item {
            background: linear-gradient(
              239.11deg,
              #70d644 -31.67%,
              #567a46 192.97%
            );
          }

          span {
            top: -65%;
          }
        }

        .item-content {
          .img-item {
            width: 65px;
            height: 65px;
            padding: 10px;
            border-radius: 50%;
            margin: 0 auto 20px;
            img {
              height: 100%;
              width: 100%;
            }
          }
        }

        span {
          position: absolute;
          right: 48%;
          padding: 10px;
          width: 50px;
          height: 50px;
          line-height: 30px;
          font-weight: 700;
          border-radius: 50%;
          background: #fff;
          display: inline-block;
          box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
            rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
          border: 1px solid #70d644;
          font-size: 20px;
          color: #70d644;
        }

        .numActive {
          background: linear-gradient(
            239.11deg,
            #70d644 -31.67%,
            #567a46 192.97%
          );
          color: white !important;
        }
      }
    }
  }
}

.fields {
  margin-top: 100px;
  margin-bottom: 100px;
  font-family: "Cairo", sans-serif;
  h2 {
    font-size: 40px;
    color: #302d2d;
    font-weight: 700;
    position: relative;
    text-align: right;

    &::before {
      content: "";
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAGCAYAAACIE681AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA8SURBVHgB7dIhDgAgEAPBO77X9/Z9oEjwCJKyoyortiXNwpds996vOjg/3P4YBYQgZsQgZsQgZsQgZsRYMlAJ7AqLy0MAAAAASUVORK5CYII=);
      width: 146px;
      height: 5px;
      position: absolute;
      bottom: -18px;
      right: 0%;
      background-size: contain;
    }
  }
  .item {
    width: 178px;
    height: 240px;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    margin-top: 40px;
    transition: all 0.5s;

    .img-item {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: 30px auto 20px;
      background-color: white;
      border: 1px solid #70d644;
      padding: 18px;
      transition: all 0.5s;
      box-sizing: content-box;
    }

    h4 {
      font-size: 21px;
      color: #70d644;
      font-weight: 700;
      margin-bottom: 20px;
    }

    &:hover {
      transform: scale(1.1);
      background-color: white;
      border: 1px solid #40d43f;

      &:hover .img-item {
        border-width: 8px;
      }
    }
  }

  .owl-theme {
    .owl-nav {
      position: absolute;
      top: -60px;

      .owl-prev {
        color: #40d43f;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid;
        height: 40px;
        line-height: 27px;
        font-weight: 700;
        background: unset !important;
      }

      .owl-next {
        color: #40d43f;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid;
        height: 40px;
        line-height: 27px;
        font-weight: 700;
        background: unset !important;
      }
    }
  }

  .owl-carousel {
    height: 300px;
    .owl-stage-outer {
      height: 100%;
      .owl-stage {
        height: 100%;
        .owl-item {
          height: 100%;
        }
      }
    }
  }
}

.OurServices {
  font-family: "Cairo", sans-serif;

  .heading {
    direction: rtl;
    margin: 20px;

    h2 {
      font-size: 40px;
      color: #302d2d;
      font-weight: 700;
      position: relative;

      &::before {
        content: "";
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAGCAYAAACIE681AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA8SURBVHgB7dIhDgAgEAPBO77X9/Z9oEjwCJKyoyortiXNwpds996vOjg/3P4YBYQgZsQgZsQgZsQgZsRYMlAJ7AqLy0MAAAAASUVORK5CYII=);
        width: 122px;
        height: 5px;
        background-size: contain;
        position: absolute;
        bottom: -11px;
        right: 1%;
      }
    }

    a {
      font-size: 20px;
      color: #9e9b9b;
      font-weight: 700;
      text-decoration: none;
      margin-top: 15px;
    }
  }

  .OurServices-item {
    border: 1px solid #c0c0c0;
    border-radius: 15px;
    margin: 15px;
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

  .owl-dots {
    .owl-dot {
      span {
        width: 15px;
        height: 15px;
        background-color: #40d43f !important;
        opacity: 0.5;
        margin: 3px;
      }
    }

    .active {
      span {
        background-color: #40d43f !important;
        width: 18px;
        height: 18px;
        opacity: 1;
        border-radius: 50%;
      }
    }
  }
}

.OurArticles {
  margin-top: 100px;
  font-family: "Cairo", sans-serif;
  direction: rtl;

  h2 {
    font-size: 40px;
    color: #302d2d;
    margin-bottom: 30px;
    font-weight: 700;
    position: relative;
    display: inline-block;
    &::before {
      content: "";
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAGCAYAAACIE681AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA8SURBVHgB7dIhDgAgEAPBO77X9/Z9oEjwCJKyoyortiXNwpds996vOjg/3P4YBYQgZsQgZsQgZsQgZsRYMlAJ7AqLy0MAAAAASUVORK5CYII=);
      width: 143px;
      height: 5px;
      position: absolute;
      bottom: -18px;
      background-size: contain;
    }
  }

  .p-top {
    margin-bottom: 40px;
  }

  .nav-tabs {
    justify-content: center;
    margin-bottom: 20px;
    border: none;
    .nav-item {
      .nav-link {
        color: black;
        font-weight: 700;
        border: none;

        &:hover {
          border: none;
          border-bottom: 3px solid #40d43f;
          color: #40d43f;
        }
      }

      .active {
        border: none;
        border-bottom: 3px solid #40d43f;
        color: #40d43f;
      }
    }
  }

  .tab-content {
    .tab-pane {
      .atical-item {
        position: relative;
        width: 100%;
        height: 400px;
        margin: 10px;
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

      .height-short {
        height: 195px !important;
      }
    }

    a {
      text-align: left;
      display: block;
      margin-left: 176px;
      text-decoration: none;
      color: #40d43f;
    }
  }
}

.marketers {
  margin-top: 100px;
  font-family: "Cairo", sans-serif;
  direction: rtl;

  h2 {
    font-size: 40px;
    color: #302d2d;
    margin-bottom: 30px;
    font-weight: 700;
    position: relative;
    display: inline-block;

    &::before {
      content: "";
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAGCAYAAACIE681AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA8SURBVHgB7dIhDgAgEAPBO77X9/Z9oEjwCJKyoyortiXNwpds996vOjg/3P4YBYQgZsQgZsQgZsQgZsRYMlAJ7AqLy0MAAAAASUVORK5CYII=);
      width: 143px;
      height: 5px;
      position: absolute;
      bottom: -18px;
      background-size: contain;
    }
  }

  p {
    margin-bottom: 40px;
  }

  a {
    border: 2px solid #40d43f;
    padding: 2px 26px;
    font-weight: 700;
    font-size: 20px;
    color: #40d43f;
  }

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

.LearnWithUs {
  font-family: "Cairo", sans-serif;
  direction: rtl;
  margin-bottom: 50px;
  margin-top: 100px;

  .heading {
    direction: rtl;
    margin: 20px;
    margin-bottom: 50px !important;

    h2 {
      font-size: 40px;
      color: #302d2d;
      font-weight: 700;
      position: relative;

      &::before {
        content: "";
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAGCAYAAACIE681AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA8SURBVHgB7dIhDgAgEAPBO77X9/Z9oEjwCJKyoyortiXNwpds996vOjg/3P4YBYQgZsQgZsQgZsQgZsRYMlAJ7AqLy0MAAAAASUVORK5CYII=);
        width: 122px;
        height: 5px;
        background-size: contain;
        position: absolute;
        bottom: -11px;
        right: 1%;
      }
    }

    a {
      font-size: 20px;
      color: #9e9b9b;
      font-weight: 700;
      text-decoration: none;
      margin-top: 15px;
    }
  }

  .item {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    a {
      text-decoration: none;
      color: black;

      .img-cover {
        width: 100%;
        height: 300px;
        position: relative;
        img {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
        }

        .video-img {
          top: 20px;
          right: 15px;
          width: 40px;
          height: 30px;
        }
      }

      .item-body {
        padding: 15px;
        background-color: #f2f2f2a2;
        p {
          font-weight: 600;
        }

        .auther {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #302d2d4c;
          padding-top: 10px;

          .img-box {
            width: 30px;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
            }
          }

          span {
          }
        }
      }
    }
  }
}

.JoinPodcast {
  font-family: "Cairo", sans-serif;
  margin-bottom: 50px;
  margin-top: 100px;
  background: linear-gradient(180deg, #72d749 0%, #4b4b4b 100%);
  padding: 15px;
  position: relative;
  overflow: hidden;
  .text-part {
    color: white;
    margin-top: 100px;
    text-align: right;
    margin-right: 50px;
  }

  .podcast-part {
    margin-left: -30px;

    .podcast-item {
      background-color: white;
      border-radius: 15px;
      overflow: hidden;
      margin: 6px;
      direction: rtl;
      .img-box {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
        .time {
          position: absolute;
          bottom: 10px;
          right: 0;
          background: url(data:image/png;base64,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);
          background-repeat: no-repeat;
          background-size: cover;
          width: 92px;
          height: 29px;
          opacity: 0.8;

          .fa-clock {
            color: white;
            font-size: 14px;
          }

          span {
            font-size: 10px;
            color: white;
          }
        }
      }

      .item-body {
        padding: 10px;
        h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        p {
          font-size: 15px;
        }
      }

      .item-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .icons {
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            margin: 8px;
          }
        }
        .btn {
          color: white;
          background: #72d749;
          border-radius: 15px;
          padding: 0;
          padding-right: 5px;
          margin: 8px;
          display: flex;
          align-items: center;
          a {
            text-decoration: none;
            color: white;
            margin-left: 5px;
          }
          img {
          }
        }
      }
    }
  }

  .owl-nav {
    position: absolute;
    right: -250px;
    top: 273px;

    .owl-prev {
      font-size: 14px;
      margin: 5px;
      padding: 4px 7px;
      display: inline-block;
      cursor: pointer;
      background: transparent;
      border: 2px solid;
      border-radius: 50%;
      height: 46px;
      width: 47px;
      line-height: 30px;
      text-transform: capitalize;

      // &::after {
      // margin-left: 0.25em;
      // font-size: 2em;
      // vertical-align: middle;
      // font-family: "Font Awesome 6 Free";
      // font-weight: 900;
      // content: "\f061";
      // opacity: 1;

      // }
    }

    .owl-next {
      font-size: 14px;
      margin: 5px;
      padding: 4px 7px;
      display: inline-block;
      cursor: pointer;
      background: transparent;
      border: 2px solid;
      border-radius: 50%;
      height: 46px;
      width: 47px;
      line-height: 32px;
      text-transform: capitalize;
    }
  }
}

.statistics {
  padding-top: 60px;
  padding-bottom: 100px;

  .percentegeItem {
    position: relative;
    span {
      display: none !important;
    }

    p {
      display: inline-block;
      position: absolute;
      top: calc(50% - 30px);
      font-size: 40px;
      font-weight: 700;
      color: #4db53c;
      right: calc(50% - 9px);
    }
  }
}

@media (max-width:557px){

  header{
    height: 70vh;
  }

  header .innerHeader{
    max-width: 100%;
  }

  header .innerHeader h1{
    font-size: 46px;
  }

  header .innerHeader p{
    font-size: 22px;
  }

  header .innerHeader form .input{
    width: 100%;
  }

  .about h2{
    font-size: 34px;
  }

  .about h2::before{
    width: 108px;
  }

  .fields .item{
    width: 220px;
  }

  .about p{
    font-size: 20px;
  }

  .howToUse{
    height: 1200px;
  }

  .howToUse h2{
    font-size: 34px;
  }

  .howToUse .innerContent .line .item{
    width: 100%;
  }

  .howToUse .innerContent .line{
   display: block;
   top: unset;
  }

  .howToUse .innerContent .line .item:first-child,.howToUse .innerContent .line .item:nth-child(2),.howToUse .innerContent .line .item:nth-child(3),.howToUse .innerContent .line .item:last-child{
    right: unset;
    top: unset;
    left: unset;
    bottom: unset;
    position: relative;
    margin-bottom: 15px;
  }

  .howToUse .innerContent{
    margin-top: 0;
  }

  .howToUse .innerContent .line .item span{
    display: none;
  }

  .OurArticles h2,.OurServices .heading h2{
    font-size: 34px;
  }

  .OurServices .OurServices-item{
    margin: 30px;
  }

  .marketers .markerter-item{
    margin-bottom: 20px;
  }

  .item{
    margin-bottom: 20px;
  }

  .JoinPodcast .text-part{
    margin-top: 50px;

  }

  .c100{
    margin: auto;
    margin-bottom: 20px;
  }

  .statistics .percentegeItem p{
    right: calc(41% - 0px);
  }
}


@media (max-width:986px){

  header{
    height: 80vh;
  }

  header .innerHeader{
    max-width: 100%;
  }

  header .innerHeader h1{
    font-size: 46px;
  }

  header .innerHeader p{
    font-size: 22px;
  }

  header .innerHeader form .input{
    width: 100%;
  }

  .about h2{
    font-size: 34px;
  }

  .about h2::before{
    width: 108px;
  }

  .fields .item{
    width: 160px;
  }

  .about p{
    font-size: 20px;
    max-width: 100%;
  }

  .howToUse{
    height: 1200px;
  }

  .howToUse h2{
    font-size: 34px;
  }

  .howToUse .innerContent .line .item{
    width: 100%;
  }

  .howToUse .innerContent .line{
   display: block;
   top: unset;
  }

  .howToUse .innerContent .line .item:first-child,.howToUse .innerContent .line .item:nth-child(2),.howToUse .innerContent .line .item:nth-child(3),.howToUse .innerContent .line .item:last-child{
    right: unset;
    top: unset;
    left: unset;
    bottom: unset;
    position: relative;
    margin-bottom: 15px;
  }

  .howToUse .innerContent{
    margin-top: 0;
  }

  .howToUse .innerContent .line .item span{
    display: none;
  }

  .OurArticles h2,.OurServices .heading h2{
    font-size: 34px;
  }

  .OurServices .OurServices-item{
    margin: 5px;
  }

  .marketers .markerter-item{
    margin-bottom: 20px;
  }

  .item{
    margin-bottom: 20px;
  }

  .JoinPodcast .text-part{
    margin-top: 50px;

  }

  .c100{
    margin: auto;
    margin-bottom: 20px;
  }

  .statistics .percentegeItem p{
    right: calc(34% - 0px);
  }

}


</style>


<style lang="scss">
.tabs {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 15px;
  margin-bottom: 20px;
  background-color: white;
}
.el-tabs {
  direction: ltr !important;
}

.el-tabs--card > .el-tabs__header .el-tabs__nav {
  padding: 10px;
}
.el-tabs__header {
  background-color: white;
  margin-bottom: 30px !important;
}

.el-tabs__item.is-active {
  border-radius: 10px;
  color: #40d43f !important;
}

.el-tabs__active-bar {
  background-color: #40d43f !important;
}

.el-tabs__item {
  font-size: 18px !important;
  font-weight: 700 !important;
  &:hover {
    color: unset !important;
  }
}

.el-tabs__nav-wrap::after {
  display: none;
}

.el-tabs--card > .el-tabs__header .el-tabs__item {
  border: unset !important;
}

.el-tab-pane {
  .atical-item {
    position: relative;
    width: 100%;
    height: 400px;
    margin: 10px;
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

  .height-short {
    height: 195px !important;
  }
}
</style>
