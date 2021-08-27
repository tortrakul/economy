<template>
    <div>
        <div class="card card-body mb-3">
            <h5 class="card-title">รายชื่อสวน</h5>

            <div class="d-flex mb-5">
                <button class="btn btn-gradient-primary pr-3 text-nowrap">
                    <i class="material-icons">add</i> เพิ่มสวน
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
                <div class="col-md-6 col-lg-3" v-for="(tag,index) in tags" :key="index">
                    <TagCard
                        class="mb-3"
                        cover="assets/Picture.png"
                        title="ชื่อสวน"
                        subtitle="จังหวัด"
                        profile="assets/Picture.png"
                        name="ชื่อเจ้าของสวน"
                        tag-class="primary"
                        tag-label="Lorem ipsum" />

                    <nuxt-link to="/farms/detail" class="stretched-link" />
                </div>
            </div>
        </div>

        <nav class="d-flex">
            <ul class="pagination ml-auto">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import TagCard from '~/components/TagCard';

export default {
  components: {
    TagCard
  },
  data() {
    return {
      tags: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
}
</script>
