import Currency from './3-currency.js';

export default Pricing {
	constructor(amount,currency) {
		this._amount = amount;
		this._currency = currency;
	}
	get amount(){
		return this._amount;
	}
	set amount(value){
		if(typeof value !== 'number'){
			throw new TypeError('Amount must be a number');
		};
		this._amount = value;
	}
	get currency(){
		return this._currency;
	}
	set currency(value){
		if(!(value instanceof Currency)){
			throw new TypeError('value must be of type currency');
		}
		this._currency = value;
	}
	displayFullPrice(){
		return `${_amount} ${this._currency.name} (${this._currency.code})`;
	}
	static convertPrice(amount,conversionRate){
		if(typeof amount !=='number'){
			throw new TypeError('Amount must be a number');
		}
		if(typeof conversionRate !== 'number'){
			throw new TypeError('Conversion Rate Must be anumber');
		}
		return amount * conversionRate;
	}
}
		

