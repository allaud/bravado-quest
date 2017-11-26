import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class Card extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			status: true
		};
	}

	checkMark(info){
		let searchValue = this.props.searchValue;
		
		if (searchValue !== ""){
			let inputId = info.indexOf(searchValue);

			if (inputId != -1){
				let outputArray = [];
				let inputArray = info.split(searchValue);

				for (let i = 0; i < inputArray.length; i++){
					if (i > 0)
						outputArray.push(<span className="mark" key={i.toString()}>{searchValue}</span>);
					outputArray.push(inputArray[i]);
				}	
				return outputArray;
			}else
				return [info]
		}else 
			return [info];
	}

	render(){
		let choseClass = "card";
		if (!this.state.status) choseClass += " card-chose";
		return (
			<div className={choseClass}> 
				{/* Card Avatar*/}
				<div className="card-avatar">
					<img className="avatarFoto" style={{backgroundImage: "url('"+ this.props.avatar +"')"}}/>
				</div>

				{/* Card Content*/}
				<div className="card-content">
					<div className="card-info">
						<div className="card-title">
							<div className="card-name">
								{this.checkMark(this.props.name)}
							</div>
							<div className="card-mail">
								{this.checkMark(this.props.email)}
							</div>
						</div>
						<div className="card-body">
							<div className="card-job">
								{this.checkMark(this.props.title)}
							</div>
							<div className="card-addr">
								{this.checkMark(this.props.addr + ', ' + this.props.city)}
							</div>
						</div>
					</div>
					{ (() => {
						if (this.state.status){
							return (
								<div className="card-select card-selected" onClick={ this.handleClick.bind(this) } ><br/>
									MARK AS SIUTABLE
								</div>
							);
						}else {
							return (
								<div className="card-select" onClick={ this.handleClick.bind(this) } ><br/>
									SKIP SELECTION
								</div>
							);
						}
					})()}
				</div>
			</div>
		);
	}

	handleClick(e){
		this.setState({
			status: !this.state.status
		});
	}
}

const cardStore = (state) => {
	return {
		searchValue: state.searchReducer.searchValue,
	}
}

export default connect(cardStore)(Card);