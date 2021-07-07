<template>
  <div>
    <StockCard/>
    <StockCardFooter/>
  </div>
</template>

<script>
import StockCard from "~/components/friend/Stock/StockCard";
import StockCardFooter from "~/components/friend/Stock/StockCardFooter";
export default {
  components: {
    StockCard,
    StockCardFooter
  }
}
</script>