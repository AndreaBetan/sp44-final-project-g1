import React, { useState } from "react";
import coffeImg from "../../../img/category_id_1.jpg";

export const CardProduct = ({ name, pricing }) => {

	const [select, setSelect] = useState(false)

	const handleClick = () => {
		setSelect(!select)
	}

	return (
		<div className="col">
			<div className="card" onClick={ handleClick}>
				<div className="half-card-img">
					<img src={coffeImg} className="card-img-top" alt="Coffee"/>
				</div>
				<div className="card-body pb-3 text-white">
					<h3 className="card-title"> {name} </h3>
					<p className="card-text">{pricing} €/Und. </p>
					<div className="d-flex container-fluid justify-content-center">
						<button 
							type="button" 
							className="btn btn-lg btn-block"
							// 
							>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

CardProduct.prototype