<script>

export default{
    name: 'OrderItems',
    components:{

    },
    props:['el']
}
</script>


<template>
    <tr>
        <td>{{el.id}}</td>
        <td>{{el.PlanId}}</td>
        <td>{{el.Plan.name}}</td>
        <td>{{el.quantity}}</td>
        <td>{{el.priceSum}}</td>
    </tr>
</template>