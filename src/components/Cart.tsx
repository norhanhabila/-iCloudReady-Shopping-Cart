import { ShoppingCartOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Product, useAppState } from "../AppState";
import { Badge } from "./Badge";
const Cart = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [{ cart }, setAppState] = useAppState();
  const handleDelete = (product: Product) => {
    setAppState({ cart: cart.filter((p) => p.product !== product.product) });
  };
  return (
    <Drawer open={open} anchor="right" PaperProps={{ sx: { width: 355 } }}>
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt={3}
          px={2}
        >
          <Box display="flex" alignItems="center">
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
            <Typography>Your Run Cart</Typography>
          </Box>

          <Badge count={cart.length} />
        </Box>
        <Box>
          {cart.length > 0 && (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell align="right">Qty.</TableCell>
                      <TableCell align="right">remove</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.map((item: Product) => (
                      <TableRow
                        key={item.product}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {item.product}
                        </TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                        <TableCell align="right">
                          <Button onClick={() => handleDelete(item)}>
                            <DeleteIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button>Check out</Button>
              <Button>Back to run information</Button>
            </>
          )}
        </Box>
      </Box>
      {cart.length === 0 && (
        <>
          <ShoppingCartOutlined />
          <h4>Your run cart is empty</h4>
          <h5>start add your requests here</h5>
        </>
      )}{" "}
    </Drawer>
  );
};

export default Cart;
