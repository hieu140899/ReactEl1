import React from 'react'
import Items from '../components/items'
import * as actions from '../actions/ItemPageActions'
import {connect} from 'react-redux' 

class ItemPageContainer extends React.Component {
    componentDidMount() {
        this.props.paginationItem(1)
    }

    render() {
        return (
            <Items {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("map state to props - container...",state.items);
    return {
        items: state.items.listItem,
        activePage: state.items.activePage,
        totalPage: state.items.totalPage
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
        },
        searchItem: (data) => {
            console.log("Search--container...",data);
            dispatch(actions.searchItem(data))
        },
        paginationItem: (data) => {
            console.log("pagination--container...",data);
            dispatch(actions.paginationItem(data))
        },
        searchpagItem: (data) => {
            console.log("searchpag container........",data);
            dispatch(actions.searchpagItem(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)