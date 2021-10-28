<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <form
      name="contactForm"
      method="post"
      @submit.prevent="handleSubmit"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thanks"
    >
      <input type="hidden" name="form-name" value="contactForm" />
      <div>
        <label>Name</label>
        <input v-model="name" name="name" />
      </div>

      <div>
        <label>Email</label>
        <input v-model="email" name="email" />
      </div>

      <div>
        <label>Message</label>
        <textarea v-model="message" name="message"></textarea>
      </div>

      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contactForm",
          ...this.form,
        }),
      })
        .then(() => {
          this.$router.push("thanks");
        })
        .catch(() => {
          this.$router.push("404");
        });
    },
  },
};
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
