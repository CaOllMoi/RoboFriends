//needs React version 16 or higher

import React, {Component} from 'react';

class ErrorBoundary extends Component{

		constructor(props){
		super(props);
		
			this.State = {
				hasErrors : false
			}
		}

		componentDidCatch(error, info)
		{
			this.SetState({hasErrors:true})
		}

		render() {
			if(this.State.hasErrors)
				return <h1>Ooooops this is not good</h1>;
			return this.props.children;
		}
	}


export default ErrorBoundary;