
let reservas = []

const getResevas = async(req,res) =>{
res.json(
    {
        msg: "Resevas en la base de datos",
        data: reservas
    }
)
}

const getReservaId = async(req,res) =>{
    const orderId = parseInt(req.params.id)
    const order = reservas.find((o) => o.id === orderId)
    if(!order){
        return  res.status(404).json({msg: "La orden no fue encontrada"})
    } 

    res.json({
        msg: "Orden localizada",
        data: order
    })
}

const postReservas = async(req,res) =>{
    const newreservas = req.body
    newreservas.id = reservas.length + 1

    reservas.push(newreservas)

    res.status(201).json({
        msg: "Reserva enviada",
        data: reservas
    })
}

const actuarlizarReserva = async(req,res) =>{
    const orderId = parseInt(req.params.id)
    const orderIndex = reservas.findIndex((o) => o.id === orderId)

    if(orderIndex === -1){
        return res.status(404).json(
            {
                msg: "Reserva no encontrada"
            }
        )
    }

    reservas[orderIndex] = {... reservas[orderIndex], ...req.body}
    res.json({
        msg: 'Reserva actualizada con exito',
        data: reservas[orderIndex]
    })
}

const borrarReserva = async(req,res) =>{
    const orderId = parseInt(req.params.id)
    const orderIndex = reservas.findIndex((o) => o.id === orderId)
    if(orderIndex === -1){
        return res.status(404).json(
            {
                msg: "Reserva no encontrada"
            }
        )
    }

    reservas.splice(orderIndex, 1)
    res.json({
        msg: "Reserva eliminada con exito"
    })
}

const filtroReservas = async (req, res) => {
    const { nombre } = req.query;
   // Al momento de hacer la petición es necesario que el nombre no tenga espacios ni tildes
    const filtrarReservas = reservas.filter((reserva) => {
      if (nombre && reserva.nombre !== nombre) {
        return false;
      }
  
      return true; // Assuming all other filtering criteria are met
    });
  
    console.log(filtrarReservas); // Print the filtered results
  
    if (filtrarReservas.length === 0) {
      return res.status(404).json({ msg: "Pedido no encontrado" });
    }
  
    // Send the filtered results as a response
    res.json({
      msg: "Pedido de filtrado con exito",
      data: filtrarReservas,
    });
  };
  

module.exports = {
getResevas,
getReservaId,
postReservas,
actuarlizarReserva,
borrarReserva,
filtroReservas,
}