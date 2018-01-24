<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/inicio">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item" id="navCli">
                  <router-link class="nav-link" to="/clientes">Clientes</router-link>
                </li>
                <li class="nav-item" id="navAbout">
                  <router-link class="nav-link" to="/reservas">Reservas</router-link>
                </li>
                <li class="nav-item" id="navContact">
                  <router-link class="nav-link" to="/eventos">Eventos</router-link>
                </li>
                <li class="nav-item" id="navContact">
                  <router-link class="nav-link" to="/transportes">Transportes</router-link>
                </li>                
              </ul>
              
              <ul class="nav navbar-nav navbar-right">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div><!--/.nav-collapse -->
        </nav>
</template>
<script>

 </script>
