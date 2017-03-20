import React, { Component } from 'react';
import ItemModal from './item_modal';
import FolioData from '../data/folio_data';


export default class App extends Component {
	render() {
		return (
			<div id="portfoliolist">
				{this._getItems()}
			</div>
		);
	}

	_getItems() {
		const items = FolioData()

		return items.map( (item, id) => {
			return (
				<div className={"portfolio " + item.folioName} data-cat={item.folioName}>
					<ItemModal 
						imgSource={item.imgSource}
						smallImgSource={item.smallImgSource}
						title={item.title}
						description={item.description}
						key={id}
						class={item.class}
					/>
				</div>
			)
		});	

	}
}
