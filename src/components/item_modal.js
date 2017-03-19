import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

const ItemModal = React.createClass({
	getInitialState() {
		return { showModal: false };
	},

	close() {
		this.setState({ showModal: false });
	},

	open() {
		this.setState({ showModal: true });
	},

	render() {
		return (
			<div>
				<div className="folio-small-box">
				     <a onClick={this.open}>
				    	<div className="small-img" >
				    		<img src={this.props.imgSource}/>
				    	</div>
				    	<div className="separator"></div>
				    	<div className="description">
				    		<h3>{this.props.title}</h3>
				    		<p>{this.props.description}</p>
				    	</div>
			    	</a>
			    </div>
				<div >
					<Modal className="folio-modal" show={this.state.showModal} onHide={this.close}>
						<Modal.Body>
							<a onClick={this.close}>Close</a>
							<div className="full-size-img" >
			 					<img src={this.props.imgSource}/>
			 				</div>
			 				<h3>{this.props.title}</h3>
			     			<p className="light">{this.props.description}</p>
						</Modal.Body>
					</Modal>
				</div>
			</div>	
		);
	}
});

export default ItemModal;
