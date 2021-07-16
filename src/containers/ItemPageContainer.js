import React from 'react'
import Items from '../components/items'
import * as actions from '../actions/ItemPageActions'
import {connect} from 'react-redux' 

class ItemPageContainer extends React.Component {
    componentDidMount() {
        this.props.initLoad()
    }

    render() {
        console.log(this.props.item,'log container state');
        return (
            <Items {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("AAAA",state.items.listItem);
    return {
        items: state.items.listItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getListItem())
        },
        addName: (name1) => {
            console.log("data in COMPONENT to CONTAINER",name1);
            dispatch(actions.addItem(name1))
        },
        deleteItem: (itemid) => {
            dispatch(actions.deleteItem(itemid))
        },
        updateItem: (data) => {
            console.log("CONTAINER",data);
            dispatch(actions.updateItem(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)