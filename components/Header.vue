<template>
  <div class="header-wrapper row m-0">
    <form
      class="form-inline search-full"
      action="#"
      method="get"
      :class="{ open: searchOpen }"
    >
      <div class="form-group w-100">
        <div class="Typeahead Typeahead--twitterUsers">
          <div class="u-posRelative">
            <input
              class="demo-input Typeahead-input form-control-plaintext w-100"
              type="text"
              v-on:keyup="searchterm"
              v-model="terms"
              placeholder="Search Cuba .."
              name="q"
              title=""
              autofocus
            />
            <div class="spinner-border Typeahead-spinner" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <feather
              class="close-search"
              type="x"
              @click="search_close()"
            ></feather>
          </div>
          <div
            :class="searchResult ? 'Typeahead-menu is-open' : 'Typeahead-menu'"
            v-if="menuItems.length"
          >
            <div
              class="ProfileCard u-cf"
              v-for="(menuItem, index) in menuItems.slice(0, 8)"
              :key="index"
            >
              <div class="ProfileCard-avatar header-search">
                <!-- <feather :type="menuItem.icon"></feather> -->
              </div>
              <div class="ProfileCard-details">
                <div class="ProfileCard-realName">
                  <span @click="removeFix()"
                    ><router-link
                      :to="{ path: menuItem.path }"
                      class="realname"
                      >{{ menuItem.title }}</router-link
                    ></span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            :class="
              searchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu'
            "
          >
            <div class="tt-dataset tt-dataset-0">
              <div class="EmptyMessage">
                Your search turned up 0 results. Opps There are no result found.
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="header-logo-wrapper">
      <div class="logo-wrapper">
        <router-link to="/">
          <img class="img-fluid" src="../assets/images/logo/logo.png" alt />
        </router-link>
      </div>
      <div class="toggle-sidebar" @click="toggle_sidebar">
        <feather
          class="status_toggle middle sidebar-toggle"
          type="sliders"
          id="sidebar-toggle"
        ></feather>
      </div>
    </div>
    <div class="left-header col horizontal-wrapper pl-0">
      <ul class="horizontal-menu">
        <li class="mega-menu outside">
          <a
            class="nav-link"
            href="javascript:void(0);"
          >
            <feather type="layers"></feather><span>Bonus Ui</span>
          </a>
        </li>
        <li class="level-menu outside">
          <a class="nav-link" href="#">
            <feather type="inbox"></feather>
            <span>Level Menu</span></a
          >
        </li>
      </ul>
    </div>
    <div class="nav-right col-8 pull-right right-header p-0">
      <ul class="nav-menus">
        <li>
          <span class="header-search"
            ><feather type="search" @click="search_open()"></feather
          ></span>
        </li>
        <li class="onhover-dropdown">
          <div class="notification-box">
            <feather type="bell"></feather
            ><span class="badge badge-pill badge-secondary">4 </span>
          </div>
          <ul class="notification-dropdown onhover-show-div">
            <li>
              <feather type="bell"></feather>
              <h6 class="f-18 mb-0">Notitications</h6>
            </li>
            <li>
              <p>
                <i class="fa fa-circle-o mr-3 font-primary"> </i>Delivery
                processing <span class="pull-right">10 min.</span>
              </p>
            </li>
            <li>
              <p>
                <i class="fa fa-circle-o mr-3 font-success"></i>Order
                Complete<span class="pull-right">1 hr</span>
              </p>
            </li>
            <li>
              <p>
                <i class="fa fa-circle-o mr-3 font-info"></i>Tickets
                Generated<span class="pull-right">3 hr</span>
              </p>
            </li>
            <li>
              <p>
                <i class="fa fa-circle-o mr-3 font-danger"></i>Delivery
                Complete<span class="pull-right">6 hr</span>
              </p>
            </li>
            <li>
              <a class="btn btn-primary" href="#">Check all notification</a>
            </li>
          </ul>
        </li>
        <li class="onhover-dropdown">
          <div class="notification-box"><feather type="star"></feather></div>
          <Bookmark />
        </li>
        <li>
          <div class="mode">
            <i class="fa fa-moon-o" v-show="mixLayout == 'light-only'" @click="customizeMixLayout('dark-only')"></i>
            <i class="fa fa-lightbulb-o" v-show="mixLayout == 'dark-only'" @click="customizeMixLayout('light-only')"></i>
          </div>
        </li>
        <li class="cart-nav onhover-dropdown">
          <div class="cart-box">
            <feather type="shopping-cart"></feather>
            <span class="badge badge-pill badge-primary">2</span>
          </div>
          <ul class="cart-dropdown onhover-show-div">
            <li>
              <h6 class="mb-0 f-20">Shoping Bag</h6>
              <feather type="shopping-cart"></feather>
            </li>
            <li class="mt-0">
              <div class="media">
                <img
                  class="img-fluid rounded-circle mr-3 img-60"
                  src="../assets/images/ecommerce/01.jpg"
                  alt=""
                />
                <div class="media-body">
                  <span>V-Neck Shawl Collar Woman's Solid T-Shirt</span>
                  <p>Yellow(#fcb102)</p>
                  <div class="qty-box">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <button
                          class="btn quantity-left-minus"
                          type="button"
                          data-type="minus"
                          data-field=""
                        >
                          <feather type="minus"></feather>
                        </button>
                      </span>
                      <input
                        class="form-control input-number"
                        type="text"
                        name="quantity"
                        value="1"
                      /><span class="input-group-prepend">
                        <button
                          class="btn quantity-right-plus"
                          type="button"
                          data-type="plus"
                          data-field=""
                        >
                          <feather type="plus"></feather></button
                      ></span>
                    </div>
                  </div>
                  <h6 class="text-right text-muted">$299.00</h6>
                </div>
                <div class="close-circle">
                  <a href="#"><feather type="x"></feather></a>
                </div>
              </div>
            </li>
            <li class="mt-0">
              <div class="media">
                <img
                  class="img-fluid rounded-circle mr-3 img-60"
                  src="../assets/images/ecommerce/03.jpg"
                  alt=""
                />
                <div class="media-body">
                  <span>V-Neck Shawl Collar Woman's Solid T-Shirt</span>
                  <p>Yellow(#fcb102)</p>
                  <div class="qty-box">
                    <div class="input-group">
                      <span class="input-group-prepend">
                        <button
                          class="btn quantity-left-minus"
                          type="button"
                          data-type="minus"
                          data-field=""
                        >
                          <feather type="minus"></feather></button
                      ></span>
                      <input
                        class="form-control input-number"
                        type="text"
                        name="quantity"
                        value="1"
                      /><span class="input-group-prepend">
                        <button
                          class="btn quantity-right-plus"
                          type="button"
                          data-type="plus"
                          data-field=""
                        >
                          <feather type="plus"></feather></button
                      ></span>
                    </div>
                  </div>
                  <h6 class="text-right text-muted">$299.00</h6>
                </div>
                <div class="close-circle">
                  <a href="#"><feather type="x"></feather></a>
                </div>
              </div>
            </li>
            <li>
              <div class="total">
                <h6 class="mb-2 mt-0 text-muted">
                  Order Total : <span class="f-right f-20">$598.00</span>
                </h6>
              </div>
            </li>
            <li>
              <router-link
                class="btn btn-block btn-primary view-cart"
                :to="'/ecommerce/cart'"
              >
                Go to shoping bag
              </router-link>
              <router-link
                :to="'/ecommerce/checkout'"
                class="btn btn-block btn-secondary view-cart"
              >
                Checkout
              </router-link>
            </li>
          </ul>
        </li>
        <li class="onhover-dropdown">
          <feather type="message-square"></feather>
          <ul class="chat-dropdown onhover-show-div">
            <li>
              <feather type="message-square"></feather>
              <h6 class="f-18 mb-0">Message Box</h6>
            </li>
            <li>
              <div class="media">
                <img
                  class="img-fluid rounded-circle mr-3"
                  src="../assets/images/user/1.jpg"
                  alt=""
                />
                <div class="status-circle online"></div>
                <div class="media-body">
                  <span>Erica Hughes</span>
                  <p>Lorem Ipsum is simply dummy...</p>
                </div>
                <p class="f-12 font-success">58 mins ago</p>
              </div>
            </li>
            <li>
              <div class="media">
                <img
                  class="img-fluid rounded-circle mr-3"
                  src="../assets/images/user/2.jpg"
                  alt=""
                />
                <div class="status-circle online"></div>
                <div class="media-body">
                  <span>Kori Thomas</span>
                  <p>Lorem Ipsum is simply dummy...</p>
                </div>
                <p class="f-12 font-success">1 hr ago</p>
              </div>
            </li>
            <li>
              <div class="media">
                <img
                  class="img-fluid rounded-circle mr-3"
                  src="../assets/images/user/4.jpg"
                  alt=""
                />
                <div class="status-circle offline"></div>
                <div class="media-body">
                  <span>Ain Chavez</span>
                  <p>Lorem Ipsum is simply dummy...</p>
                </div>
                <p class="f-12 font-danger">32 mins ago</p>
              </div>
            </li>
            <li class="text-center">
              <a class="btn btn-primary" href="#">View All </a>
            </li>
          </ul>
        </li>
        <li class="maximize">
          <a
            class="text-dark"
            href="javascript:void(0)"
            @click="toggle_fullscreen()"
          >
            <feather type="maximize"></feather
          ></a>
        </li>
        <li class="profile-nav onhover-dropdown p-0 mr-0">
          <div class="media profile-media">
            <img
              class="b-r-10"
              src="../assets/images/dashboard/profile.jpg"
              alt=""
            />
            <div class="media-body">
              <span>Emay Walter</span>
              <p class="mb-0 font-roboto">
                Admin <i class="middle fa fa-angle-down"></i>
              </p>
            </div>
          </div>
          <ul class="profile-dropdown onhover-show-div">
            <li>
              <a href="#"
                ><feather type="user"></feather><span>Account </span></a
              >
            </li>
            <li>
              <a href="#"><feather type="mail"></feather><span>Inbox</span></a>
            </li>
            <li>
              <a href="#"
                ><feather type="file-text"></feather><span>Taskboard</span></a
              >
            </li>
            <li>
              <a href="#"
                ><feather type="settings"></feather><span>Settings</span></a
              >
            </li>
            <li>
              <a><feather type="log-in"></feather><span>Log out</span></a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <script class="result-template" type="text/x-handlebars-template">
      <div class="ProfileCard u-cf">
        <div class="ProfileCard-avatar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-airplay m-0"
          >
            <path
              d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
            ></path>
            <polygon points="12 15 17 21 7 21 12 15"></polygon>
          </svg>
        </div>
        <div class="ProfileCard-details">
          <div class="ProfileCard-realName">
            name
          </div>
        </div>
      </div>
    </script>
    <script class="empty-template" type="text/x-handlebars-template">
      <div class="EmptyMessage">
        Your search turned up 0 results. This most likely means the backend is down, yikes!
      </div>
    </script>
  </div>
</template>
<script>
var body = document.getElementsByTagName("body")[0];
import { mapState } from "vuex";
// import Bookmark from "./bookmark";
export default {
  name: "Search",
  data() {
    return {
      terms: "",
      searchOpen: false,
      searchResult: false,
      searchResultEmpty: false,
      close_sidebar_var: false,
      clicked: false,
      mobile_toggle: false,
      mobile_search: false,
      openbonusUI: false,
      openLevelmenu: false,
      openlanguage: false,
      mobile_accordian: false,
      mixLayout: "light-only",
    };
  },
  components: {
    // Bookmark,
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.searchData,
      megamenuItems: (state) => state.menu.megamenu,
    }),
  },
  methods: {
    toggle_sidebar() {
      this.$store.dispatch("menu/opensidebar");
    },
    setNavActive(item) {
      this.$store.dispatch("menu/setBonusNavActive", item);
    },
    openlangpicker() {
      this.openlanguage = !this.openlanguage;
    },
    openlevelmenu() {
      this.openLevelmenu = !this.openLevelmenu;
    },
    openmegamenu() {
      this.openbonusUI = !this.openbonusUI;
    },
    closeBonusUI() {
      this.openbonusUI = false;
    },
    search_open() {
      this.searchOpen = true;
    },
    search_close() {
      this.searchOpen = false;
    },
    searchterm: function () {
      this.$store.dispatch("menu/searchTerm", this.terms);
    },
    changeLocale(locale) {
      this.setLang(locale);
    },
    mobileaccordian() {
      this.mobile_accordian = !this.mobile_accordian;
    },
    addFix() {
      body.classList.add("offcanvas");
      this.searchResult = true;
    },
    removeFix() {
      body.classList.remove("offcanvas");
      this.searchResult = false;
      this.terms = "";
    },
    toggle_fullscreen() {
      if (
        (document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)
      ) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    customizeMixLayout(val) {
      this.mixLayout = val;
      this.$store.dispatch("layout/setLayout", val);
    },
  },
  watch: {
    "$i18n.locale"(to, from) {
      if (from !== to) {
        this.$router.go(this.$route.path);
      }
    },
    menuItems: function () {
      this.terms ? this.addFix() : this.removeFix();
      if (!this.menuItems.length) this.searchResultEmpty = true;
      else this.searchResultEmpty = false;
    },
  },
};
</script>
