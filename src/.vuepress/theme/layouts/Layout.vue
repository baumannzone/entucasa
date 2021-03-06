<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchend="onTouchEnd"
    @touchstart="onTouchStart"
  >
    <Navbar
      @toggle-sidebar="toggleSidebar"
      v-if="shouldShowNavbar"
    />

    <div
      @click="toggleSidebar(false)"
      class="sidebar-mask"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top"/>
      </template>
      <template #bottom>
        <slot name="sidebar-bottom"/>
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home"/>

    <Page
      :sidebar-items="sidebarItems"
      v-else
    >
      <template #top>
        <slot name="page-top"/>
      </template>
      <template #bottom>
        <slot name="page-bottom"/>
      </template>
    </Page>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import Home from '@theme/components/Home.vue'
  import Navbar from '@theme/components/Navbar.vue'
  import Page from '@theme/components/Page.vue'
  import Sidebar from '@theme/components/Sidebar.vue'
  import FooterBar from "@theme/components/FooterBar";
  import { resolveSidebarItems } from '../util'

  export default {
    name: 'Layout',

    components: {
      Home,
      Page,
      Sidebar,
      Navbar,
      FooterBar
    },

    data() {
      return {
        isSidebarOpen: false
      }
    },

    computed: {
      shouldShowNavbar() {
        const { themeConfig } = this.$site
        const { frontmatter } = this.$page
        if (
          frontmatter.navbar === false
          || themeConfig.navbar === false) {
          return false
        }
        return (
          this.$title
          || themeConfig.logo
          || themeConfig.repo
          || themeConfig.nav
          || this.$themeLocaleConfig.nav
        )
      },

      shouldShowSidebar() {
        const { frontmatter } = this.$page
        return (
          !frontmatter.home
          && frontmatter.sidebar !== false
          && this.sidebarItems.length
        )
      },

      sidebarItems() {
        return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
        )
      },

      pageClasses() {
        const userPageClass = this.$page.frontmatter.pageClass
        return [
          {
            'no-navbar': !this.shouldShowNavbar,
            'sidebar-open': this.isSidebarOpen,
            'no-sidebar': !this.shouldShowSidebar
          },
          userPageClass
        ]
      }
    },

    beforeMount() {
      let recaptchaScript = document.createElement('noscript')
      recaptchaScript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHVHNGK" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
      document.body.appendChild(recaptchaScript)
    },

    mounted() {
      this.$router.afterEach(() => {
        this.isSidebarOpen = false
      })
    },

    methods: {
      toggleSidebar(to) {
        this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
        this.$emit('toggle-sidebar', this.isSidebarOpen)
      },

      // side swipe
      onTouchStart(e) {
        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        }
      },

      onTouchEnd(e) {
        const dx = e.changedTouches[0].clientX - this.touchStart.x
        const dy = e.changedTouches[0].clientY - this.touchStart.y
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
          if (dx > 0 && this.touchStart.x <= 80) {
            this.toggleSidebar(true)
          }
          else {
            this.toggleSidebar(false)
          }
        }
      }
    }
  }
</script>
