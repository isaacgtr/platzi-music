<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <div
          :class="[
            typeNotification
              ? 'notification is-danger'
              : 'notification is-success',
          ]"
        >
          <slot name="body">{{ $('notification') }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { typeNotification: Boolean },
}
</script>

<style lang="scss" scoped>
.notification {
  margin: 10px;
}
</style>
