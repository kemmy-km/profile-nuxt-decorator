<!-- <template>
  <v-snackbar>
    <div class="c-toaster__parent-block">
      <div class="c-toaster__inner-block">
        <template v-for="(toaster, index) in getToasters">
          <ToasterMessage :key="toaster.id" :toaster="toaster" @remove="removeMessage(toaster.id)" />
          <div v-if="index != lastIndex" :key="`${toaster.id}-divider`" class="c-toaster__margin-block" />
        </template>
      </div>
    </div>
  </v-snackbar>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { appStore } from "~/store"
import { Toaster } from "~/types/store"

@Component
export default class ToasterComponent extends Vue {
  // computed
  get isShow(): boolean {
    return appStore.isShowToaster
  }

  get getToasters(): Toaster[] {
    return appStore.getToasters
  }

  get lastIndex(): number {
    return appStore.getToasters.length - 1
  }

  // methods
  removeMessage(id: string | undefined) {
    // uuid
    if (id) {
      appStore.removeToaster(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-toaster {
  &__parent-block {
    margin: -14px auto;
    width: 100%;
  }
}
</style> -->
