<template>
    <div class="position-relative d-flex mb-2 bg-light rounded embed-responsive embed-responsive-1by1">
        <template v-if="media">
            <img :src="src" class="rounded img-fluid w-100" />

            <a @click.prevent="deleting" href="#" class="position-absolute" style="top: 6px; right: 6px;">
                <span class="material-icons-outlined">close</span>
            </a>
        </template>

        <template v-else>
            <span class="material-icons-outlined m-auto">add</span>

            <input @change="e => uploading(e)" type="file" ref="file" class="d-none" />

            <a @click.prevent="$refs.file.click()" href="#" class="stretched-link"></a>
        </template>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    props: ['src', 'id', 'model', 'index', 'mediaId', 'callback'],
    data: () => ({
        media: null
    }),
    methods: {
        ...mapActions('media', {
            uploadMedia: 'upload',
            deleteMedia: 'delete'
        }),
        deleting () {
            this.deleteMedia(this.mediaId).then(
                () => {
                    this.media = null
                    this.callback()
                }
            )
        },
        uploading (e) {
            this.uploadMedia({
                id: this.id,
                model: this.model,
                index: this.index,
                media: e.target.files[0]
            }).then(() => this.callback())
        }
    },
    mounted () {
        this.media = this.mediaId
    }
}
</script>

