<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <form method="post" @submit.prevent="handleSubmit">
      <input type="hidden" name="form-name" value="ask-question" />
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          @input="(ev) => (form.name = ev.target.value)"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          @input="(ev) => (form.email = ev.target.value)"
        />
      </div>

      <div>
        <label>Message</label>
        <textarea
          name="message"
          @input="(ev) => (form.message = ev.target.value)"
        ></textarea>
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
      form: {
        name: "",
        email: "",
        message: "",
      },
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
      fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "ask-question",
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

<style scoped>
.contact {
  max-width: 600px;
  margin: 20px auto;
  padding: 10px;
}
</style>
