import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AdminBookingsContext } from '../ContextApi/AdminBookings/AdminBookingsProvider'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AdminBookings = () => {
    const { fetchBookings, products } = useContext(AdminBookingsContext)

    useEffect(() => {
        fetchBookings()

    }, [])


    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }



    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];






    return (
        <div>


            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">


                    <TableHead>
                        <TableRow>
                            <TableCell>username</TableCell>
                            <TableCell>email</TableCell>
                            <TableCell>destination</TableCell>
                            <TableCell>price</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {
                            products.map((product) => (
                                <TableRow key={product._id}>
                                    <TableCell>{product.customerName}</TableCell>
                                    <TableCell>{product.customerEmail}</TableCell>
                                    {
                                        product.items.map((item,index) => (
                                            <>

                                                <TableCell>{item.description}</TableCell>
                                                <TableCell>${item.price / 100}</TableCell>
                                            </>

                                        ))

                                    }
                                </TableRow>

                            ))

                        }

                    </TableBody>


                </Table>
            </TableContainer>


        </div>
    )
}

export default AdminBookings