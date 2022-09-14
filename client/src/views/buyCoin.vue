<script>
    export default {

    }
</script>

<template>
<div class="add-coin">
    <div class="add-container">
      <h1>Buy Coin</h1>
      <form action="">
        <div class="form-buy">
          <label for="">Coin Name</label>
          <input type="text" name="name" value="Bitcoin" readonly>
        </div>

        <div class="form-buy">
          <label for="">Coin Price</label>
          <input type="text" name="number" value="20.940" readonly>
        </div>

        <div class="form-buy">
          <label for="">Coin Quantity</label>
          <input type="number" name="quantity" placeholder="Input the amount you wanna buy !">
        </div>

        <button type="submit" class="form-btn buy">Buy</button>
      </form>
    </div>
</div>

</template>