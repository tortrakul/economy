<template>
  <div>
    <div class="Customer">
      <CustomerName/>
      <CustomerData
        data="ข้อมูลลูกค้า"
        name="Some name"
        phone="xxxxxxxxxx"
        birhtday="21 มกราคม 2518"
        mail="mail@mail.com"
      />
    </div>
    <CustomerList/>
  </div>
</template>

<script>
import CustomerName from "~/components/friend/Customer/CustomerName";
import CustomerData from "~/components/friend/Customer/CustomerData";
import CustomerList from "~/components/friend/Customer/CustomerList";
export default {
  components: {
    CustomerName,
    CustomerData,
    CustomerList
  },
  data() {
    return {};
  }
};
</script>
<style>
.Customer {
  display: flex;
}
</style>
