<template>
    <div class="container-test-components">
        <div class="wrapper-card">
            <div 
                class="card-list-products"
                v-for="(product,index) in listProduct "
                :key='index'
            >
                <div class="card-list-product">
                    <img :src="product.imageProduct">
                    <div> {{product.name}} </div>
                    <div class="footer-card">
                        <div class="price">{{product.price}} บาท</div>
                        <span>/</span>
                        <div class="number-of-product">{{product.number}} หน่วย</div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            listProduct:[
                {
                    name: 'องุ่น',
                    type: 'General',
                    imageProduct: 'https://sites.google.com/site/reuxngnarukhxngxngun1/_/rsrc/1472864726221/thima-khxng-xngun/2.jpg?height=391&width=620',
                    price: '000',
                    number: '00',
                    imageUser:'http://e.lnwfile.com/27wnqv.jpg'
                },
                {
                    name: 'ตะขบ',
                    type: 'Hydroponics',
                    imageProduct: 'https://puechkaset.com/wp-content/uploads/2016/05/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%95%E0%B8%B0%E0%B8%82%E0%B8%9A.jpg',
                    price: '000',
                    number: '00',
                    imageUser:'http://e.lnwfile.com/27wnqv.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.container-test-components{
    .wrapper-card{
        display: flex;
        flex-wrap: wrap;
        .card-list-products{
            width: 19%;
            margin: 1% 0.5%;
            .card-list-product{
                height: 200px;
                background: $danger;
                border-radius: 4px 10px 4px 10px;
                position: relative;
                padding: 8px;
                & > img{
                    width: 100%;
                    height: 110px;
                    border-radius:5px;
                }
                .footer-card{
                    display: flex;
                    font-size: 12px;
                    color: $dark;
                    span{
                        margin: 0 5px;
                    }
                }
            }
        }
    }
}
</style>
