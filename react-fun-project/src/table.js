import React, { Component } from 'react'

const TableHeader =()=>{
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}
const TableBody =()=>{
    return (
        <tbody/>
    )
}

class Table extends Component{
    render(){
        /*const characters = [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ]*/
          const {characterData}=this.props
          return (
            <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
          )
    }
}
/*class Table extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>brij</td>
                   
                        <td>manager</td>
                    </tr>
                    <tr>
                        <td>Mac</td>
                        <td>Bouncer</td>
                    </tr>
                    <tr>
                        <td>shyam</td>
                        <td>agent</td>
                    </tr>
                    <tr>
                        <td>arun</td>
                        <td>principle</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}*/
export default Table