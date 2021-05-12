<template>
  <ul class="sidenav" id="mobile-demo">
    <li>
      <a class="waves-effect" href="#what-bjj">About</a>
    </li>
    <li>
      <a class="waves-effect" href="#location">Location</a>
    </li>
    <li>
      <ul class="collapsible">
        <li>
          <div class="waves-effect waves-light collapsible-header item-sidenav_col">
            Time Tables<i class="material-icons right">keyboard_arrow_down</i>
          </div>
          <div class="collapsible-body">
            <ul>
              <li>
                <a
                  class="waves-effect waves-light"
                  href="#time-table"
                  >Adult Class</a
                >
              </li>
              <li>
                <a
                  class="waves-effect waves-light"
                  href="#kids-time-table"
                  >Kid's Class</a
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
    <li>
      <ul class="collapsible">
        <li>
          <div class="collapsible-header item-sidenav_col">
            Fees<i class="material-icons right">keyboard_arrow_down</i>
          </div>
          <div class="collapsible-body">
            <ul>
              <li>
                <a
                  class="waves-effect waves-light"
                  href="#fee-adults"
                  >Adult's Fees</a
                >
              </li>
              <li>
                <a
                  class="waves-effect waves-light"
                  href="#fee-kids"
                  >Kid's Fees</a
                >
              </li>
              <li>
                <a
                  class="waves-effect waves-light"
                  href="#fee-private"
                  >Private Class</a
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
    <li>
      <a class="waves-effect" href="#faq">FAQ</a>
    </li>
    <li>
      <a class="waves-effect" href="#contact">Contact</a>
    </li>
    <li><div class="divider"></div></li>
    <img src="/img/icon-int-logo.jpg.jpeg" />
  </ul>
</template>

<style scoped>
img {
  width: 100%;
}
i {
  margin: 0;
}
.item-sidenav_col {
  padding: 0 32px;
}
ul {
  list-style: none;
  padding-inline-start: 0px;
}
.collapsible-body ul li a {
  font-weight: normal;
}
.sidenav {
  z-index: 1000;
}
</style>
