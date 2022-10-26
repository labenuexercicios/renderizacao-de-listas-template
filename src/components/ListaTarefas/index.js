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
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["ler livros", "lavar a louça", "assistir filme"])


  // const renderizaListaDeTarefas = 

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    setLista([...lista, novaTarefa])
    setNovaTarefa("")
  };

  const removeTarefa = (tarefa, indexTarefa) => {
    const remover = lista.filter((item, index) =>{
      return (indexTarefa !== index) || (tarefa !== item)
    })
    setLista(remover)
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
          {lista.map((tarefa, index) => {
            return (<Tarefa key={index}>
              <p>{tarefa}</p>
              <RemoveButton onClick={() => removeTarefa(tarefa, index)}>
                <img src={bin} alt="" width="16px" />
              </RemoveButton>
            </Tarefa>);
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
