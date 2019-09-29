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
    <span class="validation-message hidden">Please enter a valid E-mail address</span>
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
    handleSubmit(event) {
     
     function emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }

console.log(this.form.email, 'the email')

var theEmail = emailIsValid (this.form.email)

console.log(theEmail, 'the email after function')
//      if (emailIsValid(this.form.email)==true) {
//alert('true')
//}
      


       if (theEmail==false) {
        var errorMsg = document.querySelector('.validation-message')
        errorMsg.classList.remove("hidden");
        errorMsg.classList.add("slideDown");
         event.preventDefault();
         return false;
       } else {
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
       }
    }
  }
}
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

span.validation-message {
    color: #f50066;
    font-weight: 800;
    background: white;
    display: block;
    width: 70%;
    margin: 0 auto;
    border-radius: 27px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    height: 35px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    z-index: -1;
    top: 0px;
    text-transform: uppercase;
    font-size: 14px;
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.validation-message.hidden {
  max-height: 0;
}

.slideDown{
  animation-name: slideDown;
  -webkit-animation-name: slideDown;  

  animation-duration: 1s; 
  -webkit-animation-duration: 1s;

  animation-timing-function: ease;  
  -webkit-animation-timing-function: ease;  

  visibility: visible !important;           
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  50%{
    transform: translateY(8%);
  }
  65%{
    transform: translateY(-4%);
  }
  80%{
    transform: translateY(4%);
  }
  95%{
    transform: translateY(-2%);
  }     
  100% {
    transform: translateY(0%);
  }   
}

@-webkit-keyframes slideDown {
  0% {
    -webkit-transform: translateY(-100%);
  }
  50%{
    -webkit-transform: translateY(8%);
  }
  65%{
    -webkit-transform: translateY(-4%);
  }
  80%{
    -webkit-transform: translateY(4%);
  }
  95%{
    -webkit-transform: translateY(-2%);
  }     
  100% {
    -webkit-transform: translateY(0%);
  } 
}

@media (max-width:600px) {
span.validation-message {
    font-size: 11px;
    font-weight: 400;
    width: 79%;
    border-radius: 0px;
    height: 24px;
    background: rgba(72, 72, 72, 0.78);
}
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