<template>
  <div class="listing">
    <!-- <b-field :label="label || 'Listing Length'">
      <b-numberinput v-model.lazy="count" :min="0"></b-numberinput>
    </b-field> -->
    <h4>{{ label ? label : 'Listing' }}</h4>
    <draggable v-model="listingItems">
      <div v-for="(item, index) in value" :key="index" class="listing-item">
        <span v-html="item.text"></span>
        <button v-if="count > 1" @click="deleteItem(index)">
          <b-icon icon="delete"></b-icon>
        </button>
      </div>
    </draggable>
    <div class="add-button-container">
      <b-button
        class="button merge-button tertiary add-button"
        icon-right="plus"
        @click="addItem()"
      >
        Add Item
      </b-button>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  props: ['value', 'label', 'listingDefaults', 'matchingListing'],
  data() {
    return {
      isActive: false,
      count: 0
    }
  },
  computed: {
    listingItems: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  mounted: function() {
    this.count = this.value.length
  },
  methods: {
    deleteItem: function(index) {
      if (this.count > 1) {
        this.count--
        this.$emit(
          'input',
          this.value.filter((item, i) => index !== i)
        )
      }
    },
    addItem() {
      this.count++
      this.$emit(
        'input',
        new Array(this.count).fill(undefined).map((item, i) => {
          return this.value[i]
            ? this.value[i]
            : this.listingDefaults && this.listingDefaults[i]
            ? { text: this.listingDefaults[i].text, range: this.listingDefaults[i].range }
            : { text: 'Lorem, ipsum dolor sit amet', range: 79 }
        })
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.listing {
  padding: 1rem;
  border: 1px dashed $black;
  margin: 1rem 0;
}
.listing-item {
  background: $blue;
  border-radius: 0.5rem;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1;
  position: relative;
  button {
    top: 50%;
    transform: translateY(-50%);
    right: 0.5rem;
    position: absolute;
    background: none;
    border: none;
    padding: 0;
  }
  ::v-deep {
    p {
      margin-bottom: 0.2rem;
    }
  }
}
.add-button-container {
  text-align: right;
  button {
    display: inline-block;
    background: none;
    padding: 0.25rem 0.5rem;
    height: auto;
  }
}
</style>
