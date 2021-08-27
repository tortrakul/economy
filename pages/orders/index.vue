<template>
    <div>
        <div class="card card-body mb-3">
            <h5 class="card-title">รายการสั่งซื้อ</h5>

            <div class="d-flex mb-5">
                <div class="input-group mr-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="material-icons">search</i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="ค้นหา" />
                </div>

                <button class="btn btn-default">
                    <span class="material-icons-outlined">tune</span>
                </button>
            </div>

            <div class="row">
                <div class="col-md-6 col-lg-3" v-for="(order,index) in orders" :key="index">
                    <TagCard
                        class="mb-3"
                        cover="assets/Picture.png"
                        :title="`[${order.no}] ${order.name}`"
                        :subtitle="order.calendar"
                        profile="assets/Picture.png"
                        :name="order.farm"
                        tag-class="primary"
                        :tag-label="order.status" />

                    <nuxt-link to="/orders/detail" class="stretched-link" />
                </div>
            </div>
        </div>

        <nav class="d-flex">
            <ul class="pagination ml-auto">
                <li class="page-item">
                    <a class="page-link text-secondary" href="#">
                        <span class="material-icons small">chevron_left</span>
                    </a>
                </li>

                <li class="page-item">
                    <a class="page-link text-secondary" href="#">1</a>
                </li>

                <li class="page-item">
                    <a class="page-link text-secondary" href="#">2</a>
                </li>

                <li class="page-item">
                    <a class="page-link text-secondary" href="#">
                        <span class="material-icons small">chevron_right</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import TagCard from '~/components/TagCard';

export default {
    components: {
        TagCard
    },
    data() {
        return {
            orders: [{
                no: '20',
                status: 'ชำระเงินแล้ว',
                name: 'Some guy',
                calendar: '12 เม.ย 2562',
                farm: 'Some farm'
            }, {
                no: '21',
                status: 'ยืนยันแล้ว',
                name: 'Some guy',
                calendar: '12 เม.ย 2562',
                farm: 'Some farm'
            }, {
                no: '22',
                status: 'จัดเตรียมสินค้า',
                name: 'Some guy',
                calendar: '12 เม.ย 2562',
                farm: 'Some farm'
            }, {
                no: '23',
                status: 'จัดส่งสินค้า',
                name: 'Some guy',
                calendar: '12 เม.ย 2562',
                farm: 'Some farm'
            }]
        }
    }
}
</script>
