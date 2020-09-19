import React, { Component } from 'react';
import MaterialTable from "material-table";

class WorkoutTables extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    console.log("PROPS IN TABLES:", this.props)
  }

  render() {

    return (
    <div>
        <div style={{ maxWidth: "100%" }}>
          <MaterialTable
            columns={[
              { title: "Movement", field: "name" },
              { title: "Reps", field: "surname" },
            ]}
            data={[
              {
                name: this.props.blocks.Block1.moves[0].exerciseName,
                surname: this.props.blocks.Block1.moves[0].reps,
              },
              {
                name: this.props.blocks.Block1.moves[1].exerciseName,
                surname: this.props.blocks.Block1.moves[1].reps,
              },
              {
                name: this.props.blocks.Block1.moves[2].exerciseName || 'N/A',
                surname: this.props.blocks.Block1.moves[2].reps || '0',
              },
            ]}
            title={`Block 1 - ${this.props.blocks.Block1.type} for ${this.props.blocks.Block1.duration}mins`}
          />
        </div>
        {this.props.blocks.Block2 ? 
        <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Movement", field: "name" },
            { title: "Reps", field: "surname" },
          ]}
          data={[
            {
              name: this.props.blocks.Block2.moves[0].exerciseName,
              surname: this.props.blocks.Block2.moves[0].reps,
            },

          ]}
          title={`Block 2 - ${this.props.blocks.Block2.type} for ${this.props.blocks.Block2.duration}mins`}
        />
      </div>
        : this.props.blocks.Block3 ? 
        
        <div style={{ maxWidth: "100%" }}>
          <MaterialTable
            columns={[
              { title: "Movement", field: "name" },
              { title: "Reps", field: "surname" },
            ]}
            data={[
              {
                name: this.props.blocks.Block3.moves[0].exerciseName,
                surname: this.props.blocks.Block3.moves[0].reps || '0',
              },
              {
                name: this.props.blocks.Block3.moves[1].exerciseName,
                surname: this.props.blocks.Block3.moves[1].reps || '0',
              }
            ]}
            title={`Block 3 - ${this.props.blocks.Block3.type} as fast as possible`}
          />
        </div> 
        : <></>
         }
        </div>
    )
}
};
export default WorkoutTables;

// var count = 0;
// const WorkoutTables = (props) => {
//     const [employees, setEmployees] = useState([]) ;
//     console.log("PROPS IN TABLES:", props)
    
//     useEffect(() => {
//         getData()
//     }, [])

//     const getData = () => {
//         setEmployees(props.blocks.block1);
//     }

//     const renderHeader = () => {
//         let headerElement = ['movement', 'reps']

//         return headerElement.map((key, index) => {
//             return <th key={index}>{key.toUpperCase()}</th>
//         })
//     }

//     const renderBody = () => {
//         return employees && employees.map(({exerciseName, reps}) => {
//             return (
//                 <tr key={count++}>
//                     <td>{exerciseName}</td>
//                     <td>{reps}</td>
//                     {/* <td>{email}</td>
//                     <td>{phone}</td> */}
//                     {/* <td className='opration'>
//                         <button onClick={() => removeData(id)}>Delete</button>
//                     </td> */}
//                 </tr>
//             )
//         })
//     }
//     return(
//         <div>
//         <table id='employee'>
//             <thead>
//                 <tr>{renderHeader()}</tr>
//             </thead>
//             <tbody>
//                 {renderBody()}
//             </tbody>
//         </table>
//     </div>
//     )
// }



