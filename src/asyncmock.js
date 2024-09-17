const misProductos = [
    { id: "1", nombre: "River Plate", stock: 10, precio: 60000, img: "../img/river-24-25.jpg", idCat: "arg", descripcion: "Camiseta River Plate temporada 24/25" },
    { id: "2", nombre: "Boca Juniors", stock: 13, precio: 60000, img: "../img/boca-24-25.jpg", idCat: "arg", descripcion: "Camiseta Boca Juniors temporada 24/25" },
    { id: "3", nombre: "Chelsea FC", stock: 3, precio: 65000, img: "../img/chelsea-24-25.jpg", idCat: "ing", descripcion: "Camiseta Chelsea FC temporada 24/25" },
    { id: "4", nombre: "Arsenal FC", stock: 11, precio: 65000, img: "../img/arsenal-24-25.jpg", idCat: "ing", descripcion: "Camiseta Arsenal FC temporada 24/25" },
    { id: "5", nombre: "Juventus", stock: 10, precio: 55000, img: "../img/juve-24-25.jpg", idCat: "ita", descripcion: "Camiseta Juventus temporada 24/25" },
    { id: "6", nombre: "Napoli", stock: 7, precio: 55000, img: "../img/napoli-24-25.jpg", idCat: "ita", descripcion: "Camiseta Napoli temporada 24/25" },
    { id: "7", nombre: "Barcelona", stock: 9, precio: 62000, img: "../img/barza-24-25.jpg", idCat: "esp", descripcion: "Camiseta Barcelona temporada 24/25" },
    { id: "8", nombre: "Real Madrid", stock: 8, precio: 62000, img: "../img/real-24-25.jpg", idCat: "esp", descripcion: "Camiseta Real Madrid temporada 24/25" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 1000)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 500)
    })

}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 1500);

    })

}