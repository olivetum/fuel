<template>
  <form @submit.prevent="onSubmit">

    <div class="field">
      <label class="label">Station Name</label>
      <div class="control">
        <input class="input" v-model="form.name" type="text" placeholder="e.g Alex Smith">
      </div>
    </div>

    <div class="field">
      <label class="label">ON Price</label>
      <div class="control">
        <input class="input" v-model="form.on" placeholder="9,43">
      </div>
    </div>
    <div class="control">
      <button type="submit" class="button is-primary">Submit</button>
    </div>

  </form>
</template>

<script>
import { createStation } from '../firebase';
import { reactive } from "vue";

export default {
  name: "CreateUserForm",
  setup() {
    const form = reactive({name: '', on: null});

    const onSubmit = async () => {
      await createStation({ ...form })
      form.name = ''
      form.on = 0
    }

    return { form, onSubmit }
  }
}
</script>

<style scoped>

</style>