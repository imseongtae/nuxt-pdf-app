<template>
  <div class="caculation-page">
    <!--  -->
    <h2 class="caculation-page__title">Calculation</h2>

    <!-- pdf app -->
    <client-only>
      <pdf-viewer
        class="pdf"
        :src="pdfSrc"
        :page="1"
        @num-pages="totalCount = $event"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Calculation',
  data() {
    return {
      totalCount: 0,
      pdfSrc: require('@/assets/pdf/sample.pdf'),
    };
  },
};
</script>

<style scoped>
.pdf {
  width: 100%;
  height: 100%;
  border: 1px solid red;
  user-select: none;
}

.caculation-page__title {
  color: dodgerblue;
}
</style>
