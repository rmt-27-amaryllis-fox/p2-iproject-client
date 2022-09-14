<script>
import NavBar from '../components/NavBar.vue';
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useProductStore } from '../stores/product';
import { useCustomerStore } from '../stores/customer';

export default{
    name: 'CartPage',
    components:{
    NavBar
    },
    computed:{
        ...mapState(useProductStore, ['PlanList']),
        ...mapWritableState(useProductStore, ['pageNumber']),
        ...mapWritableState(useCustomerStore, ['currentPage'])
    },
    created(){
        this.currentPage = 'CartPage'
    }
}
</script>


<template>
<NavBar/>

<section>
    <table>
        <thead>
            <th>
                <td>
                    hteh
                </td>
                <td>
                    hteh
                </td>
                <td>
                    hteh
                </td>
                <td>
                    hteh
                </td>
            </th>
        </thead>
        <tbody>
            
        </tbody>
    </table>
</section>
</template>