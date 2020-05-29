import React from 'react';
import {connect} from 'react-redux';
import MaterialTable from 'material-table';
import history from '../../history';
import Button from '@material-ui/core/Button';

import {addNewRow,updateRow,deleteRow} from '../../actions'

class ParentTable extends React.Component {

    deletetingRow = (rowForDelete) => {
        this.props.deleteRow(rowForDelete);
    }

    addingNewRow = (newData) => {
        this.props.addNewRow(newData);
    }
    updatingRow = (newData) => {
        this.props.updateRow(newData);
    }

    someFunction = () => {
    history.push('/parentTable/multipleChore')
    }
     
    componentDidUpdate(prevProps, prevState) {

    
      }

    
    render(){
        const {parentTable} = this.props;
        return(
            <div>
                <MaterialTable
            title="Crayz table"
            columns={parentTable.columns}
            data = {parentTable.data}
            options = {{
                rowStyle:{
                    backgroundColor: 'lightBlue'
                },
                headerStyle: {
                    backgroundColor: 'red',
                    whiteSpace: "nowrap",
                    width: "5px",
                },
                actionsColumnIndex: -1,
                }}
            editable={{
                onRowAdd: (newData) => 
                new Promise ((resolve) => {
                    setTimeout(()=>{
                        resolve();
                        const data = [...parentTable.data];
                        data.push(newData);
                        {this.addingNewRow(data)}                            
                    },600);
                }),
                onRowUpdate: (newData,oldData) =>
                new Promise ((resolve) => {
                    setTimeout(()=> {
                        resolve();
                        if(oldData) {
                            const data = [...parentTable.data];
                            data[data.indexOf(oldData)] = newData;
                            {this.updatingRow(data)}   
                        }
                    },600);
                }),
                onRowDelete: (oldData) => 
                new Promise((resolve) => {
                    setTimeout(()=>{
                        resolve();
                        const data = [...parentTable.data];
                        data.splice(data.indexOf(oldData),1);
                        {this.deletetingRow(data)}
                    },600);
                }),
            }}
             />
             <Button variant="contained" color="secondary" onClick={ () => this.someFunction()}> Add more chores at once </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.parentTable);
    return {parentTable: state.parentTable}
}

export default connect(mapStateToProps,{addNewRow,updateRow,deleteRow})(ParentTable);