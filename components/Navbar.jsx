"use client"

import Box from '@mui/material/Box';
import Link from "next-intl/link";

export const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 70,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    > 
    <div className="flex justify-center items-center h-full text-white"> <Link href="/"> App Prueba </Link> </div>
    </Box>
  )
}
