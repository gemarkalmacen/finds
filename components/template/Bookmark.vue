<template>
  <div>
    <div
      class="onhover-show-div bookmark-flip"
      :class="bookmarkSearchBox ? 'active' : ''"
    >
      <div class="flip-card">
        <div
          class="flip-card-inner"
          :class="bookmarkSearchBox ? 'flipped' : ''"
        >
          <div class="front">
            <ul class="droplet-dropdown bookmark-dropdown">
              <li class="gradient-primary">
                <feather type="star"></feather>
                <h6 class="f-18 mb-0">Bookmark</h6>
              </li>
              <li>
                <div class="row">
                  <div
                    class="col-4 text-center"
                    v-for="(items, index) in bookmarkItems.slice(0, 8)"
                    :key="index"
                  >
                    <feather :type="items.icon"></feather>
                  </div>
                </div>
              </li>
              <li class="text-center">
                <button class="flip-btn" id="flip-btn" @click="openbookmark">
                  Add New Bookmark
                </button>
              </li>
            </ul>
          </div>
          <div class="back">
            <ul>
              <li>
                <div
                  class="droplet-dropdown bookmark-dropdown flip-back-content"
                >
                  <input
                    type="text"
                    placeholder="search..."
                    v-on:keyup="searchTerm"
                    v-model="terms"
                  />
                </div>
                <div
                  class="bookmark-search"
                  :class="
                    searchMenuItems.length
                      ? 'Typeahead-menu is-open'
                      : 'Typeahead-menu'
                  "
                  v-if="searchMenuItems.length"
                >
                  <div
                    class="ProfileCard u-cf"
                    v-for="(menuItem, index) in searchMenuItems.slice(0, 8)"
                    :key="index"
                  >
                    <div class="ProfileCard-avatar header-search">
                      <feather :type="menuItem.icon"></feather>
                    </div>
                    <div class="ProfileCard-details">
                      <div class="ProfileCard-realName">
                        <span @click="removeFix()">
                          <router-link
                            :to="{ path: menuItem.path }"
                            class="realname"
                            >{{ menuItem.title }}</router-link
                          >
                        </span>
                        <a
                          href="JavaScript:void(0);"
                          @click="addToBookmark(menuItem)"
                        >
                          <span :class="menuItem.bookmark ? 'text-warning' : ''"
                            ><i
                              class="fa fa-star-o f-18 bookmark-search f-right"
                            ></i></span
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <button
                  class="d-block flip-back"
                  id="flip-back"
                  @click="openbookmark"
                >
                  Back
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      terms: "",
      bookmarkSearchBox: false,
      bookmarkSearchResult: false,
      bookmarkSearchResultEmpty: false,
      bookmarkItems: [],
    };
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.data,
      searchMenuItems: (state) => state.menu.searchData,
    }),
  },
  mounted() {
    this.menuItems.filter((items) => {
      if (items.bookmark) {
        this.bookmarkItems.push(items);
      }
    });
  },
  methods: {
    openbookmark() {
      this.bookmarkSearchBox = !this.bookmarkSearchBox;
      if(!this.bookmarkSearchBox)
        this.removeFix()
    },
    searchTerm: function () {
      this.addFix()
      this.$store.dispatch("menu/searchTerm", this.terms);
    },
    addFix() {
      this.boomarkSearchResult = true;
    },
    removeFix() {
      this.boomarkSearchResult = false;
      this.text = "";
    },
    addToBookmark(items) {
      const index = this.bookmarkItems.indexOf(items);
      if (index === -1 && !items.bookmark) {
        items.bookmark = true;
        this.bookmarkItems.push(items);
        this.text = "";
      } else {
        this.bookmarkItems.splice(index, 1);
        items.bookmark = false;
      }
    },
  },
  watch: {
    searchMenuItems: function () {
      this.terms ? this.addFix() : this.removeFix();
      if (!this.menuItems.length) this.boomarkSearchResultEmpty = true;
      else this.boomarkSearchResultEmpty = false;
    },
  },
};
</script>