import React from 'react';
import Item from './item';

export default class Timeline extends React.Component{
	static propTypes = {
		prefixName: React.PropTypes.string,
		pending: React.PropTypes.bool,
		items: React.PropTypes.array
	}

	static defaultProps = {
	    prefixName: 'salt',
	    pending: false,
	    items: []
	}

	render() {
		let { prefixName, pending, items } = this.props;
        let copyItems = items.slice();
        if (pending) {
            copyItems.push({type: 'pending'});
        }

		return (
			<ul className={`${prefixName}-timeline`}>
				{
					copyItems.map((item,i) => {
						return <Item
                                    key={`timeline${i}`}
                                    {...item}
                                    prefixName={`${prefixName}-timeline`}
                                />;
					})
				}
            </ul>
		);
	}

}
