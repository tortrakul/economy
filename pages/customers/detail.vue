<template>
    <div>
        <div class="row">
            <div class="col-lg-4">
                <div class="card mb-3">
                    <div class="card-header d-flex flex-column flex-lg-row pb-0 bg-white border-bottom-0">
                        <div class="d-flex align-items-center">
                            <a href="#" class="btn btn-sm btn-default pl-0">
                                <i class="material-icons">chevron_left</i>
                            </a>

                            <h5 class="card-title mb-0">ชื่อลูกค้า นามสกุล</h5>
                        </div>
                    </div>

                    <div class="card-body d-flex flex-column">
                        <img src="~/assets/img/farmer-img.jpg" class="mx-auto mb-2 img-fluid rounded" />

                        <a href="#" class="btn btn-sm btn-block">
                            <i class="material-icons">add</i> เพิ่มรูปโปรไฟล์
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-lg-8">
                <div class="card mb-3">
                    <div class="card-header d-flex flex-column flex-lg-row bg-white">
                        <div class="d-flex align-items-center">
                            <h5 class="card-title mb-0">ข้อมูลลูกค้า</h5>
                        </div>

                        <div class="d-flex align-items-center ml-auto">
                            <a href="#" class="btn btn-sm btn-default">
                                <Edit /> <span class="d-none d-lg-inline ml-1">แก้ไขรายละเอียดลูกค้า</span>
                            </a>

                            <a href="#" class="btn btn-sm btn-default text-danger">
                                <Delete /> <span class="d-none d-lg-inline ml-1">ลบรายชื่อ</span>
                            </a>
                        </div>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">ชื่อ</td>
                                <td class="border-0">Some name</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">เลขประจำตัวประชาชน</td>
                                <td class="border-0">9727525256141</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">ที่อยู่</td>
                                <td class="border-0">ตู้ ปณ.72 จ. เชียงใหม่ อ.แม่วาง ต.บ้านกาด 50110</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">วันเกิด</td>
                                <td class="border-0">21 มกราคม 2518</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">เบอร์โทรศัพท์</td>
                                <td class="border-0">xxxxxxxxxx</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">อีเมล</td>
                                <td class="border-0">mail@mail.com</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">พร้อมเพย์</td>
                                <td class="border-0">xxxxxxxxxx</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">ไลน์ไอดี</td>
                                <td class="border-0">juntoon.j</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header bg-white">
                <h5 class="card-title mb-0">ที่อยู่จัดส่ง</h5>
            </div>

            <div class="card-body">
                <b-badge variant="light" class="pl-2 pr-3 py-2 mb-3 mb-lg-0 border">
                    <span class="material-icons-outlined mr-2" style="font-size: 12px;">close</span>
                    ตู้ ปณ.72 จ. เชียงใหม่ อ.แม่วาง ต.บ้านกาด 50110
                </b-badge>
            </div>
        </div>
    </div>
</template>

<script>
import Edit from '~/components/icons/Edit';
import Delete from '~/components/icons/Delete';

export default {
    props: ['name'],
    components: {
        Edit,
        Delete
    }
}
</script>
