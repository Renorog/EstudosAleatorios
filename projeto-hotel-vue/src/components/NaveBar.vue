<template>
    <nav id="nav">
        <div>
            <logoHeader />
        </div>
        <div class="nav-menu">       
            <router-link to="/">Home</router-link> |
            <router-link to="/hotel">Hotel</router-link> | 
            <router-link to="/acomodacoes">Acomodações</router-link> |
            <router-link to="/contatos">Contatos</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/cadastrese">Cadastre-se</router-link> 
        </div>
    </nav>
</template>

<script>
    import logoHeader from '@/components/logoHeader.vue';
    export default{
        name: 'navebar',
        components:{
            logoHeader
        }
        
    }
</script>

<style scoped>
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     
   }


#nav{

 display: flex;
 justify-content: space-around;
}

.nav-menu{
    display: flex;
    justify-content: space-around;
    align-items: center;
  
}



</style>