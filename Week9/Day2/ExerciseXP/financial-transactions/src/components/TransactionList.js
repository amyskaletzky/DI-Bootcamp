import TransactionForm from './TransactionForm';
// import { connect } from 'react-redux';
import { updateIndex, deleteData } from '../actions/transactionActions';
// with HOOKS
import { useSelector, useDispatch } from 'react-redux';

const TransactionList = (props) => {
    const list = useSelector(state => state.list)
    const currentIndex = useSelector(state => state.currentIndex)

    const dispatch = useDispatch();

    return (
        <>
            < TransactionForm />
            <div style={{ textAlign: 'center', width: '100%' }}>
                <table style={{ border: '1px solid #000', margin: '0 auto' }}>
                    <tbody>
                        {
                            list.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{ border: '1px solid #000' }}>{item.accountNumber}</td>
                                        <td style={{ border: '1px solid #000' }}>{item.FSC}</td>
                                        <td style={{ border: '1px solid #000' }}>{item.name}</td>
                                        <td style={{ border: '1px solid #000' }}>{item.amount}</td>
                                        <td style={{ border: '1px solid #000' }} onClick={() => dispatch(updateIndex(index))}><button>Edit</button></td>
                                        <td style={{ border: '1px solid #000' }} onClick={() => dispatch(deleteData(index))}><button>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>

    )

}

// const mapStateToProps = state => {
//     return {
//         list: state.list,
//         currentIndex: state.currentIndex
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         handleEdit: (index) => dispatch(updateIndex(index)),
//         handleDelete: (index) => dispatch(deleteData(index))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
export default TransactionList