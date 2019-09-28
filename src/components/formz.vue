<template>
<div class="form-wrapper">
<form  class="the-form" sname="contact" method="POST" data-netlify="true">
<input type="hidden" name="contact" value="contact" />
  <p>
    <label>
      Your Name: <input type="text" name="name" v-model="form.name" />
    </label>
  </p>
  <p>
    <label>
      Your Email: <input type="email" name="email" v-model="form.email" />
    </label>
  </p>
  <p>
    <label>
      Message: <textarea name="message" v-model="form.message" />
    </label>
  </p>
  <p>
    <button type="submit" @click.prevent="handleSubmit">Send</button>
  </p>
</form>
<div class="thank-you-msg hidden">
Thanks for your interest. I'll be in touch withing the next 72 hours.
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
    },
    handleSubmit() {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'contact', ...this.form }),
      })
        .then(() => {
          const theForm = document.querySelector('.the-form')
          var theThanks = document.querySelector('.thank-you-msg')
          theForm.classList.add("hidden");
          theThanks.classList.remove("hidden");
          })
        .catch(error => alert(error));
    },
  },
};
</script>

<style>
.hidden {
  display:none;
}
form {
  width:90%;
  max-width:600px;
  margin:0 auto;
}
label {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 24px;
}
input {
    height: 35px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 800;
    text-indent: 20px;
    background: black;
    color: gold;
    border: 2px solid white;
    border-radius: 31px;
}
form button {
    font-size: 32px;
    display: block;
    width: 90%;
    margin: 40px auto;
    border-radius: 30px;
    outline: none;
    border: none;
    padding: 10px 10px;
    background: #212121;
    color: gold;
    border: 3px solid gold;
    transition-duration:280ms;
    cursor:pointer;
        text-transform: uppercase;
    font-weight: 800;
}
form button:hover {
    background: gold;
    color: black;
    transition-duration:280ms;
}
textarea {
min-height: 100px;
    font-family: 'Roboto Condensed', sans-serif;
    background: black;
    border: 3px solid white;
    border-radius: 75px;
    color: gold;
    text-indent: 0px;
    padding: 10px 30px;
}

@media (max-width:400px) {
  label {
    font-size: 16px;
}
textarea {
min-height: 60px;
}
form button {
    font-size: 18px;
    margin: 20px auto;
    margin-bottom: 0px;
    padding: 10px 10px;
    }
  }
</style>