<script>

export default {
  data() {
    return {
      title: 'Счетчик: ',
      count: 0,
      startTime: 0,
      currentTime: 0,
    }
  },
  methods: {}
}
</script>

<template>
  <div class="counter_clicker ">
    <div class="counter_clicker_texts">
      <h3> {{ this.title }} </h3>
      <h3> {{ this.count }} </h3>
    </div>
    <div class="counter_clicker_buttons">
      <button class="btn btn-success" type="button" @click="this.count++" id="plus">Добавить</button>
      <button class="btn btn-danger" type="button" @click="this.count--" id="minus">Вычесть</button>
    </div>
  </div>
</template>

<style>
h3, button.btn-danger, button.btn-success {
  font-family: "Press Start 2P", serif;
  font-style: normal;
  color: white;
}

.counter_clicker {
  display: block;
  background-color: darkgrey;
  border-radius: 10px;

}
.counter_clicker_texts, .counter_clicker_buttons {
  display: flex;
  justify-content: space-between;
  margin: 10px 50px;
  padding-inline-start: 10px;
}

</style>
