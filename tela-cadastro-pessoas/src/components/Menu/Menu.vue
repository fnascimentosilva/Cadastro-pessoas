<template>
  <nav>
    <ul class="menu">
      <router-link to="/" class="item-menu">
        <li >
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/home.png"
            alt="home"
          />
          <h2>Home</h2>
        </li>
      </router-link >

      <router-link to="/talentos/novo" class="item-menu">
        <li >
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/home.png"
            alt="home"
          />
          <h2>Cadastro</h2>
        </li>
      </router-link>

      <router-link to="/sobre" class="item-menu">
        <li >
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/home.png"
            alt="home"
          />
          <h2>Sobre</h2>
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
.title {
  font-size: 32px;
  font-weight: bold;
  color: #999;
  text-align: center;
}

.menu {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.item-menu {
  display: flex;
  border: 1px solid black;
  padding: 5px;
  width: 33%;
}

.item-menu li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 33%;
}
</style>