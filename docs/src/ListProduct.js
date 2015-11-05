import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../src/Button';
import ListGroup from '../../src/ListGroup';
import ListGroupItem from '../../src/ListGroupItem';
import Modal from '../../src/Modal';
import Input from '../../src/Input';


function alertClicked(){
	console.log('ok');
}
const ListProduct = React.createClass({
	getInitialState() {
		return { 
			value: '',
			showModal: false 
		};
	}, close() {
		this.setState({ showModal: false });
	}, open() {
		this.setState({ showModal: true });
	}, validationState() {
		let length = this.state.value.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
	}, handleChange() {
		this.setState({
			value: this.refs.store.getValue()
		});
	},

	render() {
		return (
		<div>
			<ListGroup>
				<ListGroupItem href="#link1" header="Produto">Marca</ListGroupItem>
				<ListGroupItem href="#link2">Link 2</ListGroupItem>
			</ListGroup>
			<ListGroup>
				<ListGroupItem onClick={this.open} bsStyle="info">
					Novo Preço
				</ListGroupItem>
			</ListGroup>

			<Modal show={this.state.showModal} onHide={this.close}>
				<Modal.Header closeButton>
					<Modal.Title>Novo Preço</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					 <Input
						type="text"
						value={this.state.value}
						placeholder=""
						label="Loja"
						bsStyle={this.validationState()}
						hasFeedback
						ref="store"
						groupClassName="group-class"
						labelClassName="label-class"
						onChange={this.handleChange} />
					<Input
						type="text"
						placeholder=""
						label="Produto"
						hasFeedback
						ref="product"
						groupClassName="group-class"
						labelClassName="label-class" />
					<Input
						type="text"
						placeholder=""
						label="Marca / Categoria"
						hasFeedback
						ref="brand"
						groupClassName="group-class"
						labelClassName="label-class" />
					<Input
						type="number"
						placeholder=""
						label="Preço"
						hasFeedback
						ref="price"
						groupClassName="group-class"
						labelClassName="label-class" />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
		);
	}
});
export default ListProduct;