import React, { Component } from 'react'

class Items extends Component {

    state = {
        nameAdd: "",
        itemID: ""
    };

    render() {
        let listData = []

        console.log("prospss ", this.state);

        document.querySelectorAll('.btn--edit').forEach(function(item) {
            item.addEventListener('click', function() {
                document.querySelector('.edit-box').classList.toggle('edit-box--active');
            });
        });

        if (this.props.items) {
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>
                            <button className="item__btn btn--delete" onClick={() => {
                                this.props.deleteItem({
                                    itemID: item.id
                                })
                            }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                        </th>

                        <th>
                            <button className="item__btn btn--edit" onClick={() => {
                                this.setState({
                                    itemID: item.id,
                                    nameAdd: item.name,
                                })
                            }}><i className="fas fa-edit"></i></button>
                        </th>
                    </tr>
                )
            })
        }

        return (
            <div className="">
                <div>
                    <input type="text" onChange={(event) => {
                        this.setState({
                            nameAdd: event.target.value
                        })
                        // console.log("KKKKKKK",this.state.nameAdd);
                    }} className="ItemPage__input" placeholder="Add item..."/>

                    <button className="addbtn" onClick={() => {
                        this.props.addName({
                            nameAdd: this.state.nameAdd
                        })
                        // console.log("PROPS",this.props.addName());
                    }}>Add</button>

                    <div className="edit-box">
                        <input type="text" onChange={(event) => {
                            this.setState({
                                nameAdd: event.target.value
                            })
                            // console.log("KKKKKKK",this.state.nameAdd);
                        }} className="ItemPage__input" placeholder="Edit item..."/>

                        <button className="addbtn" onClick={() => {
                            this.props.updateItem({
                                nameAdd: this.state.nameAdd,
                                itemID: this.state.itemID
                            })
                            // console.log("PROPS",this.props.addName());
                        }}><i className="fas fa-edit"></i></button>
                    </div>

                    <table className="list-item">
                        <tbody>
                            <tr>
                                <th className="id">ID dữ liệu</th>
                                <th className="name">Tên dữ liệu</th>
                            </tr>
                            {listData}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Items;