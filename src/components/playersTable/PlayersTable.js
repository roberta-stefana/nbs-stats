import React, { Component } from 'react';
import {
    TableBody,
    Table,
    TableRow,
} from '@material-ui/core';

class PlayersTable extends Component {
    state = {  }
    render() { 
        return ( 
            <Table
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <TableBody>

                    <TableRow>
                    
                    </TableRow>
            </TableBody>
          </Table>
        );
    }
}
 
export default PlayersTable;