<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <form name="ask-question" netlify netlify-honeypot="bot-field">
      <div>
        <label>Your Name: </label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Your Email: </label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message: </label>
        <textarea name="message"></textarea>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style>
.contact {
  padding: 15px 30px;
  border-radius: 4px;
  margin: 50px auto;
  max-width: 600px;
}
form {
  margin: 10px;
  max-width: 1200px;
}
textarea,
input {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
</style>
