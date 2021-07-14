<template>
  <div class="flat-wrapper">
    <div class="flat">
      <div class="img-wrapper">
        <img :src="calcImgUrl()" alt="Фото квартиры" class="flat__img" onerror="this.src ='./img/default-flat.png'">
        <icon-like class="icon icon-like" :size="36" :color="iconLikeColor" @click.native="toggleLike"/>
      </div>

      <div class="info">
        <h4 class="title">{{ flat.attributes.title }}</h4>
        <div class="square">Площадь: {{ flat.attributes.area }} {{ flat.attributes.unit }}</div>
        <div class="rooms">Комнат: {{ flat.attributes.rooms ? flat.attributes.rooms : 'Не указано' }}</div>
        <div class="address">{{ calcAddress() }}</div>
        <div class="persons">
          <p>{{ calcPerson(flat.relationships) }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import IconLike from "./IconLike";

export default {
  name: "FlatComponent",
  components: {IconLike},
  props: {
    flat: Object
  },
  data: () => ({}),
  computed: {
    iconLikeColor() {
      return this.flat.attributes.like ? '#FF7979' : '#515151'
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    calcAddress() {
      if (this.flat?.attributes?.address) {
        const {city, street, house, room} = this.flat.attributes.address
        return `${city}, ${street}, ${house}, ${room}`
      }
      return 'Не указано'
    },
    calcImgUrl() {
      if (this.flat?.attributes?.img) {
        return this.flat.attributes.img
      } else {
        return './img/default-flat.png'
      }
    },
    toggleLike() {
      this.$emit('toggle-like')
    },
    calcPerson(person) {
      if (person?.attributes) {
        const {first_name, last_name, middle_name} = person.attributes
        return `${person.type === 'agent' ? 'Агент' : person.type}: ${last_name} ${first_name} ${middle_name}`
      }
      return 'Не указано'
    }
  },
}
</script>

<style scoped lang="scss">
.flat-wrapper {
  padding: 1rem;
  width: auto;
  background-color: #EEE;
  border-radius: 1rem;

  .flat {
    width: 300px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .img-wrapper {
    position: relative;
    width: 100%;

    .flat__img {
      width: 300px;
      height: 200px;
      object-fit: cover;
    }

    .icon-like {
      cursor: pointer;
      position: absolute;
      bottom: 1rem;
      right: 0.5rem;
    }
  }

  .flat__img {
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
  }

  .flat__img:hover {
    //position: absolute;
    //max-width: 500px;
  }

  .info {
    width: 100%;

    .title, .square, .address {
      width: 100%;
    }
  }

}

@media only screen and (max-width: 690px) {
.flat-wrapper {
  .flat {
  width: 100%;
    .flat__img {
    width: 100%;
      height: initial;
  }
  }
}
}

@media only screen and (max-width: 690px) and (orientation: landscape) {

}

@media only screen and (max-width: 690px) and (orientation: portrait) {

}
</style>