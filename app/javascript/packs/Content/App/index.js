import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Card from '../Card';
import InfinityScroll from 'react-infinite-scroller';
import {changeSearchValue} from '../../Redux/Actions';

class App extends Component {
	constructor(props){
		super(props);
		// Initial Params
		this.state = {
			countOfLoad: 0,
			userCards: [],
			hasMore: true,
		};
	}

	loadMore = () => {
		let cardsInfo = this.props.userCards;
		let countOfLoad = this.state.countOfLoad;
		let outputArray = [];

		for(let i = countOfLoad; i < countOfLoad + 20; i++ ){
		 	outputArray.push(<Card 
		 						key={i.toString()} 
		 						name={cardsInfo[i].name} 
		 						email={cardsInfo[i].email} 
		 						avatar={cardsInfo[i].avatar}
		 						city={cardsInfo[i].city}
		 						addr={cardsInfo[i].address}
		 						title={cardsInfo[i].title}
		 						/>)
		}

		this.setState({
			countOfLoad: countOfLoad + 20,
			userCards: [...this.state.userCards, ...outputArray],
			hasMore: countOfLoad < 20000,
		});
	}
	render(){

		return (
			<div className="contentBar">
				<div className="searchBar">
					<div className="sideBar">
						{/* Search Input  */}
						<input className="searchInput" onChange={ this.handleChange.bind(this)} />

						{/* User Cards */}

						{ (() => {
							if ((this.props.isLoading) || (this.props.userCards == null)){
								return (
									<div className="userCards preload">
									</div>	
								);
							}else {

								//infinity scroll
								return (
									<div className="userCards">
										<InfinityScroll
											pageStart={0}
											loader={<div className="preload"> </div>}
											hasMore={this.state.hasMore}
											loadMore={this.loadMore}
											useWindow={false}>
										{this.state.userCards}
										</InfinityScroll>
									</div>
								);
							}
						})()}
					</div>
				</div>
			</div>
		);
	}

	handleChange(e){
		this.props.changeSearchValue(e.target.value);
	}
}

const appStore = (state) => {
	return {
		isLoading: state.searchReducer.isLoading,
		userCards: state.searchReducer.userCards,
	}
}

const matchDispatchToProps = (dispatch) => {
	return {
		changeSearchValue: bindActionCreators(changeSearchValue, dispatch),
	}
}

export default connect(appStore, matchDispatchToProps)(App)