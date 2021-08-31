<template>
    <div class="card">
        <div class="card-header d-flex flex-column flex-lg-row bg-white">
            <div class="d-flex align-items-center">
                <router-link to="/farms" class="btn btn-sm btn-default">
                    <i class="material-icons">chevron_left</i>
                </router-link>

                <h5 class="card-title mb-0">{{ farm.name }}</h5>
            </div>

            <div class="d-flex align-items-center ml-auto">
                <router-link :to="`/farms/${farm.id}/edit`" class="btn btn-sm btn-default">
                    <Edit /> <span class="d-none d-lg-inline ml-1">แก้ไขรายละเอียดสวน</span>
                </router-link>

                <button v-b-modal.modal-confirm-delete class="btn btn-sm btn-default text-danger">
                    <Delete /> <span class="d-none d-lg-inline ml-1">ลบรายชื่อ</span>
                </button>
            </div>
        </div>

        <div class="card-body">
            <div class="row">
                <div class="col-lg-5">
                    <img :src="farm.media[0]" class="rounded img-fluid w-100 mb-2" />

                    <div class="row no-gutters">
                        <div class="col">
                            <img :src="farm.media[1]" class="p-1 img-fluid rounded" />
                        </div>

                        <div class="col">
                            <img :src="farm.media[2]" class="p-1 img-fluid rounded" />
                        </div>

                        <div class="col">
                            <img :src="farm.media[3]" class="p-1 img-fluid rounded" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">
                    <table class="table">
                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">ชื่อสวน</td>
                            <td class="border-0">{{ farm.name }}</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">เจ้าของ</td>
                            <td class="border-0">{{ farm.owner }}</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">เบอร์โทรศัพท์</td>
                            <td class="border-0">{{ farm.tel }}</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">ที่อยู่สวน</td>
                            <td class="border-0">
                                {{ farm.address }}
                                {{ farm.sub_district }}
                                {{ farm.district }}
                                {{ farm.province }}
                                {{ farm.zip_code }}
                            </td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">รายละเอียด</td>
                            <td class="border-0">{{ farm.description }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <b-modal id="modal-confirm-delete" title="ยืนยัน" @ok="deleting" modal-ok="ยืนยัน" modal-cancel="ยกเลิก">
            ยืนยันการลบข้อมูล
        </b-modal>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Edit from '~/components/icons/Edit';
import Delete from '~/components/icons/Delete';

export default {
    props: ['farm'],
    components: {
        Edit,
        Delete
    },
    methods: {
        ...mapActions('farm', {
            delete: 'delete'
        }),
        deleting () {
            this.delete(this.farm.id).then(
                () => this.$router.push('/farms')
            )
        }
    }
}
</script>
