<template>
  <!-- <nav>
    <router-link to="/" tag="li" exact>Home</router-link> |
    <router-link to="/about" tag="li">About</router-link> |
    <router-link to="/blog" tag="li">blog</router-link> |
    <router-link to="/OurServices" tag="li">OurServices</router-link> |
    <router-link to="/store" tag="li">store</router-link> |
    <router-link to="/pdocast" tag="li">pdocast</router-link> |
  </nav> -->

  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img src="../assets/siteLogo/logo.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav m-auto">
          <router-link to="/" class="nav-item nav-link active"
            >الرئيسية</router-link
          >
          <router-link to="/OurServices" class="nav-link">خدماتنا</router-link>
          <router-link to="/store" class="nav-link">المتجر</router-link>
          <router-link to="/blog" class="nav-link">المقالات</router-link>
          <router-link to="/pdocast" class="nav-link">بودكاست</router-link>

          <!-- <router-link to="/About" class="nav-item nav-link">About</router-link> -->
        </div>

        <i class="fa-solid fa-magnifying-glass text-white ms-4"></i>
        <div class="d-flex btns">
          <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
          <button class="btn btn-outline-success" type="">اشتراك</button>
          <button class="btn btn-outline-success signIn" type="">
            تسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "headerNav",
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 20px;
  direction: rtl;
  position: absolute;
  z-index: 5;
  width: 100%;
  background-color: rgb(0 0 0 / 25%);
  font-family: "Cairo", sans-serif;

  .nav-link {
    color: white;
    font-weight: 700;
    font-size: 20px;
    text-transform: capitalize;
    margin-left: 20px;
    &:hover {
      color: #70d644;
      text-decoration: underline;
    }
  }

  .nav-item.active {
    color: #70d644;
    text-decoration: underline;
  }

  .btns {
    button {
      color: #70d644;
      border-color: #70d644;
      padding: 4px 20px;
      margin-left: 5px;
      text-transform: capitalize;
      font-weight: 700;
    }

    .signIn {
      background-color: #70d644;
      color: white;
    }
  }

  .fa-magnifying-glass {
    font-size: 20px;
  }
}
</style>
