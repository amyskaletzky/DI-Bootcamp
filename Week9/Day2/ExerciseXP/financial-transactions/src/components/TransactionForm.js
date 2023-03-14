import React from "react";
import { connect } from "react-redux";
import { insertData, updateData } from "../actions/transactionActions";

class TransactionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accountNumber: '',
            FSC: '',
            name: '',
            amount: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const { accountNumber, FSC, name, amount } = this.state
        // console.log(accountNumber, FSC, name, amount);
        if (this.props.currentIndex === -1) {
            this.props.handleInsert(this.state)
        } else {
            this.props.handleUpdate(this.state)
        }
        this.setState({
            accountNumber: '',
            FSC: '',
            name: '',
            amount: ''
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.currentIndex != this.props.currentIndex && this.props.currentIndex != -1) {
            const obj = this.props.list[this.props.currentIndex]
            this.setState({
                accountNumber: obj.accountNumber || '',
                FSC: obj.FSC || '',
                name: obj.name || '',
                amount: obj.amount || ''
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.accountNumber} type='text' name="accountNumber" placeholder="Account Number" onChange={(e) => this.handleInputChange(e)} /><br />
                <input value={this.state.FSC} type='text' name="FSC" placeholder="FSC" onChange={(e) => this.handleInputChange(e)} /><br />
                <input value={this.state.name} type='text' name="name" placeholder="A/C Holder Name" onChange={(e) => this.handleInputChange(e)} /><br />
                <input value={this.state.amount} type='text' name="amount" placeholder="Amount" onChange={(e) => this.handleInputChange(e)} /><br />
                <input type='submit' value={this.props.currentIndex === -1 ? 'Submit' : 'Update'}></input>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentIndex: state.currentIndex,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInsert: (obj) => dispatch(insertData(obj)),
        handleUpdate: (obj) => dispatch(updateData(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)