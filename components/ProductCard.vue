<template>
    <div class="card">
        <div class="card-header d-flex flex-column flex-lg-row bg-white">
            <div class="d-flex align-items-center">
                <router-link to="/products" class="btn btn-sm btn-default">
                    <i class="material-icons">chevron_left</i>
                </router-link>

                <h5 class="card-title mb-0">{{ product.name }}</h5>
            </div>

            <div class="d-flex align-items-center ml-auto">
                <router-link :to="`/products/${product.id}/edit`" class="btn btn-sm btn-default">
                    <Edit /> <span class="d-none d-lg-inline ml-1">แก้ไขรายละเอียด</span>
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
                        <template v-if="product.media_1">
                            <img :src="product.media_1.url" class="rounded img-fluid w-100" />
                            <a @click.prevent="deletingMedia(product.media_1.id)" href="#" class="position-absolute" style="top: 6px; right: 6px;">
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
                                <template v-if="product.media_2">
                                    <img :src="product.media_2.url" class="rounded img-fluid w-100" />
                                    <a @click.prevent="deletingMedia(product.media_2.id)" href="#" class="position-absolute" style="top: 6px; right: 6px;">
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
                                <template v-if="product.media_3">
                                    <img :src="product.media_3.url" class="rounded img-fluid w-100" />
                                    <a @click.prevent="deletingMedia(product.media_3.id)" href="#" class="position-absolute" style="top: 6px; right: 6px;">
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
                                <template v-if="product.media_4">
                                    <img :src="product.media_4.url" class="rounded img-fluid w-100" />
                                    <a @click.prevent="deletingMedia(product.media_4.id)" href="#" class="position-absolute" style="top: 6px; right: 6px;">
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
                            <td class="border-0 text-nowrap font-weight-bold">ชื่อ</td>
                            <td class="border-0">{{ product.name }}</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">จำนวน</td>
                            <td class="border-0">{{ product.amount }} {{ product.unit }}</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">ราคาต่อหน่วย</td>
                            <td class="border-0">{{ product.unit_price }} บาท</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">วันที่</td>
                            <td class="border-0">{{ product.date }}</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">ราคา</td>
                            <td class="border-0">{{ product.total }} บาท</td>
                        </tr>

                        <tr class="d-flex flex-column d-lg-table-row">
                            <td class="border-0 text-nowrap font-weight-bold">คำอธิบาย</td>
                            <td class="border-0">{{ product.description }}</td>
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
        ...mapState('product', {
            product: 'row'
        }),
    },
    methods: {
        ...mapActions('product', {
            find: 'find',
            delete: 'delete'
        }),
        ...mapActions('media', {
            uploadMedia: 'upload',
            deleteMedia: 'delete'
        }),
        deleting () {
            this.delete(this.product.id).then(
                () => this.$router.push('/products')
            )
        },
        deletingMedia (id) {
            this.deleteMedia(id).then(() => this.find(this.product.id))
        },
        uploadingMedia (e, index) {
            this.uploadMedia({
                id: this.product.id,
                model: 'transaction',
                index: index,
                media: e.target.files[0]
            }).then(() => this.find(this.product.id))
        }
    }
}
</script>
