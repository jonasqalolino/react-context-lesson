import React, { useContext } from 'react'
// import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'

// import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss'

import CollectionsContext from '../../contexts/collections/collections.context'

// ? Original
// const CollectionPage = ({ collection }) => {
// 	const { title, items } = collection
// 	return (
// 		<div className='collection-page'>
// 			<h2 className='title'>{title}</h2>
// 			<div className='items'>
// 				{items.map((item) => (
// 					<CollectionItem key={item.id} item={item} />
// 				))}
// 			</div>
// 		</div>
// 	)
// }

// ? Using useContext  👇 *** EASY ***
const CollectionPage = ({ match }) => {
	const collections = useContext(CollectionsContext)
	const collection = collections[match.params.collectionId]
	const { title, items } = collection

	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

// ? Using CollectionContext.Consumer  👇 *** HARD ***
// const CollectionPage = ({ collection, match }) => {
// 	return (
// 		<CollectionsContext.Consumer>
// 			{(collections) => {
// 				const collection = collections[match.params.collectionId]
// 				const { title, items } = collection
// 				return (
// 					<div className='collection-page'>
// 						<h2 className='title'>{title}</h2>
// 						<div className='items'>
// 							{items.map((item) => (
// 								<CollectionItem key={item.id} item={item} />
// 							))}
// 						</div>
// 					</div>
// 				)
// 			}}
// 		</CollectionsContext.Consumer>
// 	)
// }

// ? Without using redux connect 👇
// const mapStateToProps = (state, ownProps) => ({
// 	collection: selectCollection(ownProps.match.params.collectionId)(state),
// })
// export default connect(mapStateToProps)(CollectionPage)

export default CollectionPage
