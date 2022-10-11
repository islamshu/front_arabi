<template>
  <div class="breadcrumbSec">
    <nav aria-label="breadcrumb">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">الرئيسية</a></li>
          <li class="breadcrumb-item active" aria-current="page">المقالات</li>
        </ol>

        <p>
          يقدم المسوقين على الموقع مجموعة متنوعة من الخدمات الاحترافية التي
          تساعد على تطوير اعمالك ونمو مشاريعك
        </p>
      </div>
    </nav>

    <div class="container">
        <div class="InnerNav">
      <h2> مقالات التسوق </h2>
      <div class="btns">
        <a href="">فلتر<i class="fa-solid fa-filter"></i></a>
        <a href="" class="addVideo">اضافة فيديو<i class="fa-solid fa-plus"></i></a>
        <a href="" class="new">الاحدث<i class="fa-solid fa-chevron-down"></i></a>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "breadcrumb",
};
</script>



<style lang="scss" scoped>

.breadcrumbSec{
  font-family: "Cairo", sans-serif;
  direction: rtl;

nav {

  padding: 50px;
  background-color: #f2f2f2;

  .breadcrumb {
    .breadcrumb-item {
      font-size: 20px;
      color: black;
      font-weight: 700;
      a {
        color: black;
        text-decoration: none;
      }

      &::before {
        float: right;
      }
    }
  }

  p {
    text-align: right;
  }
}

.InnerNav{
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    h2{

    font-size: 34px;
    color: #70d644;
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

    .btns{

        a{

            margin-left: 10px;
            padding: 8px;
            border:1px solid #70d644;
            border-radius: 6px;
            color: #70d644;
            text-decoration: unset;

            .fa-filter{
                margin-right: 5px;
            }

            .fa-plus{
                margin-right: 5px;

            }

            .fa-chevron-down{
                margin-right: 5px;

            }


        }

        .new{
            background: linear-gradient(239.11deg, #70D644 -31.67%, #567A46 192.97%);
            color: white;
        }

        .addVideo{
            background: #F2F2F2;
        }
    }
}

}
</style>