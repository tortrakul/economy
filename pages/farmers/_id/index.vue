<template>
    <div v-if="farmer">
        <div class="row">
            <div class="col-lg-4">
                <div class="card mb-3">
                    <div class="card-header d-flex flex-column flex-lg-row pb-0 bg-white border-bottom-0">
                        <div class="d-flex align-items-center">
                            <router-link v-if="$auth.hasScope('admin')" to="/farmers" class="btn btn-sm btn-default pl-0">
                                <i class="material-icons">chevron_left</i>
                            </router-link>

                            <h5 class="card-title mb-0">{{ farmer.name }}</h5>
                        </div>
                    </div>

                    <div class="card-body d-flex flex-column">
                        <Media
                            :id="farmer.id"
                            model="user"
                            index="0"
                            :media="farmer.avatar"
                            :callback="() => find(farmer.id)"
                            class="mb-2" />
                    </div>
                </div>
            </div>

            <div class="col-lg-8">
                <div class="card mb-3">
                    <div class="card-header d-flex flex-column flex-lg-row bg-white">
                        <div class="d-flex align-items-center">
                            <h5 class="card-title mb-0">ข้อมูลเกษตรกร</h5>
                        </div>

                        <div class="d-flex align-items-center ml-auto">
                            <router-link to="/farms/create" class="btn btn-sm btn-default">
                                <Edit /> <span class="d-none d-lg-inline ml-1">เพิ่มสวน</span>
                            </router-link>

                            <router-link :to="`/farmers/${farmer.id}/edit`" class="btn btn-sm btn-default">
                                <Edit /> <span class="d-none d-lg-inline ml-1">แก้ไขรายละเอียด</span>
                            </router-link>

                            <button v-if="$auth.hasScope('admin')" v-b-modal.modal-confirm-delete class="btn btn-sm btn-default text-danger">
                                <Delete /> <span class="d-none d-lg-inline ml-1">ลบรายชื่อ</span>
                            </button>
                        </div>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">ชื่อ</td>
                                <td class="border-0">{{ farmer.name }}</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">เลขประจำตัวประชาชน</td>
                                <td class="border-0">{{ farmer.citizen_id }}</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">ที่อยู่</td>
                                <td class="border-0">
                                    {{ farmer.address }}
                                    {{ farmer.sub_district }}
                                    {{ farmer.district }}
                                    {{ farmer.province }}
                                    {{ farmer.zip_code }}
                                </td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">วันเกิด</td>
                                <td class="border-0">{{ farmer.birth_date | date }}</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">เบอร์โทรศัพท์</td>
                                <td class="border-0">{{ farmer.tel }}</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">อีเมล</td>
                                <td class="border-0">{{ farmer.email }}</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">พร้อมเพย์</td>
                                <td class="border-0">{{ farmer.promptpay }}</td>
                            </tr>

                            <tr class="d-flex flex-column d-lg-table-row">
                                <td class="border-0 text-nowrap font-weight-bold">ไลน์ไอดี</td>
                                <td class="border-0">{{ farmer.line }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header d-flex align-items-center bg-white">
                <h5 class="card-title mb-0">รายชื่อสวน</h5>
                <small class="ml-auto text-muted">จำนวน {{ farmer.farms.length }} สวน</small>
            </div>

            <div class="card-body">
                <b-badge v-for="farm in farmer.farms" :key="farm.id" variant="light" class="pl-2 pr-3 py-2 mr-3 mb-3 mb-lg-0 border">
                    <a @click.prevent="deletingFarm(farm.id)" class="material-icons-outlined mr-2" style="font-size: 12px;" href="#">close</a>
                    {{ farm.name }}
                </b-badge>
            </div>
        </div>

        <b-modal id="modal-confirm-delete" title="ยืนยัน" @ok="deleting" modal-ok="ยืนยัน" modal-cancel="ยกเลิก">
            ยืนยันการลบข้อมูล
        </b-modal>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Edit from '~/components/icons/Edit';
import Delete from '~/components/icons/Delete';
import Media from '~/components/Media';

export default {
    props: ['name'],
    components: {
        Edit,
        Delete,
        Media
    },
    data: () => ({
        attachingId: null
    }),
    computed: {
        ...mapState('farm', {
            farms: 'list'
        }),
        ...mapState('user', {
            farmer: 'row'
        })
    },
    methods: {
        ...mapActions('farm', {
            fetchFarms: 'all',
            deleteFarm: 'delete'
        }),
        ...mapActions('user', {
            find: 'find',
            delete: 'delete',
            attachFarm: 'attachFarm',
            detachFarm: 'detachFarm'
        }),
        deleting () {
            this.delete(this.farmer.id).then(
                () => this.$router.push('/farmers')
            )
        },
        deletingFarm (id) {
            this.deleteFarm(id).then(
                () => this.find(this.farmer.id)
            )
        },
        attaching () {
            this.attachFarm({ id: this.farmer.id, farmId: this.attachingId }).then(
                () => {
                    this.find(this.farmer.id)
                    this.attachingId = null
                }
            )
        },
        detaching (farmId) {
            this.detachFarm({ id: this.farmer.id, farmId }).then(
                () => this.find(this.farmer.id)
            )
        }
    },
    mounted () {
        this.find(this.$route.params.id)
        this.fetchFarms()
    }
}
</script>
