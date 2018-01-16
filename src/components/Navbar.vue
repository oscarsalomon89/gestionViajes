<template>
<nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <router-link class="navbar-brand" to="/inicio">Inicio</router-link>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li id="navCli"><router-link to="/clientes">Clientes</router-link></li>
                <li id="navAbout"><router-link to="/reservas">Reservas</router-link></li>
                <li id="navContact"><router-link to="/eventos">Eventos</router-link></li>
                <li id="navContact"><router-link to="/transportes">Transportes</router-link></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Config <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Configuracion</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a @click="logout()">Logout <span class="sr-only">(current)</span></a></li>
                  </ul>
                </li>
              </ul>
            </div><!--/.nav-collapse -->
          </div><!--/.container-fluid -->
        </nav>
</template>
<script>

 </script>
