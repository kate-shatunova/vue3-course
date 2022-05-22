<template>
    <ul
      :class="['menu-link', extraCLass]"
    >
      <li><a @click="$router.push('/about')">About</a></li>
      <li><a @click="$router.push('/work')">Work</a></li>
      <li><a @click="$router.push('/contact')">Contact</a></li>
      <li><a @click="$router.push('/store')">Posts (Vuex)</a></li>
      <li><a @click="$router.push('/composition')">Posts (Composition API)</a></li>
    </ul>
</template>

<script>
export default {
  name: "my-menu",
  props: {
    isInline: {
      type: Boolean,
      default: false
    },
    isFooter: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    extraCLass: function() {
      return (this.isFooter ? "footer " : "") +
             (this.isInline ? "inline" : "");
    }
  }
}
</script>

<style scoped>
.menu-link {
  list-style: none;
  padding: 25px;
  margin: 0;
  text-align: center;
}

.menu-link:before,
.menu-link:after {
  content: " ";
  display: table;
}

.menu-link:after {
  clear: both;
}

.menu-link li {
  cursor: pointer;
  margin: 2px 4px;
}

.menu-link.inline li {
  display: inline-block;
}

.menu-link li a {
  display: block;
  color: #333333;
  text-align: center;
  font-size: 13px;
  transition: all 0.3s ease-in-out;
}

.footer li a {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.8px;
}

.menu-link li a:hover {
  color: #1abc9c;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

  #menu .menu-link li {
    margin: 2px 3px;
  }

}
</style>