<template>
 <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
     <path
      d="M0 6C0 2.68629 2.68629 0 6 0H36C39.3137 0 42 2.68629 42 6V36C42 39.3137 39.3137 42 36 42H6C2.68629 42 0 39.3137 0 36V6Z"
      fill="#FFBE38"
     />
     <g clip-path="url(#clip0)">
      <path
       d="M24.0559 24.2853L24.0559 20.4097L24.0559 14.4375L24.0559 -3.21264e-06L17.1692 -3.8147e-06L17.1692 14.4375L17.1692 20.4097L17.1692 24.9614C17.1692 30.1396 20.4596 33 25.4934 33C27.9045 33 30.4262 32.5965 30.4262 32.5965L30.4262 27.5118L27.6474 27.5118C24.9097 27.5118 24.0559 25.9192 24.0559 24.2853Z"
       fill="#4C5363"
      />
     </g>
     <defs>
      <clipPath id="clip0">
       <rect
        width="22"
        height="33"
        fill="white"
        transform="matrix(1 8.74228e-08 8.74228e-08 -1 10 33)"
       />
      </clipPath>
     </defs>
    </svg>
   </a>
   <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
    aria-controls="navbarCollapse"
    aria-expanded="false"
    aria-label="Toggle navigation"
   >
    <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav me-auto mb-2 mb-md-0">
     <li class="nav-item">
      <router-link to="/">Home</router-link>
     </li>
     <li class="nav-item">
      <router-link to="/users">Changer d'utilisateur</router-link>
     </li>
    </ul>
   </div>
   <div class="disconnect">
    <button class="deco">Déconnexion</button>
   </div>
   <div class="connected">
    <button class="btn btn-co">{{ getUsername }}</button>
   </div>
  </div>
 </nav>
 <router-view />
</template>

<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 padding-bottom: 50px;
}

/**
Ici on personalise le style des boutons de la navbar
 */
.navbar-nav li a {
 color: white;
 text-decoration: none;
 margin-left: 20px;
 font-weight: normal;
}

.navbar-nav li .router-link-exact-active {
 color: #fff;
}

.navbar-nav li {
 color: #ffbe38 !important;
}

body {
 background-color: #4c5363;
}

.bg-dark {
 background-color: #4c5363 !important;
}

a {
 text-decoration: none;
 color: #808da7;
}

a:hover {
 color: #ffbe38;
}

.btn-co {
 background-color: #ffbe38;
 padding: 7px 20px 7px 20px;
 border-radius: 10px;
 border: none;
 font-weight: normal;
}

.deco {
 text-decoration: underline;
 background-color: transparent;
 border: none;
 margin-right: 20px;
 color: #808da7;
}

.btn-danger {
 margin-right: 20px;
 background-color: #881616;
 border: none;
}

.btn-secondary {
 background-color: #759c43;
 border: none;
}

.btn-post {
 background-color: #ffbe38;
 border: none;
 margin-bottom: 50px;
 padding: 10px 50px;
}

.btn-post img {
 width: 20px;
 height: 20px;
 margin-left: 5px;
}
</style>
