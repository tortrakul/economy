<template>
    <div>
        <div class="card card-body mb-3">
            <h5 class="card-title">รายชื่อสินค้า</h5>

            <div class="d-flex mb-5">
                <button class="btn btn-gradient-primary pr-3 text-nowrap">
                    <i class="material-icons">add</i> เพิ่มสินค้า
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
                        title="ชื่อสินค้า"
                        subtitle="8 บาท/kg"
                        profile="assets/Picture.png"
                        name="สวนภูวิไล"
                        tag-class="primary"
                        tag-label="Lorem ipsum" />

                    <nuxt-link to="/products/detail" class="stretched-link" />
                </div>
            </div>
        </div>

        <nav class="d-flex">
            <ul class="pagination ml-auto">
                <li class="page-item">
                    <a class="page-link text-secondary" href="#">
                        <span class="material-icons small">chevron_left</span>
                    </a>
                </li>

                <li class="page-item">
                    <a class="page-link text-secondary" href="#">1</a>
                </li>

                <li class="page-item">
                    <a class="page-link text-secondary" href="#">2</a>
                </li>

                <li class="page-item">
                    <a class="page-link text-secondary" href="#">
                        <span class="material-icons small">chevron_right</span>
                    </a>
                </li>
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
