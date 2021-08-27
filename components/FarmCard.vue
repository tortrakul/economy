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
                <a href="#" class="btn btn-sm btn-default">
                    <Edit /> <span class="d-none d-lg-inline ml-1">แก้ไขรายละเอียดสวน</span>
                </a>

                <a href="#" class="btn btn-sm btn-default text-danger">
                    <Delete /> <span class="d-none d-lg-inline ml-1">ลบรายชื่อ</span>
                </a>
            </div>
        </div>

        <div class="card-body">
            <div class="row">
                <div class="col-lg-5">
                    <img src="~/assets/img/farm.jpg" class="rounded img-fluid w-100 mb-2" />

                    <div class="row no-gutters">
                        <div class="col">
                            <img src="~/assets/img/farm.jpg" class="p-1 img-fluid rounded" />
                        </div>

                        <div class="col">
                            <img src="~/assets/img/farm.jpg" class="p-1 img-fluid rounded" />
                        </div>

                        <div class="col">
                            <img src="~/assets/img/farm.jpg" class="p-1 img-fluid rounded" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">
                    <table class="table">
                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">ชื่อสวน</td>
                            <td class="border-0">สวนภูวิไล</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">เจ้าของ</td>
                            <td class="border-0">John Doe</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">เบอร์โทรศัพท์</td>
                            <td class="border-0">xxx-xxxxxxx</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">ที่อยู่สวน</td>
                            <td class="border-0">ตู้ ปณ. 72 ปณจ. ฝาง อำเภอฝาง จังหวัดเชียงใหม่ 50110</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">รายละเอียด</td>
                            <td class="border-0">
                                สวนส้ม ธนาธร เป็นสวนส้มที่สามารถปลูกส้มได้มากกว่า 10 สายพันธุ์
                                แต่ทีรู้จักกันดี คือ ส้มสายน้ำผึ้ง ส้มฟรีมองต์ธนาธร และปัจจุบัน ได้พัฒนา
                                ให้กลายเป็นแหล่งท่องเที่ยวสามารถ เข้าไปชมสวนและชิมส้มสด ๆ
                            </td>
                        </tr>
                    </table>
                </div>
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
