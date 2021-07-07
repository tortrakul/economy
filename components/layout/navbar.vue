<template>
    <div class="navbar-wrapper">
        <div class="navbar">
            <div class="logo">
                <img src="~/assets/img/Picture.jpg">
            </div>
            <div class="links">
                <div class="link notification">
                    <div class="dot"></div>
                    <i class="far fa-bell"></i>
                    <span>แจ้งเตือน</span>
                </div>
                <!-- <div class="link user">
                    <span>User</span>
                </div> -->
                <div class="link logout">
                    <i class="fas fa-power-off"></i>
                    <span>ออกจากระบบ</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.navbar-wrapper {
    // background-color: $white;
    width: 100%;
    border-bottom: 1px solid $border-color;
    .navbar {
        min-height: 40px;
        width: 83%;
        margin: 0px auto;
        display: flex;
        justify-content: space-between;
        .logo {
            padding: 4px 0;
            height: 60px;
            img {
                height: 100%;
            }
        }
        .links {
            display: flex;
            .dot{
                height: 5px;
                width: 5px;
                background-color: #62a32a;
                border-radius: 50%;
                display: inline-block;
                margin-right: 6px;
            }
            .link {
                display: flex;
                align-items: center;
                cursor: pointer;
                padding: 0 16px;
                &.notification {
                    .material-icons {
                        color: $danger;
                    }
                }
                &.logout {
                    padding-right: 0;
                    &:hover {
                        color: $primary;
                    }
                }
                span {
                    margin-left: 8px;
                }
            }
        }

    }

}
</style>
