<script>

export default{
    name: 'PrimaryButton',
    components:{

    },
    props:['msg']
}
</script>


<template>
    <button class="my-btn">{{msg}}</button>
</template>

<style>
    .my-btn{
        background-color: #7FB77E;
        padding: 5px 10px;
        border-radius: 5px;
        border: 0;
        min-width: 100px;
    }
    .my-btn:hover{
        background-color: #274405;
        color: #7FB77E;
    }
</style>