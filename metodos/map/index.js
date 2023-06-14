const container = document.getElementById('container')

const clientes = [
    {
    nome: "Débora",
    email: "debora-santos-1@hotmail.com",
    cidade: "caucaia",
    estado: "CE",
    idade: 33
},

{
    nome: "Santos",
    email: "debora-santos-1@hotmail.com",
    cidade: "caucaia",
    estado: "CE",
    idade: 33
},

]

clientes.map((cliente, i) => {
    container.innerHTML += `
    <div>
      <p>Posição no Array: ${i}</p>
      <p>${cliente.nome}</p>
      <p>${cliente.email}</p>
      <p>${cliente.cidade}</p>
      <p>${cliente.estado}</p>
      <p>${cliente.idade}</p>
      </div>
      <hr>
    `
})










