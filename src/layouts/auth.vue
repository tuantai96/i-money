<template>
  <NavigationBrand/>
  <slot/>
</template>
<script>
import NavigationBrand from "@/components/NavigationBrand"
export default {
  components: { NavigationBrand },
}

</script>
