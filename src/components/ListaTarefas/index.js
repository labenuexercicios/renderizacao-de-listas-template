import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const listaDeTarefas = ["comer", "dormir", "estudar"];

  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(listaDeTarefas);

  //  FUNÇÃO MAP CHAMADA FORA DO JSX:
  // const listaMapeada = lista.map((item) => {
  //   return (
  //     <Tarefa>
  //       <p>{item}</p>
  //       <RemoveButton>
  //         <img src={bin} alt="" width="16px" />
  //       </RemoveButton>
  //     </Tarefa>
  //   );
  // });

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (valor) => {
    const filtrarItem = lista.filter((item) => item !== valor);
    setLista(filtrarItem);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {/* FUNÇÃO MAP CHAMADA FORA DO JSX: */}
          {/* {listaMapeada} */}

          {/* FUNÇÃO MAP CHAMADA DENTRO DO JSX: */}
          {lista.map((item) => {
            return (
              <Tarefa>
                <p>{item}</p>
                <RemoveButton onClick={() => removeTarefa(item)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}