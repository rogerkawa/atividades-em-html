let pilha=[];

    function empilhar(){
        let prato = document.getElementById("prato").value;
        if (prato !== "") 
        {
        pilha.push(prato); 
        document.getElementById("prato").value = "";
        mostrarPrato();
      }
    }
     function desempilhar() {
      if (pilha.length > 0) 
      {
        alert("Removido: " + pilha.pop()); 
        mostrarPrato();
      } else {
        alert("A pilha de prato está vazia.");
      }
    }
    function verTopo(){
        if(pilha.length > 0){
            alert("Topo da pilha de pratos: " + pilha[pilha.length - 1]);
        }else{
            alert("Pilha de Pratos vazia");
        }
    }
    function mostrarPrato() {
      let lista = document.getElementById("pilha");
      lista.innerHTML = "";
      for (let i = pilha.length - 1; i >= 0; i--) {
        let li = document.createElement("li");
        li.textContent = pilha[i];
        lista.appendChild(li);
      }
    }