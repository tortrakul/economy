<template>
    <div class="px-3">
        การแจ้งเตือน

        <hr class="my-1" />

        <div
            class="position-relative d-flex py-2 border-bottom"
            v-for="(order,index) in orders"
            :key="index">
            <div class="d-flex justify-content-center align-items-center p-3 bg-light">
                <Basket
                    :class="{ 'text-primary': order.status == 'ออร์เดอร์ใหม่' }"
                    style="width: 36px; height: 36px;" />
            </div>

            <div class="ml-3">
                <a class="mb-0 text-nowrap stretched-link" href="#">
                    Order no. {{ order.orderNumber }}
                </a>

                <p class="mb-0 small text-muted">{{ order.status }}</p>

                <p class="mb-0 small">{{ order.price }} บาท</p>
            </div>
        </div>

        <a href="#" class="btn btn-sm btn-block btn-dafault">
            ดูทั้งหมด
        </a>
    </div>
</template>

<script>
import Basket from '~/components/icons/Basket';

export default {
    components: {
        Basket
    },
    data() {
        return {
            orders: [{
                orderNumber: "000040",
                status: "ออร์เดอร์ใหม่",
                price: "220"
            }, {
                orderNumber: "000041",
                status: "ออร์เดอร์ใหม่",
                price: "260"
            }, {
                orderNumber: "000042",
                status: "ออร์เดอร์ใหม่",
                price: "300"
            }, {
                orderNumber: "000043",
                status: "จัดส่งแล้ว",
                price: "300"
            }, {
                orderNumber: "000044",
                status: "จัดส่งแล้ว",
                price: "300"
            }]
        }
    }
}
</script>
