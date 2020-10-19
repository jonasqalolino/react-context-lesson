import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100
	const publishableKey =
		'pk_test_51HJcXKE89APcjYb1csWk2JASFRslt9tCSb2Lap3xrelG1cx8R6SomV5GDvNmbiKcao7qQcgZdP9gDo4lrSeMFQ7S00XNKBDGF5'

	const onToken = (token) => {
		console.log(token)
		alert('Payment Succesful!')
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton
