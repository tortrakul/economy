<template>
    <div class="card card-body">
        <h5 class="card-title">รายละเอียดเพิ่มเติม</h5>

        <div v-for="comment in list" :key="comment.id" class="d-flex flex-row p-3 border-bottom">
            <Media
                :key="`media-${comment.id}`"
                :id="comment.id"
                model="comment"
                index="0"
                :media="comment.media"
                :callback="fetchComments"
                style="width: 100px; height: 100px;" />

            <div class="w-100 ml-3">
                <template v-if="editing && editing.id == comment.id">
                    <textarea v-model="editing.body" class="form-control mb-3" rows="5"></textarea>
                    <button class="btn btn-gradient-primary px-4" @click="onEdit" :disabled="!editing.body">ส่ง</button>
                    <button class="btn btn-default" @click="editing = null">ยกเลิก</button>
                </template>

                <template v-else>
                    {{ comment.body }}

                    <p class="small text-muted mb-0">{{ comment.created_at | date }}</p>

                    <button @click="setEditing(comment)" class="btn btn-sm mt-3 text-default">แก้ไข</button>
                    <button @click="onDelete(comment.id)" class="btn btn-sm mt-3 text-danger">ลบ</button>
                </template>
            </div>
        </div>

        <textarea v-model="body" class="form-control my-3" rows="5"></textarea>

        <div class="d-flex align-items-center">
            <input @change="e => handleFileUpload(e)" type="file" ref="file" class="d-none" />

            <a @click.prevent="$refs.file.click()" href="#" class="btn btn-link">
                <span class="material-icons-outlined">photo_camera</span>
                เพิ่มรูป
            </a>

            <div v-if="file" class="ml-3">
                {{ file.name }}
            </div>

            <button class="btn btn-gradient-primary px-4 ml-auto" @click="onSubmit" :disabled="!body">ส่ง</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    props: ['id', 'model', 'callback'],
    data: () => ({
        body: '',
        file: null,
        editing: null
    }),
    computed: {
        ...mapState('comment', [
            'list'
        ])
    },
    methods: {
        ...mapActions({
            all: 'comment/all',
            create: 'comment/create',
            update: 'comment/update',
            deleteComment: 'comment/delete'
        }),
        handleFileUpload (e) {
            this.file = e.target.files[0]
        },
        fetchComments () {
            this.all({
                id: this.id,
                model: this.model
            })
        },
        onSubmit () {
            this.create({
                id: this.id,
                model: this.model,
                body: this.body,
                file: this.file
            }).then(() => {
                this.fetchComments()

                this.body = ''
                this.file = null
            })
        },
        setEditing (comment) {
            this.editing = Object.assign({}, comment)
        },
        onEdit () {
            this.update(this.editing).then(() => {
                this.fetchComments()
                this.editing = null
            })
        },
        onDelete (id) {
            this.deleteComment(id).then(() => this.fetchComments())
        }
    },
    mounted () {
        this.fetchComments()
    }
}
</script>
