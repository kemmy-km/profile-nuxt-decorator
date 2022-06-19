<!-- <template>
  <v-card :class="style.className" :color="style.color">
    <div class="mr-2">{{ toaster.text }}</div>
    <v-spacer />
    <v-btn>
      <v-icon color="black">mid-close</v-icon>
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import { Toaster } from "~/types/store"

@Component
export default class ToasterMessage extends Vue {
  @Prop({ default: null })
  toaster!: Toaster

  //
  //
  //
  get style() {
    let className = ""
    let color = ""
    switch (this.toaster.type) {
      case "error":
        className = ""
        color = ""
        break
      case "warning":
        className = ""
        color = ""
        break
    }
    return { className, color }
  }
}
</script> -->
