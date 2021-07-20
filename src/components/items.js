import React, { Component } from 'react'

class Items extends Component {

    state = {
        nameAdd: "",
        itemID: "",
        searchName: ""
    };

    render() {
        let listData = []

        console.log("prospss ", this.state);

        document.querySelectorAll('.btn--edit').forEach(function(item) {
            item.addEventListener('click', function() {
                document.querySelector('.edit-box').classList.toggle('edit-box--active');
            });
        });

        let page = []; //khai bao mang rong

        let totalPage = this.props.totalPage; //khai bao bien chua cac props tu cha gui ve

        let activePage = this.props.activePage;

        for (let i = 1; i <= totalPage; i++) {
            page.push(i) //day mot phan tu vao mang
        }

        let activeBtn = {background: '#17a2b8', color: '#fff', border:'none', borderRadius:'20%', padding:'6px 12px', margin:'5px', transition: 'all .3s ease', cursor: 'pointer'}

        let paginationBtn = {border:'none', borderRadius:'20%', padding:'5px 10px', margin:'5px', cursor: 'pointer'}

        let pagination = []

            pagination = page.map((item, key) => {
            if (item === activePage) {
                return (
                    <button style={activeBtn} key={key} onClick={() => this.props.paginationItem(item)}>
                        {item}
                    </button>
                )
            }
            else {
                return (
                    <button style={paginationBtn} key={key} onClick={() => this.props.paginationItem(item)}>
                        {item}
                    </button>
                )
            }
        })

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
            <div className="Item-component">
                <div>
                    <div className="search-box">
                        <input type="text" onChange={(event) => {
                            this.setState({
                                searchName: event.target.value
                            })
                            // console.log("KKKKKKK",this.state.nameAdd);
                        }} className="ItemPage__input" placeholder="Search item..."/>

                        <button className="ItemPage__btn" onClick={() => {
                            this.props.searchItem({
                                searchName: this.state.searchName
                            })
                            // console.log("PROPS",this.props.addName());
                        }}><i className="fa fa-search"></i></button>
                    </div>

                    <div className="add-box">
                        <input type="text" onChange={(event) => {
                            this.setState({
                                nameAdd: event.target.value
                            })
                            // console.log("KKKKKKK",this.state.nameAdd);
                        }} className="ItemPage__input" placeholder="Add item..."/>

                        <button className="ItemPage__btn" onClick={() => {
                            this.props.addName({
                                nameAdd: this.state.nameAdd
                            })
                            // console.log("PROPS",this.props.addName());
                        }}><i className="fas fa-save"></i></button>
                    </div>

                    <div className="edit-box">
                        <input type="text" onChange={(event) => {
                            this.setState({
                                nameAdd: event.target.value
                            })
                            // console.log("KKKKKKK",this.state.nameAdd);
                        }} className="ItemPage__input" placeholder="Edit item..."/>

                        <button className="ItemPage__btn" onClick={() => {
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

                    {pagination}
                </div>
            </div>
        )
    }
}

export default Items;