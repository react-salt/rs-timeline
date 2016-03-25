import React, { Component } from 'react';

export default class Item extends Component {
	static propTypes = {
		prefixName: React.PropTypes.string,
		type: React.PropTypes.string,
		texts: React.PropTypes.array
	}

	static defaultProps = {
	     prefixName: 'salt-timeline',
	     type: 'info',
	     texts: []
	}


	render(){
		let { prefixName, texts, type } = this.props;
        let prefixClass = `${prefixName}-item`;

		return (
			<li className={prefixClass}>
				<div className={`${prefixClass}-head ${prefixClass}-head-${type}`} />
				{
					type!=='pending' &&
                    <div>
						<div className={`${prefixClass}-content`}>
                            {
                                texts.map((text,i) => <p key={i}>{ text }</p>)
                            }
						</div>
                        <div className={`${prefixClass}-tail`} />
                    </div>
				}
			</li>
		);
	}
}
