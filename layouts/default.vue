<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
// GLOBAL STYLES
@import '../node_modules/font-awesome/css/font-awesome.css';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: PTSans-Bold;
  src: url('/fonts/PTSans-Bold.ttf');
}
@font-face {
  font-family: PTSans-Regular;
  src: url('/fonts/PTSans-Regular.ttf');
}
html, body {
  height: 100%;
}
body {
  counter-reset: paragraph;
}
button,
a {
  &:focus {
    outline: none;
  }
}
// GLOBAL STYLES
// NAVBAR
.navbar {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  padding: 1.2rem 0;
  -webkit-box-shadow: 0 1px 6px 0 rgba(0,0,0,.14);
  box-shadow: 0 1px 6px 0 rgba(0,0,0,.14);
  z-index: 9999;
  &__hamburger {
    cursor: pointer;
    display: none;
    &>span {
      display: block;
      width: 25px;
      height: 3px;
      background: #1f56ee;
      margin: 5px 0;
    }
  }
  &_simple {
    box-shadow: none;
    .navbar__container {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__container {
    width: 95%;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    &>div {
      flex: auto;
      &:first-child {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      &:last-child {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
  &__logo {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: PTSans-Bold;
    &-icon {
      // background-image: url('//176428.selcdn.ru/RosKvartal.CDN/Portal.Web/images/service-icon5.png');
      background-image: url('/img/service-icon5.png');
      background-repeat: no-repeat;
      display: inline-block;
      background-size: 200px;
      background-position: -80px -240px;
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    &-text {
      color: #333333;
      font-size: 1.5rem;
    }
  }
  &__dropdown-btn {
    border: none;
    background: none;
    color: gray;
    font-size: 1.1rem;
    padding: 0;
    cursor: pointer;
    margin-left: 1rem;
    &>i {
      position: relative;
      top: 3px;
    }
  }
  &__menu {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    -webkit-transition: display 0.2s ease-in-out;
    transition: display 0.2s ease-in-out;
    &>ul {
      list-style: none;
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      li {
        padding: 0 1rem;
        a {
          color: #333333;
          font-family: PTSans-Regular;
          text-decoration: none;
        }
        i {
          display: none;
          font-size: 1.563rem;
          color: #333333;

        }
      }
    }
    &.show {
      display: flex!important;
    }
  }
  &__login {
    &-btn {
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      width: 9rem;
      height: 3rem;
      border-radius: 1.875rem;
      background: none;
      overflow: hidden;
      cursor: pointer;
      margin-left: 1.875rem;
      border: 2px solid #1f56ee;
      background: #ffffff;
      text-align: center;
      font-family: PTSans-Bold;
      font-size: 1rem;
      text-transform: uppercase;
      -webkit-transition: background 0.2s ease-in-out;
      transition: background 0.2s ease-in-out;
      &:hover {
        background: #1f56ee;
        color: #ffffff;
      }
    }
    &-icon {
      display: none;
      font-size: 1.563rem;
      color: #1f56ee;
    }
  }

}
// NAVBAR
</style>
