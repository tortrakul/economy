   <template>
  <div>
    <h1>รายการสั่งซื้อทั้งหมด</h1>

    <div class="container tile">
      <div class="header-table row-table">
        <div class="cell-table index">#</div>
        <div class="cell-table date">วันที่</div>
        <div class="cell-table name">ชื่อ-นามสกุล</div>
        <div class="cell-table price">ราคารวม</div>
        <div class="cell-table farm">สวน</div>
      </div>
      <div class="menu-table row-table">
        <div class="cell-table index">26</div>
        <div class="cell-table date">2 เม.ย. 62</div>
        <div class="cell-table name">Some guy</div>
        <div class="cell-table price">ราคารวม 620บาท</div>
        <div class="cell-table farm">
          <i class="material-icons">insert_drive_file</i>Some farm
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_responsive.scss";

h1 {
  font-size: 1.5em;
}
.container {
  @include respond-to($tablet-portrait) {
    width: 40%;
  }

  .row-table {
    display: flex;
    @include respond-to($tablet-portrait) {
      flex-wrap: wrap;
    }

    &:first-child {
      @include respond-to($tablet-portrait) {
        display: none;
      }
      .cell-table {
        padding: 8px 0px;
        text-align: center;
        // border: 1px solid $dark;
        background-color: $accent;
        flex: 1;
        // border-right: 0px;
        &.menu-table {
          border-top: 0px;
        }

        &:last-child {
          // border-top-right-radius: 7px;
        }
        &:first-child {
          // border-top-left-radius: 7px;
        }
      }
      .index {
        flex: 0.3;
      }
      .date,
      .price {
        flex: 0.8;
      }
      .farm {
        flex: 1.5;
        i {
          font-size: 15px;
        }
      }
      .name {
        flex: 1px;
      }
    }
    &:last-child {
      .cell-table {
        padding: 8px 0px;
        text-align: center;
        // border: 1px solid $dark;
        // border-top: 0;
        // border-right: 0px;
        flex: 1;

        @include respond-to($tablet-portrait) {
          border: none;
          flex: none;
        }

        &.menu-table {
          border-top: 0px;
        }

        &:last-child {
          // border-bottom-right-radius: 7px;
        }
        &:first-child {
          // border-bottom-left-radius: 7px;
          @include respond-to($tablet-portrait) {
            border-bottom-left-radius: 15px;
          }
        }
      }
      .index {
        flex: 0.3;
        @include respond-to($tablet-portrait) {
          flex: none;
          width: 20%;
          height: fit-content;
          background-color: $dark;
          border-radius: 0 15px;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
        }
      }
      .date,
      .price {
        flex: 0.8;
        @include respond-to($tablet-portrait) {
          flex: none;
          &.date {
            width: 80%;
            text-align: right;
            font-size: 13px;
            font-weight: 600;
          }
          &.price {
            order: 5;
            width: 100%;
            text-align: right;
          }
        }
      }
      .name {
        flex: 1px;
        @include respond-to($tablet-portrait) {
          flex: none;
          width: 100%;
          text-align: left;
        }
      }
      .farm {
        flex: 1.5;
        @include respond-to($tablet-portrait) {
          flex: none;
          width: 100%;
          text-align: left;
          order: 4;
        }
        i {
          font-size: 15px;
        }
      }
    }

    .cell-table {
      padding: 8px 0px;
      text-align: center;
      // border: 1px solid $dark;
      // border-top: 0;
      // border-right: 0px;
      flex: 1;

      &.menu-table {
        // border-top: 0px;
      }

      &:last-child {
        // border-right: 1px solid $dark;
        @include respond-to($tablet-portrait) {
          border: none;
        }
      }
    }

    .index {
      flex: 0.3;
    }
    .date,
    .price {
      flex: 0.8;
    }
    .farm {
      flex: 1.5;
      i {
        font-size: 15px;
      }
    }
    .name {
      flex: 1px;
    }
  }
}
</style>
