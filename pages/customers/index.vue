<template>
    <div>
        <div class="card card-body mb-3">
            <h5 class="card-title">รายชื่อลูกค้า</h5>

            <div class="d-flex mb-5">
                <button class="btn btn-gradient-primary pr-3 text-nowrap">
                    <i class="material-icons">add</i> เพิ่มลูกค้า
                </button>

                <div class="input-group mx-3">
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
                <div class="col-md-6 col-lg-3">
                    <div class="position-relative">
                        <CustomerCard />

                        <nuxt-link to="/customers/detail" class="stretched-link" />
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="position-relative">
                        <CustomerCard />

                        <nuxt-link to="/customers/detail" class="stretched-link" />
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="position-relative">
                        <CustomerCard />

                        <nuxt-link to="/customers/detail" class="stretched-link" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomerCard from '~/components/CustomerCard';

export default {
    components: {
        CustomerCard
    }
}
</script>
