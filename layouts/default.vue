<template>
  <div>
    <div class="container main-body">
      <nav class="navbar section box">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img src="/Lotto.svg">
          </nuxt-link>
        </div>  

        <div id="top-menu" class="navbar-menu">
          <div class="navbar-start">
            <nuxt-link class="navbar-item" to="/">
                Home
            </nuxt-link>        
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link is-active" href="#">
                Jetzt Spielen
              </a>
              <div class="navbar-dropdown ">
                <nuxt-link class="navbar-item" to="/playNow/eurojackpot">
                  Eurojackpot
                </nuxt-link>
              </div>
            </div>
          </div>

          <div class="navbar-end">   
            <div class="navbar-item">
              Hallo, Gast
            </div>       
            <div class="navbar-item">
              <div class="field is-grouped is-grouped-multiline">
                <p class="control">
                  <nuxt-link class="button is-primary" to="/">
                      <span>
                        Einloggen
                      </span>
                  </nuxt-link>
                </p>

                <p class="control">
                  <nuxt-link class="button is-info" to="/">
                    <span>Registrieren</span>
                  </nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nuxt/> <!-- This is where the pages are presented -->
    </div>

    <footer class="footer">
      <div class="container box">
        <div class="content has-text-centered">
          <p>
            Gabriel Cevales<br>
            Hier könnte Ihre Werbung stehen!
          </p>
          <p>
            <img src="/Lotto.svg">
          </p>
        </div>
      </div>
    </footer>    
  </div>
</template>