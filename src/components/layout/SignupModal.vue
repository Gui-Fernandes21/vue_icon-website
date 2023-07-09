<template>
	<div class="container-modal">
		<div class="card-modal">
			<header>
				<h1>How to Sign up / Renew Membership</h1>
			</header>
			<div class="modal-body">
				<p>1 - Pay your membership fee to the following account:</p>

        <div class="account-details">
          <h5>
            Prana Sport Club Asbl.
          </h5>
          <h5> BE14 0019 4238 4883.</h5>
        </div>


				<p>2 - Take a screenshot of the payment confirmation.</p>

				<p>
					3 - Send the screenshot, along with your full name and email
					information, to David at: 
				</p>

        <p class="phone-number">+32 474 26 39 71</p>
        

				<p>
					4 - David will update your membership on the app (Wodify) once the
					payment is confirmed.
				</p>
			</div>
			<div class="modal-footer">
				<button @click="closeModal">Close</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
.container-modal {
	overflow-y: hidden;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.227);
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
}
.card-modal {
	width: 80vw;
	height: 80vh;
	background: #fff;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	padding: 1rem;
}
header {
  border-bottom: 1px solid orange;
}
header > h1 {
	font-size: 2rem;
  margin: 0;
}
.modal-body {
	text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.modal-footer > button {
  border: none;
  background-color: orange;
  color: black;
  cursor: pointer;
  padding: 1rem 3rem;
  border-radius: 5px;
}
.account-details > h5 {
  font-size: 1.5rem;
  margin: 10px 0;
}
.phone-number {
  font-weight: bold;
}
p {
  margin: 10px 0;
}
</style>
