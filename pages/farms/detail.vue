<template>
  <div>
    <FarmCard name="สวนกระท้อน"/>
    <FarmCardFooter/>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  }
}
</script>

<script>
import FarmCard from "~/components/friend/Farm/FarmCard";
import FarmCardFooter from "~/components/friend/Farm/FarmCardFooter";
export default {
  components: {
    FarmCard,
    FarmCardFooter
  }
};
</script>