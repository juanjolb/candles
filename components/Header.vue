<template>
  <div>
    <nav class="navbar navbar-expand-lg sticky-top bg-primary">
      <div class="container py-2">
        <NuxtLink to="/">
          <img
            class="navbar-brand"
            src="https://catedraldemallorca.org/wp-content/uploads/2021/08/Logotipo_Catedral_negativo.png"
            width="200"
          />
        </NuxtLink>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navToggle"
          aria-controls="navToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navToggle" style="">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item pe-lg-3">
              <NuxtLink
                activeClass="active"
                to="/encender-vela"
                class="nav-link"
                aria-current="page"
                >Enceder vela</NuxtLink
              >
            </li>
            <li class="nav-item pe-lg-3">
              <NuxtLink
                activeClass="active"
                to="/velas"
                class="nav-link"
                aria-current="page"
                >Velas encendidas</NuxtLink
              >
            </li>
            <li class="nav-item pe-lg-3">
              <NuxtLink
                activeClass="active"
                to="/donaciones"
                class="nav-link"
                aria-current="page"
                >Donaciones</NuxtLink
              >
            </li>
          </ul>
          <button type="button" class="btn btn-outline-light">
            Página principal
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav {
  .nav-link.active {
    border-bottom: 2px solid white;
    font-weight: bold;
  }
}
</style>
