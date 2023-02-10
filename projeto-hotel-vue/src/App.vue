<template>
  <!-- <rounter-link to="/acomodacoes">Acomodações</rounter-link> -->
  <nave-bar /> 
  <router-view/>

</template>

<script>

import NaveBar from './components/NaveBar.vue';
// import Footer from './components/FooterView.vue';
// import Acomodacoes from './views/AcomodacoesView.vue';
// import Contatos from './views/ContatosView.vue';
// import Login from './views/LoginView.vue';
// import Cadastrese from './views/CadastreSe.vue';
export default {
  components:{
    NaveBar,
 

    }
  }

</script>

<style>
#app {
  text-align: center

}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983; 
}*/
</style>
