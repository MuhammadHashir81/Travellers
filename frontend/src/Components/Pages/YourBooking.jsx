import { useContext , useEffect} from 'react'
import { YourBookingContext } from '../ContextApi/YourBookingProvider'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserBookingContext } from '../ContextApi/UserBookingProvider';
import { NavLink } from 'react-router';



const YourBooking = () => {
    const {fetchUserSpecificDestinations,bookings} = useContext(UserBookingContext)

    
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



    useEffect(()=>{
        fetchUserSpecificDestinations()
    },[])
  return (
    <div className='px-32 min-h-screen '>
        {

         bookings.length > 0 ? (
            
         
         
            
            <TableContainer component={Paper} >
                <Table className=' my-5' aria-label="simple table">


                            <TableHead>
                                <TableRow>
                                            <TableCell >destination</TableCell>
                                            <TableCell >price</TableCell>
                                            
                                </TableRow>
                            </TableHead>
                            <TableBody>


                            {
                                bookings.map((product)=>(
                                    <TableRow>
                                        {
                                            product.items.map((item)=>(
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
            ):
            (
                <>
                <div className=' flex flex-col'>

            <h1 className='text-5xl font-bold font-primaryss text-center mt-20'>No bookings yet</h1>
            <p className='text-center mt-5'>Book your destinations of your interest.Travllers provide you best destinations of the world in suitable price  </p>
            <NavLink to='/home/destinations' className='text-center bg-green-500 mt-10 py-2 hover:bg-green-600 cursor-pointer rounded-sm transition-all duration-100 ease-in-out'>explore destionations</NavLink>
                </div>

                

                </>
            )
        }

    </div>
  )
}

export default YourBooking