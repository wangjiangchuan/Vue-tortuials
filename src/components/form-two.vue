<template>
  <div>
    <form>
      <div slot='form-header'>
        <h2>Form Two - Login Info</h2>
        <h3>Fill in this form to login!</h3>
      </div>
      <div slot='form-inputs'>
        <input placeholder="username" type="text" name="username">
        <input placeholder="password" type="password" name="password">
      </div>
      <div slot='form-controls'>
        <button type="button" name="submit">submit</button>
      </div>
    </form>
  </div>

</template>

<script type="text/javascript">
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style media="screen" scoped>
h2 {
  text-align: center;
}
h3 {
  text-align: center;
}
form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}

</style>
