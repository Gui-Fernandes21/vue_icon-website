<template>
  <nav id="navbar">
    <div class="nav-wrapper nav-color">
      <a
        href="/"
        class="hide-on-small-and-down brand-logo"
        ><img class="logo" src="/img/logo-Pablo-Cerino.png"/><img
          class="logo-desc"
          src="/img/pablo_cerino_bjj-school.png"
      /></a>
      <a href="/" class="hide-on-med-and-up brand-logo"
        ><img class="logo logo-mobile" src="/img/logo-Pablo-Cerino.png"
      /></a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >
      <div class="scrollspy" id="top">
        <!-- <a
          href="#"
          style="margin-right: 2rem; margin-left: 1rem;"
          class="dropdown-btn teal-text right "
          data-target="language"
          >EN<i class="material-icons right">keyboard_arrow_down</i></a
          >
          <ul id="language" class="dropdown-content nav-color">
            <li>
              <a href="/fr">French</a>
            </li>
            <li>
              <a href="/nl">Dutch</a>
            </li>
          </ul> -->
      </div>
      <div class="hide-on-med-and-down">
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="#what-bjj">About</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a class="dropdown-button" data-target="time-tables" href="#">
              Time Tables<i class="material-icons right">keyboard_arrow_down</i>
            </a>
          </li>
          <ul id="time-tables" class="dropdown-content nav-color">
            <li>
              <a class="white-text" href="#time-table">Adult Classes</a>
            </li>
            <li>
              <a class="white-text" href="#kids-time-table">Kid's Class</a>
            </li>
          </ul>
          <li>
            <a class="dropdown-button" data-target="fees-dropdown" href="#">
              Fees<i class="material-icons right">keyboard_arrow_down</i>
            </a>
          </li>
          <ul id="fees-dropdown" class="dropdown-content nav-color">
            <li>
              <a class="white-text" href="#fee-adults">Adult Class</a>
            </li>
            <li>
              <a class="white-text" href="#fee-kids">Kid's Class</a>
            </li>
            <li>
              <a class="white-text" href="#fee-private">Private Class</a>
            </li>
          </ul>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  z-index: 10;
}
nav#navbar-material {
  background: #d26335;
  border: none;
  box-shadow: none;
}
#navbar-material .nav-wrapper {
  background: white;
  margin: 20px;
}
#navbar-material .nav-wrapper > ul > li > a {
  color: black;
}
#navbar-material .nav-wrapper .brand-logo img {
  height: 64px;
}
#navbar-material .nav-wrapper .button-collapse i {
  color: black;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

div.hide-on-med-and-down {
  margin-right: 5rem;
}

i {
  margin: 0;
}

.brand-logo {
  margin-left: 2rem;
}

.logo-mobile {
  margin-right: 50px;
}

@media (max-width: 600px) {
  #navbar-material .nav-wrapper .brand-logo img {
    height: 56px;
  }
}
</style>
