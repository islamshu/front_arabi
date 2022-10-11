

<template>
  <div class="createTicket">
    <navbar />
    <div class="container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">الرئيسية </el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">الدعم </a></el-breadcrumb-item>
        <el-breadcrumb-item>انشاء تذكرة</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="content">
        <h2>الدعم الفني</h2>
        <el-tabs :tab-position="tabPosition" style="height: 200px">
          <el-tab-pane>
            <span slot="label"
                            ><i class="el-icon-circle-plus-outline"></i> انشاء تذكرة</span

            >

            <div class="">
              <h3>معلومات التذكرة</h3>

              <div class="ticketInfo">
                <div class="ticketInfoCrad">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="name">
                        <h5>الاسم</h5>
                        <p>mohammed mohammed</p>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="email">
                        <h5>البريد الالكتروني</h5>
                        <p>mohammedmohammed@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="massage">
                <h2>نص الرسالة</h2>
                <div class="innerMassage">
                  <el-form
                    ref="form"
                    :model="form"
                    label-position="top"
                    label-width="120px"
                  >
                    <div class="textMassage">
                      <el-form-item label="موضوع التذكرة ">
                        <el-input v-model="form.name"></el-input>
                      </el-form-item>

                      <h2>نص الرسالة</h2>
                      <ckeditor
                        :editor="editor"
                        v-model="editorData"
                        :config="editorConfig"
                      ></ckeditor>
                    </div>

                    <h2>المرفقات</h2>
                    <div class="attchMassage">
                      <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        list-type="picture"
                      >
                        <el-button
                          plain
                          size="small"
                          icon="el-icon-plus
"
                        >
                          اختر ملف
                        </el-button>

                        <div slot="tip" class="el-upload__tip">
                          إمتدادات الملفات المرفقة المسموح بها: .jpg, .gif,
                          .jpeg, .png, .doc, .docx, .pdf, .zip, .rar, .mp4 (Max
                          file size: 25MB)
                        </div>
                      </el-upload>
                    </div>

                    <el-form-item>
                      <el-button type="primary" class="send" @click="onSubmit"
                        >أرسل
                      </el-button>
                      <el-button>الغاء</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"
              ><i class="el-icon-s-ticket"></i> تذاكر الدعم الفني</span
            >
            <div class="">
              <el-select v-model="value" placeholder="اختر">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-table ref="filterTable" :data="tableData" style="width: 100%">
                <el-table-column prop="ticketNum" label="رقم التذكرة " sortable>
                </el-table-column>

                <el-table-column prop="sub" label="موضوع التذكرة " sortable>
                </el-table-column>

                <el-table-column prop="stauts" label="الحالة " sortable>
                </el-table-column>

                <el-table-column
                  prop="date"
                  label="أخر تحديث"
                  sortable
                  column-key="date"
                >
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>





<script>
import navbar from "@/components/navComponentInner.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  components: {
    navbar,
  },
  data() {
    return {
      tabPosition: "right",
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],

      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      tableData: [
        {
          ticketNum: "DSC-957409",
          sub: "لم يتم الموافقة على خدمتي ",
          stauts: "تم الرد ",
          date: "2022-05-03",
        },
        {
          ticketNum: "DSC-957409",
          sub: "لم يتم الموافقة على خدمتي ",
          stauts: "تم الرد ",
          date: "2022-05-03",
        },
        {
          ticketNum: "DSC-957409",
          sub: "لم يتم الموافقة على خدمتي ",
          stauts: "تم الرد ",
          date: "2022-05-03",
        },
        {
          ticketNum: "DSC-957409",
          sub: "لم يتم الموافقة على خدمتي ",
          stauts: "تم الرد ",
          date: "2022-05-03",
        },
      ],

      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
              options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value:"",
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },

    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>



<style lang="scss">
.createTicket {
  font-family: "Cairo", sans-serif;
  direction: rtl;
  margin-bottom: 100px;

  .el-breadcrumb {
    display: flex;
    justify-content: start;
    margin-bottom: 80px;
    margin-top: 40px;

    .el-breadcrumb__item {
      font-size: 20px;
    }
  }

  .content {
    h2 {
      text-align: right;
      margin-bottom: 30px;
      font-size: 20px;
      font-weight: 700;
    }

    h3 {
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 20px;
    }

    .el-tabs {
      height: unset !important;

      .el-tabs__header {
        width: 20% !important;
      }

      .el-tabs__nav-wrap::after,
      .el-tabs__active-bar {
        display: none;
      }

      .el-tabs__item {
        text-align: right;

        &:hover{
          color: #70d644;
        }
        span {
          font-size: 18px;
        }
      }

      .el-tabs__item.is-active {
        color: #70d644;
      }
      .el-tab-pane {
        height: 100%;
        text-align: right;

        .ticketInfo {
          text-align: right;
          background-color: #ebffe4;
          border-radius: 5px;

          padding: 30px;
          margin-bottom: 15px;

          .ticketInfoCrad {
            .name {
              h5 {
                margin-bottom: 15px;
              }

              p {
              }
            }

            .email {
              h5 {
                margin-bottom: 15px;
              }

              p {
              }
            }
          }
        }

        .massage {
          h2 {
            font-weight: 700;
            font-size: 18px;
            margin-bottom: 10px;
          }

          .innerMassage {
            .el-form {
              .textMassage {
                background-color: #ebffe4;
                padding: 30px;
                margin-top: 15px;
                margin-bottom: 15px;
                border-radius: 5px;
                .ck.ck-editor {
                  margin-bottom: 20px;
                }
              }
            }

            h2 {
            }

            .attchMassage {
              background-color: #ebffe4;
              padding: 30px;
              margin-top: 15px;
              margin-bottom: 15px;

              border-radius: 5px;
              .el-upload {
              }
            }

            .send {
              background: linear-gradient(
                239.11deg,
                #70d644 -31.67%,
                #567a46 95.86%
              );
              border-radius: 4px;
              margin-left: 10px;
            }

            .el-form-item__content {
              text-align: left;
            }
          }
        }

        .el-select{
          margin-bottom: 10px;
        }

        .el-table{
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .el-table .cell {
          text-align: right;
        }
        .el-table td.el-table__cell {
          text-align: right;
        }

        thead{
        }

        th.el-table__cell{
          background-color: #ebffe4;

        }
      }
    }
  }
}
</style>