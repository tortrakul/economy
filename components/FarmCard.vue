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
                    <!-- file 1 -->
                    <div class="position-relative d-flex mb-2 bg-light rounded embed-responsive embed-responsive-1by1">
                        <template v-if="farm.media_1">
                            <img :src="farm.media_1.url" class="rounded img-fluid w-100" />
                            <a @click.prevent="deletingMedia(farm.media_1.id)" href="#" class="position-absolute" style="top: 6px; right: 6px;">
                                <span class="material-icons-outlined">close</span>
                            </a>
                        </template>
                        <template v-else>
                            <span class="material-icons-outlined m-auto">add</span>
                            <input @change="e => uploadingMedia(e, 0)" type="file" ref="file_1" class="d-none" />
                            <a @click.prevent="$refs.file_1.click()" href="#" class="stretched-link"></a>
                        </template>
                    </div>

                    <div class="row no-gutters">
                        <div class="col px-1">
                            <!-- file 2 -->
                            <div class="position-relative d-flex bg-light rounded embed-responsive embed-responsive-1by1">
                                <template v-if="farm.media_2">
                                    <img :src="farm.media_2.url" class="rounded img-fluid w-100" />
                                    <a @click.prevent="deletingMedia(farm.media_2.id)" href="#" class="position-absolute" style="top: 6px; right: 6px;">
                                        <span class="material-icons-outlined">close</span>
                                    </a>
                                </template>
                                <template v-else>
                                    <span class="material-icons-outlined m-auto">add</span>
                                    <input @change="e => uploadingMedia(e, 1)" type="file" ref="file_2" class="d-none" />
                                    <a @click.prevent="$refs.file_2.click()" href="#" class="stretched-link"></a>
                                </template>
                            </div>
                        </div>

                        <div class="col px-1">
                            <!-- file 3 -->
                            <div class="position-relative d-flex bg-light rounded embed-responsive embed-responsive-1by1">
                                <template v-if="farm.media_3">
                                    <img :src="farm.media_3.url" class="rounded img-fluid w-100" />
                                    <a @click.prevent="deletingMedia(farm.media_3.id)" href="#" class="position-absolute" style="top: 6px; right: 6px;">
                                        <span class="material-icons-outlined">close</span>
                                    </a>
                                </template>
                                <template v-else>
                                    <span class="material-icons-outlined m-auto">add</span>
                                    <input @change="e => uploadingMedia(e, 2)" type="file" ref="file_3" class="d-none" />
                                    <a @click.prevent="$refs.file_3.click()" href="#" class="stretched-link"></a>
                                </template>
                            </div>
                        </div>

                        <div class="col px-1">
                            <!-- file 4 -->
                            <div class="position-relative d-flex bg-light rounded embed-responsive embed-responsive-1by1">
                                <template v-if="farm.media_4">
                                    <img :src="farm.media_4.url" class="rounded img-fluid w-100" />
                                    <a @click.prevent="deletingMedia(farm.media_4.id)" href="#" class="position-absolute" style="top: 6px; right: 6px;">
                                        <span class="material-icons-outlined">close</span>
                                    </a>
                                </template>
                                <template v-else>
                                    <span class="material-icons-outlined m-auto">add</span>
                                    <input @change="e => uploadingMedia(e, 3)" type="file" ref="file_4" class="d-none" />
                                    <a @click.prevent="$refs.file_4.click()" href="#" class="stretched-link"></a>
                                </template>
                            </div>
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
import { mapActions, mapState } from 'vuex'
import Edit from '~/components/icons/Edit';
import Delete from '~/components/icons/Delete';

export default {
    components: {
        Edit,
        Delete
    },
    computed: {
        ...mapState('farm', {
            farm: 'row'
        }),
    },
    methods: {
        ...mapActions('farm', {
            find: 'find',
            delete: 'delete'
        }),
        ...mapActions('media', {
            uploadMedia: 'upload',
            deleteMedia: 'delete'
        }),
        deleting () {
            this.delete(this.farm.id).then(
                () => this.$router.push('/farms')
            )
        },
        deletingMedia (id) {
            this.deleteMedia(id).then(() => this.find(this.farm.id))
        },
        uploadingMedia (e, index) {
            this.uploadMedia({
                id: this.farm.id,
                model: 'farm',
                index: index,
                media: e.target.files[0]
            }).then(() => this.find(this.farm.id))
        }
    }
}
</script>
