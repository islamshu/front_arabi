<template>
  <div class="advisorProfile">
    <appNavInner />

    <div class="pageContent">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="profile">
              <el-badge :value="0" class="">
                <div class="img-profile">
                  <img src="../assets/cons-man.png" alt="" />
                </div>
              </el-badge>
              <h2>Mohammed Mohammed</h2>
              <el-divider></el-divider>

              <a href="">تعديل الملف الشخصي </a>
            </div>

            <div class="accoutStatus">
              <p>حالة الحساب : <span>مفعل</span></p>
            </div>

            <div class="whoIam">
              <h2>من أنا !</h2>
              <p>
                أسلوب تسويقي قائم على التواصل مع العملاء الحاليين والمحتملين
                بواسطة قنوات المحتوى الرقمي والإنترنت، مثل محركات البحث والوسائط
                الاجتماعية والبريد الإلكتروني والمواقع الإلكترونية أسلوب تسويقي
                قائم على التواصل مع العملاء الحاليين والمحتملين بواسطة قنوات
                المحتوى الرقمي والإنترنت، مثل محركات البحث والوسائط الاجتماعية
                والبريد الإلكتروني والمواقع الإلكترونية أسلوب تسويقي قائم على
                التواصل مع العملاء الحاليين والمحتملين بواسطة قنوات المحتوى
                الرقمي والإنترنت، مثل محركات البحث.
              </p>

              <el-button type="info" icon="el-icon-edit"
                >تعديل السيرة الذاتية</el-button
              >
            </div>

            <div class="myReats">
              <div class="myReat">
                <span>تقييماتي</span>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>

              <div class="reatItem">
                <span>معدل الإستشارات</span>
                <el-button type="info">لم يحسب بعد</el-button>
              </div>

              <div class="reatItem">
                <span>معدل الإستشارات</span>
                <el-button type="info">لم يحسب بعد</el-button>
              </div>

              <div class="reatItem">
                <span>معدل الإستشارات</span>
                <el-button type="info">لم يحسب بعد</el-button>
              </div>

              <div class="reatItem">
                <span>مجموع المقالات </span>
                <el-button class="num" type="info">15</el-button>
              </div>
              <div class="reatItem">
                <span>مجموع المقالات </span>
                <el-button class="num" type="info">15</el-button>
              </div>

              <div class="reatItem">
                <span>مجموع المقالات </span>
                <el-button class="num" type="info">15</el-button>
              </div>
            </div>

            <div class="myServices">
              <h2>خدماتي</h2>
              <span>15</span>
              <el-divider></el-divider>

              <el-link icon="el-icon-plus" type="success">اضافة خدمة</el-link>
            </div>

            <div class="soial">
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-twitter"></i></a>
              <a href=""><i class="fa-brands fa-facebook-f"></i></a>
              <a href=""><i class="fa-brands fa-pinterest"></i></a>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="balance-info">
              <div class="row">
                <div class="balance">
                  <div class="col-lg-6">
                    <div class="allbalance">
                      <h3>الرصيد الكلي</h3>
                      <p>sar <span>4000</span></p>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="WithdrawBalance">
                      <h3>الرصيد القابل لسحب</h3>
                      <p>sar <span>4000</span></p>
                    </div>
                  </div>
                </div>

                <el-divider></el-divider>

                <div class="row">
                  <div class="col-lg-6">
                    <div class="avilableBalance">
                      <p>الرصيد المتاح <span>sar</span> <span>4000</span></p>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="bandBalance">
                      <p>الرصيد المعلق <span>sar</span><span>0</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="search">
              <el-input placeholder="ابحث عن خدمتك " v-model="input1">
                <template slot="prepend"
                  ><i class="fa-solid fa-magnifying-glass"></i
                ></template>
                <template slot="prefix"
                  ><i class="fa-solid fa-filter"></i
                ></template>
              </el-input>
            </div>

            <div class="tabs">
              <el-tabs
                stretch="true"
                v-model="activeName"
                @tab-click="handleClick"
              >
                <el-tab-pane label="الفيديوهات" name="five">
                  <div class="videos">
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="col-lg-6">
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
                                <p>
                                  التسويق بالفيديو على مواقع التواصل الاجتماعي
                                </p>
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

                        <div class="col-lg-6">
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
                                <p>
                                  التسويق بالفيديو على مواقع التواصل الاجتماعي
                                </p>
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

                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                  >
                  </el-pagination>
                </el-tab-pane>
                <el-tab-pane label="البودكاست" name="fourth">
                  <div class="podcasts">
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="col-lg-6">
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
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                المساحة , لقد تم توليد
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
                        </div>

                        <div class="col-lg-6">
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
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                المساحة , لقد تم توليد
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
                        </div>

                        <div class="col-lg-6">
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
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                المساحة , لقد تم توليد
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
                        </div>

                        <div class="col-lg-6">
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
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                المساحة , لقد تم توليد
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
                </el-tab-pane>
                <el-tab-pane label="المقالات" name="third">
                  <div class="blog">
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="col-lg-6">
                          <div class="atical-item">
                            <div class="img-box">
                              <img src="../assets/artical-img.png" alt="" />
                              <img src="../assets/img-overlay.png" alt="" />
                            </div>
                            <div class="item-body">
                              <p>
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                المساحة
                              </p>
                              <span>
                                <span>محمد عبد الكريم </span>
                                <i class="fa-solid fa-user ms-2"></i>
                                <span>2 تعليق</span
                                ><i class="fa-solid fa-message ms-2"></i>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="atical-item">
                            <div class="img-box">
                              <img src="../assets/artical-img.png" alt="" />
                              <img src="../assets/img-overlay.png" alt="" />
                            </div>
                            <div class="item-body">
                              <p>
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                المساحة
                              </p>
                              <span>
                                <span>محمد عبد الكريم </span>
                                <i class="fa-solid fa-user ms-2"></i>
                                <span>2 تعليق</span
                                ><i class="fa-solid fa-message ms-2"></i>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="atical-item">
                            <div class="img-box">
                              <img src="../assets/artical-img.png" alt="" />
                              <img src="../assets/img-overlay.png" alt="" />
                            </div>
                            <div class="item-body">
                              <p>
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                المساحة
                              </p>
                              <span>
                                <span>محمد عبد الكريم </span>
                                <i class="fa-solid fa-user ms-2"></i>
                                <span>2 تعليق</span
                                ><i class="fa-solid fa-message ms-2"></i>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="atical-item">
                            <div class="img-box">
                              <img src="../assets/artical-img.png" alt="" />
                              <img src="../assets/img-overlay.png" alt="" />
                            </div>
                            <div class="item-body">
                              <p>
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                المساحة
                              </p>
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
                    </div>
                  </div>
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                  >
                  </el-pagination>
                </el-tab-pane>
                <el-tab-pane label="الاستشارات" name="second"
                  >

                        <div class="container">
        <div class="row">
          <div class="col-lg-6">
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

          <div class="col-lg-6">
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

          <div class="col-lg-6">
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

                    <div class="col-lg-6">
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

                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                  >
                  </el-pagination>
                </el-tab-pane>

                <el-tab-pane label="الخدمات" name="first">
                  <div class="services">
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="col-lg-6">
                          <div class="OurServices-item">
                            <div class="img-box">
                              <img
                                src="../assets/unsplash_zBTssriiFm0.png"
                                alt=""
                              />
                            </div>

                            <div class="item-body">
                              <div class="title d-flex justify-content-between">
                                <h5>كتاب تسويق رقمي</h5>
                                <span>كتاب</span>
                              </div>
                              <p>
                                كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية
                                ايجاد فرصة عمل به مدون فيه جميع خبراتي من خمس
                                سنين
                              </p>
                              <div
                                class="
                                  bottom-card
                                  d-flex
                                  justify-content-between
                                "
                              >
                                <span>سعر : <span>$145</span></span>
                                <span>
                                  <span> 152</span>
                                  <i class="fa-solid fa-star"></i>
                                  <span> 987 </span>
                                  <i class="fa-solid fa-user-large"></i
                                ></span>
                              </div>

                              <div class="btn">
                                <router-link to="/OurServices/service" href=""
                                  >شراء الخدمة
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="OurServices-item">
                            <div class="img-box">
                              <img
                                src="../assets/unsplash_zBTssriiFm0.png"
                                alt=""
                              />
                            </div>

                            <div class="item-body">
                              <div class="title d-flex justify-content-between">
                                <h5>كتاب تسويق رقمي</h5>
                                <span>كتاب</span>
                              </div>
                              <p>
                                كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية
                                ايجاد فرصة عمل به مدون فيه جميع خبراتي من خمس
                                سنين
                              </p>
                              <div
                                class="
                                  bottom-card
                                  d-flex
                                  justify-content-between
                                "
                              >
                                <span>سعر : <span>$145</span></span>
                                <span>
                                  <span> 152</span>
                                  <i class="fa-solid fa-star"></i>
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

                        <div class="col-lg-6">
                          <div class="OurServices-item">
                            <div class="img-box">
                              <img
                                src="../assets/unsplash_zBTssriiFm0.png"
                                alt=""
                              />
                            </div>

                            <div class="item-body">
                              <div class="title d-flex justify-content-between">
                                <h5>كتاب تسويق رقمي</h5>
                                <span>كتاب</span>
                              </div>
                              <p>
                                كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية
                                ايجاد فرصة عمل به مدون فيه جميع خبراتي من خمس
                                سنين
                              </p>
                              <div
                                class="
                                  bottom-card
                                  d-flex
                                  justify-content-between
                                "
                              >
                                <span>سعر : <span>$145</span></span>
                                <span>
                                  <span> 152</span>
                                  <i class="fa-solid fa-star"></i>
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

                        <div class="col-lg-6">
                          <div class="OurServices-item">
                            <div class="img-box">
                              <img
                                src="../assets/unsplash_zBTssriiFm0.png"
                                alt=""
                              />
                            </div>

                            <div class="item-body">
                              <div class="title d-flex justify-content-between">
                                <h5>كتاب تسويق رقمي</h5>
                                <span>كتاب</span>
                              </div>
                              <p>
                                كتاب يشرح أساليب وطرق التسويق الرقمي وكيفية
                                ايجاد فرصة عمل به مدون فيه جميع خبراتي من خمس
                                سنين
                              </p>
                              <div
                                class="
                                  bottom-card
                                  d-flex
                                  justify-content-between
                                "
                              >
                                <span>سعر : <span>$145</span></span>
                                <span>
                                  <span> 152</span>
                                  <i class="fa-solid fa-star"></i>
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
                    </div>
                  </div>
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                  >
                  </el-pagination>
                </el-tab-pane>
              </el-tabs>
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

  data() {
    return {
      input1: "",
      icon: <i class="fa-solid fa-filter"></i>,
      value: 3.7,
      activeName: "first",
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
.advisorProfile {
  font-family: "Cairo", sans-serif;
  direction: rtl;
  background-color: #f0efef;

  .pageContent {
    margin-top: 30px;
    padding-bottom: 200px;
    .balance-info {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 15px;
      margin-bottom: 20px;
      background-color: white;
      padding-top: 40px;
    }
    .balance {
      display: flex;
      justify-content: center;

      .allbalance {
        h3 {
          color: #72d749;
          font-size: 18px;
          margin-bottom: 30px;
        }

        p {
          color: #72d749;
          font-size: 24px;
          text-transform: uppercase;
          font-weight: 700;

          span {
          }
        }
      }
    }

    .WithdrawBalance {
      h3 {
        font-size: 18px;
        margin-bottom: 30px;
      }

      p {
        font-size: 24px;
        text-transform: uppercase;
        font-weight: 700;
        span {
        }
      }
    }

    .avilableBalance {
      p {
        font-weight: 600;
        span {
          font-size: 20px;
          text-transform: uppercase;
          font-weight: 700;
          margin-right: 5px;
        }
      }
    }

    .bandBalance {
      p {
        font-weight: 600;

        span {
          font-size: 20px;
          text-transform: uppercase;
          font-weight: 700;
          margin-right: 5px;
        }
      }
    }

    .search {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-bottom: 20px;
      background-color: white;

      .el-input-group {
        direction: ltr;
        height: 56px;
        .el-input__prefix {
          top: 29%;
          left: 2%;
          color: #4ebb1f;

          .fa-filter {
            font-size: 22px;
          }
        }
      }

      .el-input__inner {
        text-align: right;
        height: 100%;
        border: none;
      }

      .el-input-group__append,
      .el-input-group__prepend {
        background: linear-gradient(
          239.11deg,
          #70d644 -31.67%,
          #567a46 192.97%
        ) !important;
        background-color: unset !important;
        color: white;
        border-radius: 0;
        width: 70px;
        font-size: 20px;
      }
    }

    // tabs
    .tabs {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 15px;
      margin-bottom: 20px;
      background-color: white;

      .el-tabs {
        direction: ltr;

        .el-tabs__item {
          font-weight: 700;
          font-size: 20px;
          color: #535151;
        }

        .el-tabs__item.is-active {
          color: #4ebb1f;
        }

        .el-tabs__active-bar {
          background-color: #4ebb1f;
        }
      }
    }

    .el-pagination {
      direction: ltr;
      margin-top: 40px;
      margin-bottom: 60px;
      .el-pager li,
      .btn-prev,
      .btn-next {
        color: white;
        border-radius: 50%;
        height: 40px;
        min-width: 40px;
        border: 1px solid #4ebb1f;
        background-color: white;
        line-height: 40px;
        color: #4ebb1f;
        font-weight: 700;
        font-size: 15px;
      }

      .el-pager li:not(.disabled) {
        &:hover {
          color: #173b07;
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

    .profile {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 15px;
      margin-bottom: 20px;
      background-color: white;

      .img-profile {
        margin-bottom: 15px;
        img {
        }
      }
      h2 {
        font-size: 24px;
        font-weight: 700;
        text-transform: capitalize;
        color: #222;
        margin-bottom: 15px;
      }
      a {
        text-transform: capitalize;
        font-size: 22px;
        color: #72d749;
        text-decoration: unset;
        font-weight: 600;
      }
    }

    .accoutStatus {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 15px;
      margin-bottom: 20px;
      text-align: right;
      background-color: white;

      p {
        font-weight: 600;
        margin-bottom: 0;
        span {
          color: #72d749;
        }
      }
    }

    .whoIam {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 15px;
      margin-bottom: 20px;
      text-align: right;
      background-color: white;

      h2 {
        font-weight: 700;
        margin-bottom: 25px;
        font-size: 22px;
      }

      p {
        margin-bottom: 40px;
        color: #7e7e7e;
        line-height: 2;
      }

      .el-button {
        background-color: #b6b6b6;
        border: none;
        padding: 15px 40px;
      }

      // btn
    }

    .myReats {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 15px;
      margin-bottom: 20px;
      background-color: white;

      .myReat {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        margin-top: 20px;

        span {
          font-weight: 700;
          color: #636363;
        }

        .el-rate {
          direction: ltr;
        }

        // rate

        .el-rate__icon {
          font-size: 25px;
        }
      }

      .reatItem {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        span {
          font-weight: 600;
          font-size: 18px;
        }

        .el-button {
          background-color: #b6b6b6;
          border: none;
          padding: 10px;
        }

        .num {
          color: white;
          background: linear-gradient(
            239.11deg,
            #70d644 -31.67%,
            #567a46 192.97%
          );
          border-radius: 4px;
          width: 95px;
        }

        //btn
      }
    }

    .el-badge__content {
      background-color: #4ebb1f;
      right: 28px;
    }

    .myServices {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 15px;
      margin-bottom: 20px;
      background-color: white;

      h2 {
        font-weight: 600;
        color: #3e3b3b;
        margin-bottom: 20px;
      }

      span {
        font-size: 24px;
        font-weight: 700;
      }

      .el-link {
        margin-bottom: 15px;
        font-weight: 600;
        font-size: 20px;
        text-decoration: none;
      }

      //link
    }

    .soial {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 15px;
      margin-bottom: 20px;
      background-color: white;

      a {
        border: 1px solid #b7b7b7;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin: 10px;
        padding: 10px;
        display: inline-block;
        .fa-facebook-f,
        .fa-pinterest,
        .fa-twitter,
        .fa-instagram {
          color: #3e3b3b;
          font-size: 26px;
        }
      }
    }
  }

  .OurServices-item {
    border: 1px solid #c0c0c0;
    border-radius: 15px;
    direction: rtl;
    margin-bottom: 20px;

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

  .atical-item {
    position: relative;
    width: 100%;
    height: 350px;
    margin: 10px;
    border-radius: 13px;
    overflow: hidden;
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

  .podcast-item {
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    margin: 6px;
    direction: rtl;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAAiCAYAAABGIRcbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArRSURBVHgB7VpLbl3HET11STOzmFmB3070gJBBZplmJjqSkCG1A3IJ2UDAoRwkgBAECAx4M16FR/Yr9+2uz6m+l5ZlSfTEDUG8n/5U1+fU6bpP8Cu0v3999Reo/GO9FpH+TNdr79AuVDXe5Qttz9cx7XLxF0pz6OgqYndrD4mxvX9/5WM01/Nl+PnU1jGrXDhrNydaf7FxXbhcqmwo5mwD+4Bsi8Sbvi3BE7aX/7s6np3JHUSfjSdDDe3etUPqTINFW/up6VlIy/a8K61rfH3U/rVbYdWQ8XJ86dDHx5h4qyhz9WubLGRi45tkbkQTiP2C554MqU9ilFf/v37WPOC+Sf9siELalth2j4HucKHY0U9FUwnQ6pWmIGWDYYSMZEdB6BtpEB/rThAaCx/BGD857+wrruAxU3GEuBprItaztdfXp4jw3ek/brt5ezz87uKzu+YtN91rVsFOKizo0D2q0j0AaGMBZ135w3Th2YYibhCxkBhWMDOHp5O+hKPG5gy5hvJMWUOhrYWJ3ClQI1rLHDvGQY7RiPB8rp8qUl6/PV5+d3F+qyfcibs/Zo9HKHsI6f+FeN4noY1fd2RQYejxORMO44kKB6hHjZjWlWCTplGAco+MnMWw43sw44/QG2bza6nGri3WkpRbN6D9Ya1FxuXFeTOG4nWb+XPDCKmYqWPv3evUfJd9ioE38Hg47WK7G1GREKS2BkMNhY9pKfKFSs4zGTovM/+EbSJItlGgRfJYUiiqxj40hkjPpe4poQv5iPD16r/Xt+3PfVvo81jUtmUrJeYHhXIF5Dxz/hjJ2zuqw0rmEdogZj9OQ2e+6lez4WkU5ahQWOwjjaGUE+h9timHzBHd53eC4JFtjvfBRnn59uq4iDy0mQ4IrxJLAblRzA7gSvQoAMhtdRJeKA9ZThHfRXWtqkyCD4oyC680gCpmXF+IAESwu1NYf0/q3UApehpNwigRZJ0WBgkusKbe4xcb5eW/r45y3nKGyDEBPJVJCVKKcodikYCqlFQTh0O5ATWlWzGO54Mcj/jXIUMrrFAsTQlXwMyr0GOAJqmyEpHIrQcdBob3h6NQ1KRhkYDw/kZZjYFzWRP40ZW9GCC4kgf/8aSnCE+fmFP29zyAiJ70MLun6KhsbTzr3UWRhnfPBjGzCSqE8pWENu01n1eqEU/2LgwT55RCpU3hGeXhPGzw2TDvEyk3b46Hz1Z62y49qYZHl8MT+oHV3HPyTI9P2cCS433ifPIW9qzSCAIdVhDGRR4mE4CgRG9JjUmPQV4+U/UywtoyiAbRZ5JvP9piDQ5/YnnvNMrNw/Hy/PcXt23oyqr+EPMGxhs1da0ukfGk4vC6gco2tmUUTFjNsIJNX9pceCHDQEGaiQyMHhUCgdmTa8Lfi2AieMj+5IhuUmeJbNwCWRl18tPGOL9tPV+328tUCCmWFC5C9+CNDMMNvSn57A54lnvddsiV7MDosOhDcsPM2sSV0vXmcCnsWBama5SblyFO3giJGXIRp3FdiN7DlJ/MEKkHpLHDbBN52KjB26v/XLeo0Pv2+hLMnIiCcikkvGuQGsNJhjehc0TxloK5IfNSWWQdm3L4+tt8xVsjSIKbVEuEgU/07MXq0QXUKsE2EkrjioBMahY+0iCjJX2pTvnyzdVRz+ShvTwYX87Fc0FSIKRkjEDfgWe0+aSmjB6SHJ/wH3zgzD4gPAZVAgRzLYlJx1BOXqdi0xnIqxEaE4enPO3P7GzSSxhPXe9SlT98yPQ6J8ukSoOcmDHuWscjK6w02sAO8wklOPPaN6QzH6nnDtAJZar4BjS47GQ8sJo6GAsXJYNMsPEhG1Ojlv6Hl1VH8uWlOiW6cxDTNIeKSMt8FnkvnI0NDNaVyouvrh+wMqpcSDIBKrtFRYUykRtjw02Kh+IRQ3tyDx+d+g7avchpVDNlj509lqDnqGCZsshJa82GCYtpcYrIOa5IV7OUdwSLw6gc1b6ihX4oePnnX7/5st1/2UT5tsujSK5vKpN0vvDRvqYOwXFyRgUScqd5/+hmU6rpVAfwW7RE/563lM4gkCKLsaFx308rI9o8YUM15O2j1KNvKLi/VqvJ2TO7lv7liSRW14+mDiyv6smOZSc1SdS1PXqZMWO8OgirU3VLLKyzv725vml/2im95ZQuAyd2M6hNx2eMmTZmpSmja8PIwt3rKxiBiMhz8gCUCizdgyOD4GwnQrtgzmOFyUOBODCg+jutsBcrCb0narvFhTGm0mipr8XkntrNmz8fluX7583772VBwWjfoMEFIWPAAJ/OUTeLzSak8GNsinRsXJvTfE8LeYJDyiLjUF92OuVAMpDS+YLIhsM4OCf0281ccdyNvSQh6CM0NBZ7zgzVx1tw+IFVJqTdGOdMfrhrPZ6PwPByilFh5Plkd5ZilOnQRs93841sPFjNTHmCnupVRcHzeFo9QAuWH/aICyhShhOgJrrE/4h0Otmn2kPqtExGCpgE+Oyb8Nk3zvFwhov7NtlzsFziB4qTMtSYe8lcRlE68Mni+HUitH7MRfIMxGk9JJk8udThwFTbiYhGwo13strax80whQoVY6VxvRRkKMqXMCYbUiboUbJAhMy7jeKtG0fOH9o0z2YF0hZ03gNtJp3A2d2SLG8PYiJN0hru/lQ+Z0y3vlN8mCIDyN1RzHE2vwFw1cb6ikDavdJPjRyATvfgzxLmTyp+8Eb9cYeIbhL9z2mdDEj/zHt4FLZ8s0BgOp8ZfOvgfaRyYZ6WNTUw1JmCwhFKlYAqr4PpwNCcMMXRsCh0k9hjSFqlRNpU3WCK4caPnJPVAeS5wX0mI9JWeX+jeHvxrz89b0vei5y+CDdxQcMgU3SacgdcLFkvKhsQZQ+qiRO0GRqnmUeE1sK0NvIj3IBDLfhPMJRl7zyrTARgmaKAoLV4/yyD5xEjNUrPMOvslzaPnJYmDooKmYMECMqPI1x2QxKPgFIu0TRG19syXHfzmYCibNwno6Oz2FYxrmDz3pyswmj5iplzh8I3ZSGf2wTLvXE8Z/SUuembzwcbZW0rUzvH9zdtj3f0Nc4+vM4n39zQnEd2v82QIUs+cOIQWSaNI7KfL8LwNsOeWzrbA9eCZGKPBMlDAhF1Fpbr7H4uSIhGRJ5QxtS9c8qHtE6j8cM9VhodRGMrlAm0JcrlOnxrQ28dm6ncoQlcruxaH+P5uQRjj81uWcBkOT0HaHj3yF+R4ONTQI2sXDZzoUkwDNLHZnnGZfmoRvEWZ5zxlZJ4+VSQ3KmYzjlkG/qeRy1Bl2gg7y9OARRlWU4Q/sa/d/AFk29N7Pc5WMi4jswClBpXRCHc+KdShSho8umaGecB9j2/JnVJ8JjpO/ctnl/gjqDQFVsNUOeZ14czoZQB9cBdElMt/W8gap1wmaPMd1Ar3yS7pLMpR+sTNCcDTfgvys+F4PjP9a1gXUr8ecdgVObJckdV1tqYJSE9PyLQ+owKpmRETz++1KkSvh8NnCsScoFqGET+sZ2aNwzZgScxirc44zSmFqBEUcPnDnnECLu5aqKgfkYI5kPDKdegQCBmD3ekzboWkDDqTKwYM6nGyFuRb+BxYTObMelDIExmqHyanPKu9uKrP94qltdt8QNkn4nNxolcU1xpy6A2xtxzPYKxIArMoMq5IRWdciEKiPEqZAvnMREVnL+idkhR2dc2MvG0YTK19YcZ+K3tth8BP9+7m13jK9kAAAAASUVORK5CYII=);
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


        .consult-item {
        direction: rtl;
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
          box-shadow: unset;
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
          box-shadow: unset;
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


  .footer {
    margin-top: 0;
  }
}
</style>
