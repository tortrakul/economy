<template>
    <div class="card">
        <div class="card-header d-flex flex-column flex-lg-row bg-white">
            <div class="d-flex align-items-center">
                <a href="#" class="btn btn-sm btn-default">
                    <i class="material-icons">chevron_left</i>
                </a>

                <h5 class="card-title mb-0">{{ name }}</h5>
            </div>

            <div class="d-flex align-items-center ml-auto">
                <!--  -->
            </div>
        </div>

        <div class="card-body">
            <div class="row">
                <div class="col-lg-5">
                    <img src="~/assets/img/farm.jpg" class="rounded img-fluid w-100 mb-2" />
                </div>

                <div class="col-lg-7">
                    <table class="table">
                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">ชื่อสินค้า</td>
                            <td class="border-0">ลำไย</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">จำนวน</td>
                            <td class="border-0">200 กก.</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">ราคาต่อหน่วย</td>
                            <td class="border-0">13 บาท</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">วันที่เก็บเกี่ยว</td>
                            <td class="border-0">4 เมษายน 2562</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">ราคา</td>
                            <td class="border-0">26,000 บาท</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">คำอธิบาย</td>
                            <td class="border-0">เกรด A</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>
